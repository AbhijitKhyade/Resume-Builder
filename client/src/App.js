import Navbar from './components/Navbar';

import './App.css';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Resume from './pages/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/contact-us' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </Provider>

    </>
  );
}

export default App;