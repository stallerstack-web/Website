import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import BlogSidebar from "@/components/shared/sidebar/BlogSidebar";
import makePath from "@/libs/makePath";
import Image from "next/image";
import Link from "next/link";

const BlogDetailsPrimary = ({ option }) => {
	const { prevId, nextId, currentItem, isPrevItem, isNextItem } = option || {};
	const { title, id, img, detailsImg, tags, author_name, date, comments } = currentItem || {};
	return (
		<section className="tj-blog-section section-gap slidebar-stickiy-container">
			<div className="container">
				<div className="row row-gap-5">
					<div className="col-lg-8">
						<div className="post-details-wrapper">
							<div className="blog-images wow fadeInUp" data-wow-delay=".1s">
								<Image
									src={detailsImg || img || "/images/blog/blog-1.webp"}
									alt="Images"
									width={870}
									height={450}
									style={{ height: "auto" }}
								/>
							</div>
							<h2 className="title title-anim">{title}</h2>
							<div
								className="blog-category-two wow fadeInUp"
								data-wow-delay=".3s"
							>
								<div className="category-item">
									<div className="cate-images">
										<Image
											src={currentItem?.author_img || "/images/testimonial/client-2.webp"}
											alt="Images"
											width={89}
											height={89}
										/>
									</div>
									<div className="cate-text">
										<span className="degination">Authored by</span>
										<h6 className="title">
											<Link href={`/blogs/${id}`}>{author_name || "Author Name"}</Link>
										</h6>
									</div>
								</div>
								<div className="category-item">
									<div className="cate-icons">
										<i className="tji-calendar"></i>
									</div>
									<div className="cate-text">
										<span className="degination">Date Released</span>
										<h6 className="text">{date || "29 December, 2025"}</h6>
									</div>
								</div>
								<div className="category-item">
									<div className="cate-icons">
										<i className="tji-comment"></i>
									</div>
									<div className="cate-text">
										<span className="degination">Comments</span>
										<h6 className="text">{(comments?.length < 10 ? '0' + comments?.length : comments?.length) || "00"} Comments</h6>
									</div>
								</div>
							</div>
							<div className="blog-text">
								<p className="wow fadeInUp" data-wow-delay=".3s">
									{currentItem?.desc || "In today’s competitive landscape, businesses must continuously adapt..."}
								</p>
								<p className="wow fadeInUp" data-wow-delay=".3s">
									{currentItem?.desc1 || "Whether you're looking to streamline operations, enhance customer experiences..."}
								</p>
								<blockquote className="wow fadeInUp" data-wow-delay=".3s">
									<p>
										{currentItem?.quote?.text || "The true entrepreneur is a doer, not a dreamer. Innovation is the catalyst."}
									</p>
									<cite>{currentItem?.quote?.author || "Kevin Hooks"}</cite>
								</blockquote>
								<h3 className="wow fadeInUp" data-wow-delay=".3s">
									{currentItem?.subheading || "Key lessons of Business Potential"}
								</h3>
								<p className="wow fadeInUp" data-wow-delay=".3s">
									{currentItem?.desc2 || "Unlocking your business potential requires more than just vision and ambition."}
								</p>
								{(() => {
									const images = [
										currentItem?.img1,
										currentItem?.img2,
										currentItem?.img3,
										currentItem?.img4,
										currentItem?.img5,
										currentItem?.img6
									].filter(Boolean);
									
									return images.length > 0 && (
										<div className="images-wrap">
											<div className="row">
												{images.map((imgSrc, idx) => (
													<div className="col-sm-6" key={idx}>
														<div
															className="image-box wow fadeInUp"
															data-wow-delay={`.${3 + (idx % 3) * 2}s`}
															style={{ overflow: "hidden", borderRadius: "10px", marginBottom: "30px" }}
														>
															<Image
																src={imgSrc}
																alt="Image"
																width={420}
																height={315}
																style={{ width: "100%", height: "auto", aspectRatio: "4/3", objectFit: "cover" }}
															/>
														</div>
													</div>
												))}
											</div>
										</div>
									);
								})()}
								<p className="wow fadeInUp" data-wow-delay=".3s">
									{currentItem?.desc3 || "Lastly, effective leadership that inspires and motivates employees..."}
								</p>
								<ul className="wow fadeInUp" data-wow-delay=".3s">
									{currentItem?.listItems?.map((listItem, idx) => (
										<li key={idx}>
											<span>
												<i className="tji-check"></i>
											</span>
											{listItem}
										</li>
									)) || (
										<li><span><i className="tji-check"></i></span>Embrace Innovation</li>
									)}
								</ul>
								{currentItem?.video?.url && (
									<div className="blog-video wow fadeInUp" data-wow-delay=".3s">
										<Image
											src={currentItem?.video?.img || "/images/blog/blog-video.webp"}
											alt="Video"
											width={870}
											height={498}
											style={{ height: "auto" }}
										/>
										<PopupVideo>
											<Link
												className="video-btn video-popup glightbox"
												href={currentItem?.video?.url}
											>
												<span>
													<i className="tji-play"></i>
												</span>
											</Link>
										</PopupVideo>
									</div>
								)}
								<h3 className="wow fadeInUp" data-wow-delay=".3s">
									{currentItem?.conclusion?.heading || "Conclusions"}
								</h3>
								<p className="wow fadeInUp" data-wow-delay=".3s">
									{currentItem?.conclusion?.desc1 || "Unlocking your business’s full potential is a journey..."}
								</p>
								<p className="wow fadeInUp" data-wow-delay=".3s">
									{currentItem?.conclusion?.desc2 || "The ability to continuously learn, collaborate, and optimize..."}
								</p>
							</div>
							<div className="tj-tags-post wow fadeInUp" data-wow-delay=".3s">
								<div className="tagcloud">
									<span>Tags:</span>
									{tags?.length
										? tags?.map((tag, idx) => (
											<Link key={idx} href={`/blogs?tag=${makePath(tag)}`}>
												{tag}
											</Link>
										))
										: ""}
								</div>
								<div className="post-share">
									<ul>
										<li> Share:</li>
										<li>
											<Link href="https://www.facebook.com/" target="_blank">
												<i className="fa-brands fa-facebook-f"></i>
											</Link>
										</li>
										<li>
											<Link href="https://x.com/" target="_blank">
												<i className="fa-brands fa-x-twitter"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.instagram.com/" target="_blank">
												<i className="fa-brands fa-instagram"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.linkedin.com/" target="_blank">
												<i className="fa-brands fa-linkedin-in"></i>
											</Link>
										</li>
									</ul>
								</div>
							</div>
							<div
								className="tj-post__navigation  wow fadeInUp"
								data-wow-delay="0.3s"
							>
								{/* <!-- previous post --> */}
								<div
									className="tj-nav__post previous"
									style={{ visibility: isPrevItem ? "visible" : "hidden" }}
								>
									<div className="tj-nav-post__nav prev_post">
										<Link href={isPrevItem ? `/blogs/${prevId}` : "#"}>
											<span>
												<i className="tji-arrow-left"></i>
											</span>
											Previous
										</Link>
									</div>
								</div>
								<Link href={"/blogs"} className="tj-nav-post__grid">
									<i className="tji-window"></i>
								</Link>
								{/* <!-- next post --> */}
								<div
									className="tj-nav__post next"
									style={{ visibility: isNextItem ? "visible" : "hidden" }}
								>
									<div className="tj-nav-post__nav next_post">
										<Link href={isNextItem ? `/blogs/${nextId}` : "#"}>
											Next
											<span>
												<i className="tji-arrow-right"></i>
											</span>
										</Link>
									</div>
								</div>
							</div>

							<div className="tj-comments-container">
								<div className="tj-comments-wrap">
									<div className="comments-title">
										<h3 className="title">Top Comments ({(comments?.length < 10 ? '0' + comments?.length : comments?.length) || "00"})</h3>
									</div>
									<div className="tj-latest-comments">
										<ul>
											{comments?.map((comment, idx) => (
												<li className="tj-comment" key={idx}>
													<div className="comment-content">
														<div className="comment-avatar">
															<Image
																src={comment.img || "/images/blog/avatar-1.webp"}
																alt="Image"
																width={64}
																height={64}
																style={{ height: "auto", borderRadius: "50%" }}
															/>
														</div>
														<div className="comments-header">
															<div className="avatar-name">
																<h6 className="title">
																	<Link href={`/blogs/${id}`}>{comment.authorName || "User"}</Link>
																</h6>
															</div>
															<div className="comment-text">
																<span className="date">
																	{comment.date || "June 18, 2024 at 06:00 pm"}
																</span>
																<Link className="reply" href="#comment">
																	Reply
																</Link>
															</div>
															<div className="desc">
																<p>"{comment.desc}"</p>
															</div>
														</div>
													</div>
													
													{comment.replies && comment.replies.length > 0 && (
														<ul className="children">
															{comment.replies.map((reply, rIdx) => (
																<li className="tj-comment" key={rIdx}>
																	<div className="comment-content">
																		<div className="comment-avatar">
																			<Image
																				src={reply.img || "/images/blog/avatar-2.webp"}
																				alt="Image"
																				width={64}
																				height={64}
																				style={{ height: "auto", borderRadius: "50%" }}
																			/>
																		</div>
																		<div className="comments-header">
																			<div className="avatar-name">
																				<h6 className="title">
																					<Link href={`/blogs/${id}`}>
																						{reply.authorName || "User"}
																					</Link>
																				</h6>
																			</div>
																			<div className="comment-text">
																				<span className="date">
																					{reply.date || "June 18, 2024 at 06:00 pm"}
																				</span>
																				<Link className="reply" href="#comment">
																					Reply
																				</Link>
																			</div>
																			<div className="desc">
																				<p>"{reply.desc}"</p>
																			</div>
																		</div>
																	</div>
																</li>
															))}
														</ul>
													)}
												</li>
											))}
										</ul>
									</div>
								</div>
								<div className="tj-comments__container">
									<div className="comment-respond">
										<h3 className="comment-reply-title">Leave a Comment</h3>
										<div className="row">
											<div className="col-lg-12">
												<div className="form-input">
													<textarea
														id="comment"
														name="message"
														placeholder="Write Your Comment *"
													></textarea>
												</div>
											</div>
											<div className="col-lg-4">
												<div className="form-input">
													<input
														type="text"
														id="name"
														name="name"
														placeholder="Full Name *"
														required=""
													/>
												</div>
											</div>
											<div className="col-lg-4">
												<div className="form-input">
													<input
														type="email"
														id="emailOne"
														name="name"
														placeholder="Your Email *"
														required=""
													/>
												</div>
											</div>
											<div className="col-lg-4">
												<div className="form-input">
													<input
														type="text"
														id="website"
														name="name"
														placeholder="Website"
														required=""
													/>
												</div>
											</div>
											<div className="comments-btn">
												<ButtonPrimary text={"Submit Now"} type={"submit"} />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<BlogSidebar />
					</div>
				</div>
			</div>
		</section>
	);
};

export default BlogDetailsPrimary;
