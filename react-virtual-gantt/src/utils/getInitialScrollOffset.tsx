import dayjs from 'dayjs';
import { GanttConsts, GanttDimensionsSettings, RelativeGanttDimensionSettings } from '../constants';
import { GanttDimensions, RelativeGanttDimensions } from '../enums';

export const getInitialScrollOffset = (
  dimension: GanttDimensions,
  scaleDates: number[],
  currentDate?: number
) => {
  const { secondsInPixel, unitOfTime } = GanttDimensionsSettings[dimension];

  const secondsBeforeCurrentDate =
    (currentDate || dayjs().unix()) - dayjs.unix(scaleDates[0]).startOf(unitOfTime).unix();

  return Math.round(secondsBeforeCurrentDate / secondsInPixel) - GanttConsts.TREE_WIDTH;
};

export const relGetInitialScrollOffset = (
  dimension: RelativeGanttDimensions,
  scaleDates: number[],
  currentDate?: number
) => {
  const { secondsInPixel, unitOfTime } = RelativeGanttDimensionSettings[dimension];

  const secondsBeforeCurrentDate =
    (currentDate || dayjs().unix()) - dayjs.unix(scaleDates[0]).startOf(unitOfTime).unix();

  return Math.round(secondsBeforeCurrentDate / secondsInPixel) - GanttConsts.TREE_WIDTH;
};
