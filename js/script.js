let search = document.querySelector('.whather-input')
let search_btn = document.querySelector('.whather-input-btn')

search_btn.addEventListener('click' , () => {
    document.querySelector('.whather-context').style.display = 'block'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=879093899682eca98a90f5805d844f22`)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            document.querySelector('.whather-name').textContent = `${data.name}`
            document.querySelector('.whather-name-deg').innerHTML = `${Math.round(data.main.temp - 273)}&deg;`
            document.querySelector('.whather-context img').src = `https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png`

        })
    search.value = ''
})




// 879093899682eca98a90f5805d844f22

// https://api.openweathermap.org/data/2.5/weather?q={city%20name}