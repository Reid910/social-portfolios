import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/projects')
      .then(res => setProjects(res.data));
  }, []);

  return (
    <div>
      <h2>All Projects</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {projects.map(p => (
          <div key={p.id} style={{ border: '1px solid #ccc', padding: '1rem', width: '200px' }}>
            <h4>{p.title}</h4>
            <p>{p.description?.substring(0, 60)}</p>
            <Link to={`/project/${p.id}`}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
