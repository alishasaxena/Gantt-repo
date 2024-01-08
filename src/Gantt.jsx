import { Gantt, RelGantt} from '../react-virtual-gantt/src/components/index';

// import { Gantt } from "./../react-virtual-gantt/src/components/Gantt/Gantt";
// import RelGantt from "./../react-virtual-gantt/src/components/Gantt/RelGantt"

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
         {
            key: 'task-4',
            title: "Task 4",
            data: [{
                startDate: "2023-11-16T08:00:00.000Z",
                endDate: "2023-11-16T10:00:00.000Z",
            }]
        },
      ];

// const tasks = [
    
//         {
//             key: 'task-3',
//             title: "Task 3",
//             data: [{
//                 startDate: "34",
//                 endDate: "36",
//             }, 
//           {
//                 startDate: "16",
//                 endDate: "17",
//             },
//           {
//                 startDate: "11",
//                 endDate: "15",
//             }]
//         },
//         {
//             key: 'task-4',
//             title: "Task 4",
//             data: [{
//                 startDate: "5",
//                 endDate: "8",
//             }]
//         },
//       ];

const newList = [
    {
        "key": "CompletedKENNJump",
        "title": "Task CompletedKENNJump",
        "data": [
            {
                "startDate": 34,
                "endDate": 38
            }
        ]
    },
    {
        "key": "wi--by-636-base--RestartVsNewKENNActions",
        "title": "Task wi--by-636-base--RestartVsNewKENNActions",
        "data": [
            {
                "startDate": 35,
                "endDate": 35
            }
        ]
    },
  ]
