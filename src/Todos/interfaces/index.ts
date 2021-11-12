export interface FormValues {
    id: number | null,
    title: string,
    description: string,
}

export interface Store {
    todos: FormValues[];
    addTodos: (todo: FormValues) => void;
    removeTodos: (id: number) => void;
}