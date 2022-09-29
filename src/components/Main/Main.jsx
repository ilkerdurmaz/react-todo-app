import "./Main.css";
import ToDoInput from "../ToDoInput/ToDoInput";
import ToDo from "../ToDo/ToDo";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { useSelector } from "react-redux";

export default function Main() {
  const todos = useSelector((state) => state.todoList.list);

  return (
    <div className="main">
      <div id="Header">
        <h2>To - Do List</h2>
        <div id="Links">
          <a
            href="https://github.com/ilkerdurmaz"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ilker-durmaz"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
        </div>
      </div>
      <hr />
      <ToDoInput />
      <hr />
      <div id="toDoList">
        {todos.length > 0 ? (
          todos.map((todo, index) => {
            return <ToDo todo={todo} key={index} index={index} />;
          })
        ) : (
          <h3>List is empty.</h3>
        )}
      </div>
    </div>
  );
}
