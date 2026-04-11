"use client";
import { useState } from "react";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ReactNiceSelect from "@/components/shared/Inputs/ReactNiceSelect";
import useSweetAlert from "@/hooks/useSweetAlert";

const SERVICE_OPTIONS = [
	{ value: "0", optionName: "Choose a option" },
	{ value: "1", optionName: "Business Strategy" },
	{ value: "2", optionName: "Customer Experience" },
	{ value: "3", optionName: "Sustainability and ESG" },
	{ value: "4", optionName: "Training and Development" },
	{ value: "5", optionName: "IT Support & Maintenance" },
	{ value: "6", optionName: "Marketing Strategy" },
];

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;


const Contact3 = () => {
	const creteAlert = useSweetAlert();

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "Choose a option",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleServiceChange = (option) => {
		setFormData((prev) => ({ ...prev, subject: option.optionName }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Basic client-side validation
		if (!formData.name.trim()) {
			creteAlert("warning", "Please enter your full name.");
			return;
		}
		if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			creteAlert("warning", "Please enter a valid email address.");
			return;
		}
		if (!formData.message.trim()) {
			creteAlert("warning", "Please enter your message.");
			return;
		}

		setIsSubmitting(true);

		try {
			const res = await fetch(
				`${SUPABASE_URL}/functions/v1/send-contact-email`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						apikey: SUPABASE_ANON_KEY,
						Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
					},
					body: JSON.stringify({
						name: formData.name.trim(),
						email: formData.email.trim(),
						phone: formData.phone.trim(),
						subject: formData.subject,
						message: formData.message.trim(),
					}),
				}
			);

			const json = await res.json();

			if (!res.ok || json.error) {
				throw new Error(json.error || "Failed to send message.");
			}

			creteAlert("success", "Message sent! We'll get back to you soon.");
			// Reset form
			setFormData({
				name: "",
				email: "",
				phone: "",
				subject: "Choose a option",
				message: "",
			});
		} catch (err) {
			console.error("Contact form error:", err);
			creteAlert("error", err.message || "Something went wrong. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section className="tj-contact-section-2 section-bottom-gap">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="contact-form wow fadeInUp" data-wow-delay=".1s">
							<h3 className="title">
								Feel Free to Get in Touch or Visit our Location.
							</h3>
							<form id="contact-form" onSubmit={handleSubmit} noValidate>
								<div className="row">
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="text"
												name="name"
												value={formData.name}
												onChange={handleChange}
												placeholder="Full Name*"
												disabled={isSubmitting}
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="email"
												name="email"
												value={formData.email}
												onChange={handleChange}
												placeholder="Email Address*"
												disabled={isSubmitting}
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="tel"
												name="phone"
												value={formData.phone}
												onChange={handleChange}
												placeholder="Phone number"
												disabled={isSubmitting}
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<div className="tj-nice-select-box">
												<div className="tj-select">
													<ReactNiceSelect
														selectedIndex={0}
														options={SERVICE_OPTIONS}
														getSelectedOption={handleServiceChange}
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="col-sm-12">
										<div className="form-input message-input">
											<textarea
												name="message"
												id="message"
												value={formData.message}
												onChange={handleChange}
												placeholder="Type message*"
												disabled={isSubmitting}
											></textarea>
										</div>
									</div>
									<div className="submit-btn">
										<ButtonPrimary
											type="submit"
											text={isSubmitting ? "Sending..." : "Submit Now"}
										/>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="map-area wow fadeInUp" data-wow-delay=".3s">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617300702677!2d-73.99580432342371!3d40.75080063539151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259ae6d42e617%3A0x67305d210a5a676b!2s5%20Penn%20Plaza!5e0!3m2!1sen!2sus!4v1712521234567!5m2!1sen!2sus"></iframe>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact3;
