let firstDiv = document.createElement('div')
document.body.append(firstDiv)
firstDiv.setAttribute('class','container')
var title = document.getElementById('title');

let h1 = document.createElement('h1')
firstDiv.append(h1)
h1.innerText = "Rest Countries List"
h1.id="title"
h1.setAttribute('class',' text-center')


let rowDiv = document.createElement('div')
firstDiv.append(rowDiv)
rowDiv.setAttribute('class','row mt-5 ')

fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then((data)=>{
  let div  = document.querySelector('.row')

  div.innerHTML = data.map((val)=>`
  <div class=" col-md-4 mb-3">
  <div class="card">
    <div class="card-header">
     <h3>${val.name.common}</h3>
    </div>
    <div class="card-body">
    <div> <img src="${val.flags.svg}" alt=""></div>
    <div class="cBody mt-2">
    <p class="card-text"><b>Region :</b> ${val.region}  </p>
    <p class="card-text"><b>Capital :</b> ${val.capital}</p>
    <p class="card-text"><b>Country Code :</b> ${val.fifa}</p>
    <a class="btn btn-primary" onclick="WeatherFunc(${val.latlng[0]}, ${val.latlng[1]})">Click for Weather</a>
    </div>
    </div>
  </div>
  </div>

  `).join(' ')
})

let apiKey = "00113f369758fba0ae4ee18b5c4f35ea"

async function WeatherFunc(lat, lon){
  let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
  let res = await fetch(weatherUrl)
  let data = await res.json()
  alert(`
  ${data.weather[0].main}
  ${data.weather[0].description} 
  `)

}