import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import useActiveLink from "@/hooks/useActiveLink";
import getNavItems from "@/libs/getNavItems";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ headerType, isStickyHeader }) => {
	const makeActiveLink = useActiveLink();
	const navItems = getNavItems();
	const homeNav = makeActiveLink(navItems[0]);
	const pagesNav = makeActiveLink(navItems[1]);
	const serviceNav = makeActiveLink(navItems[2]);
	const portfolioNav = makeActiveLink(navItems[3]);
	const blogNav = makeActiveLink(navItems[4]);
	const contactNav = makeActiveLink(navItems[5]);

	return (
		<div className="menu-area d-none d-lg-inline-flex align-items-center">
			<nav id="mobile-menu" className="mainmenu">
				<ul>
					<li className={homeNav?.isActive ? "current-menu-ancestor" : ""}>
						<Link href={homeNav?.path ? homeNav?.path : "#"}>
							{homeNav?.name}
						</Link>
					</li>
					<li className={pagesNav?.isActive ? "current-menu-ancestor" : ""}>
						<Link href={pagesNav?.path ? pagesNav?.path : "#"}>
							{pagesNav?.name}
						</Link>
					</li>
					<li
						className={`has-dropdown ${serviceNav?.isActive ? "current-menu-ancestor" : ""
							}`}
					>
						<Link href={serviceNav?.path ? serviceNav?.path : "#"}>
							{serviceNav?.name}
						</Link>
						<ul className="sub-menu  mega-menu-service">
							{serviceNav?.submenu?.length
								? serviceNav?.submenu?.map((item, idx) => (
									<li key={idx}>
										<Link
											className="mega-menu-service-single"
											href={item?.path ? item?.path : "/"}
										>
											{" "}
											<span className="mega-menu-service-icon">
												<i
													className={
														item?.icon ? item?.icon : "tji-service-1"
													}
												></i>
											</span>{" "}
											<span className="mega-menu-service-title">
												{item?.name
													? item?.name
													: "Business process optimization"}
											</span>{" "}
											<span className="mega-menu-service-nav">
												<i className="tji-arrow-right-long"></i>
												<i className="tji-arrow-right-long"></i>
											</span>
										</Link>
									</li>
								))
								: ""}
						</ul>
					</li>
					<li className={portfolioNav?.isActive ? "current-menu-ancestor" : ""}>
						<Link href={portfolioNav?.path ? portfolioNav?.path : "#"}>
							{portfolioNav?.name}
						</Link>
					</li>
					<li className={blogNav?.isActive ? "current-menu-ancestor" : ""}>
						<Link href={blogNav?.path ? blogNav?.path : "#"}>
							{blogNav?.name}
						</Link>
					</li>
					<li className={contactNav?.isActive ? "current-menu-ancestor" : ""}>
						<Link href={contactNav?.path ? contactNav?.path : "#"}>
							{contactNav?.name ? contactNav?.name : "Contact"}
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
