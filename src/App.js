import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import allActions from "./actions/index";

function App() {
  const counter = useSelector(state => state.counter);
  const currentUser = useSelector(state => state.currentUser);

  const dispatch = useDispatch();
  const user = { name: "Mauri" };

  React.useEffect(() => {
    dispatch(allActions.userActions.setUser(user));
  }, []);
  return (
    <div className="App">
      {currentUser.loggedIn ? (
        <>
          <h1>Hola, {currentUser.user.name}</h1>
          <button onClick={() => dispatch(allActions.userActions.logOut())}>
            Logout
          </button>
        </>
      ) : (
        <>
          <h1>Login</h1>
          <button
            onClick={() => dispatch(allActions.userActions.setUser(user))}
          >
            Login as Mauri
          </button>
        </>
      )}

      <h1> Counter: {counter}</h1>
      <button onClick={() => dispatch(allActions.counterActions.increment())}>
        Increment
      </button>
      <button onClick={() => dispatch(allActions.counterActions.decrement())}>
        Decrement
      </button>
    </div>
  );
}

export default App;
