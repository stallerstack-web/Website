/// <reference path="./deno-shim.d.ts" />
// @ts-ignore: Deno runtime imports are not resolved by the standard IDE server
import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const CONTACT_RECEIVER_EMAIL = Deno.env.get("CONTACT_RECEIVER_EMAIL");
const RESEND_FROM_EMAIL = Deno.env.get("RESEND_FROM_EMAIL") ?? "onboarding@resend.dev";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY is not set.");
    if (!CONTACT_RECEIVER_EMAIL) throw new Error("CONTACT_RECEIVER_EMAIL is not set.");

    const { name, email, phone, subject, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email and message are required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const inquiryLabel = subject && subject !== "Choose a option" ? subject : "General Inquiry";

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #1a1a2e; border-bottom: 2px solid #e94560; padding-bottom: 10px; margin-top: 0;">
          New Inquiry: ${inquiryLabel}
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #666; width: 130px; font-weight: bold;">Full Name</td>
            <td style="padding: 8px 0; color: #1a1a2e;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666; font-weight: bold;">Email</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #e94560;">${email}</a></td>
          </tr>
          ${phone ? `
          <tr>
            <td style="padding: 8px 0; color: #666; font-weight: bold;">Phone</td>
            <td style="padding: 8px 0; color: #1a1a2e;">${phone}</td>
          </tr>` : ""}
          <tr>
            <td style="padding: 8px 0; color: #666; font-weight: bold;">Service</td>
            <td style="padding: 8px 0; color: #1a1a2e;">${inquiryLabel}</td>
          </tr>
        </table>
        <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid #e94560; border-radius: 4px;">
          <p style="margin: 0; color: #666; font-weight: bold; margin-bottom: 8px;">Message</p>
          <p style="margin: 0; color: #1a1a2e; white-space: pre-wrap;">${message}</p>
        </div>
        <p style="margin-top: 20px; font-size: 12px; color: #999; text-align: center;">
          This email was sent via StallerStack contact form.
        </p>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `StallerStack Inquiry <${RESEND_FROM_EMAIL}>`,
        to: [CONTACT_RECEIVER_EMAIL],
        reply_to: email,
        subject: `[StallerStack] New Inquiry: ${inquiryLabel} from ${name}`,
        html: htmlBody,
      }),
    });

    if (!res.ok) {
      const errBody = await res.text();
      throw new Error(`Resend API error: ${res.status} — ${errBody}`);
    }

    const data = await res.json();

    return new Response(
      JSON.stringify({ success: true, id: data.id }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[send-contact-email]", message);
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
