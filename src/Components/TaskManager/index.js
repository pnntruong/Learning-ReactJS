//Library
import React, { useEffect, useState } from "react";
import { db } from "../../firebase.config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

//Components
import Header from "./Header";
import TaskList from "./TaskList";
import Loading from "./Loading";

const TaskManager = () => {
  const [taskList, setTaskList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const taskCollection = collection(db, "TaskList");

  const getTasks = async () => {
    const tasks = await getDocs(taskCollection);
    setIsLoading(false);
    setTaskList(
      tasks.docs.map((taskDoc) => ({ ...taskDoc.data(), id: taskDoc.id }))
    );
  };

  const updateTaskList = async (id, taskUpdate) => {
    const taskDoc = doc(db, "TaskList", id);
    await updateDoc(taskDoc, { ...taskUpdate });
    getTasks();
  };

  const addTask = async (task) => {
    await addDoc(taskCollection, task);
    getTasks();
  };

  const deleteTask = async (id) => {
    await deleteDoc(doc(db, "TaskList", id));
    getTasks();
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="flex flex-col p-3 container max-h-screen">
      <Header addTask={addTask} />
      {isLoading ? (
        <Loading className="self-center"/>
      ) : (
        <TaskList
          updateTaskList={updateTaskList}
          taskList={taskList}
          deleteTask={deleteTask}
        />
      )}
    </div>
  );
};

export default TaskManager;
