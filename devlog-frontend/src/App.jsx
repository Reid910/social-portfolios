import { Routes, Route, Link } from 'react-router-dom'

function HomePage() {
  return <h1>Home Page</h1>
}

function ProfilePage() {
  return <h1>Profile Page</h1>
}

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App
