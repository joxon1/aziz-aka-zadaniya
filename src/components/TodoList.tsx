import React, { FC, useRef, useState } from "react";
import styled from "styled-components";
import { ITodo } from "../types/types";
import TodoItem from "./TodoItem";

const Form = styled.input`
  width: 80%;
  border: 1px solid black;
  font-size: 15px;
  padding: 0.5rem;
`;

const Btn = styled.button`
  font-size: 15px;
  padding: 0.5rem;
  border: none;
  background: green;
  color: #fff;
  margin-left: 0.5rem;
  cursor: pointer;
`;

interface TodoListProps {
  onAdd(title: string): void;
}

const TodoList: FC<TodoListProps> = (props) => {
  const [title, setTitle] = useState<string>("");

  const ref = useRef<HTMLInputElement>(null);

  // const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(e.target.value);
  // };

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      props.onAdd(ref.current!.value);
      ref.current!.value = "";
    }
  };
  const addInfo = (e: React.MouseEvent) => {
    props.onAdd(ref.current!.value);
    ref.current!.value = "";
  };

  return (
    <div>
      <Form
        type="text"
        // value={title}
        id="title"
        ref={ref}
        placeholder="Введите название дело"
        // onChange={handleInput}
        onKeyPress={keyPressHandler}
      />
      <Btn onClick={addInfo}>Добавить</Btn>
      {/* <TodoItem todos={todos} /> */}
    </div>
  );
};

export default TodoList;
