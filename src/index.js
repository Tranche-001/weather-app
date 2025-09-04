import "./style.css";
import { apiFunctions } from "./apiCalls";
import { domManipulator } from "./domManipulator";

//As page loads set Initial value to Shanghai
//Then make request accordingly to user input
document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.querySelector("#location");
  const submitButton = document.querySelector("#submit");

  let isRequest = false;

  if (!isRequest) {
    request("Shanghai");
    isRequest = true;
  }

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    request(inputField.value);
    isRequest = true;
    inputField.value = "";
  });
});





async function request(location) {
  const cityObject = await apiFunctions.getCityWeatherData(location);
  domManipulator.updateCityName(cityObject.address);
}