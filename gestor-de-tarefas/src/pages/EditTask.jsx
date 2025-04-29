import { useParams } from 'react-router-dom';

function EditTask() {
  const { id } = useParams();
  return <h2>Editar Tarefa #{id}</h2>;
}
export default EditTask;