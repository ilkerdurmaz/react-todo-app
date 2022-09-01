import "./ToDo.css";
import { MdOutlineRemoveCircleOutline, MdOutlineCheckCircleOutline } from "react-icons/md";
import { removeTodo, updateTodo } from "../../todoSlice";
import { useDispatch } from 'react-redux';


export default function ToDo({ todo, index }) {

    const dispatch = useDispatch();

    return (
        <div id="toDoContainer">
            <div id="toDo">
                <p>{todo.description}</p>
                <span>
                    <button id="delete" onClick={() => dispatch(removeTodo(index))}><MdOutlineRemoveCircleOutline size={25} className="react-icons" /></button>

                    <button
                        id="check"
                        onClick={() => dispatch(updateTodo({ index, todo: { ...todo, isDone: !todo.isDone } }))}
                        style={todo.isDone ? { color: 'green' } : {}}>
                        <MdOutlineCheckCircleOutline size={45} className="react-icons" />
                    </button>
                </span>
            </div>
        </div >
    );
}