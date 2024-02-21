import { currenciesCode } from "./cc_currency_codes.js";

let api = `https://v6.exchangerate-api.com/v6/3acfb313b349e70458dd46de/latest/USD`;

const originDropDownMenu = document.querySelector("#origin_currency_select");
const destinationDropDownMenu = document.querySelector("#destination_currency_select");


// Create the list of currencies in the origin Dropdown menu from the currencies array in the cc_currency_codes.js file
currenciesCode.forEach((currency) => {
    const code = document.createElement("option"); 
    code.textContent = currency;
    code.value = currency;
    // Select USD as default
    if (currency === currenciesCode[146]) {
      code.selected = true;
    }
    originDropDownMenu.appendChild(code); // creating the currency code and adding them to the first dropdown menu
  });

// Create the list of currencies in the destination Dropdown menu from the currencies array in the cc_currency_codes.js file
currenciesCode.forEach((currency) => {
    const code = document.createElement("option");
    code.textContent = currency;
    code.value = currency;
    // Select GHS as default
    if (currency === currenciesCode[50]) {
      code.selected = true;
    }
    destinationDropDownMenu.appendChild(code); // creating the currency code and adding them to the second dropdown menu
  });

  
// Convert currency function
let convertCurrency = () => {
  // Variables
  const amount = document.querySelector("#amount_to_convert_input").value;
  const originCurrency = originDropDownMenu.value;
  const destinationCurrency = destinationDropDownMenu.value;

  // Check whether the amount to convert is empty or not
  if (amount.length == 0) {
    document.querySelector("#amount_to_convert_input").style.backgroundColor = "red";
    setTimeout(function() {
      document.querySelector("#amount_to_convert_input").style.backgroundColor = "";
    }, 500);
  }


  // Fetch the api that convert the currencies
  fetch(api)
    .then(Response => {
      return Response.json();
    })
    .then((data) => {
        let originExchangeRate = data.conversion_rates[originCurrency]
        let destinationExchangeRate = data.conversion_rates[destinationCurrency]

        // Converting the origin currency to the destination currency
        const convertedAmount = (amount * destinationExchangeRate) / originExchangeRate;
        document.querySelector("#amount_converted_input").value = `${convertedAmount.toFixed(2)}`;
    })
    .catch((error) => {
      console.error(error);
    });
};

// Reset all the inputs
let resetAll = () => {
  document.querySelector("#amount_to_convert_input").value = "";
  document.querySelector("#amount_converted_input").value = "";
};

document.querySelector("#convert").addEventListener("click", convertCurrency);
document.querySelector("#reset").addEventListener("click", resetAll);