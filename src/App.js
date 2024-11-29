import "./App.css";
import Counter from "./component/counter/Counter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Faqs from "./component/faq/Faqs";
import Mortgage from "./component/mortgage-calculator/Mortgage";
import Comments from "./component/recursive-comments/Comments";
import Hooks from "./component/examples/Hooks";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="counter-time" element={<Counter />} />
        <Route path="hook-example" element={<Hooks />} />
        <Route path="comments" element={<Comments />} />
        <Route path="mortgage-calculator" element={<Mortgage />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="*" element={<Counter />} />
      </Routes>
    </Router>
  );
}

export default App;
