import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "./Authentication";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/auth" element={<Authentication />} />
        {/* <Route path="/quiz" element={<Quiz />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
