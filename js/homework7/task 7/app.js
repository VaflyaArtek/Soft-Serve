const country = document.getElementById("country");
const cities = document.getElementById("cities");
const result = document.getElementById("p");

const citiesData = {
    usa: ["New-York", "Washington", "Boston", "Chikago"],
    ukr: ["Kyiv", "Lviv", "Kharkiv", "Rivne", "Odessa"],
    pol: ["Warsaw", "Krakow", "Wroclaw", "Gdansk"],
    ger: ["Berlin", "Hamburg"],
};

const updateCitiesDropDown = () => {
    const selectedCountry = country.value;
    const countryCities = citiesData[selectedCountry] || [];

    cities.innerHTML = "";

    if (countryCities.length === 0) {
        cities.disabled = true;
    } else {
        cities.disabled = false;
        countryCities.forEach((city) => {
            const option = document.createElement("option");
            option.value = city;
            option.textContent = city;
            cities.appendChild(option);
        });
    }
};

country.addEventListener("change", () => {
    updateCitiesDropDown();

    const selectedCountry = country.value;
    const countryCities = citiesData[selectedCountry] || [];
    const countryCitiesText = countryCities.join(", ");
    result.textContent = `Selected Country: ${selectedCountry}, Cities: ${countryCitiesText}`;
});

updateCitiesDropDown();