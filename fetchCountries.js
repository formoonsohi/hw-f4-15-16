const BASE_URL = "https://restcountries.com/v2";

export async function fetchCountries(name) {
  const response = await fetch(`${BASE_URL}/name/${name}`);

  if (!response.ok) {
    throw new Error("Страна не найдена");
  }

  return response.json();
}
