"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Autoplay, EffectFade, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Hero2 = () => {
	const [controlledMainSwiper, setControlledMainSwiper] = useState(null);
	const heroSlides = [
		{
			subtitle: "innovative tech agency",
			title: (
				<>
					We build <span>Apps.</span>
				</>
			),
			desc: "Crafting seamless, intuitive, and powerful mobile and web applications tailored to your business needs.",
			img: "/images/hero/slider-1.webp",
			thumbImg: "/images/hero/slider-thumb-1.webp",
		},
		{
			subtitle: "innovative tech agency",
			title: (
				<>
					We build <span>Solutions.</span>
				</>
			),
			desc: "Delivering end-to-end technological solutions to solve complex challenges and drive growth.",
			img: "/images/hero/slider-2.webp",
			thumbImg: "/images/hero/slider-thumb-2.webp",
		},
		{
			subtitle: "innovative tech agency",
			title: (
				<>
					We build <span>AI Solutions.</span>
				</>
			),
			desc: "Empowering your business with cutting-edge artificial intelligence and machine learning innovations.",
			img: "/images/hero/slider-3.webp",
			thumbImg: "/images/hero/slider-thumb-3.webp",
		},
	];
	return (
		<section className="tj-slider-section">
			<Swiper
				slidesPerView={1}
				spaceBetween={0}
				loop={true}
				effect="fade"
				speed={1400}
				autoplay={{ delay: 5000 }}
				modules={[Autoplay, Navigation, EffectFade, Thumbs]}
				thumbs={{ swiper: controlledMainSwiper }}
				navigation={{ nextEl: ".slider-next", prevEl: ".slider-prev" }}
				className="hero-slider"
				style={{ height: "100%" }}
			>
				{heroSlides.map(({ img, title, desc }, idx) => (
					<SwiperSlide
						key={idx}
						className="tj-slider-item"
						style={{ height: "auto" }}
					>
						<div
							className="slider-bg-image"
							style={{
								backgroundImage: `url('${img ? img : "/images/hero/slider-1.webp"
									}')`,
							}}
						></div>
						<div className="container">
							<div className="slider-wrapper">
								<div className="slider-content">
									<h1 className="slider-title">{title}</h1>
									<div className="slider-desc">{desc}</div>
									<div className="slider-btn">
										<ButtonPrimary text={"Get Started"} url={"/contact"} />
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}

				<div
					className="hero-navigation d-inline-flex wow fadeIn"
					data-wow-delay="1.5s"
				>
					<div className="slider-prev" role="button">
						<span className="anim-icon">
							<i className="tji-arrow-left"></i>
							<i className="tji-arrow-left"></i>
						</span>
					</div>
					<div className="slider-next" role="button">
						<span className="anim-icon">
							<i className="tji-arrow-right"></i>
							<i className="tji-arrow-right"></i>
						</span>
					</div>
				</div>
			</Swiper>
			<Swiper
				onSwiper={setControlledMainSwiper} // capture thumbs swiper
				slidesPerView={3}
				spaceBetween={15}
				loop={false}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[Thumbs]}
				className="hero-thumb wow fadeIn"
				data-wow-delay="2s"
			>
				{heroSlides.map(
					({ thumbImg = "/images/hero/slider-thumb-1.webp" }, idx) => (
						<SwiperSlide key={idx} className="thumb-item">
							<Image
								src={thumbImg}
								alt="images"
								width={80}
								height={80}
								style={{ width: "100%", height: "100%", objectFit: "cover" }}
							/>
						</SwiperSlide>
					)
				)}
			</Swiper>

			<div className="circle-text-wrap wow fadeInUp" data-wow-delay="1s">
				<span
					className="circle-text"
					style={{ backgroundImage: "url('/images/hero/circle-text.webp')" }}
				></span>
				<Link className="circle-icon" href="/services">
					<i className="tji-arrow-down-big"></i>
				</Link>
			</div>
		</section>
	);
};

export default Hero2;
