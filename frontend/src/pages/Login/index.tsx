import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider/useAuth";

const Login: React.FC = () => {
  const { authenticated, loading } = useAuth();

  if (authenticated) {
    return <Navigate to="/home" />;
  }

  return (
    <div>
      {loading ? (
        <span>Carregando...</span>
      ) : (
        <div>Faça login para ter acesso ao conteúdo do site.</div>
      )}
    </div>
  );
};

export default Login;
