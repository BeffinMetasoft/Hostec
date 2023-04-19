
import {Button, Form,Input,message} from "antd";
 import './Register.css';
import React,{ useState } from "react";
import { adminSignup } from "../../api/AdminRequest";







function Registers() {

  const apiGet = async (values) => {
    console.log(values);
    
    try {
      const { data } = await adminSignup(values)
      console.log(data);
    }
    catch (error) {
      console.log(error.message);
    }

  }
    
      
  const [email, setemail] = useState("");
  const [Country, setcountry] = useState("");
  const [Firstname, setfirstname] = useState("");
  const [Lastname, setlastname] = useState("");
  const [DOB, setDOB] = useState("");
  const [Gender, setgender] = useState("");
  const [postalpincode, setpostalpincode] = useState("");
  const [Mobileno, setmobilno] = useState("");
  const [password, setpassword] = useState("");
  const [newpassword, setnewpassword] = useState("");

  const rigister = async () => {
    let res = await fetch ("https://jsonplaceholder.typicode.com/users",{
      method:"post",
      headers:{
        'Content.Type':'application/json',
        'Accept':'application/json'
      },
      body:JSON.stringify({email,Country,Firstname,Lastname,DOB,Gender,postalpincode,Mobileno,password,newpassword})
    })
    let result =await res.json();
    localStorage.setItem('email',JSON.stringify(result))
  // message.success('Register succesfull!')


  }

  return (
    
    <div className="app-bg">
      
    <Form className="Registers" onFinish={Registers}>
   

    <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0"onChange={(e) => setemail(e.target.value)}>
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name /">
        Email Address
      </label>
      <Form.Item
          rules={[
            {
              required: true,
              type: "email",
              message: "Please enter a vaild email",

            },

          ]}

           name={'email'} onChange={(e) => setemail(e.target.value)}>
          <Input placeholder="Enter your email" />

        </Form.Item>
      
     
    </div>
  


    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name"onChange={(e) => setcountry(e.target.value)}>
        Country
      </label>
      <Form.Item
          rules={[
            {
              required: true,
             
              message: "Please enter a vaild country",

            },

          ]}

           name={'Country'} onChange={(e) => setcountry(e.target.value)}>
          <Input placeholder="Enter your country name" />

        </Form.Item>
     
    </div>
  </div>


  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0"onChange={(e) => setfirstname(e.target.value)}>
      <label class="block uppercase tracking-wide  text-gray-700 text-xs font-bold mb-2" for="grid-first-name/">
        First Name
      </label>
      <Form.Item
          rules={[
            {
              required: true,
             
              message: "Please enter a first name",

            },

          ]}

           name={'First Name'} onChange={(e) => setfirstname(e.target.value)}>
          <Input placeholder="Enter your first name" />

        </Form.Item>
    </div>
    <div class="w-full md:w-1/2 px-3"onChange={(e) => setlastname(e.target.value)}>
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <Form.Item
          rules={[
            {
              required: true,
             
              message: "Please enter a last name",

            },

          ]}

           name={'last name'} onChange={(e) => setlastname(e.target.value)}>
          <Input placeholder="Enter your last name" />

        </Form.Item>
    </div>
  </div>



  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0"onChange={(e) => setDOB(e.target.value)}>
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name/">
        DOB
      </label>
      <Form.Item
          rules={[
            {
              required: true,
              
              message: "Please enter a valid DOB",

            },

          ]}

           name={'DOB'} onChange={(e) => setDOB(e.target.value)}>
          <Input placeholder="Enter your DOB" />

        </Form.Item>
    </div>
    <div class="w-full md:w-1/2 px-3"onChange={(e) => setgender(e.target.value)}>
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Gender
      </label>
      <Form.Item
          rules={[
            {
              required: true,
             
              message: "Please enter a gender",

            },

          ]}

         name={'gender'} onChange={(e) => setgender(e.target.value)}>
          <Input placeholder="Enter your gender" />

        </Form.Item>
      
    </div>
  </div>



  
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0"onChange={(e) => setpostalpincode(e.target.value)}>
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name/">
      Postal Pincode
      </label>
      <Form.Item
          rules={[
            {
              required: true,
            
              message: "Please enter a valid pincode",

            },

          ]}

           name={'postal pincode'} onChange={(e) => setpostalpincode(e.target.value)}>
          <Input placeholder="Enter your postal pincode" />

        </Form.Item>
      
    </div>
    <div class="w-full md:w-1/2 px-3"onChange={(e) => setmobilno(e.target.value)}>
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Mobile Number
      </label>
     


      <Form.Item
          rules={[
            {
              required: true,
             
              message: "Please enter a Mobile Number",

            },

          ]}

           name={'Mobile Number'} onChange={(e) => setmobilno(e.target.value)}>
          <Input placeholder="Enter your Mobile Number" />

        </Form.Item>
    </div>
  </div>



  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0"onChange={(e) => setpassword(e.target.value)}>
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name/">
      Password
      </label>
      <Form.Item
          rules={[
            {
              required: true,
              
              message: "Please enter a Password",

            },

          ]}

          name={'Password'} onChange={(e) => setpassword(e.target.value)}>
          <Input placeholder="Enter your password" />

        </Form.Item>
    </div>
    <div class="w-full md:w-1/2 px-3"onChange={(e) => setnewpassword(e.target.value)}>
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        New Password
      </label>
      <Form.Item
          rules={[
            {
              required: true,
              
              message: "Please enter a New Password",

            },

          ]}

           name={'New password'} onChange={(e) => setnewpassword(e.target.value)}>
          <Input placeholder="Enter your New Password" />

        </Form.Item>
        </div>
  </div>


  <div className="button">
  <div className="flex items-center mt-4">
                           {/* <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                Register
                                </button>  */}
                                
                      
                                 <Button type="primary" onClick  = {apiGet}  classname ="btn btn-primary">Register </Button> 
                            
                           
                        </div>
                        </div>


 </Form> 
   

      
     
    </div>
    
        


    
   
  );
}
   

   


export default Registers;