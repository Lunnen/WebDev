function Employee(props) {
  return (
    <div className="EmployeeDiv" key={props.index}>
      <img className="avatar" alt="Bild" src={props.avatar} />
      <div>
        <h2>{props.name}</h2>
        <p>
          <strong>email: </strong>
          {props.email}
        </p>
        <p>
          <strong>phone: </strong>
          {props.phone}
        </p>
        <p>
          <strong>skills: </strong>
          {props.skills}
        </p>

        <button
          type="button"
          className="inner-buttons"
          onClick={() => props.handleRemove()} // Part of Challenge 3
        >
          Remove
        </button>
        <button
          type="button"
          className="inner-buttons"
          onClick={() => props.handleEdit()} // Part of Challenge 4
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default Employee;
