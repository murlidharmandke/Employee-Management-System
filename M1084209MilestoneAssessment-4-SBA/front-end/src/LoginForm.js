import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import LoginImg from "./LoginImg.png";
export default function LoginForm() {
  const navigate = useNavigate();
  // const [error, setError] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.Type === "select") {
      console.log("Type required");
      // setError("error");
    } else {
      console.log(data);

      navigate("/EmployeesList");
    }
  };

  return (
    <>
      {/* <img src={LoginImg} /> */}
      <div className="row" style={{ marginTop: 50, marginLeft: 10 }}>
        <div className="col">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBlfBTyJs8R80YIUfPlYBmfkQaw_Kz3IA5Q&usqp=CAU"
            alt="no img"
            style={{ width: 690, height: 600 }}
          />
        </div>
        <div className="col">
          <Form className="divClass" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3 pl-5 pr-5" controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                {...register("userName", {
                  required: true,
                })}
              />

              {errors.userName && <p>user name is required.</p>}
            </Form.Group>

            <Form.Group className="mb-3 " controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: true,
                })}
              />
              {errors.password && <p>password is required</p>}
            </Form.Group>
            <Button variant="primary" type="submit">
              OK
            </Button>
            <br />
            <br />
            <input
              type="reset"
              value="Cancel"
              style={{ backgroundColor: "blue" }}
            />
            <br />
            <a href="#">change Password</a>
            <br />
            <a href="#">Password Recovery</a>
          </Form>
        </div>
      </div>
    </>
  );
}
