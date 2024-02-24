// usecase and for our simplyfy code
// callback <<<<<< Promise <<<<<<< async await



// sync == step by step execution
// next line of code does not executed untill the previous one is excuted

// console.log("1")
// console.log("2")
// console.log("3")
// console.log("4")

// this executed line by line

// async == dont wait for any code to be executed 

// console.log("1");

// setTimeout(()=>{
//     console.log("2");
// }, 2000)

// console.log("3");
// console.log("4");  


// callback ==> function who has not any name | It is basically a function passes through another function an argumenrt


// synchronous Callback example

// function sum(a, b){
//     console.log(a+b);
// }

// function calculator(a, b, sumCallback){
//     sumCallback(a, b);
// }

// // calculator(1, 2, sum)

// // explicitly decleare sum func
// calculator(1, 2, (a, b)=>{
//     console.log(a+b);
// })



// asynchronous callback

// function sum(){
//     console.log("3");
// }

// setTimeout(sum, 2000)

// Drawback of callback --> callback hell (it is nothing but nested callbacks which are stacked up in the call stack)


// ex of callback hell

// called in synchrnous order
// const getData = (dataId)=>{
//     console.log("data = ", dataId);
// }

// getData(1);
// getData(2);
// getData(3);

// but we need to do this in asyncrnous order

// const getData = (dataId)=>{
//     setTimeout(()=>{
//         console.log("data = ", dataId);
//     }, 2000)   
// }

// // but here also data 1, data 2 and data 3 will print in same time after 2 s

// getData(1)
// getData(2)
// getData(3)

// but if we need to print data 1 in first 2 sec then data 2 in after 2 sec and data 3 in last 2 sec


// const getData = (dataId, getNextData)=>{
//     setTimeout(()=>{
//         console.log("data = ", dataId);
//         if(getNextData){
//             getNextData()
//         }
//     }, 2000)
// }

// this is callback hell its not easy to undersatand code
// getData(1, ()=>{
//     getData(2, ()=>{
//         getData(3)
//     })
// })



// // --------------Promises----------------

// // for resolving the problem of callback hell we use promises

// // promise is a type of object 
// // which has two parameters/handelers/ callback func --> resolve, reject
// // promise has three states --> 1. pending  | 2. fullfill |  3. rejected state
// // 1. pending state means the promise hasnot return anything it is in pending state
// // 2. fullfill state means the promidse has been resolved and return resolve() function
// // 3. rejected state means the promise has been rejected and return reject() func

// // syntax for creating a promise

// const myPromise = new Promise((resolve, reject)=>{
//     console.log("data1");
//     resolve("success")
// })

// // if we want to print the data1 after 4 sec then

// const myPromise2 =  new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("data2");
//         resolve("sucess for data2") // the promise will reserve after 4 sec
//     }, 4000)
// })

// // there was also reject

// const myPromise3 =  new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("data3");
//         reject("somthing went wrong!!") // the promise will reserve after 4 sec
//     }, 2000)
// })



// how to handle a promise

// there was three scenaio 1. .then() |  2. .catch()  |  3. finally() 
// 1. .then() --> when promise returns resolve()
// 2. .catch()  --> when promise return reject() 
// 3. .finally() --> this method is alaways called either the promise return resolve or this return reject

// const myPromise4 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log("data 1");
//         resolve("sucess")
//         reject("went wrong")
//     }, 2000);
// })

// myPromise4.then((res)=>{
//     console.log(res);
// })

// myPromise4.catch((err)=>{
//     console.log(err);
// })

// myPromise4.finally(()=>{
//     console.log("This is finally");
// })


// if there was three promises where return 3 data and we want to print this one after one 2 sec aperrt then

// function aysncFunc1(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data 1");
//             resolve("success")
//             reject("Error occured")
//         }, 2000)
//     })
// }


// function aysncFunc2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data 2");
//             resolve("success")
//             reject("Error occured")
//         }, 2000)
//     })
// }

// function aysncFunc3(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data 3");
//             resolve("success")
//             reject("Error occured")
//         }, 2000)
//     })
// }

// // chaining

// // console.log("Fetching data1...");
// // aysncFunc1().then((res)=>{
// //     console.log("Fetching data2...");
// //    aysncFunc2().then(()=>{
// //     console.log("Fetching data3...");
// //     aysncFunc3().then(()=>{
// //         console.log("Completed");
// //     })
// //    })
// // })

// // another syntax  (best way)

// aysncFunc1().then(()=>{
//     return aysncFunc2()  // return promise of next code
// }).then(()=>{          // reslove next code
//     return aysncFunc3()  // return promise of next coe
// }).then(()=>{            // resolve
//     console.log("Completed");
// })

// callback hell problem by promises

// function getData(dataId){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data = ", dataId);
//             resolve("success");
//             reject("Error occured")
//         }, 2000)
//     })
// }

// getData(1).then(()=>{
//     return getData(2)
// }).then(()=>{
//     return getData(3)
// }).then(()=>{
//     console.log("completed");
// })


// -------------------async-await-------------------------

// after promise chain we have a better option to simplify the code better

// async function automatically return a promise
// await alaways executed inside a async function
// await pause the control flow of the program untill it is completed

// async function hello(){
//     console.log("hello");  // this hello() return a promise 
// }


// function getApiResponse(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log({staus: "weather data", typeData: "JSON format", location: "Delhi"});
//             resolve(200);
//             reject(404)
//         }, 2000)
//     })
// }

// async function getWeatherData(){
//     console.log("Fetching data...");
//     await getApiResponse();
//     console.log("completed");
// }

// getWeatherData()

// callback hell problem by promise chain problem by async await

// solving same problem by 3 ways

// ----------------------  1. By async await -----------------------------------

function getData(dataId){
    return new Promise((reslove, reject)=>{
        setTimeout(()=>{
            console.log("data = ", dataId);
            reslove();
        }, 2000)
    })
}

async function getAllData(){
    console.log("Fetching data1..");
    await getData(1);
    console.log("Fetching data2..");
    await getData(2);
    console.log("Fetching data3..");
    await getData(3);
    console.log("completed");
}

getAllData()



// ------------------------- 2. By Promise chain ----------------------

function getData(dataId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data = ", dataId);
            resolve("success");
            reject("Error occured")
        }, 2000)
    })
}

console.log("Fetching data1..");
getData(1).then(()=>{
    console.log("Fetching data2..");
    return getData(2)
}).then(()=>{
    console.log("Fetching data3..");
    return getData(3)
}).then(()=>{
    console.log("completed");
})

// ------------------------------ 3. By Callback hell ----------------------------


const getData = (dataId, getNextData)=>{
    setTimeout(()=>{
        console.log("data = ", dataId);
        if(getNextData){
            getNextData()
        }
    }, 2000)
}

console.log("Fetching data1..");
getData(1, ()=>{
    console.log("Fetching data2..");
    getData(2, ()=>{
        console.log("Fetching data3..");
        getData(3)
    })
})


// Conclution --> async await > Promise chain > callback hell