const jokes = document.querySelector('.joke');
const btn = document.getElementById('btn');

const generateJokes = () => {
    const setHeader = {
        headers: {
            Accept: "application/json"
        }
    };

    const url = "https://icanhazdadjoke.com";

    fetch(url, setHeader)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            jokes.innerHTML = data.joke;
        })
        .catch(error => {
            console.log(`The error is ${error}`);
        });
};


// Calling a function
btn.addEventListener('click', generateJokes);
generateJokes();

function copyJoke() {
    const element = document.createElement("textarea");
    element.value = jokes.textContent;
    document.body.appendChild(element);
    element.select();
    document.execCommand("copy");
    alert("copied");
    document.body.removeChild(element);
}