"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const MarqueeSlider2 = ({ type }) => {
	const items = [
		"Innovation",
		"Success",
		"Leadership",
		"Enterprise",
		"Business Growth",
		"Corporate",
		"Results",
		"Innovation",
		"Success",
		"Leadership",
		"Enterprise",
		"Business Growth",
		"Corporate",
		"Results",
	];

	return (
		<Swiper
			slidesPerView="auto"
			spaceBetween={30}
			loop={true}
			speed={5000}
			allowTouchMove={false}
			autoplay={{
				delay: 1,
				disableOnInteraction: false,
			}}
			breakpoints={{
				768: {
					spaceBetween: 35,
				},

				1024: {
					spaceBetween: 50,
				},
			}}
			className="h5-maquee-slider"
			wrapperClass="h5-maquee-slider-wrapper"
			modules={[Autoplay]}
		>
			{items?.length
				? items?.map((title, idx) => (
						<SwiperSlide key={idx} className="h5-maquee-slider-item">
							<div className="marquee-box">
								<div className="marquee-icon-wrapper">
									<div className="marquee-icon">
										{type === 2 ? "//" : (
											<svg
												width="22"
												height="22"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
												style={{ display: "inline-block", verticalAlign: "middle", opacity: 0.6 }}
											>
												<path
													d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
													stroke="currentColor"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
													fill="transparent"
												/>
											</svg>
										)}
									</div>
								</div>
								<div className="marquee-title">
									<h4 className="title">{title}</h4>
								</div>
							</div>
						</SwiperSlide>
				  ))
				: ""}
		</Swiper>
	);
};

export default MarqueeSlider2;
