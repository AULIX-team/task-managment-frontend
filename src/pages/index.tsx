import { Route, Routes } from "react-router-dom";
import TestPage from "./test/test";
import TestPage2 from "./test/test2";
import { ReactNode } from "react";

const Routing = () => {
  const testPageElement: ReactNode = <TestPage />;
  const testPageElement2: ReactNode = <TestPage2 />;
  return (
    <div>
      <Routes>
        <Route path="/" element={testPageElement} />
        <Route path="/2" element={testPageElement2} />
      </Routes>
    </div>
  );
};

export default Routing;
