const convertCurrency = (quantity, code) => {
  return fetch(`https://api.nbp.pl/api/exchangerates/rates/c/${code}/`)
    .then((response) => response.json())
    .then((data) => {
      const result = data.rates[0].bid * quantity;

      document.getElementById("result").innerHTML = `${result.toFixed(2)} PLN`;
    });
};

const convertBTN = document.getElementById("convert");

convertBTN.addEventListener("click", function () {
  const currency = document.getElementById("currencies");
  const currencyCode = currency.value;
  const number = document.getElementById("number");
  const quantity = number.value;
  if (quantity > 0) {
    convertCurrency(quantity, currencyCode);
  } else alert("Value must be greater than or equal 0");

  convertCurrency(quantity, currencyCode);
});
