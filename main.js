const inp =document.getElementById('inp')
const btn =document.getElementById('btn')
const cityName = document.getElementById('cityName')
const country = document.getElementById('country')
const gradus = document.getElementById('gradus')
const dez = document.getElementById('des')
const icon  =document.getElementById('icon')
const nav  =document.getElementById('nav')
const getData = async(city)=>{
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d58082d2702339083a04cf97256b417f`)

    const data = await res.json()
    console.log(data);

        return data
    }



 btn.addEventListener('click', ()=>{
    getData(inp.value).then((data)=>{
        console.log(data);
        cityName.innerHTML = data.name
        country.innerHTML = data.sys.country
        dez.innerHTML = data.weather[0].description
        gradus.innerHTML = Math.round( data.main.temp) + ` C°`
        icon.setAttribute('src' , `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    })

 })