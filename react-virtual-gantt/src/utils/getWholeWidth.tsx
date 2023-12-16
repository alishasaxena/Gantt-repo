import dayjs from 'dayjs';
import { GanttDimensions, RelativeGanttDimensions } from '../enums';

export const getWholeWidth = (
  scaleDates: number[],
  dimension: GanttDimensions,
  stepItemsCount: number,
  stepWidth: number
) => {
  if (dimension === GanttDimensions.DAY) {
    return (
      stepWidth *
      scaleDates.reduce((acc: number, date: number) => acc + dayjs.unix(date).daysInMonth(), 0)
    );
  }

  return scaleDates.length * stepItemsCount * stepWidth;
};

export const getRelWholeWidth = (
  relScaleDates: any,
  dimension: RelativeGanttDimensions,
  stepItemsCount: number,
  stepWidth: number
) => {
  console.log(stepWidth, 'stepwidth', stepItemsCount);
  if (dimension === RelativeGanttDimensions.HOUR) {
    return (stepWidth + 1) * relScaleDates.length;
  }
  return relScaleDates.length * stepItemsCount;
};
