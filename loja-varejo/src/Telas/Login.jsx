import '../layouts/Login.css';

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form>
          <div>
            <label htmlFor="username">Usuário:</label>
            <input
              type="text"
              id="username"
              required // Adicionei required para garantir que o campo seja preenchido
            />
          </div>
          <div>
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              required // Adicionei required para garantir que o campo seja preenchido
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