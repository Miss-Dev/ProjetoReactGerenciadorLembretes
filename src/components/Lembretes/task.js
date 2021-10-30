import React from "react";
import "./task.css";
import PropTypes from "prop-types";

export default function Lembretes({ title, onAddLembrete, tasks }) {
  const addTask = () => {
    onAddLembrete("Novo lembrete", "A fazer");
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content"></div>
      <button onClick={addTask}>Adicionar lembrete</button>
    </div>
  );
}

Lembretes.PropTypes = {
  title: PropTypes.string.isRequired,
  onAddLembrete: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
};
