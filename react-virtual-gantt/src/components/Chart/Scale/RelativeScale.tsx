import React, {
  RefObject,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useMemo,
} from 'react';
import dayjs from 'dayjs';
import {
  VariableSizeList as List,
  ListOnItemsRenderedProps,
  ListOnScrollProps,
} from 'react-window';
import { useForwardRef } from '../../../hooks';
import { RelativeGanttDimensions } from '../../../enums';
import {
  GanttConsts,
  GanttDimensionsSettings,
  RelativeGanttDimensionSettings,
} from '../../../constants';
import './Scale.css';
import { RelGanttContext } from '../../Gantt/RelativeGanttContext';
import { getRelativeScale } from '../../../utils/getRelativeScale';
import { getRelWholeWidth } from '../../../utils';

interface RelativeScaleProps {
  width: number;
  wrapRef: RefObject<HTMLDivElement>;
  data: any;
}

interface ColumnProps {
  index: any;
  style: any;
}

const RelativeScale = forwardRef<List<number[]>, RelativeScaleProps>(
  ({ width, wrapRef, data }, ref) => {
    const { relScaleDates, setRelScaleDates, setScaleRenderState, relSettings } =
      useContext(RelGanttContext);
    const listRef = useForwardRef<List<number[]>>(ref);
    const outerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    // const getItemSize = useCallback(
    //   (index: number) => {
    //     if (relSettings.dimension === RelativeGanttDimensions.HOUR) {
    //       return relSettings.stepWidth;
    //     }

    //     return relSettings.scaleStepItems * relSettings.stepWidth;
    //   },
    //   [relScaleDates, relSettings.dimension, relSettings.scaleStepItems, relSettings.stepWidth]
    // );

    const columnWidths = relScaleDates;

    const getItemSize = (index: number) => columnWidths[50];
    const Column: React.FC<ColumnProps> = ({ index, style }) => (
      <div className="rel-gantt-scale-step" style={style}>
        {index}
      </div>
    );

    const scaleWidth = useMemo(() => {
      return getRelWholeWidth(
        relScaleDates,
        relSettings.dimension,
        relSettings.scaleStepItems,
        relSettings.stepWidth
      );
    }, [relScaleDates, relSettings.dimension, relSettings.scaleStepItems, relSettings.stepWidth]);

    // const onScroll = useCallback(
    //   ({ scrollOffset }: ListOnScrollProps) => {
    //     const unitOfTime = RelativeGanttDimensionSettings[relSettings.dimension].unitOfTime;

    //     if (scrollOffset < GanttConsts.MIN_SCROLL_OFFSET) {
    //       // const newDate = dayjs.unix(scaleDates[0]).subtract(1, unitOfTime);
    //       let newItemWidth = relSettings.scaleStepItems * relSettings.stepWidth;

    //       if (relSettings.dimension === RelativeGanttDimensions.HOUR) {
    //         newItemWidth = relSettings.stepWidth;
    //       }

    //       setRelScaleDates([...relScaleDates]);

    //       wrapRef.current?.scrollTo({ left: scrollOffset + newItemWidth });
    //       listRef?.current?.resetAfterIndex(0);
    //     }

    //     if (
    //       (outerRef.current?.scrollWidth || 0) -
    //         (outerRef.current?.clientWidth || 0) -
    //         scrollOffset -
    //         GanttConsts.TREE_WIDTH <
    //       GanttConsts.MIN_SCROLL_OFFSET
    //     ) {
    //       setRelScaleDates([...relScaleDates]);
    //       listRef?.current?.resetAfterIndex(0);
    //     }
    //   },
    //   [
    //     listRef,
    //     relScaleDates,
    //     setRelScaleDates,
    //     relSettings.dimension,
    //     relSettings.scaleStepItems,
    //     relSettings.stepWidth,
    //     wrapRef,
    //   ]
    // );

    const onItemsRendered = useCallback(
      (renderedState: ListOnItemsRenderedProps) => {
        setScaleRenderState(renderedState);
      },
      [setScaleRenderState]
    );

    useEffect(() => {
      listRef?.current?.resetAfterIndex(0);
    }, [listRef, relSettings.dimension]);

    return (
      <div className="gantt-scale-wrap">
        <List
          className="gantt-scale-list"
          style={{ backgroundColor: 'white' }}
          layout="horizontal"
          width={scaleWidth}
          height={GanttConsts.HEADER_HEIGHT}
          itemCount={relScaleDates.length}
          itemSize={getItemSize}
          itemData={relScaleDates}
          ref={listRef}
          outerRef={outerRef}
          innerRef={innerRef}
          onItemsRendered={onItemsRendered}
        >
          {({ index, style }) => {
            return (
              <div className="gantt-scale-item">
                <Column index={index + 1} style={style} />
              </div>
            );
          }}
        </List>
      </div>
    );
  }
);

RelativeScale.displayName = 'RelativeScale';

export default RelativeScale;
