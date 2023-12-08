import React,{ useState, useRef } from 'react';
import dayjs from 'dayjs';
// import RcGantt, { enUS } from 'rc-gantt';
import {GanttComponent} from './Gantt';
// import GiantChart from './reactGiantt';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function createData(len) {
  const result = []
  for (let i = 0; i < len; i++) {
    result.push({
      id: i,
      name: 'Title' + i,
      startDate: dayjs().subtract(-(i+10), 'day').format('YYYY-MM-DD'),
      endDate: dayjs().add((i+10), 'day').format('YYYY-MM-DD'),
    })
  }
  return result
}

const ganttData = [
  {
    key: "task-1",
    title: "Some task without data",
    children: [
      {
        key: "task-1-1",
        title: "Some non repeating task",
        data: {
          startDate: "2023-03-09T08:00:00.000Z",
          endDate: "2023-03-09T08:00:00.000Z",
        },
        children: [
          {
            key: "task-1-1-1",
            title: "Some weekly repeating task",
            data: {
              repeatType: "WEEK",
              fromTime: 28800,
              endDate: 64800,
              weekdays: [1, 3, 6],
            },
          },
        ],
      },
      {
        key: "task-1-2",
        title: "Some daily repeating task",
        data: {
          repeatType: "DAY",
          fromTime: 28800,
          endDate: 64800,
        },
      },
    ],
  },
  {
    key: "task-2",
    title: "Some monthly repeating task",
    data: {
      repeatType: "MONTH",
      fromTime: 28800,
      endDate: 64800,
      monthdays: [1, 3, 5, 9, 11, 14, 21, 31],
    },
  },
];

let d1 = new Date();
let d2 = new Date();
d2.setDate(d2.getDate() + 5);
let d3 = new Date();
d3.setDate(d3.getDate() + 8);
let d4 = new Date();
d4.setDate(d4.getDate() + 20);

const reactGianttData = [
  {
    id: 1,
    start: d1,
    end: d2,
    name: "Demo Task 1"
  },
  {
    id: 2,
    start: d3,
    end: d4,
    name: "Demo Task 2",
    color: "orange"
  },
  {
    id: 1,
    start: d3,
    end: d4,
    name: "Demo Task 1"
  }
];

function App() {
  // const [count, setCount] = useState(0)
  // const [data, setData] = useState(createData(4))
  // const [data, setData] = useState(data3)
  const [data, setData] = useState(ganttData)
  // const giantChartRef = useRef();

  // const [data, setData] = useState(reactGianttData)

  console.log('data', data)

  // return (
  //   <div>
  //     {/* Pass the ref to GiantChart */}
  //     <GiantChart ref={giantChartRef} data={data} />

  //     {/* Access the ref later if needed */}
  //     <button onClick={() => console.log(giantChartRef.current)}>
  //       Log GiantChart Ref
  //     </button>
  //   </div>
  // );

  // return (
  //   <GiantChart data={data}/>
  // )

  return (
    <GanttComponent/>
    // <div>htfythf</div>
  )

  // return (
  //   <div style={{ width: '100%', height: 500 }}>
  //     <RcGantt
  //       data={data}
  //       // dependencies={dependencies}
  //       columns={[
  //         {
  //           name: 'name',
  //           label: 'Custom Title',
  //           width: 100,
  //         },
  //       ]}
  //       locale={enUS}
  //       onUpdate={async (row, startDate, endDate) => {
  //         console.log('update', row, startDate, endDate)
  //         setData(prev => {
  //           const newList = [...prev]
  //           const index = newList.findIndex(val => val.id === row.id)
  //           newList[index] = {
  //             ...row,
  //             startDate: dayjs(startDate).format('YYYY-MM-DD'),
  //             endDate: dayjs(endDate).format('YYYY-MM-DD'),
  //           }
  //           return newList
  //         })
  //         return true
  //       }}
  //     />
  // </div>
  // )
}

export default App
