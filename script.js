"use strict";

// DATA
const account1 = {
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
  currency: "EUR",
  locale: "en-US",
  interestRate: 1.1,
  password: 19181716,
  expenses: {
    "Phone bill": "20",
    "Mortgage loan": "1200",
    "Motor vehicle tax": "100",
    "Electricity bill": "50",
    "Internet bill": "30",
    "Water bill": "25",
  },
};
const account2 = {
  owner: "Jessica Adams",
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
  currency: "USD",
  locale: "en-US",
  interestRate: 1.2,
  password: 2222,
  expenses: {
    "Phone bill": "35 €",
    "Mortgage loan": "1600 €",
    "Motor vehicle tax": "150 €",
    "Electricity bill": "45 €",
    "Internet bill": "60 €",
    "Water bill": "35 €",
  },
};

const account3 = {
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
    "Phone bill": "25 €",
    "Mortgage loan": "1400 €",
    "Motor vehicle tax": "150 €",
    "Electricity bill": "60 €",
    "Internet bill": "35 €",
    "Water bill": "20 €",
  },
};

const account4 = {
  owner: "Liam Brown",
  movements: [
    { amount: 430, date: "2021-08-19T09:12:34.000Z" },
    { amount: 1000, date: "2021-12-23T10:28:46.000Z" },
    { amount: 700, date: "2022-05-01T11:23:00.000Z" },
    { amount: -500, date: "2022-08-22T14:14:15.000Z" },
    { amount: 1500, date: "2023-02-18T16:33:22.000Z" },
    { amount: -650, date: "2023-04-25T10:45:23.000Z" },
    { amount: 1200, date: "2023-07-29T12:58:42.000Z" },
    { amount: -550, date: "2023-11-05T14:17:56.000Z" },
    { amount: 3750, date: "2023-11-11T11:32:04.000Z" },
    { amount: -200, date: "2024-03-06T15:15:23.000Z" },
  ],
  currency: "EUR",
  locale: "de-DE",
  interestRate: 1.5,
  password: 4444,
  expenses: {
    "Phone bill": "30 €",
    "Mortgage loan": "1000 €",
    "Motor vehicle tax": "125 €",
    "Electricity bill": "55 €",
    "Internet bill": "45 €",
    "Water bill": "25 €",
  },
};

const account5 = {
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
  currency: "USD",
  locale: "en-GB",
  interestRate: 0.9,
  password: 5555,
  expenses: {
    "Phone bill": "45 €",
    "Mortgage loan": "1550 €",
    "Motor vehicle tax": "200 €",
    "Electricity bill": "70 €",
    "Internet bill": "30 €",
    "Water bill": "25 €",
  },
};

const accounts = [account1, account2, account3, account4, account5];

console.log(Object.values(account1.movements));

///////////// ELEMENTS
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
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
const expenseType = document.getElementById("expenseType").value;
const expenseCost = document.getElementById("expenseCost");

const movementsContainer = document.querySelector(".movements");

const infoBox = document.querySelector(".login-info-box");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnOpenModal = document.querySelector(".open-modal");
const btnCloseModal = document.querySelector(".close-modal");

let currentAccount;

///// FUNCTIONS
// create usernames
const createUsernames = function (accs) {
  accs.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);

const displayAppPage = function (acc) {
  // hide home-page / app-page display
  homePage.classList.add("hidden");
  appPage.classList.remove("hidden");

  // Change welcome message
  labelWelcome.textContent = `Welcome ${acc.owner}!`;
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

const displayMovements = function (acc) {
  movementsContainer.innerHTML = "";

  let cumulativeSum = 0;

  acc.movements.forEach(function (movement) {
    cumulativeSum += movement.amount;

    const html = `
      <div class="movements__row">
        <div class="movements__date">08/03/24</div>
        <div class="movements__value">${movement.amount}€</div>
        <div class="movements__cumulative-sum">${cumulativeSum}€</div>
      </div>`;

    movementsContainer.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  const amounts = acc.movements.map((mov) => mov.amount);

  acc.balance = amounts.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = acc.balance;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .map((mov) => mov.amount)
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = incomes;

  const outgoings = acc.movements
    .map((mov) => mov.amount)
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = outgoings;

  const interest = acc.movements
    .map((mov) => mov.amount)
    .filter((mov) => mov > 0)
    .map((income) => (income * acc.interestRate) / 100)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = Math.floor(interest);
};

const updateUI = function (acc) {
  // display app page
  displayAppPage(acc);

  // dispaly balance
  calcDisplayBalance(acc);

  // display movements
  displayMovements(acc);
  // display summary
  calcDisplaySummary(acc);
};

////////// EVENT LISTENERS
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.password === +inputLoginPassword.value) {
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    receiverAcc &&
    receiverAcc.username !== currentAccount.username &&
    amount > 0 &&
    currentAccount.balance >= amount
  ) {
    const now = new Date();
    const formattedDate = now.toISOString();

    currentAccount.movements.push({ amount: -amount, date: formattedDate });

    receiverAcc.movements.push({ amount: amount, date: formattedDate });

    updateUI(currentAccount);

    console.log(receiverAcc.movements);
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
    const now = new Date();
    const formattedDate = now.toISOString();
    currentAccount.movements.push({ amount: amount, date: formattedDate });

    updateUI(currentAccount);
  }
});

btnLogout.addEventListener("click", function (e) {
  e.preventDefault();

  displayHomePage();
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
