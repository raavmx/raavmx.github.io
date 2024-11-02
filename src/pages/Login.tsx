import React, { FC } from 'react';
import { LoginForm } from 'src/components/Forms/LoginForm/ui/LoginForm';
import { useLocation } from 'react-router-dom';
import { useNavigation } from 'react-router-dom';

export const Login: FC = () => {
  
  return (
    <div className="app-content w-100">
      <LoginForm></LoginForm>
    </div>
  );
};
