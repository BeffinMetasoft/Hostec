
import { Button, Form, Input, Typography, message } from "antd";
import './Login.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { adminLogin } from "../../api/AdminRequest";
// import axios from "axios";





function Login() {

  const apiGet = async (values) => {
    console.log(values);
    
    try {
      const { data } = await adminLogin(values)
      console.log(data);
    }
    catch (error) {
      console.log(error.message);
    }





  }



  const [email, setemail] = useState("");
  const [passsword, setpassword] = useState("");
 
  



  return (
    <div className="appbg">

      <Form className="login" onFinish={Login}>
        <Typography.Title>Welcome Back!</Typography.Title>
        <Form.Item
          rules={[
            {
              required: true,
              type: "email",
              message: "Please enter a vaild email",

            },

          ]}

          label='Email' name={'myEmail'} onChange={(e) => setemail(e.target.value)}>
          <Input placeholder="Enter your email" />

        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,

              message: "Please enter a vaild passsword",

            },

          ]}

          label='Password' name={'myPassword'} onChange={(e) => setpassword(e.target.value)}>

          <Input.Password placeholder="Enter your password" />

        </Form.Item>
        <Button onClick={apiGet} >Login </Button>
        {/* <Button type="primary" htmlType="submit" block>Login</Button> */}
        <p className='text-center'>No account? <Link to={'/Register'}>Create One </Link></p>


      </Form>
    </div>

  );
}

export default Login;