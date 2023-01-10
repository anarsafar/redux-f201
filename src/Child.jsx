import { useDispatch, useSelector } from "react-redux";
import { getCount } from "./redux/reducers/counter.reducer";

const Child = () => {
  const count = useSelector((state) => getCount(state));
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Child</h1>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(increment(5))}>increment by 5</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
};

export default Child;
