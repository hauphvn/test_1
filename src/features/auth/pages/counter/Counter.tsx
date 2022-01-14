import Button from "@material-ui/core/Button";
import { useAppDispatch, useAppSelector } from "src/app/hooks";
import {
  decrement,
  increment,
  incrementAsync,
  incrementIfOdd,
} from "src/redux_management/counter/counterSlice";
import { selectCount } from "src/redux_management/counter/selector";

export interface CounterProps {}

export function Counter(props: CounterProps) {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  return (
    <div>
      <h1>Counter</h1>
      <hr />
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(increment())}
      >
        Count +
      </Button>
      <hr />
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(decrement())}
      >
        Count -
      </Button>

      <hr />
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(incrementAsync(1))}
      >
        Count + call api
      </Button>
      <hr />
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(incrementIfOdd(2))}
      >
        Count + 2 if count odd
      </Button>
      <div>Count: {count}</div>
    </div>
  );
}
