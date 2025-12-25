import { fetchCountries } from "./fetchCountries.js";
import {
  renderCountryList,
  renderCountryDetails,
  clearResults,
} from "./renderResults.js";
import { showNotification } from "./notification.js";

const DEBOUNCE_DELAY = 500;
const searchInput = document.getElementById("search-input");
const resultsContainer = document.getElementById("results-container");

const handleSearch = _.debounce(async (event) => {
  const query = event.target.value.trim();

  if (!query) {
    clearResults(resultsContainer);
    return;
  }

  try {
    const countries = await fetchCountries(query);

    if (countries.length > 10) {
      showNotification("Слишком много совпадений. Уточните запрос.", "info");
      clearResults(resultsContainer);
    } else if (countries.length >= 2 && countries.length <= 10) {
      renderCountryList(countries, resultsContainer);
    } else if (countries.length === 1) {
      renderCountryDetails(countries[0], resultsContainer);
    }
  } catch (error) {
    showNotification("Страна не найдена. Попробуйте другое название.", "error");
    clearResults(resultsContainer);
  }
}, DEBOUNCE_DELAY);

searchInput.addEventListener("input", handleSearch);
