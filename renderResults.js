export function renderCountryList(countries, container) {
  const markup = countries
    .map(
      (country) => `
      <li class="country-item">
        <img src="${country.flags.svg}" alt="${country.name}" width="40" height="30" />
        <span>${country.name}</span>
      </li>
    `
    )
    .join("");

  container.innerHTML = `<ul class="country-list">${markup}</ul>`;
}

export function renderCountryDetails(country, container) {
  const { name, capital, population, languages, flags } = country;

  const markup = `
    <div class="country-details">
      <img src="${flags.svg}" alt="${name}" />
      <h2>${name}</h2>
      <p><strong>Столица:</strong> ${capital || "Нет данных"}</p>
      <p><strong>Население:</strong> ${population.toLocaleString("ru-RU")}</p>
      <p><strong>Языки:</strong> ${languages
        .map((lang) => lang.name)
        .join(", ")}</p>
    </div>
  `;

  container.innerHTML = markup;
}

export function clearResults(container) {
  container.innerHTML = "";
}
