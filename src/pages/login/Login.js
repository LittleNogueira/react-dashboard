import React, { Component } from 'react';
import logo from './../../assets/logo.svg';
import './Login.css';
import Button from 'react-bootstrap-button-loader';
import ToastNotification from '../../utils/ToastNotification';
import { ToastContainer } from 'react-toastify';
// import AuthService from '../../utils/services/AuthService';
import FormValidator from '../../utils/FormValidator';
import { Redirect } from 'react-router-dom'


class Login extends Component {

  constructor(props){
    super(props);

    this.state = {
      login:{
        email:'mateus_nogol@outlook.com',
        password: '12345'
      },
      loading: false,
      redirect: false
    };

    this.formValidator = new FormValidator([
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
    ])
  }

  changeValue = event => {
    const field = event.target.name;
    this.setState({
      login:{
        ...this.state.login,
        [field]: event.target.value
      }
    });
  }

  login = () => {
    const valid = this.formValidator.isValid(this.state.login);
    this.setState({loading:true});

    if(valid.isValid){
      this.setState({redirect:true});
      // AuthService.login(this.state.login).then(res => {
      //   ToastNotification.notify('success',":)");
      // }).catch(e => {
      //   ToastNotification.notify('error',"Dados invalidos!");
      // }).finally(res => {
      //   this.setState({loading:false});
      // })
    }else{
      const {email, password} = valid;
      const errors = [email, password];

      errors.forEach(error => {
        if(!error.isValid)
          ToastNotification.notify('error',error.message);
      });
      this.setState({loading:false});
    }
  }

  render() {

    const {loading, redirect, login} = this.state;

    if (redirect) {
      return <Redirect to='/dashboard'/>;
    }

    return (
      <div className="container-login">
        <div className="form" >
          <img className="logo" src={logo} alt="logo" />
          <form>
            <div className="form-group">
              <input type="text" id="email" value={login.email} onChange={this.changeValue} className="form-library" name="email" placeholder="E-mail" autoComplete="off"/>
            </div>
            <div className="form-group">
              <input id="password" value={login.password} onChange={this.changeValue} className="form-library" name="password" type="password" placeholder="Senha"/>
            </div>
            <Button loading={loading} onClick={() => this.login()} className="btn-library btn-login" type="button" >Acessar</Button>
          </form>
        </div>
        <ToastContainer/>
      </div>
    );
  }
}

export default Login;
