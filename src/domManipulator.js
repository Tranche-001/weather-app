import { apiFunctions } from "./apiCalls";

export const domManipulator = (() => {

  const updatePage = (cityObject) => {
    updateCityName(cityObject.address);
    updateTemperature(cityObject.currentConditions.temp);
    updateCords(cityObject.latitude, cityObject.longitude);
    updateDescription(cityObject.description);

    updateCurrConditions(cityObject);

  }

  const updateCityName = (cityName) => {
    //make city name Standardized so that 'lonDon' -> 'London'
    //standard: First letter capital, rest lower case.
    cityName = cityName.toLowerCase();
    cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
    const cityNode = document.querySelector('#city-name');
    cityNode.textContent = cityName;
  }

  const updateTemperature = (cityTemperature) => {
    const temperatureNode = document.querySelector('#temperature');
    temperatureNode.textContent = cityTemperature;

  }

  const updateCords = (cityCoordsLatitude, cityCoordsLongitude) => {
    //Make it show only two digits
    cityCoordsLatitude = parseFloat(cityCoordsLatitude.toFixed(2));
    cityCoordsLongitude = parseFloat(cityCoordsLongitude.toFixed(2));
    const coordsNode = document.querySelector('#coords');
    coordsNode.textContent =  cityCoordsLatitude + ", " + cityCoordsLongitude;
  }

  const updateDescription = (cityDescription) => {
    const descriptionNode = document.querySelector("#description");
    descriptionNode.textContent = cityDescription;
  }




  // updateConditions
  const updateCurrConditions = (cityObject) => {
    const conditionsNode = document.querySelector('#conditions');
    conditionsNode.textContent = cityObject.currentConditions.conditions;
    
    const temperatureNode = document.querySelector('.temperature');
    temperatureNode.textContent = cityObject.temperature;
    
    const feelsLikeTemperatureNode = document.querySelector('#feels-like')
    feelsLikeTemperatureNode.textContent = cityObject.currentConditions.feelslike;
    
    const dewNode = document.querySelector('#dew');
    dewNode.textContent = cityObject.currentConditions.dew;
    
    const humidityNode = document.querySelector('#humidity')
    humidityNode.textContent = cityObject.currentConditions.humidity;
    
    const rainFallNode = document.querySelector('#rain-fall');
    rainFallNode.textContent = cityObject.currentConditions.precip;
   
    const rainProbabilityNode = document.querySelector('#rain-probability');
    rainProbabilityNode.textContent = cityObject.currentConditions.precipprob;
   
    const pressureNode = document.querySelector('#pressure');
    pressureNode.textContent = cityObject.currentConditions.pressure;
   
    const snowNode = document.querySelector('#snow-fall');
    snowNode.textContent = cityObject.currentConditions.snow;
   
    const snowDepthNode = document.querySelector('#snow-depth');
    snowDepthNode.textContent = cityObject.currentConditions.snowdepth;
   
    const sunriseNode = document.querySelector('#sunrise');
    sunriseNode.textContent = cityObject.currentConditions.sunrise;
   
    const sunsetNode = document.querySelector('#sunset');
    sunsetNode.textContent = cityObject.currentConditions.sunset;
   
    const windDirectionNode = document.querySelector('#wind-direction')
    windDirectionNode.textContent = cityObject.currentConditions.winddir;
   
    const windSpeedNode = document.querySelector('#wind-speed');
    windSpeedNode.textContent = cityObject.currentConditions.windspeed
   
    const windSpeedKmhNode = document.querySelector('#wind-speed-kmh');
    windSpeedKmhNode.textContent = cityObject.currentConditions.windspeed *3.6;
    
    const windCurrSpeedNode = document.querySelector('#wind-current-speed');
    windCurrSpeedNode.textContent = cityObject.days[0].windspeed;

    const windCurrSpeedKmhNode = document.querySelector('#wind-current-speed-kmh');
    windCurrSpeedKmhNode.textContent = cityObject.days[0].windspeed *3.6;
    
    const solarEnergyNode = document.querySelector('#solar-energy');
    solarEnergyNode.textContent = cityObject.currentConditions.solarenergy;
    
    const visibilityNode = document.querySelector('#visibility')
    visibilityNode.textContent = cityObject.currentConditions.visibility;

    
      
  }


  return { updatePage }
})();