import { toast } from "react-toastify";

const taskReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      toast.success("Tarea nueva agregada");
      return state;
    }
    case "ADD_TASK_ERR": {
      toast.error("Oh a ocurrido un error");
      return state;
    }
    case "REMOVE_TASK": {
      toast.warn("Has eliminado una tarea...");
      return state;
    }
    case "REMOVE_TASK_ERR": {
      toast.error("Oh a ocurrido un error al eliminar la tarea....");
      return state;
    }
    case "TOGGLE_CHECKED": {
      toast.info("Tu tarea a cambiado...");
      return state;
    }
    case "TOGGLE_CHECKED_ERR": {
      toast.error("Oh a ocurrido un error al cambiar tu tarea...");
      return state;
    }
    default:
      return state;
  }
};

export default taskReducer;
