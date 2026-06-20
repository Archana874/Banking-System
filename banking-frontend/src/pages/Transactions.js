import { useState } from "react";
import { getTransactions } from "../services/CustomerService";

function Transactions() {

    const [customerId, setCustomerId] = useState("");
    const [transactions, setTransactions] = useState([]);

    const loadTransactions = () => {

        getTransactions(customerId)
            .then((response) => {
                setTransactions(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
    <div className="container py-4 page-shell">
        <div className="card bank-card">
            <div className="card-header bank-card-header">
                <h3>Transaction History</h3>
            </div>

            <div className="card-body bank-card-body">
                <div className="row g-3 mb-3">
                    <div className="col-md-8">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Customer ID"
                            value={customerId}
                            onChange={(e) => setCustomerId(e.target.value)}
                        />
                    </div>

                    <div className="col-md-4">
                        <button
                            className="btn btn-bank w-100"
                            onClick={loadTransactions}
                        >
                            Search
                        </button>
                    </div>
                </div>

                <table className="table table-hover bank-table mb-0">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {transactions.map((transaction) => (
                            <tr key={transaction.id}>
                                <td>{transaction.id}</td>
                                <td>{transaction.type}</td>
                                <td>₹ {transaction.amount}</td>
                                <td>{transaction.transactionDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);
}

export default Transactions;