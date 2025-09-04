export const apiFunctions = (() => {

  async function getCityWeatherData(location) {
    const cityWeatherData = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=8S9DCAX8MUJWBZ9ATJ8BQH9BV`,  { mode: "cors" });
    const cityWeatherDataJson = await cityWeatherData.json();
    console.log(cityWeatherDataJson);
    return cityWeatherDataJson
  }


  return { getCityWeatherData }
})();




