import React, { ChangeEvent, FC, useState, useContext } from 'react';
import { observer } from 'mobx-react';
import Formik from '../components/TodoForm';
import { FormValues } from '../interfaces';
import { Context } from '../../ContextApi/StoreContext';
import "../todos.scss";

const Todos: FC = observer(() => {
    const { addTodos, removeTodos } = useContext(Context);
    const [values, setValues] = useState<FormValues>({
        id: null,
        title: "",
        description: ""
    });
    const [errors, setErrors] = useState({
        title: "",
        description: ""
    });
    const ErrorsChecking = () => {
        const { title, description } = values;
        if (title && description) {
            return true;
        }
        if (!title) setErrors(prevErrors => ({ ...prevErrors, title: "Title is Required", description: "" }));
        if (!description) setErrors(prevErrors => ({ ...prevErrors, title: "", description: "Description is Required" }));
        if (!title && !description) setErrors(prevErrors => ({ ...prevErrors, title: "Title is Required", description: "Description is Required" }));
        return false;
    }
    const changeHandler = (e: ChangeEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setValues(prevValues => ({
            ...prevValues,
            id: Number((Math.random() * 4) + 5),
            [name]: value,
        }));
        setErrors({ title: "", description: "" })
    };
    const clickHandler = (todo: FormValues) => {
        const isVerified = ErrorsChecking();
        if (isVerified) {
            addTodos(values);
            setValues({
                id: null,
                title: "",
                description: ""
            });
        }
    };
    return (
        <div>
            <Formik {...{ values, changeHandler, clickHandler, errors }} />
        </div>
    );
});

export default Todos;