import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../layouts/Login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para validar o usuário e senha
    // Como é um login fake, vamos apenas redirecionar para a Home
    navigate('/');
  };

  const handleGuestLogin = () => {
    // Direciona para a página home sem autenticação
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Usuário:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="rememberMe">Manter conectado</label>
          </div>
          <button type="submit">Entrar</button>
        </form>
        <div className="or-text">ou</div>
        <button type="button" onClick={handleGuestLogin}>Logar como convidado</button>
      </div>
    </div>
  );
}
