
export const getDayDifference = (inputDate:string) => {
    const today = new Date();
    const otherDay = new Date(inputDate);

    const difference = Math.abs(otherDay.getTime() - today.getTime());
    let differenceInDays = Math.floor(difference/(1000*60*60*24)) +1;

    if (new Date() > new Date(inputDate)) {
        differenceInDays = (differenceInDays * -1)+1;
    }
    return differenceInDays;
}

export const getDayDiffTwoDates = (firstDate:string, lastDate:string) => {
    const today = new Date(firstDate);
    const otherDay = new Date(lastDate);

    const difference = Math.abs(otherDay.getTime() - today.getTime());
    let differenceInDays = Math.floor(difference/(1000*60*60*24)) +1;

    if (otherDay > today) {
        differenceInDays = (differenceInDays * -1)+1;
    }
    return differenceInDays;
}


export const getNearestDay = (arrayOfDates:string[]) => {
    //now we have an array of dates, want to get the nearest date
  //so if we are on index 1 compare with nearest, set as nearest if it is less and also more than today
  //go to index 2, compare with nearest, if so, set to set as nearest if not continue
  console.log(arrayOfDates);

  if (arrayOfDates.length === 0) {
    return "--";
  } else if (arrayOfDates.length === 1) {
    return arrayOfDates[0];
  } else {

    let nearestCheckDate = arrayOfDates[0]; //oldest by default and keep increasing
    let today = new Date();
    const thisMonth = today.getMonth()+1;
    const todayString = today.getFullYear() + "-" + thisMonth + "-" + today.getDate();

    // console.log(todayString);
    for (let i=1; i<arrayOfDates.length; i++) {
        if (arrayOfDates[i] < nearestCheckDate && arrayOfDates[i] > todayString) {
        nearestCheckDate = arrayOfDates[i];

        }
    }

    // console.log(nearestCheckDate);

        if(nearestCheckDate > todayString) {
            return nearestCheckDate
        } else if (nearestCheckDate.length < 1 ) {
            return false;
        } else {
        return "overdue";
        }

    }
}


export const getNearestDay2 = (arrayOfDates:string[]) => {
    //now we have an array of dates, want to get the nearest date
  //so if we are on index 1 compare with nearest, set as nearest if it is less and also more than today
  //go to index 2, compare with nearest, if so, set to set as nearest if not continue
  console.log(arrayOfDates);
  if (arrayOfDates.length === 0) {
    return "--";
  } else {

    let nearestCheckDate = arrayOfDates[0]; //oldest by default and keep increasing
    let today = new Date();
    let todayString = today.getFullYear() + "-" + today.getMonth()+1 + "-" + today.getDate();

    // console.log(todayString);
    for (let i=1; i<arrayOfDates.length; i++) {
        if (arrayOfDates[i] < nearestCheckDate) {
        nearestCheckDate = arrayOfDates[i];

        }
    }

    // console.log(nearestCheckDate);

    if(nearestCheckDate) {
        return nearestCheckDate
    } 
    //else if (nearestCheckDate.length < 1 ) {
    //     return "--";
    // }
    else {
        return "no checks yet";
    }
    
  }
}