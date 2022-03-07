import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider/useAuth";

export function Home() {
  const { loading } = useAuth();

  return (
    <div>
      {loading ? (
        <span>Carregando...</span>
      ) : (
        <div>
          <h1>Página privada</h1>
        </div>
      )}
    </div>
  );
}
