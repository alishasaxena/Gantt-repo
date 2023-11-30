import React, { useCallback, useContext, useMemo, useState } from 'react';
import cn from 'classnames';
import dayjs from 'dayjs';
import Button from './Button';
import Select from './Select';
import { LeftOutlined, RightOutlined, StepOutlined } from '../../assets';
import { GanttContext } from '../Gantt/GanttContext';
import { useGanttCalculate, useRelativeGanttCalculate } from '../../hooks';
import { DragStepSizes, GanttDimensions, RelativeGanttDimensions } from '../../enums';
import {
  DragStepOptions,
  GanttDimensionsSettings,
  RelativeGanttDimensionSettings,
} from '../../constants';
import './Controls.css';

interface ControlsProps {
  className?: string;
  isRelative: boolean;
}

const Controls: React.FC<ControlsProps> = ({ className, isRelative }) => {
  const { calculate } = useGanttCalculate();
  const { relativeCalculate } = useRelativeGanttCalculate(); // mycode
  const { settings, setSettings, currentDate } = useContext(GanttContext);
  const [dimensionValue, setDimensionValue] = useState(GanttDimensions.HOUR);
  const [dimensionIndex, setDimensionIndex] = useState(0);
  // mycode
  const [relativeDimensionValue, setRelativeDimensionValue] = useState(
    RelativeGanttDimensions.HOURS
  );
  const [relativedimensionIndex, setRelativeDimensionIndex] = useState(0);

  const dimensionsOptions = useMemo(() => {
    return Object.keys(GanttDimensionsSettings).map((key, index) => {
      return {
        label: GanttDimensionsSettings[key as GanttDimensions].label,
        value: key as GanttDimensions,
        index,
      };
    });
  }, []);
  // mycode
  const relativeDimensionOptions = useMemo(() => {
    return Object.keys(RelativeGanttDimensionSettings).map((key, index) => {
      return {
        label: RelativeGanttDimensionSettings[key as RelativeGanttDimensions].label,
        value: key as GanttDimensions,
        index,
      };
    });
  }, []);

  const onRelativeDimensionChange = useCallback(
    (value: RelativeGanttDimensions) => {
      const index = relativeDimensionOptions.findIndex((item) => {
        console.log('gfhf', item);
        return item.value === value;
      });
      setRelativeDimensionValue(value);
      setRelativeDimensionIndex(index);
      relativeCalculate(value);
      console.log(relativeDimensionValue, 'rel');
    },
    [relativeCalculate, relativeDimensionOptions]
  );

  const onDimensionChange = useCallback(
    (value: GanttDimensions) => {
      const index = dimensionsOptions.findIndex((item) => item.value === value);

      setDimensionValue(value);
      setDimensionIndex(index);
      calculate(value);
    },
    [calculate, dimensionsOptions]
  );

  const onNextDimension = useCallback(() => {
    if (dimensionIndex < dimensionsOptions.length - 1) {
      const value = Object.keys(GanttDimensionsSettings)[dimensionIndex + 1] as GanttDimensions;

      setDimensionValue(value);
      setDimensionIndex(dimensionIndex + 1);
      calculate(value);
    }
  }, [calculate, dimensionsOptions.length, dimensionIndex]);

  const onPrevDimension = useCallback(() => {
    if (dimensionIndex > 0) {
      const value = Object.keys(GanttDimensionsSettings)[dimensionIndex - 1] as GanttDimensions;

      setDimensionValue(value);
      setDimensionIndex(dimensionIndex - 1);
      calculate(value);
    }
  }, [calculate, dimensionIndex]);

  const dragStepOptions = useMemo(() => {
    return Object.keys(DragStepOptions).map((key) => {
      return {
        label: DragStepOptions[key as DragStepSizes].label,
        value: key as DragStepSizes,
      };
    });
  }, []);

  const onDragStepChange = useCallback(
    (value: DragStepSizes) => {
      setSettings(() => {
        const newSettings = { ...settings };

        newSettings.dragStepSize = value;
        newSettings.gridSize =
          DragStepOptions[value].seconds /
          GanttDimensionsSettings[newSettings.dimension].secondsInPixel;

        return newSettings;
      });
    },
    [setSettings, settings]
  );

  return (
    <div>
      {isRelative ? (
        <div className={cn('gantt-controls-wrap', className)}>
          <Select
            options={relativeDimensionOptions}
            onChange={onRelativeDimensionChange} //change
            value={relativeDimensionValue}
          />
        </div>
      ) : (
        <div className={cn('gantt-controls-wrap', className)}>
          <Button
            icon={<LeftOutlined />}
            onClick={onPrevDimension}
            disabled={dimensionIndex <= 0}
          />
          <Select options={dimensionsOptions} onChange={onDimensionChange} value={dimensionValue} />
          <Button
            icon={<RightOutlined />}
            onClick={onNextDimension}
            disabled={dimensionIndex >= dimensionsOptions.length - 1}
          />

          <div className="gantt-controls-current-date">
            {dayjs.unix(currentDate).format('ddd, ll')}
          </div>
          <Select
            options={dragStepOptions}
            onChange={onDragStepChange}
            value={settings.dragStepSize}
            suffixIcon={<StepOutlined />}
          />
        </div>
      )}
    </div>
  );
};

export default Controls;
