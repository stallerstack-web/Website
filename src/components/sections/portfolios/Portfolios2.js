"use client";
import PortfolioCard2 from "@/components/shared/cards/PortfolioCard2";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import getPortfolio from "@/libs/getPortfolio";

const Portfolios2 = () => {
	const portfolios = getPortfolio();
	return (
		<section className="tj-project-section-2 section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-2 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								Proud Projects
							</span>
							<h2 className="sec-title text-anim">
								Breaking Boundaries, Building <span>Dreams.</span>
							</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<div className="project-wrapper wow fadeInUp" data-wow-delay=".5s">
							<Swiper
								slidesPerView={1.2}
								spaceBetween={15}
								loop={true}
								speed={1500}
								centeredSlides={true}
								autoplay={{
									delay: 6000,
								}}
								pagination={{
									el: ".swiper-pagination-area",
									clickable: true,
								}}
								breakpoints={{
									576: {
										slidesPerView: 1.5,
										spaceBetween: 20,
									},
									768: {
										slidesPerView: 2.2,
										spaceBetween: 20,
									},
									992: {
										slidesPerView: 3,
										spaceBetween: 30,
									},
									1200: {
										slidesPerView: 3.5,
										spaceBetween: 30,
									},
									1400: {
										slidesPerView: 4,
										spaceBetween: 30,
									},
								}}
								modules={[Pagination, Autoplay]}
								className="project-slider"
							>
								{portfolios?.length
									? portfolios.map((portfolio, idx) => (
											<SwiperSlide key={idx}>
												<PortfolioCard2
													title={portfolio.title}
													category={portfolio.category}
													image={portfolio.featuredImg || portfolio.img}
													link={`/portfolios/${portfolio.id}`}
												/>
											</SwiperSlide>
									  ))
									: ""}

								<div className="swiper-pagination-area"></div>
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolios2;
