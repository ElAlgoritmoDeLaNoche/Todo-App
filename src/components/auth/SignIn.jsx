import React, { Component } from 'react';
import "../../css/estilos.css";
import { signIn } from '../../actions/authActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {

  state = {
    email: "",
    password: ""
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.signIn(this.state);
  };

  render() {

    const { uid } = this.props;
    if(uid) return <Redirect to="/" />;

    return(

      <div>
      
      <form className="container" autoComplete="off" style={{ marginTop: "30px" }} onSubmit={ this.handleSubmit }>

      <legend>
        { " " }
        <h4 className="title">Inicia Sesión</h4>
      </legend>
      
      <div className="form-group">  
        <label htmlFor="email" className="montserrat">Ingresa un email</label>
        <input type="email" className="form-control" id="email" onChange={ this.handleChange } />
      </div>
      <div className="form-group">  
        <label htmlFor="password" className="montserrat">Ingresa un password</label>
        <input type="password" className="form-control" id="password" onChange={ this.handleChange } />
      </div>
      <button type="submit" className="btn btn-primary montserrat">
        Inicia Sesión
      </button>

      </form>

      </div>

    );
  }

}

const mapStateToProps = ( state ) => {
  
  console.log(state);
  const uid = state.firebase.auth.uid;
  return {
    uid: uid
  };

};

const mapDispatchToProps = ( dispatch ) => {

  return {
    signIn: (creds) => dispatch(signIn(creds))
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);