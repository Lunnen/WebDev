function Employee({ name, email, phone, skills, avatar }) {
  return (
    <div className="EmployeeDiv">
      <img className="avatar" alt="Bild" src={avatar} />
      <ul>
        <h2>{name}</h2>
        <p>
          <strong>email: </strong>
          {email}
        </p>
        <p>
          <strong>phone: </strong>
          {phone}
        </p>
        <p>
          <strong>skills: </strong>
          {skills}
        </p>
      </ul>
    </div>
  );
}

export default Employee;
