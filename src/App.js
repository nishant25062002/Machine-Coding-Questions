import "./App.css";
import Counter from "./component/counter/Counter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Faqs from "./component/faq/Faqs";
import Mortgage from "./component/mortgage-calculator/Mortgage";
import Comments from "./component/recursive-comments/Comments";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="counter-time" element={<Counter />} />
        <Route path="comments" element={<Comments />} />
        <Route path="mortgage-calculator" element={<Mortgage />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="*" element={<Counter />} />
      </Routes>
    </Router>
  );
}

export default App;
