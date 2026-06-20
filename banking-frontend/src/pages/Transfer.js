import { useState } from "react";
import axios from "axios";

function Transfer() {

  const [fromId, setFromId] = useState("");
  const [toId, setToId] = useState("");
  const [amount, setAmount] = useState("");

  const handleTransfer = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post(
        `http://localhost:8080/customers/transfer?fromId=${fromId}&toId=${toId}&amount=${amount}`
      );

      alert(response.data);

    } catch (error) {

      alert("Transfer Failed");
      console.log(error);

    }
  };

  return (
    <div className="container py-4 page-shell">
      <div className="card bank-card">
        <div className="card-header bank-card-header">
          <h3>Transfer Money</h3>
        </div>

        <div className="card-body bank-card-body">
          <form className="bank-form" onSubmit={handleTransfer}>
            <div className="mb-3">
              <label className="form-label">Sender Customer ID</label>
              <input
                type="number"
                className="form-control"
                value={fromId}
                onChange={(e) => setFromId(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Receiver Customer ID</label>
              <input
                type="number"
                className="form-control"
                value={toId}
                onChange={(e) => setToId(e.target.value)}
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

            <button className="btn btn-bank">Transfer Money</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Transfer;