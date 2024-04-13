"use strict";

const accountData1 = {
  owner: "Anthony Smith",
  movements: [
    { amount: 250, date: "2021-11-18T21:31:17.178Z" },
    { amount: 1000, date: "2021-12-22T22:03:27.383Z" },
    { amount: -1200, date: "2022-03-11T21:21:15.194Z" },
    { amount: 460, date: "2022-05-23T10:22:12.904Z" },
    { amount: 980, date: "2022-09-30T12:55:27.604Z" },
    { amount: -1205, date: "2023-11-07T22:31:34.929Z" },
    { amount: 4550, date: "2023-12-01T12:32:04.000Z" },
    { amount: -750, date: "2024-01-20T11:42:17.000Z" },
    { amount: 200, date: "2024-01-26T16:15:23.000Z" },
    { amount: 2500, date: "2024-02-13T21:31:17.790Z" },
  ],
  currency: "USD",
  locale: "en-US",
  interestRate: 1.1,
  password: 1111,
  expenses: {
    "Phone bill": 20,
    "Mortgage loan": 1200,
    "Motor vehicle tax": 100,
    "Electricity bill": 50,
    "Internet bill": 30,
    "Water bill": 25,
    "Health insurance": 450,
  },
};
const accountData2 = {
  owner: "Henry Meyer",
  movements: [
    { amount: 500, date: "2021-10-05T14:48:00.000Z" },
    { amount: 2350, date: "2022-01-25T09:15:23.000Z" },
    { amount: -150, date: "2022-03-05T16:33:43.000Z" },
    { amount: 2000, date: "2022-07-08T14:11:59.000Z" },
    { amount: -650, date: "2023-01-10T18:25:49.000Z" },
    { amount: 1300, date: "2023-09-26T12:47:26.000Z" },
    { amount: -750, date: "2023-11-05T14:17:56.000Z" },
    { amount: 4550, date: "2023-12-01T12:32:04.000Z" },
    { amount: 750, date: "2024-01-20T11:42:17.000Z" },
    { amount: 200, date: "2024-03-06T16:15:23.000Z" },
  ],
  currency: "EUR",
  locale: "de-DE",
  interestRate: 1.2,
  password: 2222,
  expenses: {
    "Phone bill": 35,
    "Mortgage loan": 1600,
    "Motor vehicle tax": 150,
    "Electricity bill": 45,
    "Internet bill": 60,
    "Water bill": 35,
  },
};

const accountData3 = {
  owner: "Olivia Miller",
  movements: [
    { amount: 780, date: "2021-09-15T23:36:17.000Z" },
    { amount: 5200, date: "2021-11-30T10:15:33.000Z" },
    { amount: -1200, date: "2022-02-20T18:45:17.000Z" },
    { amount: -300, date: "2022-04-25T08:24:45.000Z" },
    { amount: -450, date: "2022-06-05T14:18:46.000Z" },
    { amount: 3900, date: "2023-03-12T12:34:56.000Z" },
    { amount: -600, date: "2023-10-07T17:45:23.000Z" },
    { amount: -550, date: "2023-11-05T14:17:56.000Z" },
    { amount: 3750, date: "2023-12-11T12:32:04.000Z" },
    { amount: -200, date: "2024-02-07T16:15:23.000Z" },
  ],
  currency: "GBP",
  locale: "en-GB",
  interestRate: 0.7,
  password: 3333,
  expenses: {
    "Phone bill": 25,
    "Mortgage loan": 1400,
    "Motor vehicle tax": 150,
    "Electricity bill": 60,
    "Internet bill": 35,
    "Water bill": 20,
  },
};

const accountData4 = {
  owner: "Furio Giunta",
  movements: [
    { amount: 430, date: "2021-08-19T09:12:34.000Z" },
    { amount: 10000, date: "2021-12-23T10:28:46.000Z" },
    { amount: 7000, date: "2022-05-01T11:23:00.000Z" },
    { amount: -500, date: "2022-08-22T14:14:15.000Z" },
    { amount: 1500, date: "2023-02-18T16:33:22.000Z" },
    { amount: -6500, date: "2023-04-25T10:45:23.000Z" },
    { amount: 12000, date: "2023-07-29T12:58:42.000Z" },
    { amount: -550, date: "2023-11-05T14:17:56.000Z" },
    { amount: 3750, date: "2023-11-11T11:32:04.000Z" },
    { amount: -200, date: "2024-03-06T15:15:23.000Z" },
  ],
  currency: "EUR",
  locale: "it-IT",
  interestRate: 1.5,
  password: 4444,
  expenses: {
    "Phone bill": 15,
    "Mortgage loan": 2500,
    "Motor vehicle tax": 125,
    "Electricity bill": 55,
    "Gas bill": 30,
    "Internet bill": 30,
    "Water bill": 25,
  },
};

