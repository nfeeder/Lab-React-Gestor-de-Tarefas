import TaskForm from '../components/TaskForm';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

function NewTask() {
  const navigate = useNavigate();

  const createTask = async (taskData) => {
    try {
      await api.post('/tasks', { ...taskData, done: false });
      navigate('/');
    } catch (err) {
      console.error('Erro ao criar tarefa:', err);
    }
  };

  return (
    <div>
      <h2>Nova Tarefa</h2>
      <TaskForm onSubmit={createTask} />
    </div>
  );
}

export default NewTask;