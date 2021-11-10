import { useEffect, useState } from "react";
import "./App.css";

const { REACT_APP_BASE_URL } = process.env;
function App() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const getAllTodos = async () => {
    try {
      const fetchTodos = await fetch(`${REACT_APP_BASE_URL}/todos`);
      if (fetchTodos.ok) {
        const { data } = await fetchTodos.json();
        setTodoList(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  const addTodo = async () => {
    try {
      const postTodo = await fetch(`${REACT_APP_BASE_URL}/todos`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: input,
          completeStatus: false,
        }),
      });

      if (postTodo.ok) {
        setInput("");
        getAllTodos();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`${REACT_APP_BASE_URL}/todos/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        getAllTodos();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const editTodo = async (id) => {
    const input = prompt("edit your todo");
    try {
      const response = await fetch(`${REACT_APP_BASE_URL}/todos/${id}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: input,
          completeStatus: "false",
        }),
      });

      if (response.ok) {
        getAllTodos();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <h1>This is a todo list app</h1>
      <ul>
        {todoList.length
          ? todoList.map((todo) => (
              <li key={todo.id}>
                {todo.title}
                <span onClick={() => deleteTodo(todo.id)}>
                  <i class="fas fa-trash"></i>
                </span>
                <span onClick={() => editTodo(todo.id)}>
                  <i class="fas fa-edit"></i>
                </span>
              </li>
            ))
          : null}
      </ul>
      <input
        placeholder="Enter your todo item"
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addTodo();
        }}
      >
        add todo
      </button>
    </div>
  );
}

export default App;
