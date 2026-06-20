import axios from "axios";

const API_URL = "http://localhost:8080/customers";

export const getCustomers = () => {
    return axios.get(API_URL);
};

export const createCustomer = (customer) => {
    return axios.post(API_URL, customer);
};
export const depositMoney = (id, amount) => {
    return axios.post(
        `${API_URL}/deposit/${id}?amount=${amount}`
    );
};
export const withdrawMoney = (id, amount) => {
    return axios.post(
        `${API_URL}/withdraw/${id}?amount=${amount}`
    );
};
export const transferMoney = (fromId, toId, amount) => {
    return axios.post(
        `${API_URL}/transfer?fromId=${fromId}&toId=${toId}&amount=${amount}`
    );
};
export const getTransactions = (customerId) => {
    return axios.get(
        `${API_URL}/transactions/${customerId}`
    );
};