import React, { FC } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FaTh } from 'react-icons/fa';

interface Props {
    isToggle: boolean,
    id: number | null;
    toggle: () => void;
    removeTodos: (id: number) => void;
}
const DropDown: FC<Props> = ({ isToggle, toggle, removeTodos, id }) => {
    return (
        <Dropdown 
        Direction={"right"} 
        isOpen={isToggle} 
        toggle={toggle}
        >
            <DropdownToggle caret>
                <FaTh />
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem><span>Edit</span></DropdownItem>
                <DropdownItem><span onClick={() => {
                    alert("Fired")
                    removeTodos(id as number)
                }}>Delete</span></DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default DropDown;