import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5000/projects`)
      .then(res => {
        const p = res.data.find(p => p.id === parseInt(id));
        setProject(p);
      });

    axios.get(`http://localhost:5000/comments`)
      .then(res => setComments(res.data.filter(c => c.project_id === parseInt(id))));
  }, [id]);

  const submitComment = () => {
    axios.post(`http://localhost:5000/comments`, {
      content: newComment,
      project_id: parseInt(id),
      user_id: 1 // mock
    }).then(() => {
      setNewComment("");
      window.location.reload();
    });
  };

  if (!project) return <div>Loading...</div>;

  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>

      <h3>Comments</h3>
      <ul>
        {comments.map(c => <li key={c.id}>{c.content}</li>)}
      </ul>

      <input value={newComment} onChange={e => setNewComment(e.target.value)} />
      <button onClick={submitComment}>Post</button>
    </div>
  );
}

export default ProjectDetails;
