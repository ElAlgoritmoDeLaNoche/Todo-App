import React, { Component } from 'react';
import { signUp } from '../../actions/authActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class SignUp extends Component {

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
    this.props.signUp(this.state);
  };

  render() {

    const { uid } = this.props;
    if(uid) return <Redirect to="/" />;

    return(

      <div>
      
      <form className="container" autoComplete="off" style={{ marginTop: "30px" }} onSubmit={ this.handleSubmit }>

      <legend>
        { " " }
        <h4 className="title">Registrate</h4>
      </legend>
      
      <div className="form-group">  
        <label htmlFor="email" className="montserrat">Ingresa un email</label>
        <input type="email" className="form-control" id="email" onChange={ this.handleChange } />
      </div>
      <div className="form-group">  
        <label htmlFor="password" className="montserrat">Ingresa un password</label>
        <input type="password" className="form-control" id="password" onChange={ this.handleChange } />
      </div>
      <button type="submit" className="btn btn-primary">
        Registrate
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
    signUp: (creds) => dispatch(signUp(creds))
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);