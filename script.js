"use strict";

// DATA
const account1 = {
  owner: "Anthony Smith",
  movements: [
    { amount: -250, date: "2021-11-18T21:31:17.178Z" },
    { amount: 1000, date: "2021-12-22T22:03:27.383Z" },
    { amount: -1200, date: "2022-03-11T21:21:15.194Z" },
    { amount: 460, date: "2022-05-23T10:22:12.904Z" },
    { amount: -980, date: "2022-09-30T12:55:27.604Z" },
    { amount: 1205, date: "2023-11-07T22:31:34.929Z" },
    { amount: 2500, date: "2024-02-13T21:31:17.790Z" },
  ],
  currency: "EUR",
  locale: "en-US",
  interestRate: 1.1,
  pin: 1111,
  expenses: {
    "Phone bill": "20 €",
    "Mortgage loan": "1200 €",
    "Motor vehicle tax": "100 €",
    "Electricity bill": "50 €",
    "Internet bill": "30 €",
    "Water bill": "25 €",
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
    { amount: 750, date: "2024-01-20T11:42:17.000Z" },
  ],
  currency: "USD",
  locale: "en-US",
  interestRate: 1.2,
  pin: 2222,
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
  owner: "Oliver Miller",
  movements: [
    { amount: 780, date: "2021-09-15T23:36:17.000Z" },
    { amount: -1200, date: "2021-11-30T10:15:33.000Z" },
    { amount: 5000, date: "2022-02-20T18:45:17.000Z" },
    { amount: -300, date: "2022-04-25T08:24:45.000Z" },
    { amount: -450, date: "2022-06-05T14:18:46.000Z" },
    { amount: 3900, date: "2023-03-12T12:34:56.000Z" },
    { amount: -600, date: "2023-10-07T17:45:23.000Z" },
  ],
  currency: "GBP",
  locale: "en-GB",
  interestRate: 0.7,
  pin: 3333,
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
  ],
  currency: "EUR",
  locale: "de-DE",
  interestRate: 1.5,
  pin: 4444,
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
    { amount: -300, date: "2021-09-22T09:48:16.000Z" },
    { amount: 1450, date: "2022-01-18T14:11:59.000Z" },
    { amount: -400, date: "2022-03-15T18:49:59.000Z" },
    { amount: 900, date: "2022-08-05T08:24:45.000Z" },
    { amount: -1200, date: "2023-01-09T11:42:17.000Z" },
    { amount: 2100, date: "2023-11-21T19:45:23.000Z" },
    { amount: 1100, date: "2023-12-22T19:35:13.000Z" },
  ],
  currency: "USD",
  locale: "en-GB",
  interestRate: 0.9,
  pin: 5555,
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

console.log(account1);

//////// MODAL WINDOW

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnOpenModal = document.querySelector(".open-modal");
const btnCloseModal = document.querySelector(".close-modal");

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
