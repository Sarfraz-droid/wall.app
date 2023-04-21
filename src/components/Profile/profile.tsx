import React, { useEffect, useRef } from "react";
import ProfileImageComponent from "./common/ProfilePic";
import { BsTwitter } from "react-icons/bs";
import { c1, c2, c3, c4 } from "@/assets/communitites";
import Image from "next/image";
import Tags, { ITags } from "./common/Tags";
import useElementSize from "@/hooks/useElementSize";
import PerspectiveWrapper from "../wrappers/perspective";

function Profile() {
	const TagDetails: ITags[] = [
		{
			active: true,
			text: "Art",
			percent: 12,
		},
		{
			active: true,
			text: "Utility",
			percent: 12,
		},
		{
			active: false,
			text: "PFP",
			percent: 12,
		},
		{
			active: false,
			text: "Metaverse",
			percent: 12,
		},
		{
			active: false,
			text: "Gaming",
			percent: 12,
		},
		{
			active: false,
			text: "PFP",
			percent: 12,
		},
		{
			active: false,
			text: "ens",
			percent: 12,
		},
	];

	return (
		<PerspectiveWrapper degree={10}>
			<div className="w-[292px] flex flex-col gap-[32px] font-Inter text-primary bg-[#111111] p-4 pb-6 shadow-2xl shadow-primary/5 rounded-md scale-100 transition-all  hover:shadow-primary/15">
				<div className="flex gap-4">
					<ProfileImageComponent />
					<div className="flex flex-col justify-center items-start gap-2">
						<h1 className="font-medium text-[19px]">dingaling.eth</h1>
						<p className="text-secondary-light text-[12px]">0xadgf....jkld</p>
					</div>
				</div>
				<div className="flex gap-2">
					<div className="flex gap-2 px-2 h-[32px] py-1 bg-[#1A1A1A] hover:bg-gray-900 transition-all cursor-pointer rounded-[24px]">
						<BsTwitter className="self-center w-[24px] text-[#1D9BF0]" />
						<p className="text-[12px] self-center text-[#A2A2A2]">
							@dingalingts
						</p>
					</div>
					<button
						type="button"
						title="website"
						className="hover:scale-90 transition-all self-center">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
								stroke="#A2A2A2"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M8 12C8 17.5228 9.79086 22 12 22C14.2091 22 16 17.5228 16 12C16 6.47715 14.2091 2 12 2C9.79086 2 8 6.47715 8 12Z"
								stroke="#A2A2A2"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M2 12H22"
								stroke="#A2A2A2"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				</div>
				<p className="text-[#A2A2A2] text-[14px]">
					An Investor / Collector of #NFTs and OG enthusiast. Co-Founder and
					owner of 📦 @nftboxes
				</p>
				<div className="flex flex-col gap-2">
					<p className="text-[12px] text-[#A2A2A2] hover:underline cursor-pointer">
						Common Communities(3)
					</p>
					<div className="flex gap-2">
						{[c1, c2, c3, c4].map((community, index) => (
							<Image
								key={index}
								alt="image"
								width={48}
								height={48}
								src={community}
								className="hover:scale-95 transition-all"
							/>
						))}
					</div>
				</div>
				<div className="flex gap-2 flex-wrap">
					{TagDetails.map((tag, index) => (
						<Tags key={index} {...tag} />
					))}
				</div>
				<div className="w-full">
					<button
						type="button"
						className="w-full flex gap-2 px-[37px] py-[12px] justify-center items-center border rounded-[24px]
					hover:bg-secondary transition-all
					border-secondary-light text-secondary-light">
						<p>Subscribe</p>
						<p>
							<svg
								width="17"
								height="16"
								viewBox="0 0 17 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M3.5 4L7.5 8L3.5 12"
									stroke="#A2A2A2"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M8.5 4L12.5 8L8.5 12"
									stroke="#A2A2A2"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</p>
					</button>
				</div>
			</div>
		</PerspectiveWrapper>
	);
}

export default Profile;
