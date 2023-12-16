import dayjs from 'dayjs';
import { GanttConsts, GanttDimensionsSettings } from '../constants';
import { GanttDimensions, GanttUnitOfTimes } from '../enums';

export const getScaleItems = (dimension: GanttDimensions, date: number) => {
  const period = GanttDimensionsSettings[dimension].unitOfTime;

  switch (period) {
    case GanttUnitOfTimes.DAY: {
      const size = GanttConsts.HOURS_IN_DAY / GanttDimensionsSettings[dimension].hours;
      let start = 0;

      return new Array(size).fill(0).map((item, index) => {
        if (size < GanttConsts.HOURS_IN_DAY) {
          const firstNumber = start;
          const secondNumber = GanttConsts.HOURS_IN_DAY / size + start;

          start = secondNumber;

          return `${firstNumber.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
          })} - ${secondNumber.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
          })}`;
        }
        return index.toLocaleString('en-US', { minimumIntegerDigits: 2 });
      });
    }

    case GanttUnitOfTimes.MONTH: {
      const size = dayjs.unix(date).daysInMonth();

      return new Array(size).fill(0).map((item, index) => {
        return (index + 1).toLocaleString('en-US', { minimumIntegerDigits: 2 });
      });
    }

    case GanttUnitOfTimes.HOUR: {
      const size = GanttConsts.MINUTES_IN_HOUR / 1;

      let start = 0;

      return new Array(size).fill(0).map((item, index) => {
        if (size < GanttConsts.MINUTES_IN_HOUR) {
          const firstNumber = start;
          const secondNumber = GanttConsts.MINUTES_IN_HOUR / size + start;

          start = secondNumber;

          return `${firstNumber.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
          })} - ${secondNumber.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
          })}`;
        }
        return index.toLocaleString('en-US', { minimumIntegerDigits: 2 });
      });
    }

    case GanttUnitOfTimes.MINUTE: {
      const size = 60;

      return new Array(size).fill(0).map((item, index) => {
        return index.toLocaleString('en-US', { minimumIntegerDigits: 2 });
      });
    }

    default:
      return [];
  }
};
