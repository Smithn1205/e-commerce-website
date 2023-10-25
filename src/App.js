import './App.css';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import PaymentModeSelection from './PaymentModeSelection';
import OrderSuccess from './OrderSuccess';
import Order from './Order';
import CardDetails from './CardDetails';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      
        <Routes>
        <Route path='/CardDetails' element={<><CardDetails/></>}></Route>
        <Route path='/order' element={<><Order/></>}></Route>
        <Route path='/ordersuccess' element={<><OrderSuccess/></>}></Route>
        <Route path='/paymentmode' element={<><PaymentModeSelection/></>}></Route>
          <Route path='/checkout' element={<><Checkout/></>}></Route>
          <Route path='/' element={<><Home/></>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