const list = [
    {
        "key": "CompletedKENNJump",
        "title": "Task CompletedKENNJump",
        "data": [
            {
                "startDate": 34,
                "endDate": 34
            }
        ]
    },
    {
        "key": "wi--by-636-base--RestartVsNewKENNActions",
        "title": "Task wi--by-636-base--RestartVsNewKENNActions",
        "data": [
            {
                "startDate": 35,
                "endDate": 35
            }
        ]
    },
    {
        "key": "wi--by-636-base--JumpToNextTaskId",
        "title": "Task wi--by-636-base--JumpToNextTaskId",
        "data": [
            {
                "startDate": 115,
                "endDate": 115
            },
            {
                "startDate": 77,
                "endDate": 77
            },
            {
                "startDate": 76,
                "endDate": 76
            },
            {
                "startDate": 98,
                "endDate": 98
            },
            {
                "startDate": 88,
                "endDate": 88
            },
            {
                "startDate": 96,
                "endDate": 96
            },
            {
                "startDate": 79,
                "endDate": 79
            },
            {
                "startDate": 163,
                "endDate": 163
            },
            {
                "startDate": 86,
                "endDate": 86
            },
            {
                "startDate": 165,
                "endDate": 165
            },
            {
                "startDate": 94,
                "endDate": 94
            },
            {
                "startDate": 164,
                "endDate": 164
            },
            {
                "startDate": 153,
                "endDate": 153
            },
            {
                "startDate": 77,
                "endDate": 77
            },
            {
                "startDate": 91,
                "endDate": 91
            },
            {
                "startDate": 78,
                "endDate": 78
            }
        ]
    },
    {
        "key": "wi--by-636-base--DestroyPanel--loc-0",
        "title": "Task wi--by-636-base--DestroyPanel--loc-0",
        "data": [
            {
                "startDate": 171,
                "endDate": 171
            }
        ]
    },
    {
        "key": "wi--by-636-base--NewKENNActions",
        "title": "Task wi--by-636-base--NewKENNActions",
        "data": [
            {
                "startDate": 36,
                "endDate": 36
            }
        ]
    },
    {
        "key": "OptionalStateReset",
        "title": "Task OptionalStateReset",
        "data": [
            {
                "startDate": 32,
                "endDate": 34
            }
        ]
    },
    {
        "key": "BarcodeRead1",
        "title": "Task BarcodeRead1",
        "data": [
            {
                "startDate": 0,
                "endDate": 22
            }
        ]
    },
    {
        "key": "wi--by-636-base--main--host-1--1-A--lid-big-open--BasicInst",
        "title": "Task wi--by-636-base--main--host-1--1-A--lid-big-open--BasicInst",
        "data": [
            {
                "startDate": 78,
                "endDate": 79
            }
        ]
    },
    {
        "key": "wi--by-636-base--main--host-1--1-A--bottom_foam--bottom_foam_checks_1--1",
        "title": "Task wi--by-636-base--main--host-1--1-A--bottom_foam--bottom_foam_checks_1--1",
        "data": [
            {
                "startDate": 86,
                "endDate": 88
            }
        ]
    },
    {
        "key": "wi--by-636-base--markers--remove-markers--BasicInst",
        "title": "Task wi--by-636-base--markers--remove-markers--BasicInst",
        "data": [
            {
                "startDate": 76,
                "endDate": 77
            }
        ]
    },
    {
        "key": "wi--by-636-base--InProgressKENNActions",
        "title": "Task wi--by-636-base--InProgressKENNActions",
        "data": [
            {
                "startDate": 36,
                "endDate": 36
            }
        ]
    },
    {
        "key": "wi--by-636-base--ShowFinalManifest",
        "title": "Task wi--by-636-base--ShowFinalManifest",
        "data": [
            {
                "startDate": 167,
                "endDate": 171
            }
        ]
    },
    {
        "key": "wi--by-636-base--CreateDetailsPanel--loc-0",
        "title": "Task wi--by-636-base--CreateDetailsPanel--loc-0",
        "data": [
            {
                "startDate": 53,
                "endDate": 53
            }
        ]
    },
    {
        "key": "wi--by-636-base--main--host-1--1-B--lid-small-open--BasicInst",
        "title": "Task wi--by-636-base--main--host-1--1-B--lid-small-open--BasicInst",
        "data": [
            {
                "startDate": 164,
                "endDate": 165
            }
        ]
    },
    {
        "key": "wi--by-636-base--EndTasks",
        "title": "Task wi--by-636-base--EndTasks",
        "data": [
            {
                "startDate": 171,
                "endDate": 171
            }
        ]
    },
    {
        "key": "FetchManifest",
        "title": "Task FetchManifest",
        "data": [
            {
                "startDate": 22,
                "endDate": 31
            }
        ]
    },
    {
        "key": "wi--by-636-base--markers--marker-g-0--TrackLocation--loc-0",
        "title": "Task wi--by-636-base--markers--marker-g-0--TrackLocation--loc-0",
        "data": [
            {
                "startDate": 57,
                "endDate": 75
            }
        ]
    },
    {
        "key": "wi--by-636-base--ProductStart-Event-Data",
        "title": "Task wi--by-636-base--ProductStart-Event-Data",
        "data": [
            {
                "startDate": 36,
                "endDate": 37
            }
        ]
    },
    {
        "key": "FetchState",
        "title": "Task FetchState",
        "data": [
            {
                "startDate": 32,
                "endDate": 32
            }
        ]
    },
    {
        "key": "wi--by-636-base--main--host-1--1-A--bottom_foam--photo-1A2",
        "title": "Task wi--by-636-base--main--host-1--1-A--bottom_foam--photo-1A2",
        "data": [
            {
                "startDate": 153,
                "endDate": 163
            }
        ]
    },
    {
        "key": "start",
        "title": "Task start",
        "data": [
            {
                "startDate": null,
                "endDate": null,
            }
        ]
    },
    {
        "key": "wi--by-636-base--main--host-1--1-A--bottom_foam--bottom_foam_checks_1--2",
        "title": "Task wi--by-636-base--main--host-1--1-A--bottom_foam--bottom_foam_checks_1--2",
        "data": [
            {
                "startDate": 89,
                "endDate": 90
            }
        ]
    },
    {
        "key": "wi--by-636-base--main--host-1--1-A--bottom_foam--bottom_foam_checks_1--5",
        "title": "Task wi--by-636-base--main--host-1--1-A--bottom_foam--bottom_foam_checks_1--5",
        "data": [
            {
                "startDate": 96,
                "endDate": 97
            }
        ]
    },
    {
        "key": "wi--by-636-base--main--host-1--place-boxes--BasicInst",
        "title": "Task wi--by-636-base--main--host-1--place-boxes--BasicInst",
        "data": [
            {
                "startDate": 77,
                "endDate": 77
            }
        ]
    },
    {
        "key": "AssignModelToVar",
        "title": "Task AssignModelToVar",
        "data": [
            {
                "startDate": 34,
                "endDate": 34
            }
        ]
    },
    {
        "key": "wi--by-636-base--flow-ack--ShowManifest",
        "title": "Task wi--by-636-base--flow-ack--ShowManifest",
        "data": [
            {
                "startDate": 54,
                "endDate": 56
            }
        ]
    },
    {
        "key": "wi--by-636-base--DownloadMedia",
        "title": "Task wi--by-636-base--DownloadMedia",
        "data": [
            {
                "startDate": 38,
                "endDate": 53
            }
        ]
    },
    {
        "key": "wi--by-636-base--main--host-1--1-A--bottom_foam--photo-1A1",
        "title": "Task wi--by-636-base--main--host-1--1-A--bottom_foam--photo-1A1",
        "data": [
            {
                "startDate": 98,
                "endDate": 115
            }
        ]
    },
    {
        "key": "wi--by-636-base--ProductEnd",
        "title": "Task wi--by-636-base--ProductEnd",
        "data": [
            {
                "startDate": 173,
                "endDate": 173,
            }
        ]
    },
    {
        "key": "wi--by-636-base--main--host-1--1-A--bottom_foam--bottom_foam_checks_1--4",
        "title": "Task wi--by-636-base--main--host-1--1-A--bottom_foam--bottom_foam_checks_1--4",
        "data": [
            {
                "startDate": 94,
                "endDate": 95
            }
        ]
    },
    {
        "key": "wi--by-636-base--markers--marker-g-0--PutMarker-loc-0",
        "title": "Task wi--by-636-base--markers--marker-g-0--PutMarker-loc-0",
        "data": [
            {
                "startDate": 56,
                "endDate": 57
            }
        ]
    },
    {
        "key": "wi--by-636-base--main--host-1--1-B--bottom_foam--bottom_foam_checks_1--0",
        "title": "Task wi--by-636-base--main--host-1--1-B--bottom_foam--bottom_foam_checks_1--0",
        "data": [
            {
                "startDate": 165,
                "endDate": 167
            }
        ]
    },
    {
        "key": "wi--by-636-base--DisposeMedia",
        "title": "Task wi--by-636-base--DisposeMedia",
        "data": [
            {
                "startDate": 172,
                "endDate": 172
            }
        ]
    },
    {
        "key": "wi--by-636-base--ProductStart",
        "title": "Task wi--by-636-base--ProductStart",
        "data": [
            {
                "startDate": 37,
                "endDate": 37
            }
        ]
    },
    {
        "key": "wi--by-636-base--main--host-1--1-A--bottom_foam--bottom_foam_checks_1--0",
        "title": "Task wi--by-636-base--main--host-1--1-A--bottom_foam--bottom_foam_checks_1--0",
        "data": [
            {
                "startDate": 79,
                "endDate": 86
            }
        ]
    },
    {
        "key": "CarModelConditionalJumpToSequence",
        "title": "Task CarModelConditionalJumpToSequence",
        "data": [
            {
                "startDate": 35,
                "endDate": 35
            }
        ]
    },
    {
        "key": "wi--by-636-base--main--host-1--1-A--bottom_foam--bottom_foam_checks_1--3",
        "title": "Task wi--by-636-base--main--host-1--1-A--bottom_foam--bottom_foam_checks_1--3",
        "data": [
            {
                "startDate": 91,
                "endDate": 93
            }
        ]
    },
    {
        "key": "wi--by-636-base--main--host-1--1-A--lid-big-close--BasicInst",
        "title": "Task wi--by-636-base--main--host-1--1-A--lid-big-close--BasicInst",
        "data": [
            {
                "startDate": 163,
                "endDate": 164
            }
        ]
    },
    {
        "key": "wi--by-636-base--ComputeOk",
        "title": "Task wi--by-636-base--ComputeOk",
        "data": [
            {
                "startDate": 172,
                "endDate": 172
            }
        ]
    },
    {
        "key": "wi--by-636-base--EnrichJson",
        "title": "Task wi--by-636-base--EnrichJson",
        "data": [
            {
                "startDate": 38,
                "endDate": 38
            }
        ]
    },
    {
        "key": "ConditionToAskForStateReset",
        "title": "Task ConditionToAskForStateReset",
        "data": [
            {
                "startDate": 32,
                "endDate": 32
            }
        ]
    },
    {
        "key": "wi--by-636-base--main--host-1--1-A--bottom_foam--bottom_foam_checks_2--0",
        "title": "Task wi--by-636-base--main--host-1--1-A--bottom_foam--bottom_foam_checks_2--0",
        "data": [
            {
                "startDate": 115,
                "endDate": 153
            }
        ]
    },
    {
        "key": "wi--by-636-base--main--host-1--covers-open--BasicInst",
        "title": "Task wi--by-636-base--main--host-1--covers-open--BasicInst",
        "data": [
            {
                "startDate": 77,
                "endDate": 78
            }
        ]
    }
]

