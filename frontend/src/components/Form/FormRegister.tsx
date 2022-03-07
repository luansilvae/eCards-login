import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { Container, InputGroup, SignIcon } from "./styles";
import Button from "../Button";
import useModal from "../../hooks/useModal";
import { useAuth } from "../../contexts/AuthProvider/useAuth";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("O campo nome é obrigatório"),
  email: Yup.string()
    .email("Insira um formatio válido de e-mail")
    .max(255)
    .required("O campo e-mail é obrigatório"),
  password: Yup.string().required("O campo senha é obrigatório"),
});

const FormRegister: React.FC = () => {
  const { showModal, hideModal } = useModal();
  const { register, signIn } = useAuth();

  return (
    <Container>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={async (values, actions) => {
          const response = await register(values);
          if (response.error) {
            const { email } = response.error;

            if (email) {
              actions.setFieldError("email", email);
            }

          } else {
            hideModal();
            signIn(values)
          }
        }}
      >
        {({ errors, touched, isValid }) => (
          <Form>
            <InputGroup>
              <label htmlFor="name">Nome de Usuário</label>
              <Field name="name" placeholder="Digite seu nome de usuário" />
              {errors.name && touched.name && <span>{errors.name}</span>}
            </InputGroup>

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
              Começe Agora <SignIcon />
            </Button>

            <span>
              Já possui uma conta?
              <strong
                onClick={() => {
                  hideModal();
                  showModal({ title: "Fazer Login", action: "login" });
                }}
              >
                Entrar Agora
              </strong>
            </span>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default FormRegister;
