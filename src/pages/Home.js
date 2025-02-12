import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Welcome to Home</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
