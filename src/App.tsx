import { Route, Routes } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
