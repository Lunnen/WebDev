import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import "./Employee.css";

function EmployeeList() {
  let [Employees, setEmployees] = useState([
    {
      name: "Yazeen Jasim",
      email: "test@mail.com",
      phone: "070000000",
      skills: "React, Javascript, C++, Java, Python, GCP",
      avatar: "https://i.imgur.com/t9HFQvX.png",
    },
    {
      name: "Geralt of Rivia",
      email: "test@mail.com",
      phone: "070000000",
      skills: "Angular, CSS, HTML, Javascript",
      avatar: "https://i.imgur.com/Q9qFt3m.png",
    },
    {
      name: "Yennefer Of Vengerberg",
      email: "test@mail.com",
      phone: "070000000",
      skills: "Go, python, Nodejs",
      avatar: "https://i.imgur.com/ebHfuth.png",
    },
  ]);

  /* CHALLENGE 1 - Save with LocalStorage (MEDIUM) */
  useEffect(function () {
    let input = JSON.parse(localStorage.getItem("EmployeeData"));
    if (input) {
      setEmployees(input);
    }
  }, []); //Read from LocalStorage only ONCE, therefore empty brackets.

  useEffect(
    function () {
      localStorage.setItem("EmployeeData", JSON.stringify(Employees));
    },
    [Employees] //Every time the data of Employee array changes, store to Storage.
  );
  /* ------------------------------------------------ */

  function handleAddEmployee() {
    setEmployees(function (prevState) {
      return [
        ...prevState,
        {
          name: "Triss Merigold",
          email: "yazeenj@outlook.com",
          phone: "070000000",
          skills: "Vue, firebase, git, c#",
          avatar: "https://i.imgur.com/TUhCrsY.png",
        },
      ];
    });
  }

  return (
    <>
      <h3>Employee List</h3>

      <button className="button" onClick={handleAddEmployee}>
        Add Employee
      </button>
      {Employees.map(function ({ name, email, phone, skills, avatar }) {
        return (
          <Employee
            key={Math.random() * Date.now()} //should be unique
            name={name}
            email={email}
            phone={phone}
            skills={skills}
            avatar={avatar}
          />
        );
      })}
    </>
  );
}

export default EmployeeList;
