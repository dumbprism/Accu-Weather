let loc = document.getElementById('location')
let get_location = document.getElementById('submit-location')
let API_key = 'V2M49MPBGEZV6U2PQDR6K286H'
let location_card = document.getElementById('location-card')


function getLocation(){
    let location = loc.value
fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${API_key}`).then(
    function(response){
        return response.json()
    }
).then(
    function(message){
        
        console.log(message)
     let days = message.days
     
       let location_card = document.createElement('div')
       location_card.setAttribute('id','location-card')

       let textContainer = document.createElement('div')
       textContainer.setAttribute('id','text-container')

        let address = document.createElement('p')
        address.setAttribute('id','address')
        address.textContent = message.address

        let datetime = document.createElement('p')
        datetime.setAttribute('id','date-time')
        datetime.textContent = message.currentConditions.datetime

        textContainer.appendChild(address)
        textContainer.appendChild(datetime)

       let celsius_temperature = document.createElement('p')
       celsius_temperature.setAttribute('id','celsius-temperature')
       celsius_temperature.textContent = `${message.currentConditions.temp}° C`

       let farenheit_temperature = document.createElement('p')
       farenheit_temperature.setAttribute('id','farenheit-temperature')
       farenheit_temperature.textContent = `${(parseFloat(message.currentConditions.temp)*1.8) + 32} F`

       let conditions = document.createElement('p')
       conditions.setAttribute('id','condition')
       conditions.textContent = message.currentConditions.conditions

       let description = document.createElement('p')
       description.setAttribute('id','description')
       description.textContent = message.description


       location_card.appendChild(textContainer)
       
       location_card.appendChild(celsius_temperature)
       location_card.appendChild(farenheit_temperature)
       location_card.appendChild(conditions)
       location_card.appendChild(description)

       

       

       document.body.appendChild(location_card)

       let container = document.createElement('div')
       container.setAttribute('id','date-container')

       

       for(let i = 1;i<10;i++){
       
       
        let div = document.createElement('div')
        div.setAttribute('id','days-card')
        let date = document.createElement('p')
        date.setAttribute('id','day-date')
        date.textContent = days[i].datetime

        let currentTempLabel = document.createElement('p')
        currentTempLabel.setAttribute('id','current-temp-label')
        currentTempLabel.textContent = 'Current'

        let currentTemp = document.createElement('p')
        currentTemp.setAttribute('id','current-temp')
        currentTemp.textContent =` ${days[i].temp}°C`

        let minmaxdiv = document.createElement('div')
        minmaxdiv.setAttribute('id',',min-max')

        let maxdiv = document.createElement('div')
        maxdiv.setAttribute('id','max-div')

        let maxTempLabel = document.createElement('p')
        maxTempLabel.setAttribute('id','max-temp-label')
        maxTempLabel.textContent = 'Max'


        let maxTemp = document.createElement('p')
        maxTemp.setAttribute('id','max-temp')
        maxTemp.textContent = days[i].tempmax

        maxdiv.appendChild(maxTempLabel)
        maxdiv.appendChild(maxTemp)


        let mindiv = document.createElement('div')
        mindiv.setAttribute('id','min-div')

        let minTempLabel = document.createElement('p')
        minTempLabel.setAttribute('id','min-temp-label')
        minTempLabel.textContent = 'Min'
        
        let minTemp = document.createElement('p')
        minTemp.setAttribute('id','min-temp')
        minTemp.textContent = days[i].tempmin

        mindiv.appendChild(minTempLabel)
        mindiv.appendChild(minTemp)

        minmaxdiv.appendChild(maxdiv)
        minmaxdiv.appendChild(mindiv)

        let desc = document.createElement('p')
        desc.setAttribute('id','date-desc')
        desc.textContent = days[i].description

        div.appendChild(date)
        div.appendChild(currentTempLabel)
        div.appendChild(currentTemp)
        div.appendChild(minmaxdiv)
        div.appendChild(desc)
        

        container.appendChild(div)

        document.body.appendChild(container)

        // console.log(days[i].datetime)
        // console.log(days[i].temp)
    }

       
       
    }
)
}


get_location.addEventListener('click',getLocation)
