import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./store/userReducer";
import { useEffect } from "react";
import { useReducer } from "react";

function App() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  return (
    <div className='app'>
      <div>
        <button onClick={() => dispatch(fetchUsers())}>add users</button>
      </div>
      <div className='users'>
        {users.map((user) => (
          <div className='user' key={user.id}>
            {user.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
