
import { Button, Form, Input, Typography, message } from "antd";
import './Login.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { adminLogin } from "../../api/AdminRequest";
import axios from "../../api/Axios";





function Login() {
  const url = ""
  const [email, setemail] = useState({
    email: "",

  })


  function handleEmail(e) {
    const email1 = { ...email }
    email[e.target.id] = e.target.value
    setemail(email1)
  }

  const [password, setpassword] = useState({

    password:"",

  })

  function handlePassword(e) {
    const password1 = { ...password }
    password[e.target.id] = e.target.value
    setpassword(password1)
  }



  function submit(e) {
    e.preventDefault();

    console.log(email, password);
    axios.post("http://localhost:5000", {
      name: email.email,
      name: password.password,
    })
      .then(res => {
        console.log(res.data)
      })
  }


  return (
    <div className="appbg">

      <Form className="login" onFinish={(e) => submit(e)}>
        <Typography.Title>Welcome Back!</Typography.Title>
        <Form.Item
          rules={[
            {
              required: true,
              type: "email",
              message: "Please enter a vaild email",

            },

          ]}

          label='Email' name='email' onChange={(e) => handleEmail(e)} id="email" value={email.email}>
          <Input placeholder="Enter your email" />

        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,

              message: "Please enter a vaild passsword",

            },

          ]}

          label='password' name='password' onChange={(e) => handlePassword(e)} id="password" value={password.password}>

          <Input.Password placeholder="Enter your password" />

        </Form.Item>
        <Button onClick={(e) => submit(e)} type="submit">Login</Button>
        {/* <Button type="primary" htmlType="submit" block>Login</Button> */}
        <p className='text-center'>No account? <Link to={'/Register'}>Create One </Link></p>


      </Form>
    </div>

  );
}


export default Login;