import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await api.get('/tasks');
      setTasks(res.data);
    } catch (err) {
      console.error('Erro ao obter tarefas:', err);
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm('Tens a certeza que queres eliminar esta tarefa?');
    if (!confirm) return;

    try {
      await api.delete(`/tasks/${id}`);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (err) {
      console.error('Erro ao eliminar tarefa:', err);
    }
  };

  const toggleDone = async (id, currentStatus) => {
    try {
      await api.patch(`/tasks/${id}`, { done: !currentStatus });
      setTasks(tasks.map(task =>
        task.id === id ? { ...task, done: !currentStatus } : task
      ));
    } catch (err) {
      console.error('Erro ao atualizar estado da tarefa:', err);
    }
  };

  return (
    <div>

      {tasks.length === 0 ? (
        <p>Sem tarefas no momento.</p>
      ) : (
        tasks.map(task => (
          <div className={`task-card ${task.done ? 'done' : ''}`} key={task.id}>
            <h3>{task.title}</h3>
            {task.description && <p>{task.description}</p>}
            <p><strong>Prioridade:</strong> {task.priority}</p>

            <label>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleDone(task.id, task.done)}
              /> Concluir
            </label>
            {!task.done && (
            <div className="actions">
              <Link to={`/editar/${task.id}`}>
                <button>✏️ Editar</button>
              </Link>
              <button onClick={() => handleDelete(task.id)}>🗑️ Eliminar</button>
            </div>
          )}         
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;