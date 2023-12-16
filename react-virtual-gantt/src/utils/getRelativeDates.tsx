export const getRelativeDates = (data: any) => {
  const arrayOfHours = data.map((ele: any) => {
    return ele.data[0].endDate;
  });
  const maxHour = Math.max(...arrayOfHours);

  const resultArray = Array.from(Array(maxHour).keys()).map((i) => i + 1);

  return resultArray;
};

// i want to create an array of length of the maximum value of this array;

// first of all u need to find the max value from the array then generate the array
