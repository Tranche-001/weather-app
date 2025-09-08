import { apiFunctions } from "./apiCalls";

export const domManipulator = (() => {

  const updatePage = (cityObject) => {
    updateCityName(cityObject.address);
    updateTemperature(cityObject.currentConditions.temp);
    updateCords(cityObject.latitude, cityObject.longitude);
    updateDescription(cityObject.description);

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



  return { updatePage }
})();