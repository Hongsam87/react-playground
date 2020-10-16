import React, { Component } from "react";
import TodoList from "../components/Todo/TodoList";
import { State } from "../modules";
import { todosActions, Todo } from "../modules/todos";
import { Dispatch } from "redux";
import { connect } from "react-redux";

interface StateProps {
  todos: Todo[];
  input: string;
}

interface DispatchProps {
  TodosActions: typeof todosActions;
}

type TodoListContainerProps = StateProps & DispatchProps;

class TodoListContainer extends Component<TodoListContainerProps> {
  public handleCreateTodo = (): void => {
    const { TodosActions, input } = this.props;
    TodosActions.createTodo(input);
  };
  public handleRemoveTodo = (id: number): void => {
    const { TodosActions } = this.props;
    TodosActions.removeTodo(id);
  };
  public handleToggleTodo = (id: number): void => {
    const { TodosActions } = this.props;
    TodosActions.toggleTodo(id);
  };
  public handleChangeTodo = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    const { TodosActions } = this.props;
    TodosActions.changeInput(value);
  };

  render() {
    const { input, todos } = this.props;
    return (
      <TodoList
        input={input}
        todos={todos}
        onChange={this.handleChangeTodo}
        onCreate={this.handleCreateTodo}
        onRemove={this.handleRemoveTodo}
        onToggle={this.handleToggleTodo}
      />
    );
  }
}

const mapStateToProps = (state: State) => ({
  input: state.todos.input,
  todos: state.todos.todos,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  TodosActions: {
    createTodo: (input: string) => dispatch(todosActions.createTodo(input)),
    removeTodo: (id: number) => dispatch(todosActions.removeTodo(id)),
    changeInput: (input: string) => dispatch(todosActions.changeInput(input)),
    toggleTodo: (id: number) => dispatch(todosActions.toggleTodo(id)),
  },
});

export default connect<StateProps, DispatchProps, {}, State>(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer);
