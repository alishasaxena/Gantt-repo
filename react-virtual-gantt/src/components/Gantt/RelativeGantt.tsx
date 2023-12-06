// import React, { ReactNode, useMemo, useRef, useState } from 'react';
// import dayjs from 'dayjs';
// import localizedFormat from 'dayjs/plugin/localizedFormat';
// import { ListOnItemsRenderedProps } from 'react-window';
// import Chart from '../Chart';
// import Controls from '../Controls';
// import { RelGanttContext } from './RelativeGanttContext';
// import { getInitialScrollOffset, getScaleDates } from '../../utils';
// import { DragStepSizes, GanttDimensions, RelativeGanttDimensions } from '../../enums';
// import { RelGanttSettingsType } from '../../types';
// import {
//   DragStepOptions,
//   GanttConsts,
//   GanttDimensionsSettings,
//   RelativeGanttDimensionSettings,
// } from '../../constants';
// import '../../styles/globals.css';
// import './Gantt.css';

// dayjs.extend(localizedFormat);

// type RelativeGanttProps = {
//   children: ReactNode | ReactNode[];
// };

// const RelativeGantt: React.FC<RelativeGanttProps> & {
//   Chart: typeof Chart;
//   Controls: typeof Controls;
// } = ({ children }: RelativeGanttProps) => {
//   const initialScaleDates = useMemo(() => {
//     return getScaleDates();
//   }, []);

//   const initialScrollOffset = useMemo(() => {
//     return getInitialScrollOffset(GanttDimensions.HOUR, initialScaleDates);
//   }, [initialScaleDates]);

//   const wrapRef = useRef<HTMLDivElement>(null);
//   const [currentDate, setCurrentDate] = useState(dayjs().unix());
//   const [scaleDates, setScaleDates] = useState(initialScaleDates);
//   const [settings, setSettings] = useState<RelGanttSettingsType>({
//     stepWidth: RelativeGanttDimensionSettings[RelativeGanttDimensions.HOUR].stepWidth,
//     secondsInPixel: RelativeGanttDimensionSettings[RelativeGanttDimensions.HOUR].secondsInPixel,
//     scaleStepItems: GanttConsts.HOURS_IN_DAY,
//     initialScrollOffset,
//     dimension: RelativeGanttDimensions.HOUR,
//     dragStepSize: DragStepSizes.THIRTY_MIN,
//     gridSize:
//       DragStepOptions[DragStepSizes.THIRTY_MIN].seconds /
//       GanttDimensionsSettings[GanttDimensions.HOUR].secondsInPixel,
//   });
//   const [scaleRenderState, setScaleRenderState] = useState<ListOnItemsRenderedProps>({
//     overscanStartIndex: 0,
//     overscanStopIndex: 0,
//     visibleStartIndex: 0,
//     visibleStopIndex: 0,
//   });

//   return (
//     <RelGanttContext.Provider
//       value={{
//         wrapRef,
//         scaleDates,
//         setScaleDates,
//         settings,
//         setSettings,
//         scaleRenderState,
//         setScaleRenderState,
//         currentDate,
//         setCurrentDate,
//       }}
//     >
//       <div className="gantt-wrap">{children}</div>
//     </RelGanttContext.Provider>
//   );
// };

// RelativeGantt.Chart = Chart;
// RelativeGantt.Controls = Controls;

// export default RelativeGantt;
