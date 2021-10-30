import "./styles.css";
import Navbar from "./components/Navbar/navbar";
import Lembretes from "./components/Lembretes/task";
import { useState } from "react";

const task = {
  id: 0,
  title: "Novo lembrete",
  state: "pendente"
};

let ContId = 0;
const geraId = () => {
  ContId++;
  return ContId;
};

export default function App() {
  const [tasks, setTasks] = useState({});

  const addLembrete = (title, state) => {
    const newtask = {
      id: geraId(),
      title,
      state
    };
    setTasks((lembretesExistentes) => {
      return [...lembretesExistentes, newtask];
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Lembretes title="A fazer" onAddLembrete={addLembrete} tasks={tasks} />
      </div>
    </div>
  );
}
