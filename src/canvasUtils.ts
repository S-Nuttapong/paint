import { Point } from "./type";

//we don't use interface cuz we want to pass by position, not a naming flags
//we don't use interface cuz its just a function, not jsx element
export const drawStroke = (
  context: CanvasRenderingContext2D,
  points: Point[],
  color: string
) => {
  if (!points.length) {
    return;
  }

  //emphasis on canvas API
  //practice only if we need to learn canvas API
  //otherwise leave it
  context.strokeStyle = color;
  context.beginPath();
  context.moveTo(points[0].x, points[0].y);
  points.forEach((point) => {
    context.lineTo(point.x, point.y);
    context.stroke();
  });
  context.closePath();
};
