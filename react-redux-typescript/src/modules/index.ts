import { combineReducers } from 'redux';
import counter, { CounterState } from './counter';
import todos, { TodosState } from './todos'

export default combineReducers({
	counter,
	todos
});

export type State = {
	counter: CounterState,
	todos: TodosState
}

