import React, { useEffect, useRef } from "react";
import Image from "next/image";
import module from "./profile.module.css";
import ProfilePic from "@/assets/profile.png";

function ProfileImageComponent() {
	return (
		<div id="profile-pic" className="flex flex-col gap-2">
			<div>
				<svg
					width="84"
					height="84"
					className="absolute"
					viewBox="0 0 84 84"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M0 42C0 65.196 18.804 84 42 84C65.196 84 84 65.196 84 42C84 18.804 65.196 0 42 0C18.804 0 0 18.804 0 42ZM80.22 42C80.22 63.1083 63.1083 80.22 42 80.22C20.8917 80.22 3.78 63.1083 3.78 42C3.78 20.8917 20.8917 3.78 42 3.78C63.1083 3.78 80.22 20.8917 80.22 42Z"
						fill="#F8A910"
						fillOpacity="0.1"
					/>
				</svg>

				<svg
					width="79"
					height="84"
					// className="absolute"
					viewBox="0 0 79 84"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M42.0078 82.11C42.0078 83.1538 41.1611 84.0044 40.1184 83.9575C33.3476 83.6526 26.741 81.7129 20.8683 78.2922C14.4505 74.5539 9.13869 69.1806 5.47457 62.7201C1.81046 56.2596 -0.0749433 48.943 0.0105982 41.5163C0.0961397 34.0895 2.14956 26.8183 5.96151 20.4439C9.77346 14.0695 15.2076 8.82001 21.7099 5.23054C28.2121 1.64108 35.5499 -0.159929 42.9752 0.0111425C50.4005 0.182214 57.6476 2.31925 63.9776 6.20436C69.7699 9.75944 74.6048 14.6619 78.0771 20.4824C78.6119 21.3789 78.2631 22.5273 77.3436 23.0212V23.0212C76.424 23.5151 75.2822 23.1672 74.7434 22.2732C71.5902 17.0404 67.2229 12.6314 62.0003 9.42597C56.24 5.89051 49.6451 3.94581 42.8881 3.79014C36.1312 3.63446 29.4537 5.27338 23.5367 8.53979C17.6196 11.8062 12.6746 16.5833 9.20568 22.384C5.73681 28.1847 3.86819 34.8015 3.79035 41.5598C3.7125 48.3181 5.42822 54.9762 8.76256 60.8553C12.0969 66.7343 16.9306 71.624 22.7709 75.0259C28.0659 78.1101 34.0166 79.8713 40.1186 80.1733C41.1611 80.2249 42.0078 81.0662 42.0078 82.11V82.11Z"
						fill="#FFC148"
					/>
					<image
						viewBox="0 0 72 72"
						x={"6"}
						y={"6"}
						width={"72px"}
						height={"72px"}
						className="rounded-full "
						href={ProfilePic.src}
					/>
				</svg>
			</div>
			<div className="flex items-center justify-center">
				<div className="font-bold text-[12px] p-1 text-primary bg-primary/10 rounded-2xl px-3">
					LVL 2
				</div>
			</div>
		</div>
	);
}

export default ProfileImageComponent;
