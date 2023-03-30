var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
var token = "cdc5d88b785716d0a3a5855720dab85be73d4a6d";
var count = 4
const input = document.querySelector('.form-adress')
let suggestions = document.querySelector('#suggestions-wrapper')



function getSuggestions() {
    let streetArr = []
    var query = input.value;
    var options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify({
            "query": query,
            count: count,
            "locations_geo": [{
        "lat": 55.75583, 
        "lon": 37.6173,
        "radius_meters": 25000
    }]
        })
    }
    fetch(url, options)
    .then(response => response.json())
    // .then(result => result.suggestions.map(item => {
    //     let arr = []
    //     console.log(typeof item.value)
    //     return arr.push(item.value)
    // }))
    .then(([a,b, ...rest]) => console.log(a,b))
    .catch(error => console.log("error", error));

    // streetArr.forEach(el => suggestions.appendChild(`<p>${el}</p>`))
    // streetArr.forEach((item)=>{
    //     let suggestions = document.querySelector('#suggestions-wrapper')
    //     suggestions.innerText = item;
    //     suggestions.appendChild(li);
    //   })
    // console.log(streetArr)
}
input.addEventListener('change', getSuggestions)

