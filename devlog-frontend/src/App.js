import React from 'react';

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/">My Portfolio</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About Me</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-light text-center py-5">
        <div className="container">
          <h1 className="display-4">Welcome to My Portfolio</h1>
          <p className="lead mb-4">I’m Sam Nelson, a passionate developer building awesome projects.</p>
          <a href="#projects" className="btn btn-primary btn-lg">See My Projects</a>
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="py-5 bg-white">
        <div className="container">
          <h2 className="mb-4 text-center">Projects</h2>
          <div className="row g-4">
            {/* Example project card */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Project 1" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Project Title 1</h5>
                  <p className="card-text flex-grow-1">Brief description of your project goes here.</p>
                  <a href="#" className="btn btn-outline-primary mt-auto">View Project</a>
                </div>
              </div>
            </div>

            {/* Duplicate or add more project cards */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Project 2" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Project Title 2</h5>
                  <p className="card-text flex-grow-1">Another project description goes here.</p>
                  <a href="#" className="btn btn-outline-primary mt-auto">View Project</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Project 3" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Project Title 3</h5>
                  <p className="card-text flex-grow-1">Description for your third project.</p>
                  <a href="#" className="btn btn-outline-primary mt-auto">View Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4 text-center">About Me</h2>
          <p className="text-center">
            Hi! I’m Sam Nelson, a developer who loves creating interactive and fun projects using React and Bootstrap.
            I have experience working on web apps, games, and more. Feel free to connect with me!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-3">
        <div className="container">
          &copy; {new Date().getFullYear()} Sam Nelson. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default App;
