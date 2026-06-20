import { useEffect, useState } from "react";
import { getCustomers } from "../services/CustomerService";

function CustomerList() {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        getCustomers()
            .then((response) => {
                setCustomers(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

  return (
    <div className="container py-4 page-shell">
      <div className="card bank-card">
        <div className="card-header bank-card-header">
          <h3>Customer List</h3>
        </div>

        <div className="card-body bank-card-body">
          <table className="table table-hover bank-table mb-0">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Account Number</th>
                <th>Balance</th>
              </tr>
            </thead>

            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>{customer.accountNumber}</td>
                  <td>{customer.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CustomerList;