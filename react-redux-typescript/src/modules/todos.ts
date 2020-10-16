// Action Type
const CREATE_TODO = 'todos/CREATE_TODO';
const REMOVE_TODO = 'todos/REMOVE_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const CHANGE_INPUT = 'todos/CHANGE_INPUT';

// Action Creator
export const todosActions = {
	createTodo: (text: string) => ({ type: CREATE_TODO, payload: text }),
	removeTodo: (id: number) => ({ type: REMOVE_TODO, payload: id }),
	toggleTodo: (id: number) => ({ type: TOGGLE_TODO, payload: id }),
	changeInput: (input: string) => ({ type: CHANGE_INPUT, payload: input })
}

// Type declaration for Action Type
// use Interface
interface CreateTodoAction {
	type: typeof CREATE_TODO;
	payload: string;
}

interface RemoveTodoAction {
	type: typeof REMOVE_TODO;
	payload: number;
}

interface toggleTodoAction {
	type: typeof TOGGLE_TODO;
	payload: number;
}

interface ChangeInputAction {
	type: typeof CHANGE_INPUT;
	payload: string;
}

type TodosActions = CreateTodoAction | RemoveTodoAction | toggleTodoAction | ChangeInputAction

// Type declaration for state
// use interface

export interface Todo {
	id: number;
	text: string;
	done: boolean;
}

export interface TodosState {
	todos: Todo[];
	input: string;
}

// initial State
const initialState: TodosState = {
	todos: [],
	input: ""
};

// reducer
export default function reducer(state: TodosState = initialState, action: TodosActions): TodosState {
	switch (action.type) {
		case CREATE_TODO:
			const nextId = state.todos.length ? Math.max(...state.todos.map(todo => todo.id)) + 1 : 0;
			return {
				...state,
				input: "",
				todos: state.todos.concat({
					id: nextId,
					text: action.payload,
					done: false
				})
			};
		case REMOVE_TODO:
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.payload)
			};
		case TOGGLE_TODO:
			return {
				...state,
				todos: state.todos.map(todo => todo.id === action.payload ? { ...todo, done: !todo.done } : todo)
			};
		case CHANGE_INPUT:
			return {
				...state,
				input: action.payload
			}
		default:
			return state;
	}
}