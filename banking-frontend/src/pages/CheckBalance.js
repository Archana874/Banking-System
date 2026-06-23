import { useState } from "react";
import { checkBalance } from "../services/CustomerService";

function CheckBalance() {

    const [accountNumber, setAccountNumber] = useState("");
    const [balance, setBalance] = useState(null);

    const handleCheckBalance = () => {

        checkBalance(accountNumber)
            .then((response) => {

                setBalance(response.data);

            })
            .catch((error) => {

                console.log(error);
                alert("Account not found");

            });
    };

    return (
        <div className="container py-4 page-shell">
            <div className="card bank-card">
                <div className="card-header bank-card-header">
                    <h3>Check Balance</h3>
                </div>

                <div className="card-body bank-card-body">

                    <div className="mb-3">
                        <label className="form-label">
                            Account Number
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Account Number"
                            value={accountNumber}
                            onChange={(e) =>
                                setAccountNumber(e.target.value)
                            }
                        />
                    </div>

                    <button
                        className="btn btn-bank"
                        onClick={handleCheckBalance}
                    >
                        Check Balance
                    </button>

                    {balance !== null && (
                        <div className="alert alert-success mt-3">
                            <h5>
                                Current Balance: ₹ {balance}
                            </h5>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default CheckBalance;