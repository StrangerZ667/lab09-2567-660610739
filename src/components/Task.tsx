import React from "react";

interface TaskItemProps {
  id: number;
  title: string;
  completed: boolean;
  deleteTaskFunc: (taskId: number) => void;
  toggleDoneTaskFunc: (taskId: number) => void;
}

export default function Task({
  id,
  title,
  deleteTaskFunc,
  toggleDoneTaskFunc,
  completed,
}: TaskItemProps) {
  const doneBtnOnClick = () => {
    toggleDoneTaskFunc(id);
  };
  const deleteBtnOnClick = () => {
    deleteTaskFunc(id);
  };

  return (
    <div className="d-flex p-3 gap-2 align-items-center border-bottom">
      {
        <span className="text-decoration-line-through">{title}</span>
      }
      <span>{title}</span>
      <button className="btn btn-success" onClick={doneBtnOnClick}>Done</button>
      <button className="btn btn-danger" onClick={deleteBtnOnClick}>Delete</button>
    </div>
  );
}
