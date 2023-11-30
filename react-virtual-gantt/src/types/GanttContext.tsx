import { Dispatch, RefObject, SetStateAction } from 'react';
import { ListOnItemsRenderedProps } from 'react-window';
import { GanttItemDataType } from './GanttData';
import { GanttSettingsType, RelGanttSettingsType } from './GanttSettings';

export interface GanttContextType {
  wrapRef: RefObject<HTMLDivElement>;
  scaleDates: number[];
  setScaleDates: Dispatch<SetStateAction<number[]>>;
  settings: GanttSettingsType;
  setSettings: Dispatch<SetStateAction<GanttSettingsType>>;
  scaleRenderState: ListOnItemsRenderedProps;
  setScaleRenderState: Dispatch<SetStateAction<ListOnItemsRenderedProps>>;
  currentDate: number;
  setCurrentDate: Dispatch<SetStateAction<number>>;
}

export interface RelGanttContextType {
  wrapRef: RefObject<HTMLDivElement>;
  scaleDates: number[];
  setScaleDates: Dispatch<SetStateAction<number[]>>;
  settings: RelGanttSettingsType;
  setSettings: Dispatch<SetStateAction<RelGanttSettingsType>>;
  scaleRenderState: ListOnItemsRenderedProps;
  setScaleRenderState: Dispatch<SetStateAction<ListOnItemsRenderedProps>>;
  currentDate: number;
  setCurrentDate: Dispatch<SetStateAction<number>>;
}

export interface BarsRowContextType {
  barData: GanttItemDataType;
}
