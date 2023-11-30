import React, { useEffect, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const GiantChart = React.forwardRef(({ data }, ref) => {    
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
      if (data) {
        const groupedData = groupDataById(data);
        const chartData = createChartData(groupedData);
        setChartData(chartData);
      }
  
      // Cleanup previous chart before rendering a new one
      return () => {
        setChartData(null);
      };
    }, [data]);

    const groupDataById = (data) => {
        const groupedData = {};

        data.forEach((item) => {
            if (!groupedData[item.id]) {
                groupedData[item.id] = [];
            }
            groupedData[item.id].push(item);
        });

        return groupedData;
    };

    const createChartData = (groupedData) => {
        const datasets = [];

        for (const id in groupedData) {
            const tasks = groupedData[id];
            const taskData = tasks.map((task) => ({
                label: task.name,
                backgroundColor: task.color || 'blue',
                data: [
                    {
                        x: task.start,
                        y: tasks.indexOf(task) + 1,
                    },
                    {
                        x: task.end,
                        y: tasks.indexOf(task) + 1,
                    },
                ],
            }));

            datasets.push(...taskData);
        }

        return {
            datasets,
        };
    };

    const options = {
        scales: {
          x: {
            type: 'time', 
            position: 'bottom',
            title: {
              display: true,
              text: 'Timeline',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Tasks',
            },
          },
        },
      };
      
      return (
        <div>
          {chartData && <Bar data={chartData} options={options} ref={ref} />}
        </div>
      );
    });

export default GiantChart;
