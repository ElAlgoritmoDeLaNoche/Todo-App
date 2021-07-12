import React from "react";
import Task from "./Task";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const Tasks = ({ tasks }) => {
  return (
    <>
      <table
        className="table table-dark container"
        style={{ marginTop: "30px" }}
      >
        <thead>
          <tr className="text-info">
            <th scope="col">Tareas</th>
            <th scope="col">Añadido</th>
            <th scope="col">Estado</th>
            <th scope="col">Borrar</th>
          </tr>
        </thead>
        <tbody>
          {tasks && tasks.map((task) => <Task task={task} key={task.id} className="montserrat"/>)}
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  const tasks = state.firestore.ordered.tasks;
  return {
    tasks: tasks,
    uid: state.firebase.auth.uid
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "tasks",
      where: ["authorId", "==", ownProps.uid],
      orderBy: ["date", "desc"],
    },
  ])
)(Tasks);
