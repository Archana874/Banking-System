import { useState } from "react";
import axios from "axios";

function Deposit() {

  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");

  const handleDeposit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
  `http://localhost:8080/customers/deposit?accountNumber=${accountNumber}&amount=${amount}`
);  

      alert("Deposit Successful");
      console.log(response.data);

    } catch (error) {
      alert("Deposit Failed");
      console.log(error);
    }
  };

  return (
    <div className="container py-4 page-shell">
      <div className="card bank-card">
        <div className="card-header bank-card-header">
          <h3>Deposit Money</h3>
        </div>

        <div className="card-body bank-card-body">
          <form className="bank-form" onSubmit={handleDeposit}>
            <div className="mb-3">
              <label className="form-label">Account Number</label>
              <input
                type="number"
                className="form-control"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Amount</label>
              <input
                type="number"
                className="form-control"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <button className="btn btn-bank">Deposit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Deposit;