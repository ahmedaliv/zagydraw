import { RoughGenerator } from "roughjs/bin/generator";
import { Options } from "roughjs/bin/core";
import { CanvasLineElement, CanvasRectElement } from "types/general";
import { nanoid } from "nanoid";
import getStroke from "perfect-freehand";
import { getSvgPathFromStroke } from "utils";
const generateRectElement = (
    generator: RoughGenerator,
    startPos: [number, number],
    endPos: [number, number],
    position: CanvasRectElement["curPos"],
    options: Options = {}
): CanvasRectElement => {
    return {
        ...generator.rectangle(
            startPos[0],
            startPos[1],
            endPos[0] - startPos[0],
            endPos[1] - startPos[1],
            {
                fill: "#0b7285",
                stroke: "#B223DB",
                strokeWidth: 2,
                roughness: 2,
                ...options
            }
        ),
        id: nanoid(),
        x: startPos[0],
        y: startPos[1],
        endX: endPos[0],
        endY: endPos[1],
        color: "#0b7285",
        shape: "rectangle",
        curPos: position
    };
};
const generateLineElement = (
    generator: RoughGenerator,
    startPos: [number, number],
    endPos: [number, number],
    position: CanvasRectElement["curPos"],
    options: Options = {}
): CanvasLineElement => {
    return (
        {
            ...generator.line(
                startPos[0],
                startPos[1],
                endPos[0],
                endPos[1],
                {
                    fill: "#0b7285",
                    stroke: "#0b7285",
                    strokeWidth: 2,
                    roughness: 0,
                    ...options
                }
            ),
            id: nanoid(),
            x: startPos[0],
            y: startPos[1],
            endX: endPos[0],
            endY: endPos[1],
            color: "#0b7285",
            shape: "line",
            curPos: position
        }
    )
}
        
const generateHandDrawnElement = (paths:[number,number][])=>{
    const stroke = getStroke(paths, {
        size: 4,
        smoothing: 0,
        thinning: 0,
        streamline: 0,
        easing: (t) => t,
        start: {
            taper: 0,
            cap: true
        },
        end: {
            taper: 0,
            cap: true
        }
    });
    const svgFromStroke = getSvgPathFromStroke(stroke);
    console.log(svgFromStroke);
   return new Path2D(svgFromStroke);
}
    

export { generateRectElement, generateLineElement,generateHandDrawnElement  };
