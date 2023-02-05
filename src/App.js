import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Users from "./users";
import Display from "./Display";
import Login from "./Login";
import Contact from "./Contact";
import Social from "./Social";
// import Navigation from "./Navigate";
import { createContext, useContext, useState } from "react";

// import Loading from "./Loading";
// imports the ErrorBoundary components
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryPage from "./ErrorBoundaryPage";
import Errors from "./Error.js";

const UserAuthentication = {
  isAuthenticated: false,
};

const Authenticate = createContext(UserAuthentication);

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorBoundaryPage}>
        <Display />
        <Authenticate.Provider value={UserAuthentication}>
          <Routes>
            <Route path="/" element={<Home setUser={setUser} user={user} />}>
              <Route path="/verification-message" />
            </Route>
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="users" element={<Users />} />
            <Route path="verify" element={<Verify />} />
            <Route path="/Contact" element={<Contact />}>
              <Route path="Social" element={<Social />} />
            </Route>
            <Route path="*" element={<Errors />} />
          </Routes>
        </Authenticate.Provider>
      </ErrorBoundary>
    </div>
  );
}

export function Verify() {
  const value = useContext(Authenticate);
  const [verified, isVerified] = useState(value);
  const UserVerification = () => {
    if (!verified.isAuthenticated) {
      isVerified({ isAuthenticated: true });
      console.log(Authenticate);
    } else {
      isVerified({ isAuthenticated: false });
    }
  };
  if (verified.isAuthenticated) {
    return (
      <div className="verified">
        {/* <Navigation /> */}
        <p>Your account is verified</p>
        <img src="tic.jpg" alt="checkmark" />
      </div>
    );
  }

  return (
    <div>
      {/* <Navigation /> */}
      <div className="verify">
        <p> Clock to check Verification status </p>
        <button className="verify-btn" onClick={UserVerification}>
          Here
        </button>
      </div>
    </div>
  );
}

export default App;
