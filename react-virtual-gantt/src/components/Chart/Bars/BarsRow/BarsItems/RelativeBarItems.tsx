import React, { useContext, useEffect, useMemo } from 'react';
import dayjs from 'dayjs';
import BarItem from '../BarItem';
import RepeteadBars from '../RepeteadBars';
import { GanttContext } from '../../../../Gantt/GanttContext';
import { BarItemDataType, OnBarDoubleClickType } from '../../../../../types';
import { RelGanttContext } from '../../../../Gantt/RelativeGanttContext';
import RelativeBarItem from '../BarItem/RelativeBarItem';
import RelativeRepeteadBars from '../RepeteadBars/RelativeRepeatedBars';

interface BarsItemsProps {
  data?: any;
  title: string;
  barKey: string;
  onBarDoubleClick?: OnBarDoubleClickType;
  color: any;
}

const RelativeBarsItems: React.FC<BarsItemsProps> = ({
  data,
  title,
  barKey,
  onBarDoubleClick,
  color,
}) => {
  const { relScaleDates, scaleRenderState } = useContext(RelGanttContext);

  const firstRenderedDate = useMemo(() => {
    return relScaleDates[scaleRenderState.overscanStartIndex];
  }, [relScaleDates, scaleRenderState.overscanStartIndex]);

  const lastRenderedDate = useMemo(() => {
    return relScaleDates[scaleRenderState.overscanStopIndex];
  }, [relScaleDates, scaleRenderState.overscanStopIndex]);

  const renderedBars = useMemo(() => {
    const sortedData = [...data].sort((a, b) => a.startDate - b.startDate);

    return sortedData?.map((ele: any, i: number) => {
      const startDate = ele.startDate;
      const endDate = ele.endDate;

      if (!ele) {
        return null;
      }

      return (
        <div style={{ position: 'relative' }}>
          <RelativeBarItem
            key={barKey + startDate}
            title={title}
            barKey={barKey}
            startDate={startDate}
            endDate={endDate}
            repetead={true}
            onBarDoubleClick={onBarDoubleClick}
            color={color}
          />
        </div>
      );
    });
  }, [data, title, barKey, onBarDoubleClick]);

  return <>{renderedBars}</>;
};

export default RelativeBarsItems;