const hexCodes = [
  "#FF5733", "#33FF57", "#5733FF", "#FF33E6", "#33E6FF", 
  "#E6FF33", "#8A33FF", "#FF338A", "#338AFF", "#FF8A33", 
  "#33FF8A", "#8AFF33", "#A833FF", "#FFA833", "#A8FF33", 
  "#33A8FF", "#33FFA8", "#FF33A8", "#E633FF", "#FFE633", 
  "#33FFE6", "#FFE6FF", "#E6FF33", "#FF33E6", "#33E6FF"
];

if (list.length === hexCodes.length) {
  list.forEach((item, index) => {
    item["color"] = hexCodes[index];
  });
} else {
  console.log("Number of hex codes does not match the number of items in the list.");
}

console.log('list', list)

function groupTasksByTime(tasks) {
  const groupedTasks = {};

  tasks.forEach((task) => {
    const { key, data } = task;

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

//  for the following data if the key 'key' is same and start time and end time is different then give both data for start time and endtime  in one array as two objects inside a key name time, 


    return (
        <div style={{
            width: "100vw",
            height: "100vh"
        }}> 
            <RelGantt data={list}>   
                <RelGantt.Controls isRelative={true}  />
                <RelGantt.RelativeChart className="gantt-chart__body" data={list} color={"#CD5C5C"}/>
            </RelGantt>
             {/* <Gantt >   
                <Gantt.Controls isRelative={false}  />
                <Gantt.Chart className="gantt-chart__body" data={tasks} />
            </Gantt> */}
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
