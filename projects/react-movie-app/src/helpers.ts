// Convert time to hours and minutes
export const calcTime = (time: number) : string => {
  const hours: number = Math.floor(time / 60);
  const mins: number = time % 60;
  return `${hours}h ${mins}m`;
};
// Convert a number to money formatting
export const convertMoney = (money: number) :string => {
  const formatter: Intl.NumberFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};

//Session Storage //(5.1)
//:any because json type 
export const isPersistedState = (stateName: string) :any => {

  //get the item from the session storage with the name that we will provide
  //will return the state from the session storage if there is a state
  //otherwise it will return null
  const sessionState = sessionStorage.getItem(stateName)

  //return the right key, if not there, will return the left (null)
  //if there is something in the session state, will run what is in the right
  return sessionState && JSON.parse(sessionState);

}
