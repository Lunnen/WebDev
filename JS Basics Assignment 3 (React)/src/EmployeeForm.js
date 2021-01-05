/* 
Challenge 2 (HIGH) - Add a form with an option to add new content 
*/
import React from "react";
import { useForm } from "react-hook-form";

export default function EmpForm(props) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    props.onSubmit(data);
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className="EmployeeDiv" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p>
          Fill this form to add Employees manually, <br />
          or click the "Add Employee" button for hardcoded info.
        </p>
        <div>
          <label>Name:</label>
          <input name="name" ref={register({ required: true })} />
          {errors.name && <span className="red">Field is required</span>}
        </div>
        <div>
          <label>Email:</label>
          <input name="email" ref={register({ required: true })} />
          {errors.email && <span className="red">Field is required</span>}
        </div>
        <div>
          <label>Phone:</label>
          <input name="phone" ref={register({ required: true })} />
          {errors.phone && <span className="red">Field is required</span>}
        </div>
        <div>
          <label>Skills:</label>
          <input name="skills" ref={register({ required: true })} />
          {errors.skills && <span className="red">Field is required</span>}
        </div>
        <div>
          <label>Link to Avatar/Image icon:</label>
          <input name="avatar" ref={register({ required: true })} />
          {errors.avatar && <span className="red">Field is required</span>}
        </div>

        <input className="button" type="submit" value="Skicka in manuellt" />
      </div>
    </form>
  );
}
