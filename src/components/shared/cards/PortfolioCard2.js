import Link from "next/link";
import Image from "next/image";

const PortfolioCard2 = ({ 
	title, 
	category, 
	image, 
	link, 
	aspectRatio = '3/4', 
	objectFit = 'cover',
	bg = 'transparent'
}) => {
	return (
		<>
			<style>{`
				.portfolio-card-custom {
					background-color: ${bg};
					display: flex;
					flex-direction: column;
					gap: 20px;
					padding-bottom: 20px;
				}
				.portfolio-card-custom .project-image-wrapper {
					position: relative;
					width: 100%;
					aspect-ratio: ${aspectRatio === '3/4' ? '4/3' : aspectRatio};
					overflow: hidden;
					border-radius: 12px;
				}
				.portfolio-card-custom img {
					transition: transform 0.5s ease;
				}
				.portfolio-card-custom .hover-overlay {
					position: absolute;
					inset: 0;
					background-color: rgba(9, 31, 34, 0.4);
					display: flex;
					align-items: center;
					justify-content: center;
					opacity: 0;
					transition: opacity 0.4s ease;
					z-index: 5;
				}
				.portfolio-card-custom .hover-btn {
					width: 65px;
					height: 65px;
					border-radius: 50%;
					background-color: rgba(255, 255, 255, 0.15);
					backdrop-filter: blur(12px);
					display: flex;
					align-items: center;
					justify-content: center;
					color: #fff;
					font-size: 24px;
					transform: translateY(30px) rotate(-45deg);
					transition: all 0.4s ease;
					border: 1px solid rgba(255, 255, 255, 0.3);
				}
				.portfolio-card-custom:hover img {
					transform: scale(1.08) rotate(-2deg);
				}
				.portfolio-card-custom:hover .hover-overlay {
					opacity: 1;
				}
				.portfolio-card-custom:hover .hover-btn {
					transform: translateY(0) rotate(0deg);
					background-color: var(--tj-color-theme-primary);
					border-color: var(--tj-color-theme-primary);
				}
				.portfolio-card-custom .title-link {
					color: var(--tj-color-theme-dark);
					text-decoration: none;
					transition: color 0.3s ease;
				}
				.portfolio-card-custom:hover .title-link {
					color: var(--tj-color-theme-primary) !important;
				}
			`}</style>

			<div className="portfolio-card-custom">
				<div className="project-image-wrapper">
					<Link href={link}>
						<Image
							src={image || "/images/project/project-1.webp"}
							alt={title || "Portfolio Image"}
							fill
							style={{ objectFit: objectFit }}
						/>
						<div className="hover-overlay">
							<div className="hover-btn">
								<i className="tji-arrow-right-big"></i>
							</div>
						</div>
					</Link>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 10px' }}>
					<span style={{ fontSize: '15px', fontWeight: '500', color: 'var(--tj-color-text-body-2)', marginBottom: '8px' }}>
						{category}
					</span>
					<h3 style={{ fontSize: '24px', fontWeight: '700', margin: '0' }}>
						<Link href={link} className="title-link">
							{title}
						</Link>
					</h3>
				</div>
			</div>
		</>
	);
};

export default PortfolioCard2;
