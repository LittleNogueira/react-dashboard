import React, { useState } from 'react';
import logo from './../../assets/logo.svg';
import './Login.css';
import Button from 'react-bootstrap-button-loader';
import ToastNotification from '../../utils/ToastNotification';
import { ToastContainer } from 'react-toastify';
// import AuthService from '../../utils/services/AuthService';
import FormValidator from '../../utils/FormValidator';
import { Redirect } from 'react-router-dom'
import Form from 'react-bootstrap/Form';


export default function Login(props){
  
  const [login, setLogin] = useState({email:'mateus_nogol@outook.com',password:'12345'});
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  
  const formValidator = new FormValidator([
    {
      field: 'email',
      method: 'isEmail',
      message: 'E-mail é obrigatorio!',
      validWhen: true
    },
    {
      field: 'password',
      method: 'isEmpty',
      message: 'Senha é obrigatorio!',
      validWhen: false
    }
  ]);

  const loginFunction = (e) => {
    e.preventDefault();
    const valid = formValidator.isValid(login);
    
    setLoading(true);

    if(valid.isValid){
      setRedirect(true);
    }else{
      setLoading(false);
      const { email, password } = valid;
      const errors = [email, password];

      errors.forEach(error => {
        if (!error.isValid)
          ToastNotification.notify('error', error.message);
      });
    }
  };

  return redirect ? <Redirect to='/dashboard' /> : (
    <div className="container-login">
      <div className="form" >
        <img className="logo" src={logo} alt="logo" />
        <Form onSubmit={loginFunction}>
          <Form.Group>
            <Form.Control value={login.email} onChange={(e) => setLogin({...login,email: e.target.value})}  name="email" className="form-login" type="email" placeholder="E-mail" autoComplete="off" />
          </Form.Group>

          <Form.Group>
            <Form.Control value={login.password} onChange={(e) => setLogin({...login,password: e.target.value})} name="password" className="form-login" type="password" placeholder="Password" />
          </Form.Group>
          <Button loading={loading} className="btn-library btn-login" type="submit" >Acessar</Button>
        </Form>
      </div>
      <ToastContainer />
    </div>
  );
}