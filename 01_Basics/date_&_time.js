// declaring date

let myDate = new Date();

// console.log(myDate);

// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2003, 1, 26, 7, 20);  // year, month, day, hh, mm, ss, am/pm

// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.getFullYear());

let myCreatedDate2 = new Date("1970-01-02 13:25")  // declaring date method two
// console.log(myCreatedDate2.toLocaleString());

console.log(myCreatedDate2.toLocaleString('default', {
    weekday: "long"
})
);
// let liveTime = Date.now();

// console.log(Math.floor(liveTime / 1000));

// ******create an alarm which is ring on 12:00:00 am in 01/01/2024

let futureTiming = new Date(2024, 0, 1, 7, 20, 50);

// console.log(futureTiming.toLocaleString());

let alarmRingTime = futureTiming.getTime();

let liveTime = Date.now();

// console.log(liveTime);

let ringingAfter = alarmRingTime - liveTime
let remainingSec = (Math.floor(ringingAfter / 1000));
let remaingHour = Math.floor(remainingSec / 3600);

let ring = 24 - remaingHour;
// console.log(ring)




