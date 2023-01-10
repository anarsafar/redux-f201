import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getCount } from "./redux/reducers/counter.reducer";
import {
  decrement,
  increment,
  reset,
} from "./redux/actions/counterActionCreators";
import Child from "./Child";

function App() {
  //   const [count, setCount] = useState(0);
  //redux makes react components
  const count = useSelector((state) => getCount(state));
  const dispatch = useDispatch();

  console.log(count);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(increment(5))}>increment by 5</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      {/* <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>reset</button> */}
      <Child />
    </div>
  );
}

export default App;
