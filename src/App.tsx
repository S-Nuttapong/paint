import React, { useRef, useEffect } from "react";
import { currentStrokeSelector } from "./selectors";
import { useSelector, useDispatch } from "react-redux";
import { beginStroke, updateStroke, endStroke } from "./actions";
import { drawStroke } from "./canvasUtils";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  //useSelector: useEffect/watch function to observe and render when state of our interest is changed
  //our component will be re-rendered everytime currentStroke updated
  const currentStroke = useSelector(currentStrokeSelector);

  //double excalimation to cast value into boolean
  //currentStroke.points is set only if mouseDown is fired (we click)
  const isDrawing = !!currentStroke.points.length;

  const getCanvasWithContext = () => {
    const canvas = canvasRef.current;
    return { canvas, context: canvas?.getContext("2d") };
  };

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
    dispatch(beginStroke(offsetX, offsetY));
  };

  const endDrawing = () => {
    //if we are not drawing then we end the stroke
    if (isDrawing) {
      dispatch(endStroke());
    }
  };

  const draw = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
      //currentStroke.points is set only if mouseDown is fired (we click)
      //so we never draw (mousemove) before we click to draw (onMouseDown)
    if (!isDrawing) {
      return
    }
    const { offsetX, offsetY } = nativeEvent;
    dispatch(updateStroke(offsetX, offsetY));
  };

  return (
    //mouseUp && mouseOut: same Event support different browser
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={endDrawing}
      onMouseOut={endDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    />
  );
}

export default App;
