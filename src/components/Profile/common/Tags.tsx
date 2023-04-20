import React from "react";

export interface ITags {
	text: string;
	percent: number;
	active: boolean;
}

function Tags({ text, percent, active }: ITags) {
	return (
		<button
			title={text}
			type="button"
			className={`flex gap-2 text-[12px] py-[6px] px-[10px] rounded-[40px] transition-all cursor-pointer
			${
				active
					? " border-2 text-primary border-primary hover:bg-primary/20"
					: "border-2 border-secondary text-secondary-light"
			}
		`}>
			<p>{text}</p>
			<p>{percent}%</p>
		</button>
	);
}

export default Tags;
