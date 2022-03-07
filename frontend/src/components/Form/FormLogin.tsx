import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { Container, InputGroup, SignIcon } from "./styles";
import Button from "../Button";
import useModal from "../../hooks/useModal";
import { useAuth } from "../../contexts/AuthProvider/useAuth";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um formato válido de e-mail")
    .max(255)
    .required("O campo e-mail é obrigatório"),
  password: Yup.string().required("O campo senha é obrigatório"),
});

const FormLogin: React.FC = () => {
  const { showModal, hideModal } = useModal();
  const { signIn } = useAuth(); 

  return (
    <Container>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={async (values, actions) => {
          const response = await signIn(values);

          if (response.error) {
            const { email, password } = response.error;

            if (email) {
              actions.setFieldError("email", email);
            }

            if (password) {
              actions.setFieldError("password", password);
            }
          } else {
            hideModal();
          }
        }}
      >
        {({ errors, touched, isValid }) => (
          <Form>
            <InputGroup>
              <label htmlFor="email">E-mail</label>
              <Field name="email" placeholder="Digite seu e-mail" />
              {errors.email && touched.email && <span>{errors.email}</span>}
            </InputGroup>

            <InputGroup>
              <label htmlFor="password">Senha</label>
              <Field
                name="password"
                type="password"
                placeholder="Digite sua senha"
              />
              {errors.password && touched.password && (
                <span>{errors.password}</span>
              )}
            </InputGroup>

            <Button
              type="submit"
              background="#fff"
              borderColor="#fff"
              color="#121721"
              disabled={!isValid}
            >
              Entrar <SignIcon />
            </Button>

            <span>
              Não possui uma conta?
              <strong
                onClick={() => {
                  hideModal();
                  showModal({ title: "Criar Conta", action: "register" });
                }}
              >
                Cadastre-se Agora
              </strong>
            </span>
            <span>
              <strong
                onClick={() => {
                  hideModal();
                  showModal({ title: "Esqueceu a senha?", action: "forgot_password" });
                }}
              >
                Esqueceu sua senha?
              </strong>
            </span>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default FormLogin;
