import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { FiLock, FiMail, FiUser } from 'react-icons/fi';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import * as Yup from 'yup';

import { api } from '../../utils/api';
import { getValidationErrors } from '../../utils/getValidationErrors';
import { InputForm } from '../../components/InputForm';

import { Container, Content } from './styles';
import toast from 'react-hot-toast';

interface UserData {
  name: string;
  username: string;
  password: string;
}

export const AuthForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { pathname } = useLocation();

  const isSignIn = pathname.includes('entrar');

  const handleCreateUser = async (data: UserData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        username: Yup.string()
          .required('Username é obrigatório'),
        password: Yup.string().min(6, 'A senha deve ter no minimo 6 caracteres')
      });

      await schema.validate(data, { abortEarly: false });

      await api.post('/users', { ...data, avatar_url: null });

      toast.success('Usuário criado com sucesso!');
    } catch (error: any) {
      if (error.name === "ValidationError") {
        const errors = getValidationErrors(error);
  
        formRef.current?.setErrors(errors);
      }
    }
  };

  const handleSignIn = async (data: Omit<UserData, 'name'>) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        username: Yup.string()
          .required('Username é obrigatório'),
        password: Yup.string().min(6, 'A senha deve ter no minimo 6 caracteres')
      });

      await schema.validate(data, { abortEarly: false });

      await api.post('/sessions', data).then(res => console.log({res}));
    } catch (error: any) {
      if (error.name === "ValidationError") {
        const errors = getValidationErrors(error);
  
        formRef.current?.setErrors(errors);
      }
    }
  };

  return (
    <Container>
      <Content>
        <Form 
          onSubmit={isSignIn ? handleSignIn : handleCreateUser} 
          ref={formRef}
        >
          <h1>{isSignIn 
            ? 'Faça o seu login para continuar' 
            : 'Faça o seu cadastro para continuar'
          }</h1>

          {!isSignIn && 
            <InputForm name="name" icon={FiUser} type="text" placeholder="Nome" />
          }

          <InputForm name="username" icon={FiMail} type="text" placeholder="Usuário" />

          <InputForm name="password" icon={FiLock} type="password" placeholder="Senha" />

          <button type="submit">
            Entrar
          </button>
        </Form>
        {isSignIn ? (
          <p>
            Não tem uma conta? 
            <a href="/cadastrar">
              Crie aqui!
            </a>
          </p>
        ) : (
          <p>
            Já tem uma conta?
            <a href="/entrar">
              Faça o logon aqui!
            </a>
          </p>
        )}
      </Content>
    </Container>
  );
}
