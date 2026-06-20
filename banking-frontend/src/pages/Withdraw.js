import { useState } from "react";
import axios from "axios";

function Withdraw() {

  const [id, setId] = useState("");
  const [amount, setAmount] = useState("");

  const handleWithdraw = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:8080/customers/withdraw/${id}?amount=${amount}`
      );

      alert("Withdraw Successful");
      console.log(response.data);

    } catch (error) {
      alert("Withdraw Failed");
      console.log(error);
    }
  };

  return (
    <div className="container py-4 page-shell">
      <div className="card bank-card">
        <div className="card-header bank-card-header">
          <h3>Withdraw Money</h3>
        </div>

        <div className="card-body bank-card-body">
          <form className="bank-form" onSubmit={handleWithdraw}>
            <div className="mb-3">
              <label className="form-label">Customer ID</label>
              <input
                type="number"
                className="form-control"
                value={id}
                onChange={(e) => setId(e.target.value)}
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

            <button className="btn btn-bank">Withdraw</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Withdraw;