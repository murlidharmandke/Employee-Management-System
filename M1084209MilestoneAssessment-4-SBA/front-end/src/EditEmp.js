import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./style.scss";
export default function RegistrationForm() {
  let { id } = useParams();
  //   const [name, setName] = useState();
  //   const [userName, setUserName] = useState();
  //   const [mail, setMail] = useState();
  //   const [phone, setPhone] = useState();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const isValidEmail = (email) =>
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  const handleEmailValidation = (email) => {
    return isValidEmail(email);
  };

  function checkPassword(str) {
    // var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    return re.test(str);
  }

  const onSubmit = async (data) => {
    console.log(data);
    const res = await axios.put(
      "http://localhost:9000/api/edit-emp/" + id,
      data
    );

    console.log(res);
    navigate("/EmployeesList");
  };

  //   const getempById = async (id) => {
  //     console.log(id);

  //     const res = await axios.get(
  //       "http://localhost:9000/api/get-emp-by-id/",
  //       +id
  //     );

  //     console.log(res.data);
  //     setName(res.data.name);
  //     setUserName(res.data.userName);
  //     setMail(res.data.mail);
  //     setPhone(res.data.phone);
  //   };
  //   useEffect(() => {
  //     getempById();
  //   }, []);

  return (
    <div>
      <Form className="divClass" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 pl-5 pr-5" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            {...register("name", {
              required: true,
            })}
          />

          {errors.name && <p>name is required.</p>}
        </Form.Group>
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
        <Form.Group className="mb-3 " controlId="formBasicPassword">
          <Form.Label>RE Enter Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Re enter Password"
            {...register("reEnterPassword", {
              required: true,
              validate: checkPassword,
            })}
          />
          {errors.reEnterPassword && (
            <p>
              {" "}
              Password and re type password don't match <br /> or The password
              Must contain at least one number and one uppercase and lowercase
              letter, and at least 8 or more characters
            </p>
          )}
        </Form.Group>
        <Form.Group className="mb-3 pl-5 pr-5" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register("mail", {
              required: true,
              validate: handleEmailValidation,
            })}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          {errors.mail && <p>invalid E-mail please provide a valid Email</p>}
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            placeholder="enter Phone number"
            {...register("phone", {
              required: true,
            })}
          />
          {errors.phone && <p>phone number should have 10 digits</p>}
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Employee
        </Button>
      </Form>
    </div>
  );
}
