import ItemDescription from "./components/pages/buyer/itemdescription";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './components/assets/Bayer\ TypeArchiType\ Regular.otf';
import ProfileInformation from "./components/pages/buyer/profileinformation";
import Login from "./components/pages/buyer/login"
import Navbar from "./components/pages/buyer/navbar";
import MyCart from "./components/pages/buyer/cart";
import StoreEdit from "./components/pages/seller/storeedit";


const App = () => {
  return (
    <Routes>
      <Route path="/profileinformation" element={<ProfileInformation />} />
      <Route path="/login" element={<Login />} />
      <Route path="/itemdescription" element = {<ItemDescription />} />
      <Route path="/storeedit" element = {<StoreEdit />} />
      <Route path="/cart" element = {<MyCart />} />
    </Routes>
  );
};
export default App;


