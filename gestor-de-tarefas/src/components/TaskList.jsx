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
        <div key={task.id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
          <h3 style={{ textDecoration: task.done ? 'line-through' : 'none' }}>{task.title}</h3>
          <p>{task.description}</p>
          <p><strong>Prioridade:</strong> {task.priority}</p>
          <button onClick={() => toggleDone(task)}>
            {task.done ? 'Desmarcar' : 'Concluir'}
          </button>{' '}
          <Link to={`/editar/${task.id}`}>Editar</Link>{' '}
          <button onClick={() => deleteTask(task.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;