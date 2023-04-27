var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
var token = "cdc5d88b785716d0a3a5855720dab85be73d4a6d";
var count = 4
const input = document.querySelector('.form-adress')
let suggestions = document.querySelector('#suggestions-wrapper')
let citySuggestion = document.querySelectorAll('.citySuggestion')
console.log(citySuggestion)

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
        "radius_meters": 45000
    }]
        })
    }
    let cities = []
    fetch(url, options)
    .then(response => response.json())
    // .then(result => result.suggestions.map(item => {
    //     let arr = []
    //     console.log(typeof item.value)
    //     return arr.push(item.value)
    // }))
    .then(data =>  {
        cities.push(...data.suggestions)
        const html = cities.map(city => {
            return `
            <li class="citySuggestion">
            <span class="name">${city.value}</span>
          </li>
            `
        }).join('')
        console.log(html)
        suggestions.innerHTML = html
        let liVal = suggestions.querySelectorAll('.citySuggestion')
        console.log(liVal)
        //innerText
        liVal.forEach(item => {
            item.addEventListener('click', (e)=> {
                console.log(e.target.textContent)
                input.value = e.target.textContent
                suggestions.innerHTML = `<li class="citySuggestion">
               
              </li>` 
            })
        })
    }
    )
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
input.addEventListener('keyup', getSuggestions)



function displayCity(arr) {
    const html = arr.map(arr => {
        return `
        <li>
        <span class="name">${arr.value}</span>
      </li>
        `
    })
    suggestions.innerHTML = html
}
