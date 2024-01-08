import { createContext } from 'react';
import { DragStepSizes, RelativeGanttDimensions } from '../../enums';
import { RelGanttContextType } from '../../types';

export const RelGanttContext = createContext<RelGanttContextType>({
  wrapRef: { current: null },
  relScaleDates: [],
  setRelScaleDates: () => {},
  relSettings: {
    stepWidth: 0,
    secondsInPixel: 0,
    scaleStepItems: 0,
    relInitialScrollOffset: 0,
    dimension: RelativeGanttDimensions.HOUR,
    dragStepSize: DragStepSizes.THIRTY_MIN,
    gridSize: 0,
  },
  setRelSettings: () => {},
  scaleRenderState: {
    overscanStartIndex: 0,
    overscanStopIndex: 0,
    visibleStartIndex: 0,
    visibleStopIndex: 0,
  },
  setScaleRenderState: () => {},
  relCurrentDate: 0,
  setRelCurrentDate: () => 0,
  color: '#000',
});