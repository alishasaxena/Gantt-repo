import React, { RefObject, forwardRef, useCallback, useContext, useEffect, useRef } from 'react';
import dayjs from 'dayjs';
import {
  VariableSizeList as List,
  ListOnItemsRenderedProps,
  ListOnScrollProps,
} from 'react-window';
import { GanttContext } from '../../Gantt/GanttContext';
import { useForwardRef } from '../../../hooks';
import { getScaleItems } from '../../../utils';
import { GanttDimensions, RelativeGanttDimensions } from '../../../enums';
import {
  GanttConsts,
  GanttDimensionsSettings,
  RelativeGanttDimensionSettings,
} from '../../../constants';
import './Scale.css';
import { RelGanttContext } from '../../Gantt/RelativeGanttContext';
import { getRelativeScale } from '../../../utils/getRelativeScale';

interface RelativeScaleProps {
  width: number;
  wrapRef: RefObject<HTMLDivElement>;
  data: any;
}

const RelativeScale = forwardRef<List<number[]>, RelativeScaleProps>(
  ({ width, wrapRef, data }, ref) => {
    const { scaleDates, setScaleDates, setScaleRenderState, relSettings } =
      useContext(RelGanttContext);
    const listRef = useForwardRef<List<number[]>>(ref);
    const outerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    const getItemSize = useCallback(
      (index: number) => {
        const date = dayjs.unix(scaleDates[index]);

        if (relSettings.dimension === RelativeGanttDimensions.HOUR) {
          return relSettings.stepWidth;
        }

        return relSettings.scaleStepItems * relSettings.stepWidth;
      },
      [scaleDates, relSettings.dimension, relSettings.scaleStepItems, relSettings.stepWidth]
    );

    const onScroll = useCallback(
      ({ scrollOffset }: ListOnScrollProps) => {
        const unitOfTime = RelativeGanttDimensionSettings[relSettings.dimension].unitOfTime;

        if (scrollOffset < GanttConsts.MIN_SCROLL_OFFSET) {
          // const newDate = dayjs.unix(scaleDates[0]).subtract(1, unitOfTime);
          let newItemWidth = relSettings.scaleStepItems * relSettings.stepWidth;

          if (relSettings.dimension === RelativeGanttDimensions.HOUR) {
            newItemWidth = relSettings.stepWidth;
          }

          setScaleDates([...scaleDates]);

          wrapRef.current?.scrollTo({ left: scrollOffset + newItemWidth });
          listRef?.current?.resetAfterIndex(0);
        }

        if (
          (outerRef.current?.scrollWidth || 0) -
            (outerRef.current?.clientWidth || 0) -
            scrollOffset -
            GanttConsts.TREE_WIDTH <
          GanttConsts.MIN_SCROLL_OFFSET
        ) {
          setScaleDates([...scaleDates]);
          listRef?.current?.resetAfterIndex(0);
        }
      },
      [
        listRef,
        scaleDates,
        setScaleDates,
        relSettings.dimension,
        relSettings.scaleStepItems,
        relSettings.stepWidth,
        wrapRef,
      ]
    );

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
          layout="horizontal"
          width={width}
          height={GanttConsts.HEADER_HEIGHT}
          itemCount={scaleDates.length}
          itemSize={getItemSize}
          itemData={scaleDates}
          ref={listRef}
          outerRef={outerRef}
          innerRef={innerRef}
          initialScrollOffset={relSettings.initialScrollOffset}
          onScroll={onScroll}
          onItemsRendered={onItemsRendered}
        >
          {({ style, index }) => {
            console.log(width, relSettings.stepWidth, 'settings');
            return (
              <div className="gantt-scale-item" style={style}>
                <div className="gantt-scale-title">
                  {/* {dayjs
                    .unix(data[index])
                    .format(
                      relSettings.dimension === RelativeGanttDimensions.HOUR
                        ? 'MMMM, YYYY'
                        : 'ddd, D MMMM, YY'
                    )} */}
                </div>
                <div className="gantt-scale-steps">
                  {getRelativeScale(data, relSettings.dimension).map((item) => (
                    <div
                      className="gantt-scale-step"
                      key={item}
                      style={{ width: relSettings.stepWidth }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
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
