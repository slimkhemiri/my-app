import React, { useState } from "react";
import "./SideNavBar.css";

const SideNavBar = () => {



	const [isExpanded, setExpendState] = useState(false);


	const menuItems = [
		{
			text: "Dashboard",
			icon: "icons/grid.svg",
			path:"/dashboard"
		},
		{
			text: "Profile",
			icon: "icons/user.svg",
			path:"/profile"
		},
		{
			text: "Messages",
			icon: "icons/message.svg",
			path:"/dashboard"
		},
		{
			text: "Analytics",
			icon: "icons/pie-chart.svg",
			path:"/dashboard"
		},
		{
			text: "File Manager",
			icon: "icons/folder.svg",
			path:"/dashboard"
		},
		{
			text: "Orders",
			icon: "icons/shopping-cart.svg",
			path:"/dashboard"
		},
		{
			text: "Saved Items",
			icon: "icons/heart.svg",
			path:"/dashboard"
		},
		{
			text: "Settings",
			icon: "icons/settings.svg",
			path:"/dashboard"
		},
	];
	

	return (

		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>

			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand">
							<img src="icons/Logo.svg" alt="" srcSet="" />
							<h2>Slim-Kh</h2>
						</div>
					)}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() =>  setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu">
					{menuItems.map(({ text, icon,path,i }) => (
						<a
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							href={path}
							key={i}
						>
							<img className="menu-item-icon" src={icon} alt="" srcSet="" />
							{isExpanded && <p>{text}</p>}
						</a>
					))}
				</div>
			</div>
			{/* {isExpanded && 
			<div style={{marginLeft:'45px',marginTop:'40px'}} >
				<progress  max="5" value="3" ></progress>
				<br/>
				<label>3 Comments out of 5</label>
			</div>
} */}
			<div className="nav-footer">
				{isExpanded && (
					<div className="nav-details">
						<img
							className="nav-footer-avatar"
							src="icons/admin-avatar.svg"
							alt=""
							srcSet=""
						/>
						<div className="nav-footer-info">
							<p className="nav-footer-user-name">Slim Khemiri</p>
							{/* <p className="nav-footer-user-position">store admin</p> */}
						</div>
					</div>
				)}
				<img className="logout-icon" src="icons/logout.svg" alt="" srcSet="" />
			</div>
		</div>
	);
};

export default SideNavBar;
