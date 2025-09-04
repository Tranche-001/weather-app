import { apiFunctions } from "./apiCalls";

export const domManipulator = (() => {

  const updatePage = (cityObject) => {
    updateCityName(cityObject.address);
    updateTemperature(cityObject.currentConditions.temp);
    
  }

  const updateCityName = (cityName) => {
    //make city name Standardized so that 'lonDon' -> 'London'
    // cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
    const cityNode = document.querySelector('#city-name');
    cityNode.textContent = cityName;
  }

  const updateTemperature = (cityTemperature) => {
    const temperatureNode = document.querySelector('#temperature');
    temperatureNode.textContent = cityTemperature;

  }



  return { updatePage }
})();