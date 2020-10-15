// define Action Type

const INCREMENT = 'counter/INCREMENT' as const;// use const assertions 
const DECREMENT = 'counter/DECREMENT' as const;

// define Action Creator
export const counterActions = {
	increment: (diff: number) => ({ type: INCREMENT, payload: diff }),
	decrement: (diff: number) => ({ type: DECREMENT, payload: diff })
};

// Action Object Type
type IncrementAction = ReturnType<typeof counterActions.increment>;
type DecrementAction = ReturnType<typeof counterActions.decrement>;
type Actions = IncrementAction | DecrementAction;

// Reducer Value Type
export type CounterState = Readonly<{
	value: number
}>;

// define initial state
const initialState: CounterState = {
	value: 0
};

// reducer
export default function reducer(state: CounterState = initialState, action: Actions): CounterState {
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				value: state.value + (action as IncrementAction).payload
			}
		case DECREMENT:
			return {
				...state,
				value: state.value - (action as DecrementAction).payload
			}
		default:
			return state;
	}
}

