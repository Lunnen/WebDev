import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import "./Employee.css";
import EmployeeForm from "./EmployeeForm";

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

  /* Challenge 2 (HIGH) - Add a form with an option to add new content */
  function handleAddEmployeeManually(input) {
    setEmployees(function (prevState) {
      return [...prevState, input]; //show previous info and add with new input from EmpForm
    });
  }
  /* ------------------------------------------------- */
  /* Challenge 3 (HIGH) - Add delete functionality */
  function handleRemove(inputIndex) {
    const newList = Employees.filter(
      (item, itemIndex) => itemIndex !== inputIndex
    );
    setEmployees(newList);
  }
  /* ------------------------------------------------- */
  /* Challenge 4 (INSANE) - Add update/edit functionality */
  function handleEdit(inputIndex) {
    /* The input is a simple Prompt for info. 
       Functional but not optimal. 
     */

    let newArr = [...Employees]; // copying the old array
    newArr[inputIndex] = {
      name: prompt("Please enter name", Employees[inputIndex].name), //asks for new name and shows the former one in an editable way.
      email: prompt("Email: ", Employees[inputIndex].email),
      phone: prompt("Phone: ", Employees[inputIndex].phone),
      skills: prompt("Skills: ", Employees[inputIndex].skills),
      avatar: prompt(
        "Link to Avatar/Image icon: ",
        Employees[inputIndex].avatar
      ),
    };
    setEmployees(newArr);
  }
  /* ------------------------------------------------- */

  return (
    <>
      <h3>Employee List</h3>

      <EmployeeForm onSubmit={handleAddEmployeeManually} />
      {/* Challenge 2 - Called by child */}

      <button className="button" onClick={handleAddEmployee}>
        Add Employee
      </button>
      {Employees.map(function ({ name, email, phone, skills, avatar }, index) {
        return (
          <Employee
            key={index} //should be unique
            name={name}
            email={email}
            phone={phone}
            skills={skills}
            avatar={avatar}
            handleRemove={() => handleRemove(index)} //Challenge 3 - called by child.
            handleEdit={() => handleEdit(index)} //Challenge 4 - called by child.
          />
        );
      })}
    </>
  );
}

export default EmployeeList;
