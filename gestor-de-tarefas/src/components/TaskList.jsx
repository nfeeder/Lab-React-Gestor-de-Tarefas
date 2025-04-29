import { useEffect, useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get('/tasks')
      .then(res => setTasks(res.data))
      .catch(err => console.error('Erro ao obter tarefas:', err));
  }, []);

  const toggleDone = async (task) => {
    try {
      await api.patch(`/tasks/${task.id}`, { done: !task.done });
      setTasks(tasks.map(t => t.id === task.id ? { ...t, done: !t.done } : t));
    } catch (err) {
      console.error('Erro ao actualizar tarefa:', err);
    }
  };

  const deleteTask = async (id) => {
    if (!confirm('Tem a certeza que quer eliminar esta tarefa?')) return;
    try {
      await api.delete(`/tasks/${id}`);
      setTasks(tasks.filter(t => t.id !== id));
    } catch (err) {
      console.error('Erro ao eliminar tarefa:', err);
    }
  };

  return (
    <div>
      {tasks.map(task => (
        <div className="task-card" key={task.id}>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p><strong>Prioridade:</strong> {task.priority}</p>
        <p>
          <label>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleDone(task.id, task.done)}
            />{' '}
            Concluída
          </label>
        </p>
        <div className="task-actions">
          <Link to={`/editar/${task.id}`}><button>Editar</button></Link>
          <button onClick={() => handleDelete(task.id)}>Eliminar</button>
        </div>
      </div>
      ))}
    </div>
  );
}

export default TaskList;