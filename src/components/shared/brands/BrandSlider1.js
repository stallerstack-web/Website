"use client";

import getBrands from "@/libs/getBrands";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BrandSlider1 = ({ className, data }) => {
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
			className={`client-slider ${className ? className : "client-slider-1"}`}
			modules={[Autoplay]}
		>
			{items?.length
				? items?.map(({ img, img2, img3, name }, idx) => (
					<SwiperSlide key={idx} className="client-item" style={{ flexDirection: 'column', justifyContent: 'center' }}>
						<div className="client-logo" style={{ marginBottom: name ? '10px' : '0' }}>
							<img
								src={img || img2 || img3 || "/images/brands/brand-1.webp"}
								alt={name || "Brand"}
								title={name}
								style={{ opacity: 0.8 }}
							/>
						</div>
						{name && (
							<div className="client-name" style={{ fontSize: '20px', fontWeight: '500', color: '#222' }}>
								{name}
							</div>
						)}
					</SwiperSlide>
				))
				: ""}
		</Swiper>
	);
};

export default BrandSlider1;
