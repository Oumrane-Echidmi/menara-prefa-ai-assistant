import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Expertises from './pages/Expertises';
import Contact from './pages/Contact';
import References from './pages/References';
import QHSE from './pages/QHSE';
import ChatAI from './pages/ChatAI';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="expertises" element={<Expertises />} />
          <Route path="contact" element={<Contact />} />
          <Route path="references" element={<References />} />
          <Route path="qhse" element={<QHSE />} />
          <Route path="chatAI" element={<ChatAI />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
