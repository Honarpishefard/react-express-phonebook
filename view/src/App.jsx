import { ToastContainer } from "react-toastify";
import { useCallback } from "react";
import "react-toastify/dist/ReactToastify.css";
import { routes } from "./routes";
import { Route, Routes } from "react-router";
import useAuth from "./hooks/useAuth";

function App() {
  useAuth();
  const generateRoutes = useCallback(() => {
    return routes.map((route) => (
      <Route path={route.path} element={route.element} />
    ));
  }, [routes]);

  return (
    <>
      <ToastContainer />
      <Routes>{generateRoutes()}</Routes>
    </>
  );
};

export default App;
