import React, { useContext, useEffect, useMemo } from 'react';
import dayjs from 'dayjs';
import BarItem from '../BarItem';
import RepeteadBars from '../RepeteadBars';
import { GanttContext } from '../../../../Gantt/GanttContext';
import { BarItemDataType, OnBarDoubleClickType } from '../../../../../types';
import { RelGanttContext } from '../../../../Gantt/RelativeGanttContext';
import RelativeBarItem from '../BarItem/RelativeBarItem';

interface BarsItemsProps {
  data?: BarItemDataType[];
  title: string;
  barKey: string;
  onBarDoubleClick?: OnBarDoubleClickType;
}

// const RelativeBarsItems: React.FC<BarsItemsProps> = ({ data, title, barKey, onBarDoubleClick }) => {
//   const { scaleDates, scaleRenderState } = useContext(RelGanttContext);

//   useEffect(() => {
//     console.log('tushar', data);
//   }, []);

//   const firstRenderedDate = useMemo(() => {
//     return scaleDates[scaleRenderState.overscanStartIndex];
//   }, [scaleDates, scaleRenderState.overscanStartIndex]);

//   const lastRenderedDate = useMemo(() => {
//     return scaleDates[scaleRenderState.overscanStopIndex];
//   }, [scaleDates, scaleRenderState.overscanStopIndex]);

//   const renderedBars = useMemo(() => {
//     return data?.map((ele: BarItemDataType, i: number) => {
//       const startDate = dayjs(ele?.startDate).unix();
//       const endDate = dayjs(ele?.endDate).unix();

//       console.log('fgh', startDate, endDate);

//       if (!ele) {
//         return null;
//       }

//       if (ele.repeatType) {
//         return (
//           <RepeteadBars
//             key={i}
//             data={ele}
//             firstRenderedDate={firstRenderedDate}
//             lastRenderedDate={lastRenderedDate}
//             title={title}
//             barKey={barKey}
//             onBarDoubleClick={onBarDoubleClick}
//           />
//         );
//       }

//       if (startDate > lastRenderedDate || endDate < firstRenderedDate) {
//         return null;
//       }

//       return (
//         <RelativeBarItem
//           key={ele.startDate}
//           title={title}
//           barKey={barKey}
//           startDate={startDate}
//           endDate={endDate}
//           repetead={false}
//           onBarDoubleClick={onBarDoubleClick}
//         />
//       );
//     });
//   }, [data, title, barKey, onBarDoubleClick, firstRenderedDate, lastRenderedDate]);

//   return <>{renderedBars}</>;
// };

const RelativeBarsItems: React.FC<BarsItemsProps> = ({ data, title, barKey, onBarDoubleClick }) => {
  const { scaleDates, scaleRenderState } = useContext(RelGanttContext);

  useEffect(() => {
    console.log('tushar', data);
  }, []);

  // const firstRenderedDate = useMemo(() => {
  //   return scaleDates[scaleRenderState.overscanStartIndex];
  // }, [scaleDates, scaleRenderState.overscanStartIndex]);

  // const lastRenderedDate = useMemo(() => {
  //   return scaleDates[scaleRenderState.overscanStopIndex];
  // }, [scaleDates, scaleRenderState.overscanStopIndex]);

  const renderedBars = useMemo(() => {
    return data?.map((ele: any, i: number) => {
      const startDate = ele.startDate;
      const endDate = ele.endDate;

      console.log('fgh', startDate);

      if (!ele) {
        return null;
      }

      return (
        <RelativeBarItem
          key={barKey + startDate}
          title={title}
          barKey={barKey}
          startDate={startDate}
          endDate={endDate}
          repetead={true}
          onBarDoubleClick={onBarDoubleClick}
        />
      );
    });
  }, [data, title, barKey, onBarDoubleClick]);

  return <>{renderedBars}</>;
};

export default RelativeBarsItems;
