
// import { makeObservable, observable, action } from 'mobx';
import { useLocalObservable } from 'mobx-react'
import { FormValues, Store } from '../Todos/interfaces';

// Create Store by using core Mobx
// export class TodoStore {
// 	todoList: FormValues[] = [];
// 	constructor() {
// 		makeObservable(this, {
// 			todoList: observable,
// 			addTodos: action,
// 		});
// 	}
// 	addTodos = (todo: FormValues) => {
// 		this.todoList.push(todo);
// 	}
// }
// export const store = new TodoStore();

// Create Store by using Mobx-react
export const useStore = () => {
	const store: Store =  useLocalObservable(() => ({
		todos: [] as FormValues[],
		addTodos: (todo: FormValues) => {
			store.todos.push(todo);
		},
		removeTodos: (id: number) => {
			alert("Fired")
			let todos = store.todos.filter(todo => todo.id !== id);
			store.todos = todos;
		}
	}));
	return store;
};