import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CounterState } from '../../reducer';
import CounterBoard from '../../components/organisms/CounterBoard';
import { add, decrement, increment } from '../../actions';

const EnhancedCounterBoard: FC = () => {
  const count = useSelector<CounterState, number>((state) => state.count);
  const dispatch = useDispatch();

  return (
    <CounterBoard
      count={count}
      add={(amount: number) => dispatch(add(amount))}
      decrement={() => dispatch(decrement())}
      increment={() => dispatch(increment())}
    />
  );
};

export default EnhancedCounterBoard;
