import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/routeConfig";
import MainLayout from "./components/layout/MainLayout";
import { Provider } from "react-redux";
import store from "./store/reducerAuth";
import NotFoundScreen from "./components/screens/NotFoundScreen";

const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          {routes.map((route) => (
            <Route
              key={route.label}
              path={route.path} // Usamos el path del `routeConfig`
              element={route.element}
            />
          ))}
        <Route path="*" element={<NotFoundScreen />} />
        </Route>
      </Routes>
    </Router>
    </Provider>
  );
};

export default App;
