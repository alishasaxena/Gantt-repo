import { useCallback, useContext } from 'react';
import { GanttContext } from '../components/Gantt/GanttContext';
import { RelGanttContext } from '../components/Gantt/RelativeGanttContext';

import {
  DragStepOptions,
  GanttDimensionsSettings,
  RelativeGanttDimensionSettings,
} from '../constants';
import { GanttDimensions, RelativeGanttDimensions } from '../enums';
import { getInitialScrollOffset, getScaleDates, relGetInitialScrollOffset } from '../utils';

export const useGanttCalculate = () => {
  const { setScaleDates, wrapRef, settings, setSettings, currentDate } = useContext(GanttContext);

  const calculate = useCallback(
    (dimension: GanttDimensions) => {
      const { stepWidth, itemsCount, scaleStepItems, secondsInPixel, unitOfTime } =
        GanttDimensionsSettings[dimension];

      const newScaleDates = getScaleDates(currentDate, itemsCount, unitOfTime);
      const initialScrollOffset = getInitialScrollOffset(dimension, newScaleDates, currentDate);
      const gridSize = DragStepOptions[settings.dragStepSize].seconds / secondsInPixel;

      setSettings({
        stepWidth,
        initialScrollOffset,
        scaleStepItems,
        secondsInPixel,
        dimension,
        dragStepSize: settings.dragStepSize,
        gridSize,
      });
      setScaleDates(newScaleDates);

      wrapRef.current?.scrollTo({ left: initialScrollOffset });
    },
    [currentDate, setScaleDates, setSettings, settings.dragStepSize, wrapRef]
  );

  return { calculate };
};
// mycode
export const useRelativeGanttCalculate = () => {
  const { setRelScaleDates, wrapRef, relSettings, setRelSettings, relCurrentDate } =
    useContext(RelGanttContext);

  const relativeCalculate = useCallback(
    (dimension: RelativeGanttDimensions) => {
      const { stepWidth, itemsCount, scaleStepItems, secondsInPixel, unitOfTime } =
        RelativeGanttDimensionSettings[dimension];

      const newScaleDates = getScaleDates(relCurrentDate, itemsCount, unitOfTime);
      const relInitialScrollOffset = relGetInitialScrollOffset(
        dimension,
        newScaleDates,
        relCurrentDate
      );
      const gridSize = DragStepOptions[relSettings.dragStepSize].seconds / secondsInPixel;

      setRelSettings({
        stepWidth,
        relInitialScrollOffset,
        scaleStepItems,
        secondsInPixel,
        dimension,
        dragStepSize: relSettings.dragStepSize,
        gridSize,
      });
      setRelScaleDates(newScaleDates);

      wrapRef.current?.scrollTo({ left: relInitialScrollOffset });
    },
    [relCurrentDate, setRelScaleDates, setRelSettings, relSettings.dragStepSize, wrapRef]
  );

  return { relativeCalculate };
};
