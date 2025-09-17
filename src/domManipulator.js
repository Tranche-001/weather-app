import { apiFunctions } from "./apiCalls";

export const domManipulator = (() => {

  const updatePage = (cityObject) => {
    updateCityName(cityObject.address);
    updateTemperature(cityObject.currentConditions.temp);
    updateCords(cityObject.latitude, cityObject.longitude);
    updateDescription(cityObject.description);
    updateAlert(cityObject.alerts)
    updateCurrConditions(cityObject);
    updateCards(cityObject);

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
    coordsNode.textContent = cityCoordsLatitude + ", " + cityCoordsLongitude;
  }

  const updateDescription = (cityDescription) => {
    const descriptionNode = document.querySelector("#description");
    descriptionNode.textContent = cityDescription;
  }



  const updateAlert = (cityAlert) => {
    const alertNode = document.querySelector('.alert');
    if (cityAlert.length > 0) {
      alertNode.textContent = cityAlert;
    }

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

    //parseFloat(item.toFixed(2)); is to show only the first two digits, if they exist.
    const windSpeedNode = document.querySelector('#wind-speed');
    windSpeedNode.textContent = parseFloat(cityObject.currentConditions.windspeed).toFixed(2);

    //m/s -> km/h is *3.6
    const windSpeedKmhNode = document.querySelector('#wind-speed-kmh');
    windSpeedKmhNode.textContent = (parseFloat(cityObject.currentConditions.windspeed) * 3.6).toFixed(2);

    const windCurrSpeedNode = document.querySelector('#wind-current-speed');
    windCurrSpeedNode.textContent = (parseFloat(cityObject.days[0].windspeed)*3.6).toFixed(2);

    const windCurrSpeedKmhNode = document.querySelector('#wind-current-speed-kmh');
    windCurrSpeedKmhNode.textContent = (parseFloat(cityObject.days[0].windspeed) * 3.6).toFixed(2);

    const solarEnergyNode = document.querySelector('#solar-energy');
    solarEnergyNode.textContent = cityObject.currentConditions.solarenergy;

    const visibilityNode = document.querySelector('#visibility')
    visibilityNode.textContent = cityObject.currentConditions.visibility;



  }



  /*updateCard auxiliary function */

  const returnWeekDayName = (date) => {
    let newDate = new Date(date);
    let dayNum = newDate.getDay();
    console.log(dayNum);
    switch (dayNum) {
      case 0:
        return 'Sunday';
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Fryday';
      case 6:
        return 'Saturday';

    }
  }

  const decideNewIcon = (icon) => {
    console.log(icon)
    switch(icon) {
      case "rain":
        return "fi fi-rs-cloud-showers-heavy";
      case "clear-day":
        return "fi fi-rs-sun";
      case "cloudy":
        return "fi fi-rs-clouds";
      case "partly-cloudy-day":
        return "fi fi-rs-clouds-sun";
      default:
        return "fi fi-rs-sun";
    }
  }

  const updateCards = (cityObject) => {
    for (let i = 0; i < 4; i++) {
      const dayNode = document.querySelector(`#day${i}`);

      const dayIcon = document.querySelector(`#icon${i}`);
      dayIcon.setAttribute('class', decideNewIcon(cityObject.days[i].icon))


      const dayConditionsNode = dayNode.querySelector('.conditions');
      dayConditionsNode.textContent = cityObject.days[i].conditions;
      const dayTemperatureNode = dayNode.querySelector('.temperature');
      dayTemperatureNode.textContent = `${cityObject.days[i].temp} °C`;

      const minTempNode = dayNode.querySelector('.min-temp');
      minTempNode.textContent = cityObject.days[i].tempmin;

      const maxTempNode = dayNode.querySelector('.max-temp');
      maxTempNode.textContent = cityObject.days[i].tempmax;

      const precipitationNode = dayNode.querySelector('.precipitation');
      precipitationNode.textContent = `${cityObject.days[i].precipprob}% chance of rain`;

      //If the day is after tomorrow, show the dayName we are talking about;
      if (i > 1) {
        const dayHeader = dayNode.querySelector('h3');

        dayHeader.textContent = returnWeekDayName(cityObject.days[i].datetime);
      }
    }



  }


  return { updatePage }
})();