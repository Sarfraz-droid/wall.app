import React from "react";
import { h1 } from "@/assets/highlights";
import Image, { StaticImageData } from "next/image";
import { FaEthereum } from "react-icons/fa";
import PerspectiveWrapper from "@/components/wrappers/perspective";

export interface IHighlightCard {
	image: StaticImageData;
	blurColor: string;
	primaryColor: string;
	title: string;
	subtitle: string;
	username: string;
	eth: number;
	history: string;
	xp: number;
}

function HighlightCard(props: IHighlightCard) {
	return (
		<PerspectiveWrapper degree={10}>
			<div className="bg-[#111111] p-[10px] text-white flex flex-col gap-[24px] scale-100 overflow-hidden rounded-lg">
				<div
					className="absolute w-[174px] h-[174px] opacity-10 blur-[25px] rounded-full top-[-69px] left-[-58px]"
					style={{
						backgroundColor: props.blurColor,
					}}
				/>
				<div className="flex gap-3">
					<div>
						<Image src={props.image} alt="highlight" width={52} height={52} />
					</div>
					<div className="flex flex-col justify-center items-start gap-2">
						<h1 className="text-[14px]">{props.title}</h1>
						<p
							className="text-[#4BDFFF] text-[12px]  text-center
					w-full">
							{props.subtitle}
						</p>
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<div className="w-[181px] flex justify-between">
						<p className="text-[12px] text-secondary-light">{props.username}</p>
						<div className="flex gap-1">
							<p className="self-center text-[12px]">{props.eth}</p>
							<FaEthereum className="self-center w-[12px] h-[12px]" />
						</div>
					</div>
					<div className="w-[181px] flex justify-between">
						<p className="text-[12px] text-secondary-light">{props.history}</p>
						<div className="text-[12px] text-success">+{props.xp} XP</div>
					</div>
				</div>
			</div>
		</PerspectiveWrapper>
	);
}

export default HighlightCard;
