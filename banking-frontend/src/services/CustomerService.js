import axios from "axios";

const API_URL = "http://localhost:8080/customers";

export const getCustomers = () => {
    return axios.get(API_URL);
};

export const createCustomer = (customer) => {
    return axios.post(API_URL, customer);
};
export const depositMoney = (accountNumber, amount) => {
    return axios.post(
        `${API_URL}/deposit?accountNumber=${accountNumber}&amount=${amount}`
    );
};
export const withdrawMoney = (accountNumber, amount) => {
    return axios.post(
        `${API_URL}/withdraw?accountNumber=${accountNumber}&amount=${amount}`
    );
};
export const transferMoney = (fromAccount, toAccount, amount) => {
    return axios.post(
        `${API_URL}/transfer?fromAccount=${fromAccount}&toAccount=${toAccount}&amount=${amount}`
    );
};
export const getTransactions = (accountNumber) => {
    return axios.get(
        `${API_URL}/transactions?accountNumber=${accountNumber}`
    );
};
export const checkBalance = (accountNumber) => {
    return axios.get(
        `${API_URL}/balance?accountNumber=${accountNumber}`
    );
};