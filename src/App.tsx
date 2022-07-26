import React, { FC, useState } from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
// import { Switch, Route } from "react-router-dom";
// import NumberList from "./components/NumberList";
import TodoList from "./components/TodoList";
// import FormList from "./components/FormList";
import { TodoItem } from "./components/TodoItem";
import { ITodo } from "./types/types";

const Container = styled.div`
  padding: 2rem;
`;
const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addHandler = (title: string) => {
    const newTodo = {
      title,
      id: Date.now(),
      complated: false
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.complated = !todo.complated;
        }
        return todo;
      })
    );
  };

  const removeHandler = (id: number) => {
    const alertMessage = window.confirm("Вы точно хотите удалить элемент?");
    if (alertMessage) {
      setTodos((prev) => prev.filter((prev) => prev.id !== id));
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <TodoList onAdd={addHandler} />
        <TodoItem
          todos={todos}
          onToggle={toggleHandler}
          onRemove={removeHandler}
        />
      </Container>
    </>
  );
};

export default App;
