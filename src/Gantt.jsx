import React, { useMemo } from 'react';
import { Gantt } from '../react-virtual-gantt/src/components/index';

export const GanttComponent = () => {

const tasks = [
    
        {
            key: 'task-3',
            title: "Task 3",
            data: [{
                startDate: "2023-11-17T08:00:00.000Z",
                endDate: "2023-11-17T10:00:00.000Z",
            }, 
          {
                startDate: "2023-11-16T16:00:00.000Z",
                endDate: "2023-11-16T17:00:00.000Z",
            },
          {
                startDate: "2023-11-16T17:00:00.000Z",
                endDate: "2023-11-16T18:00:00.000Z",
            }]
        },
        {
            key: 'task-3',
            title: "Task 3",
            data: [{
                startDate: "2023-11-16T08:00:00.000Z",
                endDate: "2023-11-16T10:00:00.000Z",
            }]
        },
      ];


function groupTasksByTime(tasks) {
  const groupedTasks = {};

  tasks.forEach((task) => {
    const { key, data } = task;
    console.log('datanew', data)

    if (!groupedTasks[key]) {
      groupedTasks[key] = { ...task, data: []};
      groupedTasks[key].data.push({ startDate: data?.startDate, endDate: data?.endDate });
    } else {
      const existingTask = groupedTasks[key];

      if (data?.startDate !== existingTask.data?.startDate || data?.endDate !== existingTask.dataN?.endDate) {
        existingTask.data.push({ startDate: data.startDate, endDate: data.endDate });
      }
    }
  });

  return Object.values(groupedTasks);
}

const groupedTasks = groupTasksByTime(tasks);
console.log(groupedTasks, 'tushar');

//  for the following data if the key 'key' is same and start time and end time is different then give both data for start time and endtime  in one array as two objects inside a key name time, 


    return (
        <div style={{
            width: "100vw",

            height: "100vh"
        }}> 
            <Gantt>   
                <Gantt.Controls isRelative={true}  />
                <Gantt.Chart relativeMode={true} className="gantt-chart__body" data={tasks} />
            </Gantt>
        </div>
    );
}


// import React, { useState, useEffect } from 'react';
// import { Gantt } from 'react-virtual-gantt';

// export const GanttComponent = () => {

//     const [processedData, setProcessedData] = useState([]);
//     const originalData = [
//       {
//         key: "task-1",
//         title: "Task 1",
//         children: [
//           {
//             key: "task-1-1",
//             title: "Task 1.1",
//             data: {
//               startDate: "2023-11-15T08:00:00.000Z",
//               endDate: "2023-11-16T08:00:00.000Z",
//             },
//           },
//           {
//             key: "task-1-2",
//             title: "Task 1.2 [daily repeat]",
//             data: {
//               repeatType: "DAY",
//               fromTime: 28800,
//               endDate: 64800,
//             },  
//           },
//         ],
//       },
//       {
//         key: "task-2",
//         title: "monthly repeating task",
//         data: {
//           repeatType: "MONTH",
//           fromTime: 28800,
//           endDate: 64800,
//           monthdays: [1, 3, 5, 9, 11, 14, 21, 31],
//         },
//       },
//       {
//           key: 'task-3',
//           title: "Task 3",
//           data: {
//               startDate: "2023-11-15T08:00:00.000Z",
//               endDate: "2023-11-15T10:00:00.000Z",
//           }
//       },
//       {
//           key: 'task-3',
//           title: "Task 3",
//           data: {
//               startDate: "2023-11-16T08:00:00.000Z",
//               endDate: "2023-11-16T10:00:00.000Z",
//           }
//       },
//       {
//           key: "task-4",
//           title: "Task 4 [daily repeat]",
//           data: {
//             repeatType: "DAY",
//             fromDate:"2023-11-01T08:00:00.000Z" ,
//             toDate: '2023-11-16T10:00:00.000Z',
//           //   startDate: "2023-11-01T08:00:00.000Z",
//           //   endDate:'2023-11-16T10:00:00.000Z',
//             fromTime: 2800,
//             toTime: 64800,
//           },
//           "children": []
//       },
//       {
//           "key": "40",
//           "title": "Task 40 [Monthly task]",
//           "data": {
//               "repeatType": "MONTH",
//               "fromTime": 3407,
//               "toTime": 64017,
//               "monthdays": [
//                   1,
//                   6,
//                   12,
//                   17,
//                   22
//               ]
//           },
//           "children": []
//       },
//       {
//           "key": "52.1.2",
//           "title": "Task 52.1.2 [Daily task]",
//           "data": {
//               "repeatType": "DAY",
//               "fromTime": 51520,
//               "toTime": 31149
//           },
//           "children": []
//       }
//     ];
//   // Ensure originalData is an array


//   useEffect(() => {
//     // Ensure originalData is an array
//     const dataArray = Array.isArray(originalData) ? originalData : [];

//     // Combine tasks with the same key into a single row using a for loop
//     const processeddData = [];
//     for (const task of dataArray) {
//       const existingRow = processeddData.find((row) => row.some((t) => t.key === task.key));

//       if (existingRow) {
//         existingRow.push(task);
//       } else {
//         processeddData.push([task]);
//       }
//     }

//     setProcessedData(processeddData);
//   }, [originalData]);

//   return (
//     <div style={{ width: '100vw', height: '100vh' }}>
//       <Gantt>
//         <Gantt.Controls />
//         {processedData.map((row, rowIndex) => (
//           <div key={rowIndex} style={{ display: 'flex' }}>
//             {row.map((task, taskIndex) => (
//               <Gantt.Chart
//                 key={taskIndex}
//                 className="gantt-chart__body"
//                 data={task}
//               />
//             ))}
//           </div>
//         ))}
//       </Gantt>
//     </div>
//   );
// };
