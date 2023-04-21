import { nft1 } from "@/assets/NFT";
import PerspectiveWrapper from "@/components/wrappers/perspective";
import useElementSize from "@/hooks/useElementSize";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaEthereum } from "react-icons/fa";

export interface INFTCard {
	image: StaticImageData;
	title: string;
	brought: string;
	floor: number;
	floorChange: number;
}

function NFTCard(props: INFTCard) {
	const [ref, size] = useElementSize();
	const [tagRef, tagSize] = useElementSize();

	return (
		<PerspectiveWrapper degree={10}>
			<div className="p-1 pb-2 bg-[#111111] rounded-lg text-white flex flex-col gap-4 hover:shadow-2xl shadow-sm shadow-transparent hover:shadow-secondary-light/20 transition-all">
				<div className="w-[193px] h-[193px] rounded-lg overflow-hidden">
					<Image
						src={props.image}
						width={193}
						height={193}
						alt="NFT Card"
						className="hover:scale-105 transition-all duration-700"
						ref={ref}
					/>
					<div
						className="bg-black/50 px-[6px] py-[1px] text-white absolute text-xs backdrop-blur-[3px] leading-[20px] rounded-[31px] -m-1"
						ref={tagRef}
						style={{
							top: size.top + size.height - tagSize.height,
							left: size.left + size.width - tagSize.width,
						}}>
						3 Months
					</div>
				</div>
				<div className="p-1 flex flex-col leading-[20px] gap-2 font-medium">
					<h1 className="text-sm ">{props.title}</h1>
					<div className="flex justify-between">
						<p className="text-xs text-secondary-light">Bought</p>
						<div className="flex gap-1">
							<p className="text-xs ">{props.brought}</p>
							<FaEthereum className="w-3 h-3 self-center" />
						</div>
					</div>
					<div className="flex justify-between">
						<p className="text-xs text-secondary-light">Floor</p>

						<div className="flex gap-1">
							<p className="text-xs ">{props.floor}</p>
							<FaEthereum className="w-3 h-3 self-center" />
							<div className="text-xs font-normal text-success">
								+{props.floorChange}%
							</div>
						</div>
					</div>
				</div>
			</div>
		</PerspectiveWrapper>
	);
}

export default NFTCard;
