import { createAction } from "@reduxjs/toolkit";
import { Stroke } from "../../type";

export const endStroke = createAction<Stroke>("END_STROKE")