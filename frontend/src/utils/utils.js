export const idGenerator = () => {
   let random = (Math.random()+' ')
    .substring(2,10)+(Math.random()+' ').substring(2,10)
    return random
} 

export const getTimestamp = () => {
    let timeStamp = new Date();
    return timeStamp.getTime()
}

export const dateFilter = (timestamp) => {
    let date = new Date(timestamp);
    return date.toDateString();
  };
  