const accountData5 = {
  owner: "Emily Clark",
  movements: [
    { amount: 200, date: "2021-07-03T13:15:33.000Z" },
    { amount: -100, date: "2021-09-22T09:48:16.000Z" },
    { amount: 1450, date: "2022-01-18T14:11:59.000Z" },
    { amount: -400, date: "2022-03-15T18:49:59.000Z" },
    { amount: 900, date: "2022-08-05T08:24:45.000Z" },
    { amount: -1200, date: "2023-01-09T11:42:17.000Z" },
    { amount: 2100, date: "2023-11-21T19:45:23.000Z" },
    { amount: 1100, date: "2023-12-22T19:35:13.000Z" },
    { amount: -1500, date: "2024-01-11T15:33:22.000Z" },
    { amount: -650, date: "2024-02-29T11:35:23.000Z" },
    { amount: 1200, date: "2024-03-11T06:58:42.000Z" },
  ],
  currency: "GBP",
  locale: "en-GB",
  interestRate: 0.9,
  password: 5555,
  expenses: {
    "Phone bill": 45,
    "Mortgage loan": 1550,
    "Motor vehicle tax": 200,
    "Electricity bill": 70,
    "Internet bill": 30,
    "Water bill": 25,
  },
};

const accountData6 = {
  owner: "Bilge Kaya",
  movements: [
    { amount: 2700, date: "2021-05-07T23:15:33.000Z" },
    { amount: -100, date: "2021-09-21T06:48:16.000Z" },
    { amount: 24050, date: "2022-02-15T17:11:59.000Z" },
    { amount: -400, date: "2022-04-19T16:49:59.000Z" },
    { amount: 18000, date: "2022-06-15T03:26:35.000Z" },
    { amount: -1200, date: "2023-01-09T12:43:17.000Z" },
    { amount: 2100, date: "2023-05-12T19:45:23.000Z" },
    { amount: 11100, date: "2023-12-21T19:35:13.000Z" },
    { amount: -1500, date: "2024-01-02T15:33:22.000Z" },
    { amount: -650, date: "2024-02-21T11:35:23.000Z" },
    { amount: 1700, date: "2024-03-09T06:58:42.000Z" },
  ],
  currency: "TRY",
  locale: "tr-TR",
  interestRate: 0.75,
  password: 6666,
  expenses: {
    "Phone bill": 170,
    "House rent": 12000,
    "Motor vehicle tax": 500,
    "Electricity bill": 135,
    "Internet bill": 225,
    "Water bill": 150,
    "Gas bill": 1000,
  },
};

///////////// ELEMENTS
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".balance__date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const homePage = document.querySelector(".home-page");
const appPage = document.querySelector(".app-page");

const btnLogin = document.querySelector(".btn--login");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnPayment = document.querySelector(".form__btn--payment");
const btnLogout = document.querySelector(".btn--logout");

const inputLoginUsername = document.querySelector(".login__input--username");
const inputLoginPassword = document.querySelector(".login__input--password");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const formSelect = document.querySelector(".form__select");

const movementsContainer = document.querySelector(".movements");

const infoBox = document.querySelector(".login-info-box");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnOpenModal = document.querySelector(".open-modal");
const btnCloseModal = document.querySelector(".close-modal");

let currentAccount, expenseType, expenseCost, timer;

// Creating Accounts
class Account {
  paymentsMade = [];

  constructor({
    owner,
    currency,
    locale,
    interestRate,
    password,
    expenses,
    movements,
  }) {
    this.owner = owner;
    this.currency = currency;
    this.locale = locale;
    this.interestRate = interestRate;
    this.password = password;
    this.expenses = expenses;
    this.movements = movements;

    this.createUsernames();
    this.calculateBalance();
    this.calculateSummary();
  }

  createUsernames() {
    this.username = this.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  }

  calculateBalance() {
    this.balance = this.movements.reduce((acc, curr) => acc + curr.amount, 0);
  }

