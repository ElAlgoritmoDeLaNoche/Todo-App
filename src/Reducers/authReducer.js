import { toast } from "react-toastify";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGN_IN":
      toast("Bienvenido de nuevo...");
      return state;
    case "SIGN_IN_ERR":
      toast.error("Error al iniciar sesión...");
      return state;
    case "SIGN_OUT":
      toast("Has cerrado tu sesión...");
      return state;
    case "SIGN_UP":
      toast("Bienvenido gracias por registrarte...");
      return state;
    case "SIGN_UP_ERR":
      toast.error("Error al registrarte intentalo de nuevo...");
      return state;
    default:
      return state; 
  }
};

export default authReducer;
