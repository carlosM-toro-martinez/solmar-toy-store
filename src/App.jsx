import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBarComponent from './components/NavBarComponent'
import BodyComponent from './components/BodyComponent';
import CarouselComponent from './components/CarouselComponent';
import AboutComponent from './components/AboutComponent';
import Contacts from './components/Contacts';
import ProductCard from './components/BodyComponent/ListComponent/ProductCardComponent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<>
          <NavBarComponent />
          <CarouselComponent />
          <BodyComponent />
          {/*
        <Footer /> */}
        </>} />
        <Route path='/datails' element={<>
          <NavBarComponent />
          <ProductCard />
        </>} />
        <Route path='/contact' element={<>
          <NavBarComponent />
          <Contacts />
        </>} />
        <Route path='/quienes-somos' element={<>
          <NavBarComponent />
          <AboutComponent />
        </>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
