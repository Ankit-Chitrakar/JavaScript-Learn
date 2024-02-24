// first identify which index player give a chal

const board = document.querySelector('.board');

// create an array of size 9 which contains initially null values because 
// when a player does not give any chal to that indx it was initialize as null
// then change according to player X or Player 0

let currPlayer = 'X'

const chalArr = Array(9).fill(null)
// console.log(chalArr);

function checkWinner(){
    if(chalArr[0] != null && chalArr[0] === chalArr[1] && chalArr[1] === chalArr[2] || 
        chalArr[3] != null && chalArr[3] === chalArr[4] && chalArr[4] === chalArr[5] ||
        chalArr[6] != null && chalArr[6] === chalArr[7] && chalArr[7] === chalArr[8] ||
        chalArr[0] != null && chalArr[0] === chalArr[3] && chalArr[3] === chalArr[6] ||
        chalArr[1] != null && chalArr[1] === chalArr[4] && chalArr[4] === chalArr[7] ||
        chalArr[2] != null && chalArr[2] === chalArr[5] && chalArr[5] === chalArr[8] ||
        chalArr[0] != null && chalArr[0] === chalArr[4] && chalArr[4] === chalArr[8] ||
        chalArr[2] != null && chalArr[2] === chalArr[4] && chalArr[4] === chalArr[6] ){
            // winner logic
        document.write("winner ", currPlayer);
        return;
    }
    
    // draw logic
    if(!chalArr.some((e)=> e === null)){
        document.write("Its a draw!!")
    }

}

document.querySelector('.turn').innerHTML = `Player ${currPlayer} move a chal..`

board.addEventListener('click', (e)=>{
    // console.log(e.target.id);

    index = Number(e.target.id)

    // if user click same index of another player click the another index then prevent this
    if(chalArr[index] === null){  
        // fill this particular index with player chal sign
        chalArr[index] = currPlayer
        // console.log(chalArr);
        e.target.innerHTML = currPlayer
    }

    if(checkWinner()){
        return;
    }

    // next step was change the currPlayer
    currPlayer = currPlayer === "X" ? "O" : "X"

    if(document.querySelector('.turn') != null){
        document.querySelector('.turn').innerHTML = `Player ${currPlayer} move a chal..`
    }

})