  calculateSummary() {
    this.incomes = this.movements
      .map((mov) => mov.amount)
      .filter((mov) => mov > 0)
      .reduce((acc, mov) => acc + mov, 0);

    this.outgoings = this.movements
      .map((mov) => mov.amount)
      .filter((mov) => mov < 0)
      .reduce((acc, mov) => acc + mov, 0);

    this.interest = this.movements
      .map((mov) => mov.amount)
      .filter((mov) => mov > 0)
      .map((income) => (income * this.interestRate) / 100)
      .reduce((acc, int) => acc + int, 0);
  }
}

const account1 = new Account(accountData1);
const account2 = new Account(accountData2);
const account3 = new Account(accountData3);
const account4 = new Account(accountData4);
const account5 = new Account(accountData5);
const account6 = new Account(accountData6);

const accounts = [account1, account2, account3, account4, account5, account6];

////////// FUNCTIONS
const displayAppPage = function (account) {
  // hide home-page / app-page display
  homePage.classList.add("hidden");
  appPage.classList.remove("hidden");

  // Change welcome message
  labelWelcome.textContent = `Welcome ${account.owner}!`;
  // display logout-btn
  btnLogout.classList.remove("hidden");
  // hide info box
  infoBox.classList.add("hidden");
};

const displayHomePage = function () {
  // hide app-page / display home-page
  homePage.classList.remove("hidden");
  appPage.classList.add("hidden");

  // clear input fields
  inputLoginPassword.value = inputLoginUsername.value = "";

  // Change welcome message
  labelWelcome.textContent = `Welcome to Columba Bank!`;
  // display logout-btn
  btnLogout.classList.add("hidden");
  // hide info box
  infoBox.classList.remove("hidden");
};

const resetCurrentAccount = function () {
  currentAccount = {};
};

