import Home from "./Home";
import RecipeDetails from "./RecipeDetails";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/recipe/:id" element={<RecipeDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Pages;
