import React, { useContext, useEffect, useMemo } from 'react';
import dayjs from 'dayjs';
import BarItem from '../BarItem';
import RepeteadBars from '../RepeteadBars';
import { GanttContext } from '../../../../Gantt/GanttContext';
import { BarItemDataType, OnBarDoubleClickType } from '../../../../../types';

interface BarsItemsProps {
  data?: BarItemDataType[];
  title: string;
  barKey: string;
  onBarDoubleClick?: OnBarDoubleClickType;
}

const BarsItems: React.FC<BarsItemsProps> = ({ data, title, barKey, onBarDoubleClick }) => {
  const { scaleDates, scaleRenderState } = useContext(GanttContext);

  const firstRenderedDate = useMemo(() => {
    return scaleDates[scaleRenderState.overscanStartIndex];
  }, [scaleDates, scaleRenderState.overscanStartIndex]);

  const lastRenderedDate = useMemo(() => {
    return scaleDates[scaleRenderState.overscanStopIndex];
  }, [scaleDates, scaleRenderState.overscanStopIndex]);

  console.log(data, 'taylor');
  const renderedBars = useMemo(() => {
    return data?.map((ele: BarItemDataType, i: number) => {
      const startDate = dayjs(ele?.startDate).unix();
      const endDate = dayjs(ele?.endDate).unix();

      if (!ele) {
        return null;
      }

      if (ele.repeatType) {
        return (
          <RepeteadBars
            key={i}
            data={ele}
            firstRenderedDate={firstRenderedDate}
            lastRenderedDate={lastRenderedDate}
            title={title}
            barKey={barKey}
            onBarDoubleClick={onBarDoubleClick}
          />
        );
      }

      if (startDate > lastRenderedDate || endDate < firstRenderedDate) {
        return null;
      }

      return (
        <BarItem
          key={ele.startDate}
          title={title}
          barKey={barKey}
          startDate={startDate}
          endDate={endDate}
          repetead={false}
          onBarDoubleClick={onBarDoubleClick}
        />
      );
    });
  }, [data, title, barKey, onBarDoubleClick, firstRenderedDate, lastRenderedDate]);

  return <>{renderedBars}</>;
};

export default BarsItems;
