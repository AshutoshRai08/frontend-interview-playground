import { useEffect, useState, type ChangeEvent } from "react";
import ToggleSlider from "../../shared/elements/toogle";
import type { Todo } from "../../types/app-data";

const TodoPage = () => {
  const [inputValue, setInputValue] = useState<string>("");
  // const [todoList, setTodoList] = useState<Todo[]>(
  //   JSON.parse(localStorage.getItem(TODO_STORAGE_KEY) ?? "[]"),
  // );
  const TODO_STORAGE_KEY = "todos";
  const [todoList, setTodoList] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem(TODO_STORAGE_KEY);
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // batch update not needed casue val not dependent on prev value
    console.log(todoList);
  };
  const handleAddTodo = () => {
    //check for emptyness although trim at disbled button is a check but api can trigger these kind of changes byhassing the button
    const trimmedValue = inputValue.trim();

    if (!trimmedValue) return;

    const newTodo: Todo = {
      id: Date.now().toString(),
      text: trimmedValue,
      completed: false,
    };

    setTodoList((prev) => [...prev, newTodo]);
    // setTodoList((prev) => [
    //   ...prev,
    //   {
    //     id: Date.now().toString(),
    //     text: trimmedValue,
    //   },
    // ]);
    setInputValue("");
  };
  const handleDeleteTodo = (id: string) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id: string) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
    console.log(todoList);
  };

  return (
    <>
      <h1>Todo Page</h1>
      <div
        className="toDo"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          margin: "20px",
        }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add aa new todo.."
        />
        <button
          disabled={!inputValue.trim()}
          // disabled={inputValue.length > 0 ? false : true} XX this allows  "      "
          onClick={handleAddTodo}
        >
          Add ToDo
        </button>
      </div>
      <div
        style={{
          display: "flex",
          gap: "5px",
          flexDirection: "column",
          width: "90vw",
        }}
      >
        {todoList.map((todo) => (
          <div
            key={todo.id}
            style={{
              display: "flex",
              border: "2px solid red",
              borderRadius: "999px",
              borderColor: "red",
              padding: "10px",
              justifyContent: "space-between",
              // gap: "20px",
            }}
          >
            <div
              style={{
                overflowY: "hidden",
                // overflowX: "scroll",
                wordWrap: "break-word",
                textDecoration: todo.completed ? "line-through" : "",
              }}
            >
              {todo.text}
            </div>
            <div>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(todo.id)}
              />
              <ToggleSlider
                checked={todo.completed}
                onToggle={() => handleToggleTodo(todo.id)}
              />
            </div>
            <div>
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoPage;
