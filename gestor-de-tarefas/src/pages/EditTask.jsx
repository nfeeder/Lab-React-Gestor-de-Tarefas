import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import TaskForm from '../components/TaskForm';

function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [taskData, setTaskData] = useState(null);

  useEffect(() => {
    api.get(`/tasks/${id}`)
      .then(res => setTaskData(res.data))
      .catch(err => console.error('Erro ao carregar tarefa:', err));
  }, [id]);

  const updateTask = async (updatedData) => {
    try {
      await api.put(`/tasks/${id}`, { ...taskData, ...updatedData });
      navigate('/');
    } catch (err) {
      console.error('Erro ao atualizar tarefa:', err);
    }
  };

  if (!taskData) return <p>A carregar tarefa...</p>;

  return (
    <div>
      <h2>Editar Tarefa</h2>
      <TaskForm onSubmit={updateTask} initialData={taskData} />
    </div>
  );
}

export default EditTask;