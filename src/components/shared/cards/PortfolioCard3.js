import Image from "next/image";
import Link from "next/link";

const PortfolioCard3 = ({ portfolio }) => {
	const {
		title = "Event Management Platform",
		imgCard3,
		img3 = "/images/project/project-6.webp",
		shortDesc,
		id,
		dataFilter,
		category = "Connect",
	} = portfolio ? portfolio : {};
	return (
		<div className="project-item">
			<div className="project-img" style={{ position: 'relative', width: '100%', aspectRatio: '1/1', overflow: 'hidden' }}>
				<Image 
					src={imgCard3 || img3 || "/images/project/project-6.webp"} 
					alt={title || "Portfolio Image"} 
					fill
					style={{ objectFit: 'cover' }}
				/>
			</div>
			<div className="project-content">
				<span className="categories">
					<Link href={`/portfolios/${id}`}>{category}</Link>
				</span>
				<div className="project-text">
					<h4 className="title">
						<Link href={`/portfolios/${id}`}>{title}</Link>
					</h4>
					<Link className="project-btn" href={`/portfolios/${id}`}>
						<i className="tji-arrow-right-big"></i>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PortfolioCard3;
