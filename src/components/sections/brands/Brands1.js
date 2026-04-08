import BrandSlider1 from "@/components/shared/brands/BrandSlider1";
import getTechStacks from "@/libs/getTechStacks";

const Brands1 = ({ type = 1 }) => {
	const techStacks = getTechStacks();
	return (
		<section
			className={`tj-client-section ${type === 2 ? "client-section-gap-2" : "client-section-gap"
				} wow fadeInUp`}
			data-wow-delay=".4s"
		>
			<div className="container-fluid client-container">
				<div className="row">
					<div className="col-12">
						<div className="client-content style-2" style={{ maxWidth: "1000px" }}>
							<h5 className="sec-title">
								Our Core Specialized <span className="client-text">Technology Stack</span> For Modern Solutions
							</h5>
						</div>
						<BrandSlider1 data={techStacks} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Brands1;
