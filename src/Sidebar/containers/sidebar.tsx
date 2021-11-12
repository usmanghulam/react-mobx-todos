import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react';
import { Context } from '../../ContextApi/StoreContext';
import Dropdown from '../components/DropDown';

const sidebar = observer(() => {
    const [isToggle, setIsToggle] = useState<boolean>(false);
    const toggle = () => setIsToggle(!isToggle);

    const { todos, removeTodos } = useContext(Context);
    const showTodos = todos.map(({ title, description, id }) => <div className="border" key={id}>
        <Dropdown {...{ isToggle, toggle, removeTodos, id }} />
        <b>{title}</b>
        <p>{description}</p>
    </div>)
    return (
        <div className="">
            {showTodos}
        </div>
    );
});

export default sidebar;