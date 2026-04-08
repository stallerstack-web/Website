"use client";

import getBrands from "@/libs/getBrands";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BrandSlider2 = ({ type, data }) => {
	const items = data || getBrands();
	return (
		<Swiper
			slidesPerView="auto"
			spaceBetween={0}
			freeMode={true}
			centeredSlides={true}
			loop={true}
			speed={5000}
			allowTouchMove={false}
			autoplay={{
				delay: 1,
				disableOnInteraction: false,
			}}
			className={`client-slider client-slider-2 ${
				type === 2 ? "h6-client-slider" : ""
			}`}
			modules={[Autoplay]}
		>
			{items?.length
				? items?.map(({ img, img2, img3, name }, idx) => (
						<SwiperSlide key={idx} className="client-item">
							<div className="client-logo">
								<img
									src={img2 || img || img3 || "/images/brands/brand-1-light.webp"}
									alt={name || "Brand"}
									title={name}
									style={{ opacity: 0.8 }}
								/>
							</div>
						</SwiperSlide>
				  ))
				: ""}
		</Swiper>
	);
};

export default BrandSlider2;
