"use client";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Task from "@components/Task";
import TaskInput from "@components/TaskInput";

import { nanoid } from "nanoid";
import { useState } from "react";

export default function Home() {
  interface TaskItem {
    id:string;
    title: string;
    completed: boolean;
  }

  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [count1, setAll] = useState(0);
  const [count2, setDone] = useState(0);

  const addTask = (newTaskTitle: any) => {
    const newTask = { id: nanoid(), title: newTaskTitle, completed: false };
    const newTasks = [...tasks, newTask];
    setAll(count1 + 1);
    setTasks(newTasks);
  };

  const deleteTask = (taskId: any) => {
    const taskToDelete = tasks.find((task) => task.id === taskId);
    if (taskToDelete && taskToDelete.completed) {
      setDone(Math.max(count2 - 1, 0));
    }
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setAll(count1 - 1);
    setTasks(newTasks);
  };

  const toggleDoneTask = (taskId: any) => {
    const newTasks = structuredClone(tasks);
    const task = newTasks.find((x) => x.id === taskId);
    const isTaskCompleted = task.completed;
    task.completed = !task.completed;
    setTasks(newTasks);
    
    if (task.completed && !isTaskCompleted) {
      setDone(count2 + 1);
    }
     else if (!task.completed && isTaskCompleted) {
      setDone(Math.max(count2 - 1, 0));
    }
  };
  

  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header />
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* Task summary */}
        <p className="text-center text-secondary fst-italic">
          All ({count1}) Done ({count2})
        </p>
        {/* task input */}
        <TaskInput addTaskFunc={addTask} />

        {/* tasks mapping*/}
        {tasks.map((task) => (
          <Task
            id={task.id}
            title={task.title}
            deleteTaskFunc={deleteTask}
            toggleDoneTaskFunc={toggleDoneTask}
            completed={task.completed}
            key={task.id}
          />
        ))}
      </div>

      {/* //footer section */}
      <Footer year="2024" fullName="Kanchai Khumdee" studentId="660610739" />
    </div>
  );
}
