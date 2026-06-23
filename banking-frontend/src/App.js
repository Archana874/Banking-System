import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CustomerList from "./pages/CustomerList";
import CreateCustomer from "./pages/CreateCustomer";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import Transfer from "./pages/Transfer";
import Transactions from "./pages/Transactions";
import CheckBalance from "./pages/CheckBalance";
function App() {
  return (
    <BrowserRouter>

      <Navbar />

      

      <Routes>
        <Route path="/" element={<CustomerList />} />
        <Route path="/create" element={<CreateCustomer />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/balance" element={<CheckBalance />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;