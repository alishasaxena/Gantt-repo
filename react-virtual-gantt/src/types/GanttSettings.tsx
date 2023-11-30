import { DragStepSizes, GanttDimensions, RelativeGanttDimensions } from '../enums';

export interface GanttSettingsType {
  stepWidth: number;
  secondsInPixel: number;
  scaleStepItems: number;
  initialScrollOffset: number;
  dimension: GanttDimensions;
  dragStepSize: DragStepSizes;
  gridSize: number;
}

export interface RelGanttSettingsType {
  stepWidth: number;
  secondsInPixel: number;
  scaleStepItems: number;
  initialScrollOffset: number;
  dimension: RelativeGanttDimensions;
  dragStepSize: DragStepSizes;
  gridSize: number;
}
