

const param = {
  url: "https://api.openweathermap.org/data/2.5/",
  appid: "77a13cfd7e1a5839fc667315f48290ec",
};

let ukr=[
  {
    "id": 686967,
    "name": "Zhytomyr"
},
{
  "id": 691650,
  "name": "Ternopil"
},
{
  "id": 692194,
  "name": "Sumy"
},
 {
  "id": 706950,
  "name": "Kamianets-Podilskyi"
},
{
  "id": 695594,
  "name": "Rivne"
},
{
  "id": 696643,
  "name": "Poltava"
},
{
  "id": 697107,
  "name": "Zaporozhe"
},
{
  "id": 697637,
  "name": "Pereiaslav-Khmelnytskyi"
},
{
  "id": 700568,
  "name": "Mykolaiv"
},
{
  "id": 702550,
  "name": "Lviv"
},
{
  "id": 702569,
  "name": "Lutsk"
},
{
  "id": 702658,
  "name": "Luhansk"
},
{
  "id": 706369,
  "name": "Khmelnytskyi"
},
{
  "id": 706448,
  "name": "Kherson"
},
{
  "id": 706515,
  "name": "Kerleut"
},
 {
  "id": 703448,
  "name": "Kyiv"
},
{
  "id": 703845,
  "name": "Kryvyi Rih"
},
{
  "id": 704858,
  "name": "Korsun-Shevchenkivskyi"
},
{
  "id": 705812,
  "name": "Kropyvnytskyi"
},
{
  "id": 707471,
  "name": "Ivano-Frankivsk"
},
{
  "id": 709717,
  "name": "Donetsk"
},
{
  "id": 709930,
  "name": "Dnipro"
},
{
  "id": 710735,
  "name": "Chernihiv"
},
{
  "id": 710719,
  "name": "Chernivtsi"
},
{
  "id": 710791,
  "name": "Cherkasy"
},
{
  "id": 713513,
  "name": "Alushta"
},
{
  "id": 713514,
  "name": "Alupka"
},
{
  "id": 8224454,
  "name": "Novyi Svit"
}
];

function fillSelect() {
  let sel=document.createElement('select');
  sel.setAttribute('id', 'city');
  document.querySelector('#select').appendChild(sel);
  const placeholder = document.createElement("option");
  placeholder.innerHTML = "Choose your city";
  document.querySelector("#city").appendChild(placeholder);
  for (let i = 0; i < ukr.length; i++) {
    let option = document.createElement("option");
    option.innerHTML = ukr[i].name;
    option.setAttribute("value", ukr[i].id);
    document.querySelector("#city").appendChild(option);
  }
}

fillSelect();

function showWeather(data) {
  document.querySelector("#town").innerHTML = data.name;
  document.querySelector("#feels-like").innerHTML =
    "feels like: " + Math.round(data.main.feels_like) + "&deg";
  document.querySelector("#temp").innerHTML =
    "temperature: " + Math.round(data.main.temp) + "&deg";
  document.querySelector("#clouds").innerHTML =
    "clouds: " + data.weather[0].description;
  document.querySelector("#humidity").innerHTML =
    "humidity: " + data.main.humidity + " %";
  document.querySelector("#pressure").innerHTML =
    "pressure: " + data.main.pressure + "  mm Hg";
  document.querySelector("#wind").innerHTML =
    "wind: " + data.wind.speed + " mps";
  console.log(data);
}

function getWeather() {
  const cityId = document.querySelector("#city").value;
  fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
    .then((weather) => {
      return weather.json();
    })
    .then(showWeather);
}

document.querySelector("#city").onchange = getWeather;
