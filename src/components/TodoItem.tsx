import React, { FC } from "react";
import styled from "styled-components";
import { ITodo } from "../types/types";

const TodoLi = styled.li`
  margin-bottom: 1rem;
  list-style: none;
`;
const CheckboxInput = styled.input``;
const LabelTodo = styled.label`
  width: 80%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 0.5rem;
  background: #f3f3f3;
  font-size: 1.5rem;
`;
const RedText = styled.h3`
  z-index: 2;
  color: #fff;
  padding: 0.5rem;
  font-size: 1rem;
  background: red;
`;
const TextUndefined = styled.p`
  margin-bottom: 1rem;
  font-size: 1rem;
  width: 80%;
  text-align: center;
`;
interface TodoItemProps {
  todos: ITodo[];
  onToggle?(id: number): void;
  onRemove?: (id: number) => void;
}

export const TodoItem: FC<TodoItemProps> = ({ todos, onRemove, onToggle }) => {
  if (todos.length === 0) {
    return <TextUndefined>Данные пока нет !</TextUndefined>;
  }

  return (
    <ul>
      {todos.map((todo) => {
        return (
          <TodoLi key={todo.id}>
            <LabelTodo>
              <CheckboxInput
                type="checkbox"
                checked={todo.complated}
                onChange={onToggle?.bind(null, todo.id)}
              />
              <span>{todo.title}</span>
              <RedText onClick={() => onRemove!(todo.id)}>delete</RedText>
            </LabelTodo>
          </TodoLi>
        );
      })}
    </ul>
  );
};
