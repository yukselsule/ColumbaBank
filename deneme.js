///////////// SELECT MAKE PAYMENT
function updateCost() {
  const expenseType = document.getElementById("expenseType").value;
  const expenseCost = document.getElementById("expenseCost");

  let cost;
  switch (expenseType) {
    case "Phone bill":
      cost = "30 €";
      break;
    case "Mortgage loan":
      cost = "1500 €";
      break;
    case "Motor vehicle tax":
      cost = "200 €";
      break;
    case "Electricity bill":
      cost = "60 €";
      break;
    case "Internet bill":
      cost = "40 €";
      break;
    case "Water bill":
      cost = "25 €";
      break;
    default:
      cost = "";
  }

  expenseCost.value = cost;
}
