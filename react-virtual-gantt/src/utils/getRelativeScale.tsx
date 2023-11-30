import dayjs from 'dayjs';
import { GanttConsts, GanttDimensionsSettings } from '../constants';
import { GanttDimensions, GanttUnitOfTimes } from '../enums';

export const getRelativeScale = (dimension: any, data: any) => {
  const { DAY, MONTH, HOUR, MINUTE } = GanttUnitOfTimes;
  const { HOURS_IN_DAY, MINUTES_IN_HOUR, SECONDS_IN_MINUTE } = GanttConsts;

  switch (dimension) {
    case HOUR: {
      const size = HOURS_IN_DAY;

      return new Array(size).fill(0).map((item, index) => {
        return `${index.toLocaleString('en-US', { minimumIntegerDigits: 2 })}`;
      });
    }

    case MINUTE: {
      const size = MINUTES_IN_HOUR;

      return new Array(size).fill(0).map((item, index) => {
        const firstNumber = index;
        const secondNumber = index + 1 < size ? index + 1 : 0;

        console.log(
          `${firstNumber.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
          })} - ${secondNumber.toLocaleString('en-US', { minimumIntegerDigits: 2 })}`,
          'tushar test'
        );
        return `${firstNumber.toLocaleString('en-US', {
          minimumIntegerDigits: 2,
        })} - ${secondNumber.toLocaleString('en-US', { minimumIntegerDigits: 2 })}`;
      });
    }

    // case SECOND: {
    //   const size = SECONDS_IN_MINUTE;

    //   return new Array(size).fill(0).map((item, index) => {
    //     const firstNumber = index;
    //     const secondNumber = index + 1 < size ? index + 1 : 0;

    //     return `${firstNumber.toLocaleString('en-US', {
    //       minimumIntegerDigits: 2,
    //     })} - ${secondNumber.toLocaleString('en-US', { minimumIntegerDigits: 2 })}`;
    //   });
    // }

    default:
      return [];
  }
};
