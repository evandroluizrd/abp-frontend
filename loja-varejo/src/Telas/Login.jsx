import '../layouts/Login.css';
import { useContext, useState } from 'react';
import { TesteLogin } from '../db/login';
import { LoginContext } from '../db/LoginContext';

export default function Login() {
  const { login } = useContext(LoginContext);
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');

  const HandleSubmit = async (event) => {
    event.preventDefault();

    try {
      const UserData = await TesteLogin(Username, Password);
      login(UserData);
    } catch {
      alert("Erro, verifique seu usuario ou senha");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={HandleSubmit} method='POST'>
          <div>
            <label htmlFor="username">Usuário:</label>
            <input
              onChange={(event) => setUsername(event.target.value)}
              value={Username}
              name='username'
              type="text"
              id="username"
              required 
            />
          </div>
          <div>
            <label htmlFor="password">Senha:</label>
            <input
              onChange={(event) => setPassword(event.target.value)}
              value={Password}
              name="password"
              type="password"
              id="password"
              required 
            />
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="rememberMe"
            />
            <label htmlFor="rememberMe">Manter conectado</label>
          </div>
          <button type="submit">Entrar</button>
        </form>
        <div className="or-text">ou</div>
        <button type="button">Logar como convidado</button>
      </div>
    </div>
  );
}