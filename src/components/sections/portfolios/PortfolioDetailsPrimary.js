"use client";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Image from "next/image";
import Link from "next/link";
import CtaSidebar from "../cta/CtaSidebar";
import React from "react";

const PortfolioDetailsPrimary = ({ option }) => {
	const { prevId, nextId, currentItem, isPrevItem, isNextItem } = option || {};
	const {
		title,
		titleLarge,
		id,
		img,
		imgLarge,
		detailsImg,
		desc,
		desc1,
		desc2,
		descItems,
		statusItem,
		img2,
		img3,
		img4,
		img5,
		img6,
		img7,
		img8,
		galleryLayout,
	} = currentItem || {};

	const galleryImages = [img, img2, img4, img6, img7].filter(Boolean);

	return (
		<section className="tj-blog-section section-gap">
			<div className="container">
				<div className="row rg-50">
					<div className="col-lg-8">
						<div className="post-details-wrapper">
							<div className="blog-images wow fadeInUp" data-wow-delay=".1s" style={{
								width: '100%',
								backgroundColor: '#f9f9f9',
								borderRadius: '12px',
								marginBottom: '30px',
								display: 'flex',
								justifyContent: 'center'
							}}>
								<Image
									src={img5 || detailsImg || imgLarge || "/images/project/project-details.webp"}
									alt={title || "Portfolio Image"}
									width={868}
									height={600}
									style={{
										width: 'auto',
										height: 'auto',
										maxWidth: '100%',
										maxHeight: '600px',
										objectFit: 'contain'
									}}
								/>
							</div>
							<h2 className="title title-anim">
								{titleLarge || "Designing a Modern Brand Identity for Competitive Edge"}
							</h2>
							<div className="blog-text">
								{desc && (
									<p className="wow fadeInUp" data-wow-delay=".3s">
										{desc}
									</p>
								)}
								{desc1 && (
									<p className="wow fadeInUp" data-wow-delay=".3s">
										{desc1}
									</p>
								)}
								{desc2 && (
									<p className="wow fadeInUp" data-wow-delay=".3s">
										{desc2}
									</p>
								)}

								{descItems &&
									descItems.map((item, index) => (
										<React.Fragment key={index}>
											<h3 className="wow fadeInUp" data-wow-delay=".3s">
												{item.title}
											</h3>
											<p className="wow fadeInUp" data-wow-delay=".3s">
												{item.desc}
											</p>
										</React.Fragment>
									))}

								{!descItems && (
									<>
										<h3 className="wow fadeInUp" data-wow-delay=".3s">
											Project Overview
										</h3>
										<p className="wow fadeInUp" data-wow-delay=".3s">
											In today’s dynamic market, a strong and consistent brand
											identity is key to standing out and driving growth. This
											project recognized the need to evolve its brand to better
											resonate with an expanding audience and adapt to shifting
											market trends.
										</p>
									</>
								)}

								<h3 className="wow fadeInUp" data-wow-delay=".3s">
									Project Gallery
								</h3>
								<div className="images-wrap">
									<div className="row">
										{galleryLayout === "mobile" ? (
											<>
												{galleryImages.length > 0 ? galleryImages.map((image, index) => (
													<div className="col-lg-4 col-md-4 col-sm-6 col-6" key={`mobile-img-${index}`}>
														<div className="image-box wow fadeInUp" data-wow-delay={`${0.2 + (index * 0.1)}s`} style={{ width: '100%', marginBottom: '30px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.06)', backgroundColor: '#fff' }}>
															<PopupVideo>
																<Link href={image} className="gallery glightbox" style={{ display: 'block' }}>
																	<Image src={image} alt={`Project Gallery ${index + 1}`} width={400} height={800} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
																</Link>
															</PopupVideo>
														</div>
													</div>
												)) : null}
											</>
										) : (
											<>
												{galleryImages.length > 0 ? galleryImages.map((image, index) => {
													const isFirstLarge = index === 0;
													return (
														<div className={isFirstLarge ? "col-sm-12" : "col-md-6 col-sm-12"} key={`img-${index}`}>
															<div className="image-box wow fadeInUp" data-wow-delay={`${0.2 + (index * 0.1)}s`} style={{ width: '100%', backgroundColor: '#f6f6f6', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', marginBottom: '30px', minHeight: isFirstLarge ? '500px' : '400px' }}>
																<PopupVideo>
																	<Link className="gallery glightbox" href={image} prefetch={false} style={{ display: 'block' }}>
																		<Image src={image} alt={`Project Gallery ${index + 1}`} width={isFirstLarge ? 870 : 420} height={isFirstLarge ? 500 : 400} style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: isFirstLarge ? '500px' : '400px', display: 'block', margin: '0 auto', objectFit: 'contain' }} />
																	</Link>
																</PopupVideo>
															</div>
														</div>
													);
												}) : null}
											</>
										)}
									</div>
								</div>
							</div>
							<div
								className="tj-post__navigation mb-0 wow fadeInUp"
								data-wow-delay="0.3s"
							>
								<div
									className="tj-nav__post previous"
									style={{ visibility: isPrevItem ? "visible" : "hidden" }}
								>
									<div className="tj-nav-post__nav prev_post">
										<Link href={isPrevItem ? `/portfolios/${prevId}` : "#"}>
											<span>
												<i className="tji-arrow-left"></i>
											</span>
											Previous
										</Link>
									</div>
								</div>
								<Link href={"/portfolios"} className="tj-nav-post__grid">
									<i className="tji-window"></i>
								</Link>
								<div
									className="tj-nav__post next"
									style={{ visibility: isNextItem ? "visible" : "hidden" }}
								>
									<div className="tj-nav-post__nav next_post">
										<Link href={isNextItem ? `/portfolios/${nextId}` : "#"}>
											Next
											<span>
												<i className="tji-arrow-right"></i>
											</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<aside className="tj-main-sidebar">
							<div
								className="tj-sidebar-widget widget-categories wow fadeInUp"
								data-wow-delay=".1s"
							>
								<h4 className="widget-title">Project Info</h4>
								{statusItem &&
									statusItem.map((item, index) => {
										let iconClass = "tji-check";
										if (item.title.toLowerCase().includes("client")) iconClass = "tji-user";
										if (item.title.toLowerCase().includes("budget")) iconClass = "tji-budget";
										if (item.title.toLowerCase().includes("location")) iconClass = "tji-location-2";
										if (item.title.toLowerCase().includes("date")) iconClass = "tji-calendar";
										if (item.title.toLowerCase().includes("category")) iconClass = "tji-chart";
										if (item.title.toLowerCase().includes("platform")) iconClass = "tji-window";
										if (item.title.toLowerCase().includes("website")) iconClass = "tji-envelop-2";

										return (
											<div className="infos-item" key={index}>
												<div className="project-icons">
													<i className={iconClass}></i>
												</div>
												<div className="project-text">
													<span>{item.title}</span>
													<h6 className="title">{item.desc}</h6>
												</div>
											</div>
										);
									})}
								{!statusItem && (
									<p>No project information available.</p>
								)}
							</div>
							<div
								className="tj-sidebar-widget widget-feature-item wow fadeInUp"
								data-wow-delay=".3s"
							>
								<CtaSidebar />
							</div>
						</aside>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PortfolioDetailsPrimary;
