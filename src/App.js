import "./css/reset.css";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

// page payment + composent

//pages
import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Publish from "./pages/Publish";
import Payment from "./pages/Payment";

function App() {
  const [token, setToken] = useState(Cookies.get("cookie") || null);
  // const [search, setSearch] = useState([]);

  const [title, setTitle] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [sort, setSort] = useState(true);
  const [skip, setSkip] = useState("");
  const [limit, setLimit] = useState("");

  const setUser = (token) => {
    if (token !== null) {
      Cookies.set("cookie", token);
    } else {
      Cookies.remove("cookie");
    }
    setToken(token);
  };

  return (
    <div className="App">
      <Router>
        <Header
          token={token}
          setUser={setUser}
          title={title}
          setTitle={setTitle}
          priceMin={priceMin}
          setPriceMin={setPriceMin}
          priceMax={priceMax}
          setPriceMax={setPriceMax}
          sort={sort}
          setSort={setSort}
          skip={skip}
          setSkip={setSkip}
          limit={limit}
          setLimit={setLimit}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                title={title}
                priceMin={priceMin}
                priceMax={priceMax}
                sort={sort}
                skip={skip}
                limit={limit}
                token={token}
              />
            }
          />
          <Route path="/offer/:id" element={<Offer />} />
          <Route
            path="/user/signup"
            element={<SignUp setUser={setUser} />}
          ></Route>
          <Route
            path="/user/login"
            element={<LogIn setUser={setUser} />}
          ></Route>
          <Route path="/publish" element={<Publish token={token} />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
