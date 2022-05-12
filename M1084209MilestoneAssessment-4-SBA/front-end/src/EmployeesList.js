import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export default function EmployeesList() {
  const navigate = useNavigate();
  const [emp, SetEmp] = useState();
  const Empget = async () => {
    const res = await axios.get("http://localhost:9000/api/get-emp");
    SetEmp(res.data);
    console.log(res);
  };

  useEffect(() => {
    Empget();
  }, []);

  const deleteEmpById = async (id) => {
    console.log(id);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const res = await axios.delete(
          "http://localhost:9000/api/delete-emp/" + id
        );

        console.log(res.data);
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
        Empget();
        console.log(res.error);
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  const AddEmp = async () => {
    navigate("/AddEmp");
  };

  const editEmpDetailsById = async (id) => {
    navigate("/EditEmp/" + id);
  };
  return (
    <div>
      <h1 style={{ marginLeft: "600px" }}>Employees List</h1>
      <br />
      <Button
        onClick={() => {
          AddEmp();
        }}
      >
        Add Employee
      </Button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Employee User Name</th>
            <th>Employee Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {emp &&
            emp.map((item) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.userName}</td>
                  <td>{item.mail}</td>
                  <td>
                    <Button
                      className="btn btn-info"
                      onClick={() => editEmpDetailsById(item._id)}
                    >
                      Update
                    </Button>
                    &nbsp;&nbsp;
                    <Button
                      className="btn btn-danger"
                      onClick={() => deleteEmpById(item._id)}
                    >
                      Delete
                    </Button>
                    &nbsp;&nbsp;
                    <Button className="btn btn-info">View</Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
