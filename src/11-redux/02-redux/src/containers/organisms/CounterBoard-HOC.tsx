import { Dispatch } from 'redux';
import { CounterState } from '../../reducer';

import { add, decrement, increment } from '../../actions';
import { connect } from 'http2';

type StateProps = { count: number };
type DispatchProps = {
  add: (amount: number) => void;
  decrement: () => void;
  increment: () => void;
};

const mapStateToProps = (state: CounterState): StateProps => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  add: (amount: number) => dispatch(add(amount)),
  decrement: () => dispatch(decrement()),
  increment: () => dispatch(increment()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
