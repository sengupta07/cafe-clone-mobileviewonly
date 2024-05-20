import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import OrderFood from "./components/OrderFood";
import MyHistory from './components/MyHistory';
import Account from './components/Account';
import Bill from './components/Bill';


function App() {

  return (
    <Router>
      <div className='bg-black h-full font-poppins'>
        <Routes>
          <Route path="/order-food" element = {<OrderFood />} />
          <Route path="/" element = {<Home/>} />
          <Route path='/my-history' element = {<MyHistory/>} />
          <Route path='/my-account' element = {<Account/>} />
          <Route path='/bill' element = {<Bill/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
