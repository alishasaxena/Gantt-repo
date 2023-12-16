import React, { useEffect, useMemo } from 'react';
import BarItem from '../BarItem';
import { GanttConsts } from '../../../../../constants';
import { DataRepeatTypes } from '../../../../../enums';
import { OnBarDoubleClickType, RepeatDataType } from '../../../../../types';

interface RepeteadBarsProps {
  data: RepeatDataType;
  firstRenderedDate: number;
  lastRenderedDate: number;
  title: string;
  barKey: string;
  onBarDoubleClick?: OnBarDoubleClickType;
}

const RelativeRepeteadBars: React.FC<RepeteadBarsProps> = ({
  data,
  firstRenderedDate,
  lastRenderedDate,
  title,
  barKey,
  onBarDoubleClick,
}) => {
  useEffect(() => {
    console.log(data, 'wtfdata');
  }, []);

  const duration = useMemo(() => {
    return data.toTime < data.fromTime
      ? data.toTime + GanttConsts.SECONDS_IN_DAY - data.fromTime
      : data.toTime - data.fromTime;
  }, [data.fromTime, data.toTime]);

  const dates = useMemo(() => {
    if (!firstRenderedDate || !lastRenderedDate || !duration) {
      return [];
    }

    const result = [];
    let startDate = Math.max(firstRenderedDate, data.fromDate ? data.fromDate : firstRenderedDate);

    while (startDate <= lastRenderedDate) {
      let isValidDate = false;

      switch (data.repeatType) {
        case DataRepeatTypes.DAY:
          isValidDate = true;
          break;

        case DataRepeatTypes.WEEK:
          isValidDate = data.weekdays?.includes(new Date(startDate * 1000).getDay());
          break;

        case DataRepeatTypes.MONTH:
          isValidDate = data.monthdays?.includes(new Date(startDate * 1000).getDate());
          break;

        case DataRepeatTypes.CUSTOM:
          isValidDate = data.customDays?.includes(new Date(startDate * 1000).getDate());
          break;

        default:
          isValidDate = true;
      }

      if (isValidDate) {
        result.push({
          startDate,
          endDate: startDate + duration,
        });
      }

      startDate += GanttConsts.SECONDS_IN_DAY;
    }

    console.log(result, 'alisha');

    return result;
  }, [data, duration, firstRenderedDate, lastRenderedDate]);

  if (!dates.length) {
    return null;
  }

  return (
    <>
      {dates.map(({ startDate, endDate }) => (
        <BarItem
          key={barKey + startDate}
          title={title}
          barKey={barKey}
          startDate={startDate}
          endDate={endDate}
          repetead={true}
          onBarDoubleClick={onBarDoubleClick}
        />
      ))}
    </>
  );
};

export default RelativeRepeteadBars;
