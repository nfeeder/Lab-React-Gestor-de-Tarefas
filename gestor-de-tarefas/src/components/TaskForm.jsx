import { useState } from 'react';

function TaskForm({ onSubmit, initialData = {} }) {
  const [title, setTitle] = useState(initialData.title || '');
  const [description, setDescription] = useState(initialData.description || '');
  const [priority, setPriority] = useState(initialData.priority || 'baixa');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert('O título é obrigatório.');
    onSubmit({ title, description, priority });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Título: *</label><br />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Descrição:</label><br />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Prioridade:</label><br />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="baixa">Baixa</option>
          <option value="média">Média</option>
          <option value="alta">Alta</option>
        </select>
      </div>
      <button type="submit">Guardar</button>
    </form>
  );
}

export default TaskForm;