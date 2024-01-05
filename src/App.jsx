import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBarComponent from './components/NavBarComponent'
import BodyComponent from './components/BodyComponent';
import CarouselComponent from './components/CarouselComponent';
import AboutComponent from './components/AboutComponent';

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
        <Route path='/productos' element={<>
          <NavBarComponent />
        </>} />
        <Route path='/blog' element={<>
          <NavBarComponent />
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
