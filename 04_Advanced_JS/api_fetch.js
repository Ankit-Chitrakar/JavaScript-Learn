// console.log("hello");

// calling random user.me api and get data some random user using fetch method

const baseURL = "https://randomuser.me/api/";

// get data using async await

const getData = async () => {
  console.log("Fetching data....");
  let response = await fetch(baseURL);
  console.log(response); // this response is not readable so we parse this JSON to javascript object

  let data = await response.json();

  console.log(data);
  console.log(data["info"]); // calling object
  console.log(data["results"][0].email); // calling array in it
};

// get data using promise chaining

const getData1 = () => {
  fetch(baseURL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let userDetails = data["results"][0].name;
      console.log(
        `Name : ${userDetails.title} ${userDetails.first} ${userDetails.last}`
      );
    });
};

// getData()
// getData1()

// --------------------- HTTP --> Hyper Text Transfer Protocol ---------------------
// Request and Response

// HTTP request Methods

// mainly five are use

// 1. GET --> most commonly use to retrieve any data from any resources (Server)            ==> VIEW
// 2. POST --> most commonly use to add data to any resources (Server)                      ==> ADD
// 3. PUT  --> mostly use to change/replace (update) the total resource                     ==> UPDATE
// 4. PATCH --> mostly use to change/replace (update) any particular part of the resource   ==> UPDATE
// 5. DELETE --> mostly use to delete the resources                                         ==> DELETE

// HTTP Response Status Code

// 1 * * --> Informational
// 2 * * --> Success
// 3 * * -> Redirectional
// 4 * * --> Client Error
// 5 * * --> Server Error

// some status code

// 100 -> continue
// 102 --> processing
// 200 --> ok
// 201 --> created
// 202 --> accepted
// 307 --> temprarily redirected
// 308 --> permenently redirected
// 400 --> Bad request
// 401 --> Unauthorized
// 402 --> payment required
// 404 --> Not Found
// 500 --> Internal Server Error
// 504 --> Gateway Timeout

// // ----------------------------------- Request a POST request on JSON PlaceHolder server --------------------

// const baseURLPost = "https://jsonplaceholder.typicode.com/posts";

// let option = {
//     method: "POST",
//     headers: {
//         "Content-type" : "application/json"
//     },
//     body: JSON.stringify({
//         title: "Ankit Chitrakar",
//         body: 'Total dhamal',
//         userId: 546
//     })
// }

// // using promises chain

// const postReq = ()=>{
//     fetch(baseURLPost, option).then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         console.log("Put request completed");
//         console.log(data);
//     })
// }

// // using async await

// const postReq1 = async()=>{
//     let response = await fetch(baseURLPost, option);
//     let data = await response.json();

//     console.log(data);
// }

// // postReq();
// postReq1();   // add the data to json placegholder server

// // retrieve our data fro server using get request based on id

// const urlForGet = "https://jsonplaceholder.typicode.com/posts"

// const getDataById = async(id)=>{
//     let response = await fetch(`${urlForGet}/${id}`)
//     let data = await response.json();

//     console.log(data);
// }

// getDataById(1)    // retrive our data  from json placeholder server

// Github account by userName

const getUserByUserName = async (userName) => {
  let response = await fetch(`https://api.github.com/users/${userName}`);
  let data = await response.json();
    return data;
};


getUserByUserName("Ankit-Chitrakar").then((res)=>{
    // console.log(res);

    console.log(res.avatar_url);

    // let myArrofUser = Object.entries(res)

    // // console.log(myArrofUser);

    // myArrofUser.forEach((userDetails)=>{
    //     console.log(userDetails);
    //     userDetails.map((data)=>{
    //         console.log(data);
    //     })
    // })
})  







// how to convert object to array  of arays
// const myObj = {
//   avatar_url: "https://avatars.githubusercontent.com/u/98268401?v=4",
//   bio: "Freelancer || Video Editor at (Ali Kawser-The Mentor, Sammy Akthar) || B.Tech in Electronics & Communication Engineering ||  Front End Web Developer ||",
//   blog: "",
//   company: null,
//   created_at: "2022-01-23T14:02:33Z",
//   events_url: "https://api.github.com/users/Ankit-Chitrakar/events{/privacy}",
// };

// let myArr = Object.entries(myObj)

// // console.log(myArr);

// myArr.forEach((arr)=>{
//     // console.log(arr);
//     // console.log(arr[1]);

//     arr.map((data)=> console.log(data));
    
// })