const formatCurrency = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};
const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (d1, d2) =>
    Math.round(Math.abs(d2 - d1) / (1000 * 60 * 60 * 24));
  const daysPassed = calcDaysPassed(new Date(), date);
  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  else {
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const displayMovements = function (account) {
  movementsContainer.innerHTML = "";

  let cumulativeSum = 0;

  account.movements.forEach(function (movement) {
    cumulativeSum += movement.amount;

    const date = new Date(movement.date);
    const displayDate = formatMovementDate(date, account.locale);

    const formattedMov = formatCurrency(
      movement.amount,
      account.locale,
      account.currency
    );

    const formattedCumulativeSum = formatCurrency(
      cumulativeSum,
      account.locale,
      account.currency
    );

    const html = `
      <div class="movements__row">
     <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
        <div class="movements__cumulative-sum">${formattedCumulativeSum}</div>
      </div>`;

    movementsContainer.insertAdjacentHTML("afterbegin", html);
  });
};

const displayBalance = function (account) {
  labelBalance.textContent = formatCurrency(
    account.balance,
    account.locale,
    account.currency
  );
};

const displaySummary = function (account) {
  labelSumIn.textContent = formatCurrency(
    account.incomes,
    account.locale,
    account.currency
  );
  labelSumOut.textContent = formatCurrency(
    account.outgoings,
    account.locale,
    account.currency
  );
  labelSumInterest.textContent = formatCurrency(
    account.interest,
    account.locale,
    account.currency
  );
};

// get currency over USD
const getCurrencyOverUSD = function (currency) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=43f49a7e40c94aa3aeb9832cebd76ea6&symbols=${currency}`
      );
      const data = await response.json();
      const overUSD = parseFloat(Object.values(data.rates)[0]).toFixed(2);
      resolve(overUSD);
    } catch (err) {
      reject(err);
    }
  });
};

// update payment options
function updatePaymentOptions(account) {
  const expenseTypeSelect = document.getElementById("expenseType");
  expenseTypeSelect.innerHTML = '<option value="">Please select...</option>';

  Object.keys(account.expenses).forEach((expense) => {
    if (account.paymentsMade.includes(expense)) {
      delete currentAccount.expenses[expense];

      return;
    }

    const option = document.createElement("option");
    option.value = expense;
    option.textContent = expense;
    expenseTypeSelect.appendChild(option);
  });
}

// uptade cost
function updateCost() {
  expenseType = document.getElementById("expenseType").value;
  expenseCost = document.getElementById("expenseCost");

  currentAccount = accounts.find(
    (account) => account.username === inputLoginUsername.value
  );

  const cost = currentAccount.expenses[expenseType];
  expenseCost.value = cost;

  if (currentAccount && cost) {
    expenseCost.value = cost;
  } else {
    expenseCost.value = "";
  }
}

// timer
const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    labelTimer.textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = "Welcome to Columba Bank!";
      displayHomePage();
      resetCurrentAccount();
    }

    time--;
  };

  let time = 300;

  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

const updateUI = function (account) {
  // display app page
  displayAppPage(account);

  // dispaly balance
  displayBalance(account);

  // display movements
  displayMovements(account);

  // display summary
  displaySummary(account);

  // update select element
  updatePaymentOptions(account);

  // clear input areas in case click event hasn't happened
  inputTransferAmount.value = inputTransferTo.value = "";
  inputLoanAmount.value = "";

  expenseType = document.getElementById("expenseType").value;
  expenseCost = document.getElementById("expenseCost");

  expenseCost.value = "";
  formSelect.selectedIndex = 0;
};

////////// EVENT LISTENERS
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    (account) => account.username === inputLoginUsername.value
  );

  if (currentAccount?.password === +inputLoginPassword.value) {
    // timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // current date and time
    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "numeric",
      year: "2-digit",
      weekday: "short",
    };

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", async function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  let fromCurrencyRate, toCurrencyRate, convertedAmount;

  const receiverAccount = accounts.find(
    (account) => account.username === inputTransferTo.value
  );

  const currentCurrency = currentAccount.currency;
  const receiverCurrency = receiverAccount.currency;

  // clear input areas
  inputTransferAmount.value = inputTransferTo.value = "";

  try {
    const currentCurrencyRate = await getCurrencyOverUSD(currentCurrency);
    fromCurrencyRate = currentCurrencyRate;

    const receiverCurrencyRate = await getCurrencyOverUSD(receiverCurrency);
    toCurrencyRate = receiverCurrencyRate;

    console.log(fromCurrencyRate, toCurrencyRate);

    convertedAmount = +((amount / fromCurrencyRate) * toCurrencyRate).toFixed(
      2
    );
    console.log(convertedAmount);
  } catch (error) {
    console.error(error);
  }

  if (
    receiverAccount &&
    receiverAccount.username !== currentAccount.username &&
    amount > 0 &&
    currentAccount.balance >= amount
  ) {
    const now = new Date();
    const formattedDate = now.toISOString();

    currentAccount.movements.push({ amount: -amount, date: formattedDate });

    receiverAccount.movements.push({
      amount: convertedAmount,
      date: formattedDate,
    });

    // calculate balance and summary
    currentAccount.calculateBalance();
    currentAccount.calculateSummary();
    receiverAccount.calculateBalance();
    receiverAccount.calculateSummary();

    updateUI(currentAccount);

    // reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);
  const maxIncome = currentAccount.movements
    .map((mov) => mov.amount)
    .reduce((acc, cur) => (acc < cur ? (acc = cur) : acc), 0);

  inputLoanAmount.value = "";

  if (amount > 0 && amount <= maxIncome * 2) {
    setTimeout(function () {
      const now = new Date();
      const formattedDate = now.toISOString();
      currentAccount.movements.push({ amount: amount, date: formattedDate });

      // calculate balance and summary
      currentAccount.calculateBalance();
      currentAccount.calculateSummary();

      updateUI(currentAccount);
    }, 3000);
    // reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnPayment.addEventListener("click", function (e) {
  e.preventDefault();
  const expenseTypeSelect = document.getElementById("expenseType");
  const selectedExpense = expenseTypeSelect.value;
  const expenseCostValue = document.getElementById("expenseCost").value;

  if (
    selectedExpense &&
    expenseCostValue &&
    expenseCost.value &&
    expenseCost.value <= currentAccount.balance
  ) {
    const now = new Date();
    const formattedDate = now.toISOString();
    currentAccount.movements.push({
      amount: -expenseCostValue,
      date: formattedDate,
    });

    currentAccount.paymentsMade.push(expenseTypeSelect.value);

    // calculate balance and summary
    currentAccount.calculateBalance();
    currentAccount.calculateSummary();
    updateUI(currentAccount);

    // reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLogout.addEventListener("click", function (e) {
  e.preventDefault();

  displayHomePage();
  resetCurrentAccount();
});

//////// MODAL WINDOW -- LOGIN INFO BOX
// functions
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// click events
btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//////////////// Currency Converter
