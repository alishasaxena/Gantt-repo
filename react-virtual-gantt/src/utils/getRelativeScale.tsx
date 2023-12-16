export const getRelativeScale = (data: any, dimension: any) => {
  let maxLength = 0;
  data?.forEach((task: any) => {
    task?.data?.forEach((item: any) => {
      const endDate = parseInt(item.endDate, 10);
      if (endDate > maxLength) {
        maxLength = endDate;
      }
    });
  });

  if (dimension === 'hour') {
    return Array.from({ length: maxLength }, (_, index) => index + 1);
  } else {
    return Array.from({ length: maxLength }, (_, index) => (index + 1) * 60);
  }
};
