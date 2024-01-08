import React, { CSSProperties, useContext, useEffect, useMemo } from 'react';
import BarsItems from './BarsItems';
import { RelGanttContext } from '../../../Gantt/RelativeGanttContext';
import { GanttItemDataType, OnBarDoubleClickType } from '../../../../types';
import './BarsRow.css';
import RelativeBarItems from './BarsItems/RelativeBarItems';
import { RelBarsRowContext } from './BarsRowContext';

interface BarsRowProps {
  barData: any;
  index: number;
  style: CSSProperties;
  onBarDoubleClick?: OnBarDoubleClickType;
  color: any;
}

const RelativeBarsRow: React.FC<BarsRowProps> = ({
  barData,
  index,
  style,
  onBarDoubleClick,
  color,
}) => {
  const { relSettings } = useContext(RelGanttContext);

  const wrapStyle = useMemo(() => {
    return {
      ...style,
      backgroundImage: `repeating-linear-gradient(to right, var(--gantt-border-color-base) 0px 1px, ${
        index % 2 === 0 ? 'var(--gantt-background-second)' : 'var(--gantt-background-main)'
      } 1px ${relSettings.stepWidth + 1}px`,
    };
  }, [index, relSettings.stepWidth, style]);

  return (
    <RelBarsRowContext.Provider value={{ barData }}>
      <div className="rel-gantt-bars-row-wrap" style={wrapStyle}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <RelativeBarItems
            data={barData.data}
            title={barData.title}
            barKey={barData.key}
            onBarDoubleClick={onBarDoubleClick}
            color={color}
          />
        </div>
      </div>
    </RelBarsRowContext.Provider>
  );
};

export default RelativeBarsRow;
