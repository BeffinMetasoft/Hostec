
import {Button, Form,Input,message} from "antd";
 import './Register.css';
import React,{ useState } from "react";
import Axios from "../../api/Axios";




function Registers() 
  {
    const url=""
    const [email,setemail]=useState({
      email:"",
     
    })
  
  
    function handleEmail(e) {
      const email2={...email}
      email[e.target.id]=e.target.value
      setemail(email2)
      console.log(email)
      
    }

    {
  
      const [Country, setCountry]=useState({
        Country:"",
       
      })
    
    
      function handleCountry(e) {
        const Country2={...Country}
        Country[e.target.id]=e.target.value
        setCountry(Country2)
        console.log(Country)
        
      }
  

    
  {
   
    const [Firstname, setfirstname] = useState({
      Firstname:"",
     
    })
  
  
    function handlefirstname(e) {
      const Firstname1={...Firstname}
      Firstname[e.target.id]=e.target.value
      setfirstname(Firstname1)
      console.log(Firstname)
      
    }
  
      

    {
   
      const [Lastname,setlastname]=useState({
        Lastname:"",
       
      })
    
    
      function handlelastname(e) {
        const Lastname1={...Lastname}
        Lastname[e.target.id]=e.target.value
        setlastname(Lastname1)
     
      }


      {
    
        const [DOB,setDOB]=useState({
          DOB:"",
         
        })
      
      
        function handleDOB(e) {
          const DOB14={...DOB}
          DOB[e.target.id]=e.target.value
          setDOB(DOB14)
         
        }

        {
         
          const [gender,setgender]=useState({
            Gender:"",
           
          })
        
        
          function handleGender(e) {
            const gender5={...gender}
            gender[e.target.id]=e.target.value
            setgender(gender5)
            
          }
 
 




          
        {
         
          const [postalpincode,setpostalpincode]=useState({
            postalpincode:"",
           
          })
        
        
          function handlepostalpincode(e) {
            const postalpincode1={...postalpincode}
            postalpincode[e.target.id]=e.target.value
            setpostalpincode(postalpincode1)
            
          }


          {
         
            const [Mobileno,setmobilno]=useState({
              Mobileno:"",
             
            })
          
          
            function handlemobileno(e) {
              const Mobileno1={...Mobileno}
              Mobileno[e.target.id]=e.target.value
              setmobilno(Mobileno1)
              
            }


            
          {
         
            const [password,setpassword]=useState({
            password:"",
             
            })
          
          
            function handlePassword(e) {
              const password4={...password}
              password[e.target.id]=e.target.value
              setpassword(password4)
              
            }
               
          {
         
            const [newpassword,setnewpassword]=useState({
            newpassword:"",
             
            })
          
          
            function handlenewPassword(e) {
              const newpassword1={...newpassword}
              newpassword[e.target.id]=e.target.value
              setnewpassword(newpassword1)
              
            }
            
      
            function submit(e){
              e.preventDefault();
              Axios.post("http://localhost:5000",{
          
              name:email.email,
              name:Country.Country,
              name:Firstname.Firstname,
              name:Lastname.Lastname,
              name:DOB.DOB,
              name:gender.Gender,
              name:password.password,
              name:newpassword.newpassword,
              name:postalpincode.postalpincode,


             
              })
          
              .then(res=>{
          console.log(res.data)
              })
            }
 
 
  

 

  return (
    
    <div className="app-bg">
      
    <Form className="Registers" onFinish={Registers}>
   

    <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0"onChange={(e)=> handleEmail(e)} id="email" value={email.email}>
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

           name={'email'} onChange={(e)=> handleEmail(e)} id="email" value={email.email}>
          <Input placeholder="Enter your email" />

        </Form.Item>
      
     
    </div>
  


    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name"onChange={(e)=> handleCountry (e)} id="Country2" value={Country.Country}>
        Country
      </label>
      <Form.Item
          rules={[
            {
              required: true,
             
              message: "Please enter a vaild country",

            },

          ]}

           name={'Country'} onChange={(e)=> handleCountry (e)} id="Country" value={Country.Country}>
          <Input placeholder="Enter your country name" />

        </Form.Item>
     
    </div>
  </div>


  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0"onChange={(e)=> handlefirstname(e)} id="first name" value={Firstname.Firstname}>
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

           name={'First Name'} onChange={(e)=> handlefirstname(e)} id="firstname" value={Firstname.Firstname}>
          <Input placeholder="Enter your first name" />

        </Form.Item>
    </div>
    <div class="w-full md:w-1/2 px-3"onChange={(e)=> handlelastname(e)} id="last name" value={Lastname.Lastname}>
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

           name={'last name'} onChange={(e)=> handlelastname(e)} id="last name" value={Lastname.Lastname}>
          <Input placeholder="Enter your last name" />

        </Form.Item>
    </div>
  </div>



  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0"onChange={(e)=> handleDOB (e)} id="DOB" value={DOB.DOB}>
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

           name={'DOB'} onChange={(e)=> handleDOB (e)} id="DOB" value={DOB.DOB}>
          <Input placeholder="Enter your DOB" />

        </Form.Item>
    </div>
    <div class="w-full md:w-1/2 px-3"onChange={(e)=> handleGender (e)} id="Gender5" value={gender.gender}>
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

         name={'gender'} onChange={(e)=> handleGender (e)} id="Gender" value={gender.gender}>
          <Input placeholder="Enter your gender" />

        </Form.Item>
      
    </div>
  </div>



  
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0"onChange={(e)=> handlepostalpincode (e)} id="postal pincode" value={postalpincode.postalpincode}>
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

           name={'postal pincode'}onChange={(e)=> handlepostalpincode (e)} id="postal pincode" value={postalpincode.postalpincode}>
          <Input placeholder="Enter your postal pincode" />

        </Form.Item>
      
    </div>
    <div class="w-full md:w-1/2 px-3"onChange={(e)=> handlemobileno (e)} id="mobile no" value={Mobileno}>
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

           name={'Mobile Number'}onChange={(e)=> handlemobileno (e)} id="mobile no" value={Mobileno.Mobileno}>
          <Input placeholder="Enter your Mobile Number" />

        </Form.Item>
    </div>
  </div>



  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0"onChange={(e)=> handlePassword(e)} id="password" value={password.password}>
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

          name={'Password'} onChange={(e)=> handlePassword(e)} id="password" value={password.password}>
          <Input placeholder="Enter your password" />

        </Form.Item>
    </div>
    <div class="w-full md:w-1/2 px-3"onChange={(e)=> handlenewPassword(e)} id=" New password" value={newpassword.newpassword}>
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

           name={'New password'} onChange={(e)=> handlenewPassword(e)} id=" New password" value={newpassword.newpassword}>
          <Input placeholder="Enter your New Password" />

        </Form.Item>
        </div>
  </div>


  <div className="button">
  <div className="flex items-center mt-4">
                           {/* <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                Register
                                </button>  */}
                                
                      
                                 <Button onClick={(e) => submit(e)} type="submit">Register</Button>
                            
                           
                        </div>
                        </div>


 </Form> 
   

      
     
    </div>
    
        


    
   
  );
     }
    }
  }
}
    }
  }
  }
}
    }
  }
export default Registers;