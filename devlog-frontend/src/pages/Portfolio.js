import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    axios.get('http://localhost:5000/projects')
      .then(res => setProjects(res.data.filter(p => p.user_id === 1))); // mock user
  }, []);

  const addProject = () => {
    axios.post('http://localhost:5000/projects', {
      title,
      description: desc,
      user_id: 1
    }).then(() => {
      setTitle("");
      setDesc("");
      window.location.reload();
    });
  };

  return (
    <div>
      <h2>My Portfolio</h2>

      <h4>Add Project</h4>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <br />
      <textarea placeholder="Description" value={desc} onChange={e => setDesc(e.target.value)} />
      <br />
      <button onClick={addProject}>Add</button>

      <h4>My Projects</h4>
      <ul>
        {projects.map(p => <li key={p.id}>{p.title}</li>)}
      </ul>
    </div>
  );
}

export default Portfolio;
