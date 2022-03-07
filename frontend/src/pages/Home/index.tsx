import jwt_decode from "jwt-decode";
import { useAuth } from "../../contexts/AuthProvider/useAuth";
import { getUserLocalStorage } from "../../contexts/AuthProvider/utils";

interface UserData {
  user: { id: string; email: string };
}

export function Home() {
  const { loading } = useAuth();

  const token = getUserLocalStorage();
  const {
    user: { id, email },
  }: UserData = jwt_decode(token);

  return (
    <div>
      {loading ? (
        <span>Carregando...</span>
      ) : (
        <div>
          <h1>Usuário logado: {email}</h1>
        </div>
      )}
    </div>
  );
}
