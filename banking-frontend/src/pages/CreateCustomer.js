import { useState } from "react";
import { createCustomer } from "../services/CustomerService";
import { useNavigate } from "react-router-dom";

function CreateCustomer() {

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    accountNumber: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value
    });
  };

  const saveCustomer = (e) => {
    e.preventDefault();

    createCustomer(customer)
      .then(() => {
        alert("Customer Created Successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container py-4 page-shell">
      <div className="card bank-card">
        <div className="card-header bank-card-header">
          <h3>Create Customer</h3>
        </div>

        <div className="card-body bank-card-body">
          <form className="bank-form" onSubmit={saveCustomer}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={customer.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={customer.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control"
                value={customer.phone}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Address</label>
              <input
                type="text"
                name="address"
                className="form-control"
                value={customer.address}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Account Number</label>
              <input
                type="text"
                name="accountNumber"
                className="form-control"
                value={customer.accountNumber}
                onChange={handleChange}
              />
            </div>

            <button className="btn btn-bank">Save Customer</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateCustomer;