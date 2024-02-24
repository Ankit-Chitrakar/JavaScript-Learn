// console.log("Hello");

// api calling before fetch using XMLHttp Request

const requestUrl = 'https://api.github.com/users/Ankit-Chitrakar'
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl);
    xhr.onreadystatechange = function (){    // alawys use function in XMLHttpRequest arrow func is not working
        console.log(xhr.readyState);
        if (xhr.readyState === 4){
            const data = JSON.parse(this.responseText)
            console.log(data);
        }
    }
    xhr.send();
