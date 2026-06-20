import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          🏦 Banking System
        </Link>

        <div className="navbar-nav">

          <Link className="nav-link text-white" to="/">
            Customers
          </Link>

          <Link className="nav-link text-white" to="/create">
            Create
          </Link>

          <Link className="nav-link text-white" to="/deposit">
            Deposit
          </Link>

          <Link className="nav-link text-white" to="/withdraw">
            Withdraw
          </Link>

          <Link className="nav-link text-white" to="/transfer">
            Transfer
          </Link>

          <Link className="nav-link text-white" to="/transactions">
            Transactions
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;