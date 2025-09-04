import { apiFunctions } from "./apiCalls";

export const domManipulator = (()=>{
  
  const updateCityName = (cityName) => {
   const cityNode = document.querySelector('#city-name');
   cityNode.textContent = cityName;
  }



  return{ updateCityName}
})();