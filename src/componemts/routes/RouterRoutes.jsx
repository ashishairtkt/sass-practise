import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Header from "../pages/Header";
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
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
