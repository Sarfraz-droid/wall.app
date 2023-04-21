import useElementSize from "@/hooks/useElementSize";
import React, { useMemo } from "react";

function PerspectiveWrapper({
	children,
	degree,
}: {
	children: React.ReactNode;
	degree: number;
}) {
	const [ref, size, mousePos] = useElementSize({
		trackMouse: true,
	});

	const memo = useMemo((): {
		x: number;
		y: number;
	} => {
		const middle = {
			x: size.width / 2,
			y: size.height / 2,
		};
		const x = 1 - (mousePos.x - size.left) / middle.x;

		const y = 1 - (mousePos.y - size.top) / middle.y;

		if (mousePos.x == 0 && mousePos.y == 0)
			return {
				x: 0,
				y: 0,
			};

		return {
			x,
			y,
		};
	}, [size, mousePos]);

	return (
		<div
			ref={ref}
			className="perspective-wrapper  "
			style={{
				transform: `
                    rotateX(${memo.y * degree}deg)
                    rotateY(${memo.x * degree}deg)
            `,
			}}>
			{children}
		</div>
	);
}

// rotateY(${(1 - (mousePos.y - size.top) / size.height) * 60}deg)

export default PerspectiveWrapper;
