import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "../../actions/authActions";
import { connect } from "react-redux";

const NavItems = ({ signOut, uid }) => {
  if (uid) {
    return (
      <Link to="/signin" className="nav-link" onClick={signOut}>
        Salir
      </Link>
    );
  } else {
    return (
      <div className="d-flex">
        <Link to="/signup" className="nav-link">
          <span className="montserrat">Registrate</span> 
        </Link>
        <Link to="/signin" className="nav-link">
          <span className="montserrat">Inicia Sesión</span> 
        </Link>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  const uid = state.firebase.auth.uid;
  return {
    uid: uid,
  };
};

const mapDistpatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDistpatchToProps)(NavItems);
