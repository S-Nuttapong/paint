import React, { useRef, useEffect } from "react";
import { currentStrokeSelecotr } from "./modules/currentStroke/selector";
import { useSelector, useDispatch } from "react-redux";
import { beginStroke, updateStroke } from "./modules/currentStroke/slice";
import { endStroke } from "./modules/shared/sharedAction";
import { drawStroke } from "./canvasUtils";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  //useSelector: useEffect/watch function to observe and render when state of our interest is changed
  //our component will be re-rendered everytime currentStroke updated
  const currentStroke = useSelector(currentStrokeSelecotr);

  //double excalimation to cast value into boolean
  //currentStroke.points is set only if mouseDown is fired (we click)
  const isDrawing = !!currentStroke.points.length;

  const getCanvasWithContext = () => {
    const canvas = canvasRef.current;
    return { canvas, context: canvas?.getContext("2d") };
  };

  useEffect(() => {
    const { canvas } = getCanvasWithContext();

    if (canvas) {
      canvas.width = window.innerWidth / 2;
      canvas.height = window.innerHeight / 2;
    }
  }, []);

  useEffect(() => {
    const { context } = getCanvasWithContext();
    if (!context) {
      return;
    }

    requestAnimationFrame(() =>
      drawStroke(context, currentStroke.points, currentStroke.color)
    );
  }, [currentStroke]);

  const dispatch = useDispatch();

  const startDrawing = ({
    nativeEvent,
  }: React.MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = nativeEvent;
    //equivalent to dispatch({type: "BEGIN_STROKE", payload: {offsetX, offsetY}})
    dispatch(beginStroke({ x: offsetX, y: offsetY }));
  };

  const endDrawing = () => {
    //if we draw thing at all then we can endStroke onMouseUp
    if (isDrawing) {
      dispatch(endStroke(currentStroke));
    }
  };

  const draw = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
    //currentStroke.points is set only if mouseDown is fired (we click)
    //so we never draw (mousemove) before we click to draw (onMouseDown)
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    dispatch(updateStroke({ x: offsetX, y: offsetY }));
  };

  return (
    //mouseUp && mouseOut: same Event support different browser
    <div className="window full-height overflow-hidden">
      <div className="title-bar">
        <div className="title-bar-text">Redux Paint</div>
        <div className="title-bar-controls">
          <button aria-label="Close" />
        </div>
      </div>
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseOut={endDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      />
    </div>
  );
}

export default App;
