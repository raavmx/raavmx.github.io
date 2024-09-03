import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as styles from './styles.module.scss';
import { Button, Input } from 'antd';
//import ButtonOtus from 'src/components/ButtonOtus';
//import { useDispatch } from 'react-redux';
//import { useModal } from 'src/hooks/useModal';
//import { regRequest } from 'src/stores/sagaStore/slices/user';

type Inputs = {
  email: string;
  password: string;
};

export const RegistrationForm = () => {
  //const dispatch = useDispatch();
  // const modal = useModal();
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<Inputs>();
  const formOptions = {
    email: {
      required: 'e-mail обязателен для ввода',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Неверный адрес электронной почты',
      },
    },
    password: {
      required: 'Пароль обязателен для ввода',
    },
  };
  const onSubmit = (data: Inputs) => {
    const { email, password } = data;
    // dispatch(regRequest({ email, password }));
    console.log("register", data);
    reset();
    // modal.close();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Controller name="email" control={control} render={({ field }) => <Input {...field} size="large" className='my-2' placeholder="login" />} />
      </div>
      <div>
        <Controller name="password" control={control} render={({ field }) => <Input.Password {...field} size="large" className='my-2' placeholder="password" />} />
      </div>
      <hr />
      <Button type="primary" htmlType="submit" className="w-100"> 
        Регистрация
      </Button>
    </form>
  );
};
