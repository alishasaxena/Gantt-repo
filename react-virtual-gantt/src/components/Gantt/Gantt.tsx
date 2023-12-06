import React, { ReactNode, useMemo, useRef, useState } from 'react';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { ListOnItemsRenderedProps } from 'react-window';
import { Chart, RelativeChart } from '../Chart';
import Controls from '../Controls';
import { GanttContext } from './GanttContext';
import { getInitialScrollOffset, getScaleDates } from '../../utils';
import { DragStepSizes, GanttDimensions, RelativeGanttDimensions } from '../../enums';
import { GanttSettingsType, RelGanttSettingsType } from '../../types';
import {
  DragStepOptions,
  GanttConsts,
  GanttDimensionsSettings,
  RelativeGanttDimensionSettings,
} from '../../constants';
import '../../styles/globals.css';
import './Gantt.css';
import { RelGanttContext } from './RelativeGanttContext';

dayjs.extend(localizedFormat);

type GanttProps = {
  children: ReactNode | ReactNode[];
  relativeMode: boolean;
};

const Gantt: React.FC<GanttProps> & {
  Chart: typeof Chart;
  RelativeChart: typeof RelativeChart;
  Controls: typeof Controls;
} = ({ children, relativeMode }: GanttProps) => {
  const initialScaleDates = useMemo(() => {
    return getScaleDates();
  }, []);

  const initialScrollOffset = useMemo(() => {
    return getInitialScrollOffset(GanttDimensions.HOUR, initialScaleDates);
  }, [initialScaleDates]);

  const wrapRef = useRef<HTMLDivElement>(null);
  const relWrapRef = useRef<HTMLDivElement>(null);
  const [currentDate, setCurrentDate] = useState(dayjs().unix());
  const [scaleDates, setScaleDates] = useState(initialScaleDates);
  const [settings, setSettings] = useState<GanttSettingsType>({
    stepWidth: GanttDimensionsSettings[GanttDimensions.HOUR].stepWidth,
    secondsInPixel: GanttDimensionsSettings[GanttDimensions.HOUR].secondsInPixel,
    scaleStepItems: GanttConsts.HOURS_IN_DAY,
    initialScrollOffset,
    dimension: GanttDimensions.HOUR,
    dragStepSize: DragStepSizes.THIRTY_MIN,
    gridSize:
      DragStepOptions[DragStepSizes.THIRTY_MIN].seconds /
      GanttDimensionsSettings[GanttDimensions.HOUR].secondsInPixel,
  });
  // my code

  const [relSettings, setRelSettings] = useState<RelGanttSettingsType>({
    stepWidth: RelativeGanttDimensionSettings[RelativeGanttDimensions.HOUR].stepWidth,
    secondsInPixel: RelativeGanttDimensionSettings[RelativeGanttDimensions.HOUR].secondsInPixel,
    scaleStepItems: GanttConsts.HOURS_IN_DAY,
    initialScrollOffset,
    dimension: RelativeGanttDimensions.HOUR,
    dragStepSize: DragStepSizes.THIRTY_MIN,
    gridSize:
      DragStepOptions[DragStepSizes.THIRTY_MIN].seconds /
      RelativeGanttDimensionSettings[RelativeGanttDimensions.HOUR].secondsInPixel,
  });
  const [scaleRenderState, setScaleRenderState] = useState<ListOnItemsRenderedProps>({
    overscanStartIndex: 0,
    overscanStopIndex: 0,
    visibleStartIndex: 0,
    visibleStopIndex: 0,
  });

  // return (
  //   <GanttContext.Provider
  //     value={{
  //       wrapRef,
  //       scaleDates,
  //       setScaleDates,
  //       settings,
  //       setSettings,
  //       scaleRenderState,
  //       setScaleRenderState,
  //       currentDate,
  //       setCurrentDate,
  //     }}
  //   >
  //     <div className="gantt-wrap">{children}</div>
  //   </GanttContext.Provider>
  // );

  return relativeMode ? (
    <RelGanttContext.Provider
      value={{
        wrapRef,
        scaleDates,
        setScaleDates,
        relSettings,
        setRelSettings,
        scaleRenderState,
        setScaleRenderState,
        currentDate,
        setCurrentDate,
      }}
    >
      <div className="gantt-wrap">{children}</div>
    </RelGanttContext.Provider>
  ) : (
    <GanttContext.Provider
      value={{
        wrapRef,
        scaleDates,
        setScaleDates,
        settings,
        setSettings,
        scaleRenderState,
        setScaleRenderState,
        currentDate,
        setCurrentDate,
      }}
    >
      <div className="gantt-wrap">{children}</div>
    </GanttContext.Provider>
  );
};

Gantt.Chart = Chart;
Gantt.RelativeChart = RelativeChart;
Gantt.Controls = Controls;

export default Gantt;
