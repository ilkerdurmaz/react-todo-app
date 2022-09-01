import './ToDoInput.css';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../todoSlice';


export default function ToDo() {

    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        if (e.target.description.value.length > 2) {
            dispatch(addTodo({
                description: e.target.description.value,
                isDone: false
            }));
            e.target.reset();
        }
        else {
            e.target.description.classList.toggle("validationBorder")
            setTimeout(() => {
                e.target.description.classList.toggle("validationBorder")
            }, 500);
        }
    }

    return (
        <form onSubmit={handleSubmit} id='Box'>
            <input type="text" placeholder='Enter a To-Do with at least 3 letters.' id='todo' name="description" required />
            <button id='saveBtn' type="submit">Save</button>
        </form>
    );
}