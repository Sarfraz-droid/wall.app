import React from "react";
import { HighlightCard, IHighlightCard } from "./common/HighlightCard";
import { NFTCard } from "./common/NFTCard";
import { hDetails, nftDetails } from "./common/data";

function Highlights() {
	return (
		<div className="flex flex-col gap-8">
			<h1 className="text-[14px] text-secondary-light">Highlights</h1>
			<div className="flex gap-4">
				{hDetails.map((hDetail, index) => (
					<HighlightCard key={index} {...hDetail} />
				))}
			</div>
			<div className="flex gap-4">
				{nftDetails.map((item, index) => (
					<NFTCard key={index} {...item} />
				))}
			</div>
		</div>
	);
}

export default Highlights;
