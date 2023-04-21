import { useCallback, useEffect, useRef, useState } from "react";
export interface ISize {
    width: number
    height: number
    top: number
    left: number
}

export interface IMousePosition {
    x: number
    y: number
}

/**
 * @name useElementSize
 * @description A hook that returns the size of an element
 * @param props 
 * @returns 
 */
function useElementSize<T extends HTMLElement = HTMLDivElement>(props = {} as {
    trackMouse?: boolean
}): [
        (node: T | null) => void,
        ISize,
        IMousePosition
    ] {
    const ref = useRef<T | null>(null);
    const [elementSize, setElementSize] = useState({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
    });

    const [mousePosition, setMousePosition] = useState<IMousePosition>({
        x: 0,
        y: 0,
    });
    const handleMouseMove = useCallback(() => {
        if (props && props?.trackMouse == true) {
            ref.current?.addEventListener("mousemove", (event) => {
                setMousePosition({
                    x: event.clientX,
                    y: event.clientY,
                });
            })

            ref.current?.addEventListener("mouseleave", () => {
                setMousePosition({
                    x: 0,
                    y: 0,
                });
            })
        }

        return () => {
            ref.current?.removeEventListener("mousemove", () => { });
            ref.current?.removeEventListener("mouseleave", () => { });
        }

    }, [props]);

    const updateSize = useCallback(() => {
        if (ref.current != null) {
            setElementSize({
                width: ref.current.offsetWidth,
                top: ref.current.offsetTop,
                left: ref.current.offsetLeft,
                height: ref.current.offsetHeight,
            });

        }
    }, [ref]);



    const handleELementResize = useCallback(() => {
        setTimeout(updateSize, 50);
        window.addEventListener("resize", () => {
            updateSize();
        });


        return () => {
            window.removeEventListener("resize", () => { });
        }

    }, [updateSize]);


    useEffect(() => {
        handleELementResize();
    }, [handleELementResize]);

    useEffect(() => {
        handleMouseMove();
    }, [handleMouseMove]);

    const setRef = (node: T | null) => {
        ref.current = node;
    }

    return [setRef, elementSize, mousePosition];
}

export default useElementSize
