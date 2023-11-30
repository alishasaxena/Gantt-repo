// import { Gantt, RepeatDataType, NoRepeatDataType, BarItemDataType } from 'react-virtual-gantt';


export type DataRepeatTypes = 'DAY' | 'MONTH'; // Define the types for repeatType

export type RepeatDataType = {
  repeatType: DataRepeatTypes;
  fromTime: number;
  toTime: number;
  fromDate?: string;
  toDate?: string;
  weekdays?: number[];
  monthdays?: number[];
  startDate?: never;
  endDate?: never;
  time?: any;
};

export type NoRepeatDataType = {
  startDate: string;
  endDate: string;
  fromTime?: never;
  toTime?: never;
  fromDate?: never;
  toDate?: never;
  repeatType?: never;
  weekdays?: never;
  monthdays?: never;
  time?: any;
};

 export type BarItemDataType = RepeatDataType | NoRepeatDataType;


export type RawGanttDataType<T = Record<string, unknown>> = {
  /**
   * Title of gantt item
   */
  title: string;
  /**
   * Unique gantt item key
   */
  key: string;
  /**
   * Color of gantt item
   */
  color?: string;
  /**
   * Data to render gantt item on the chart
   */
  data?: BarItemDataType[];
  /**
   * Nested gantt items
   */
  children?: GanttDataType<T>[];
};

export type GanttDataType<T = Record<string, unknown>> = RawGanttDataType<T> & {
  [P in keyof T]: T[P];
};

type TransformedDataType<T> = {
  [P in keyof T as Exclude<P, 'children'>]: T[P];
};

export type GanttItemDataType<T = Record<string, unknown>> = TransformedDataType<
  GanttDataType<T>
> & {
  /**
   * Tree level of gantt item
   */
  level: number;
  /**
   * Parents keys of gantt item
   */
  parentsKeys: string[];
  /**
   * Color of gantt item
   */
  color: string;
  /**
   * Is gantt item expanded?
   */
  expanded?: boolean;
} & T;

export type OnBarDoubleClickType<T extends Record<string, unknown> = any> = (
  barData: GanttItemDataType<T>
) => any;

export type OnBarChangeType<T extends Record<string, unknown> = any> = (
  barData: GanttItemDataType<T>,
  data: (GanttItemDataType<T> & T)[]
) => any;
