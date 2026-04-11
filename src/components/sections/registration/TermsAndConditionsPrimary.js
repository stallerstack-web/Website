import Link from "next/link";

const TermsAndConditionsPrimary = () => {
	return (
		<section className="terms-and-conditions section-gap">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-10">
						<div className="terms-and-conditions-wrapper">
							<div>
								<h2>
									Terms &amp; Conditions{" "}
									<span className="pill">Staller Stack</span>
								</h2>
								<p className="muted">Last updated: April 9, 2026</p>
								<p>
									Welcome to <strong>Staller Stack</strong>. By accessing or
									using our website at{" "}
									<Link href="https://stackstaller.us" target="_blank" rel="noopener">
										stackstaller.us
									</Link>{" "}
									and the technology solutions, services, and consulting we
									provide, you agree to be bound by these Terms &amp; Conditions.
									Please read them carefully before engaging with our services.
								</p>
								<div className="note">
									<strong>Short version:</strong> Staller Stack provides
									end-to-end tech solutions to clients. By using our services or
									website, you agree to use them responsibly, respect intellectual
									property, and understand that we are not liable for
									circumstances beyond our control.
								</div>
							</div>

							<nav className="toc" aria-label="Table of contents">
								<h2>Table of Contents</h2>
								<ol>
									<li>
										<button className="tj-scroll-btn" data-target="#definitions">
											Definitions
										</button>
									</li>
									<li>
										<button className="tj-scroll-btn" data-target="#services">
											Our Services
										</button>
									</li>
									<li>
										<button className="tj-scroll-btn" data-target="#use-of-site">
											Use of Our Website
										</button>
									</li>
									<li>
										<button className="tj-scroll-btn" data-target="#ip">
											Intellectual Property
										</button>
									</li>
									<li>
										<button className="tj-scroll-btn" data-target="#confidentiality">
											Confidentiality
										</button>
									</li>
									<li>
										<button className="tj-scroll-btn" data-target="#payment">
											Payment &amp; Refund Policy
										</button>
									</li>
									<li>
										<button className="tj-scroll-btn" data-target="#liability">
											Limitation of Liability
										</button>
									</li>
									<li>
										<button className="tj-scroll-btn" data-target="#privacy">
											Privacy
										</button>
									</li>
									<li>
										<button className="tj-scroll-btn" data-target="#changes">
											Changes to These Terms
										</button>
									</li>
									<li>
										<button className="tj-scroll-btn" data-target="#contact">
											Contact Us
										</button>
									</li>
								</ol>
							</nav>

							<div id="definitions">
								<h3>1. Definitions</h3>
								<p>
									<strong>"Staller Stack", "We", "Us", "Our"</strong> refers to
									Staller Stack, a technology solutions company operating at{" "}
									<Link href="https://stackstaller.us" target="_blank" rel="noopener">
										stackstaller.us
									</Link>
									.
								</p>
								<p>
									<strong>"Client", "You", "Your"</strong> refers to any
									individual, business, or entity that accesses our website,
									inquires about, or engages our services.
								</p>
								<p>
									<strong>"Services"</strong> refers to all technology solutions,
									software development, IT consulting, digital transformation,
									support, and any other service provided by Staller Stack.
								</p>
								<p>
									<strong>"Website"</strong> refers to our online presence at{" "}
									<Link href="https://stackstaller.us" target="_blank" rel="noopener">
										stackstaller.us
									</Link>{" "}
									and all its sub-pages.
								</p>
							</div>

							<div id="services">
								<h3>2. Our Services</h3>
								<p>
									Staller Stack provides a comprehensive range of technology
									solutions to businesses and individuals, including but not
									limited to:
								</p>
								<ul>
									<li>
										<strong>Custom Software Development:</strong> Design and
										development of bespoke web, mobile, and enterprise
										applications.
									</li>
									<li>
										<strong>IT Consulting &amp; Strategy:</strong> Technology
										roadmapping, digital transformation advisory, and systems
										architecture.
									</li>
									<li>
										<strong>Cloud Solutions:</strong> Cloud migration,
										infrastructure management, and DevOps services.
									</li>
									<li>
										<strong>UI/UX Design:</strong> User research, prototyping,
										and design systems for modern digital products.
									</li>
									<li>
										<strong>IT Support &amp; Maintenance:</strong> Ongoing
										technical support, monitoring, and system maintenance.
									</li>
									<li>
										<strong>Cybersecurity:</strong> Security audits, penetration
										testing, and compliance advisory.
									</li>
									<li>
										<strong>Data &amp; Analytics:</strong> Business intelligence,
										reporting dashboards, and data pipeline development.
									</li>
								</ul>
								<p>
									Specific deliverables, timelines, and costs are defined in a
									separate <strong>Service Agreement or Statement of Work (SOW)</strong>{" "}
									signed prior to project commencement.
								</p>
							</div>

							<div id="use-of-site">
								<h3>3. Use of Our Website</h3>
								<p>
									By accessing our website, you agree to use it only for lawful
									purposes. You agree that you will <strong>not</strong>:
								</p>
								<ul>
									<li>
										Use the website in any way that violates applicable local,
										national, or international law or regulation.
									</li>
									<li>
										Attempt to gain unauthorized access to any part of the
										website or its related systems.
									</li>
									<li>
										Transmit any unsolicited or unauthorized advertising or
										promotional material (spam).
									</li>
									<li>
										Scrape, crawl, or copy content from our website without
										express written permission.
									</li>
									<li>
										Introduce any viruses, trojans, worms, or any other
										material that is malicious or technologically harmful.
									</li>
								</ul>
							</div>

							<div id="ip">
								<h3>4. Intellectual Property</h3>
								<p>
									All content on this website — including but not limited to
									text, graphics, logos, icons, images, and source code — is the
									property of Staller Stack or its content suppliers and is
									protected by applicable intellectual property laws.
								</p>
								<ul>
									<li>
										You may not reproduce, distribute, or create derivative
										works from any content on this website without our express
										prior written consent.
									</li>
									<li>
										Deliverables produced for a client as part of a Service
										Agreement will have ownership terms explicitly defined in
										that agreement.
									</li>
									<li>
										Any open-source components used in our solutions are
										governed by their respective licenses.
									</li>
								</ul>
							</div>

							<div id="confidentiality">
								<h3>5. Confidentiality</h3>
								<p>
									Both parties acknowledge that, in the course of providing
									services, confidential information may be shared. Staller Stack
									agrees to:
								</p>
								<ul>
									<li>
										Keep all client data, business logic, and project details
										strictly confidential.
									</li>
									<li>
										Not disclose any confidential information to third parties
										without your prior written consent, except as required by law.
									</li>
									<li>
										Use client information solely for the purpose of delivering
										the agreed services.
									</li>
								</ul>
								<p>
									A formal Non-Disclosure Agreement (NDA) can be signed upon
									request before any detailed project discussions begin.
								</p>
							</div>

							<div id="payment">
								<h3>6. Payment &amp; Refund Policy</h3>
								<p>
									Payment terms are outlined in the project proposal or invoice
									provided by Staller Stack. General terms include:
								</p>
								<ul>
									<li>
										Project work typically requires a deposit before work
										commences, with the remainder due upon milestone completion
										or project delivery.
									</li>
									<li>
										All invoices are payable within the timeframe specified in
										the invoice.
									</li>
									<li>
										Staller Stack reserves the right to pause or terminate work
										if payment obligations are not met.
									</li>
									<li>
										Refunds, where applicable, are subject to the terms of the
										specific engagement agreement. General consulting fees and
										completed milestones are non-refundable.
									</li>
								</ul>
							</div>

							<div id="liability">
								<h3>7. Limitation of Liability</h3>
								<p>
									To the fullest extent permitted by law, Staller Stack shall
									not be liable for any indirect, incidental, special,
									consequential, or punitive damages arising out of or related to
									your use of our services or website, including but not limited
									to:
								</p>
								<ul>
									<li>Loss of profits, data, or business opportunities.</li>
									<li>
										Service interruptions caused by third-party platforms,
										infrastructure, or force majeure events.
									</li>
									<li>
										Errors or inaccuracies in information provided on the
										website.
									</li>
								</ul>
								<p>
									Our total liability to you in connection with any services
									shall not exceed the total fees paid by you for the specific
									service giving rise to the claim.
								</p>
							</div>

							<div id="privacy">
								<h3>8. Privacy</h3>
								<p>
									Your privacy is important to us. Our collection and use of
									personal information is governed by our{" "}
									<Link href="/privacy-policy">Privacy Policy</Link>, which is
									incorporated into these Terms by reference. By using our
									website or services, you consent to the practices described
									in our Privacy Policy.
								</p>
							</div>

							<div id="changes">
								<h3>9. Changes to These Terms</h3>
								<p>
									Staller Stack reserves the right to update or modify these
									Terms &amp; Conditions at any time. We will indicate the date
									of the last revision at the top of this page. Your continued
									use of our website or services after any changes constitutes
									your acceptance of the new Terms.
								</p>
							</div>

							<div id="contact">
								<h3>10. Contact Us</h3>
								<p>
									If you have any questions about these Terms &amp; Conditions,
									please reach out to us:
								</p>
								<ul>
									<li>
										<strong>Website:</strong>{" "}
										<Link href="https://stackstaller.us" target="_blank" rel="noopener">
											stackstaller.us
										</Link>
									</li>
									<li>
										<strong>Contact Page:</strong>{" "}
										<Link href="/contact">Get in Touch</Link>
									</li>
									<li>
										<strong>Email:</strong>{" "}
										<Link href="mailto:hello@stackstaller.us">
											hello@stackstaller.us
										</Link>
									</li>
								</ul>
							</div>

							<p className="muted">
								<small>
									These Terms &amp; Conditions are provided for general guidance
									and represent the policies of Staller Stack. They do not
									constitute legal advice. We recommend consulting a qualified
									legal professional to ensure full compliance with laws
									applicable to your jurisdiction.
								</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TermsAndConditionsPrimary;
