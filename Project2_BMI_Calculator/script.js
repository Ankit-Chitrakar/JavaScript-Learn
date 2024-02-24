// console.log("hello")

// first select all the input and radio field

const height = document.querySelector('#heightInput')
const weight = document.querySelector('#weightInput')

const calculate = document.querySelector('#calculate');
const result = document.querySelector('.resultValue')

const tr = document.querySelectorAll('tr');
// console.log(tr);



calculate.addEventListener('click', (e)=>{
    e.preventDefault();

    for(let i = 0; i <= 6; i++){
        tr[i].style.backgroundColor = "#0c0226"
    }
    
    // console.log(typeof parseInt(height.value));

    let heightCM = parseInt(height.value);
    let weightKG = parseInt(weight.value)

    if(isNaN(heightCM) || isNaN(weightKG)){
        alert('Please fill Height & Weight!')
    }
    else if(heightCM <= 0 || weightKG <= 0){
        alert('Please fill Legitimate value!')
    }
    else{
        // console.log(heightCM.value, weightKG.value);
        let heightM = (heightCM/100).toFixed(2);
        let bmiIndex = (weightKG / Math.pow(heightM, 2)).toFixed(2);
        // console.log(bmiIndex);
        result.innerHTML = bmiIndex;
    }

    if(result.innerHTML < 18.5){
        tr[1].style.backgroundColor = '#bb0707'
    }
    else if(result.innerHTML >= 18.5 && result.innerHTML <= 24.99){
        tr[2].style.backgroundColor = '#bb0707'
    }
    else if(result.innerHTML >= 25.0 && result.innerHTML <= 29.99){
        tr[3].style.backgroundColor = '#bb0707'
    }
    else if(result.innerHTML >= 30.0 && result.innerHTML <= 34.99){
        tr[4].style.backgroundColor = '#bb0707'
    }
    else if(result.innerHTML >= 35.0 && result.innerHTML <= 39.99){
        tr[5].style.backgroundColor = '#bb0707'
    }
    else{
        tr[6].style.backgroundColor = '#bb0707'
    }

  
   
})