import React, { ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { ListOnItemsRenderedProps } from 'react-window';
import { Chart, RelativeChart } from '../Chart';
import Controls from '../Controls';
import { DragStepSizes, GanttDimensions, RelativeGanttDimensions } from '../../enums';
import { RelGanttSettingsType } from '../../types';
import { DragStepOptions, GanttConsts, RelativeGanttDimensionSettings } from '../../constants';
import '../../styles/globals.css';
import './Gantt.css';
import { RelGanttContext } from './RelativeGanttContext';
import { getRelativeDates } from '../../utils/getRelativeDates';
import { relGetInitialScrollOffset } from '../../utils';

dayjs.extend(localizedFormat);

type RelGanttProps = {
  children: ReactNode | ReactNode[];
  data: any; //my code
  color: any;
};

export const RelGantt: React.FC<RelGanttProps> & {
  RelativeChart: typeof Chart;
  Controls: typeof Controls;
} = ({ children, data, color }: RelGanttProps) => {
  const relInitialScaleDates = useMemo(() => {
    return getRelativeDates(data);
  }, []);

  const relInitialScrollOffset = useMemo(() => {
    return relGetInitialScrollOffset(RelativeGanttDimensions.HOUR, relInitialScaleDates);
  }, [relInitialScaleDates]);

  const wrapRef = useRef<HTMLDivElement>(null);
  const [relCurrentDate, setRelCurrentDate] = useState(1);
  const [relScaleDates, setRelScaleDates] = useState(relInitialScaleDates);

  const [relSettings, setRelSettings] = useState<RelGanttSettingsType>({
    stepWidth: RelativeGanttDimensionSettings[RelativeGanttDimensions.HOUR].stepWidth,
    secondsInPixel: RelativeGanttDimensionSettings[RelativeGanttDimensions.HOUR].secondsInPixel,
    scaleStepItems: GanttConsts.HOURS_IN_DAY,
    relInitialScrollOffset,
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

  return (
    <RelGanttContext.Provider
      value={{
        wrapRef,
        relScaleDates,
        setRelScaleDates,
        relSettings,
        setRelSettings,
        scaleRenderState,
        setScaleRenderState,
        relCurrentDate,
        setRelCurrentDate,
        color,
      }}
    >
      <div className="gantt-wrap">{children}</div>
    </RelGanttContext.Provider>
  );
};

RelGantt.RelativeChart = RelativeChart;
RelGantt.Controls = Controls;

// export default RelGantt;
