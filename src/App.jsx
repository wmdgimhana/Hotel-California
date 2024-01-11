import React from "react";
import Layout from "./Client/Layout/Layout";
import { useLocation } from "react-router-dom";

const App = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <div>
      <ScrollToTop />
      <Layout />
    </div>
  );
};

export default App;
