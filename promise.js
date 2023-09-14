// const getData = new Promise((resolve, reject) => {
//     // resolve(56665);
//     reject('No Data Available');
// })
// console.log(getData);
// getData.then(data => console.log(data));
// getData.then(data => console.log(data + 22));

// rejection handle
// getData
//     .then(data => console.log(data))
//     .catch(err => console.log('ERR:' ,err))

const getData2 = new Promise((resolve, reject) => {
    const num = Math.random()*10;
    console.log(num);
    if(num < 5){
        resolve(56665);
    }
    else {
        reject('No Data Available');
    }
})
getData2
    .then(data => console.log(data))
    .catch(err => console.log('ERR:' ,err))