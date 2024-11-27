import "./App.css";
import Counter from "./component/counter/Counter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Faqs from "./component/faq/Faqs";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="counter-time" element={<Counter />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="*" element={<Counter />} />
      </Routes>
    </Router>
  );
}

export default App;
