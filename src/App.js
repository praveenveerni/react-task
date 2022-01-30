import React from "react";
import UserList from "./components/UserList";
import UserContextProvider from "./context/UserContext";

function App() {
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <UserContextProvider>
            <UserList />
          </UserContextProvider>
        </div>
      </div>
    </div>

  );
}

export default App;