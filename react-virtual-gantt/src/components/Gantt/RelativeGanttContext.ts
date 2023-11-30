import { createContext } from 'react';
import { DragStepSizes, RelativeGanttDimensions } from '../../enums';
import { RelGanttContextType } from '../../types';

export const RelGanttContext = createContext<RelGanttContextType>({
  wrapRef: { current: null },
  scaleDates: [],
  setScaleDates: () => {},
  settings: {
    stepWidth: 0,
    secondsInPixel: 0,
    scaleStepItems: 0,
    initialScrollOffset: 0,
    dimension: RelativeGanttDimensions.HOURS,
    dragStepSize: DragStepSizes.THIRTY_MIN,
    gridSize: 0,
  },
  setSettings: () => {},
  scaleRenderState: {
    overscanStartIndex: 0,
    overscanStopIndex: 0,
    visibleStartIndex: 0,
    visibleStopIndex: 0,
  },
  setScaleRenderState: () => {},
  currentDate: 0,
  setCurrentDate: () => 0,
});