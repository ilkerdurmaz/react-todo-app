import "./ToDo.css";
import { MdOutlineRemoveCircleOutline, MdOutlineCheckCircleOutline } from "react-icons/md";

export default function ToDo({ message, index, deleteTodo, checkMark, isDone }) {

    return (
        <div id="toDoContainer">
            <div id="toDo">
                <p>{message}</p>
                <span>
                    <button id="delete" onClick={() => deleteTodo(index)}><MdOutlineRemoveCircleOutline size={25} className="react-icons" /></button>

                    <button id="check" onClick={() => checkMark(index)} style={isDone ? { color: 'green' } : {}}> <MdOutlineCheckCircleOutline size={45} className="react-icons" /> </button>
                </span>
            </div>
        </div>
    );
}