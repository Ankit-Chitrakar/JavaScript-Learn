// declaration of function

function showPrice(num1){
    return num1;
}

// console.log(showPrice(400));

// spread operator and rest operator (...)

// function displayAllPrices(...price1){     // this is spread operator/ rest operator
//     return price1;
// }

function displayAllPrices(price1, price2, ...prices){     // this is rest operator 
    return {price1, price2, prices};                    // price1, price2 passes as parameter
                                                    // Rest are stored in prices in array form
}

// console.log(displayAllPrices(100, 200, 300, 500, 800));  // display in array 



// access an object through function

let myObj1 = {
    name: "Ankit",
    email: "chirtrakarankit2003@gmail.com",
    age: 90
}

function accessMyObj(anyObj){
    console.log(anyObj.email);
}

accessMyObj({
    name: "Tiasa",
    email: "tiasa@gmail.com"
})


// access an array through function

function accessMyArr(anyArr){
    console.log(anyArr[0]); 
}

accessMyArr([200, 300, 400])