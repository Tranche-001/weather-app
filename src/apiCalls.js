export const apiFunctions = (() => {
  async function getCityWeatherData(location) {
    const cityWeatherData = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=8S9DCAX8MUJWBZ9ATJ8BQH9BV`,  { mode: "cors" });
    const cityWeatherDataJson = await cityWeatherData.json();
    return cityWeatherDataJson;
    
  }

  async function getCityName(location) {
    const cityWeatherDataJson = await getCityWeatherData(location);
    //Standardize the name to have only the first letter as UpperCase and the rest as lowerCase
    //that means that an input of loNDON -> London
    let cityName = cityWeatherDataJson.address.toLowerCase();
    cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
    return cityName;
  }


  return { getCityWeatherData, getCityName }
})();




