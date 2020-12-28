export type RootState = {
  currentStroke: Stroke;
  
  //list of all strokes we have made
  strokes: Stroke[];

  //index to access all the strokes we draw prviously
  historyIndex: number;
};

export type Stroke = {
  points: Point[];
  color: string;
};

export type Point = {
  x: number;
  y: number;
};
