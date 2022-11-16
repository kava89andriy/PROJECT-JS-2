const convertCurrency = (quantity, code) => {
    return fetch(
      "https://api.nbp.pl/api/exchangerates/rates/c/" +
        code +
        "/today/?format=json"
    )
      .then((response) => response.json())
      .then((data) => {
        let result = data.rates[0].bid * quantity;

        document.getElementById("result").innerHTML = result + " PLN";
      });
  };

  let convertBTN = document.getElementById("convert");

  convertBTN.addEventListener("click", function () {
    let currency = document.getElementById("currencies");
    let currencyCode = currency.value;
    let number = document.getElementById("number");
    let quantity = number.value;

    convertCurrency(quantity, currencyCode);
  });