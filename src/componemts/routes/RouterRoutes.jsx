import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Header from "../pages/Header";
import HeroSlider from "../sliders/heroSlider";
export default function RouterRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Home />
          </>
        }
      />
      <Route
        path="/Header"
        element={
          <>
            <Header />
          </>
        }
      />
      <Route
        path="/HeroSlider"
        element={
          <>
            <HeroSlider />
          </>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
