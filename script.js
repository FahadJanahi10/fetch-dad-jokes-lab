const form = document.getElementById("form")
const button = document.getElementById("button")

const apiURL = "https://icanhazdadjoke.com/"

const fetchJokes = () =>{
    fetch(apiURL, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            "Content-Type" : "Application/json",
        }
    })
    .then(jsonData=>{
        return jsonData.json()
    })
    .then(getJoke=>{
        console.log(getJoke.joke)
    })
}
button.addEventListener("click",()=>{
    fetchJokes()
})

