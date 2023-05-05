import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Checkbox from "@material/checkbox";
import Accordion from '@mui/material/Accordion';
import { AccordionSummary, colors } from '@mui/material';
import { AccordionDetails } from '@mui/material';
import { Typography } from '@mui/material';
import { MDBCheckbox } from 'mdb-react-ui-kit';
import axios from "../../api/Axios";

// import { MDBTextArea } from 'mdb-react-ui-kit';
import { Collapse, Divider, List } from 'antd';
// const { Panel } = Collapse;
// const data = `  'Racing car sprays burning fuel into crowd.',
// 'Japanese princess to wed commoner.',
// 'Australian walks 100km after outback crash.',
// 'Man charged over missing wedding girl.',
// 'Los Angeles battles huge wildfires.',
// ];
// name: Check-in
// name: Food & Beverage Outlet-Olea
// name: Food & Beverage Outlet-The Drawing Room
// `;
const Mcq = () => {
  const url = ""
  const [Button1, setButton1] = useState({
    Button1: "",

  })
  
  function handleShow(e) {
    const Button1 = { ...Button1 }
    Button1[e.target.id] = e.target.value
    setButton1(Button1)
  }


  const [Button2, setButton2] = useState({
    Button2: "",

  })
  
  function handleShow(e) {
    const Button2 = { ...Button2 }
    Button2[e.target.id] = e.target.value
    setButton2(Button2)
  }


  const [Button3, setButton3] = useState({
    Button3: "",

  })
  
  function handleShow(e) {
    const Button3 = { ...Button3 }
    Button3[e.target.id] = e.target.value
    setButton3(Button3)
  }



  const [Button4, setButton4] = useState({
    Button4: "",

  })
  
  function handleShow(e) {
    const Button4 = { ...Button4 }
    Button4[e.target.id] = e.target.value
    setButton4(Button4)
  }
  const [Button5, setButton5] = useState({
    Button5: "",
  })
  function handleShow(e) {
    const Button5 = { ...Button5 }
    Button5[e.target.id] = e.target.value
    setButton5(Button5)
  }

  const [Button6, setButton6] = useState({
    Button6: "",

  })
  
  function handleShow(e) {
    const Button6 = { ...Button6 }
    Button6[e.target.id] = e.target.value
    setButton6(Button6)
  }


  const [Button7, setButton7] = useState({
    Button7: "",

  })
  
  function handleShow(e) {
    const Button7 = { ...Button7 }
    Button7[e.target.id] = e.target.value
    setButton7(Button7)
  }
  
  const [Button8, setButton8] = useState({
    Button8: "",

  })
  
  function handleShow(e) {
    const Button8 = { ...Button8 }
    Button8[e.target.id] = e.target.value
    setButton8(Button8)
  }
  
  const [Button9, setButton9] = useState({
    Button9: "",

  })
  
  function handleShow(e) {
    const Button9 = { ...Button9 }
    Button9[e.target.id] = e.target.value
    setButton9(Button9)
  }

  const [Button10, setButton10] = useState({
    Button10: "",

  })
  
  function handleShow(e) {
    const Button10 = { ...Button10 }
    Button10[e.target.id] = e.target.value
    setButton10(Button10)
  }

  const [Button11, setButton11] = useState({
    Button11: "",

  })
  
  function handleShow(e) {
    const Button11 = { ...Button11 }
    Button11[e.target.id] = e.target.value
    setButton11(Button11)
  }



  const [Button12, setButton12] = useState({
    Button12: "",

  })
  
  function handleShow(e) {
    const Button12 = { ...Button12 }
    Button12[e.target.id] = e.target.value
    setButton12(Button12)
  }



  const [Button13, setButton13] = useState({
    Button13: "",

  })
  
  function handleShow(e) {
    const Button13 = { ...Button13 }
    Button13[e.target.id] = e.target.value
    setButton13(Button13)
  }


  const [Button14, setButton14] = useState({
    Button14: "",

  })
  
  function handleShow(e) {
    const Button14 = { ...Button14 }
    Button14[e.target.id] = e.target.value
    setButton14(Button14)
  }

  const onChange = (key) => {
    console.log(key);
  };
  
  


  const [users, setUsers] = useState([]);

  const [isQuestion8, setQuestion8] = useState()
  const [isQuestion9, setQuestion9] = useState()
  const [isQuestion10, setQuestion10] = useState()
  const [isQuestion11, setQuestion11] = useState()
  const [isQuestion12, setQuestion12] = useState()
  const [isButton1, setIsButton1] = useState(false)
  const [isButton2, setIsButton2] = useState(false)
  const [isButton3, setIsButton3] = useState(false)
  const [isButton4, setIsButton4] = useState(false)
  const [isButton5, setIsButton5] = useState(false)
  const [isButton6, setIsButton6] = useState(false)
  const [isButton7, setIsButton7] = useState(false)
  const [isButton8, setIsButton8] = useState(false)
  const [isButton9, setIsButton9] = useState(false)
  const [isButton10, setIsButton10] = useState(false)
  const [isButton11, setIsButton11] = useState(false)
  const [isButton12, setIsButton12] = useState(false)
  const [isButton13, setIsButton13] = useState(false)
  const [isButton14, setIsButton14] = useState(false)




  useEffect(() => {
   
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser =((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser =((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
    }
  };




  
  const handleCheckbox8Change = (e) => {
    setQuestion8(e.target.checked);
  }
  const handleCheckbox9Change = (e) => {
    setQuestion9(e.target.checked);
  }
  const handleCheckbox10Change = (e) => {
    setQuestion10(e.target.checked);
  }
  const handleCheckbox11Change = (e) => {
    setQuestion11(e.target.checked);
  }

  const handleCheckbox12Change = (e) => {
    setQuestion12(e.target.checked);
  }

  const handleShow1 = (e) => {
    e.preventDefault()
    setIsButton1(!isButton1)
  }
  
  const handleShow2 = (e) => {
    e.preventDefault()
    setIsButton2(!isButton2)
  }
  const handleShow3 = (e) => {
    e.preventDefault()
    setIsButton3(!isButton3)
  }
  const handleShow4 = (e) => {
    e.preventDefault()
    setIsButton4(!isButton4)
  }
  const handleShow5 = (e) => {
    e.preventDefault()
    setIsButton5(!isButton5)
  }
  const handleShow6 = (e) => {
    e.preventDefault()
    setIsButton6(!isButton6)
  }
  const handleShow7 = (e) => {
    e.preventDefault()
    setIsButton7(!isButton7)
  }
  const handleShow8 = (e) => {
    e.preventDefault()
    setIsButton8(!isButton8)
  }
  const handleShow9 = (e) => {
    e.preventDefault()
    setIsButton9(!isButton9)
  }
  const handleShow10 = (e) => {
    e.preventDefault()
    setIsButton10(!isButton10)
  }
  const handleShow11 = (e) => {
    e.preventDefault()
    setIsButton11(!isButton11)
  }
  const handleShow12 = (e) => {
    e.preventDefault()
    setIsButton12(!isButton12)
  }
  const handleShow13 = (e) => {
    e.preventDefault()
    setIsButton13(!isButton13)
  }
  const handleShow14 = (e) => {
    e.preventDefault()
    setIsButton14(!isButton14)
  }

  console.log(Button1);
  console.log(Button2);
  console.log(Button3);
  console.log(Button4);
  console.log(Button5);
  console.log(Button6);
  console.log(Button7);
  console.log(Button8);
  console.log(Button9);
  console.log(Button10);
  console.log(Button11);
  console.log(Button12);
  console.log(Button13);
  console.log(Button14);

  axios.post("http://localhost:5000", {
    name: Button1.Button1,
    name: Button2.Button2,
    name: Button3.Button3,
    name: Button4.Button4,
    name: Button5.Button5,  
     name: Button6.Button6,
     name: Button7.Button7,
     name: Button8.Button8,
     name: Button9.Button9,
     name: Button10.Button10,
     name: Button11.Button11,
     name: Button12.Button12,
     name: Button13.Button13,
     name: Button14.Button14,
    
  })
    .then(res => {
      console.log(res.data)
    })
  return (

  
    // <Collapse defaultActiveKey={['1']} onChange={onChange}>
    // <Panel header="This is panel header 1" key="1">
    //   <p>{text}</p>
    // </Panel>

    <div className="container my-4" style={{ backgroundColor: "#D3D3D3", width: "700px", border: "1px solid #b3b3cc", padding: "10px" }}>
      <div style={{ display: "flex" }}>
        {/* <input type="checkbox" onChange={handleCheckbox1Change} />
        */}
      </div>

      <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><input type="checkbox" />Question</Typography>


        </AccordionSummary>
        <AccordionDetails>
          <h6>Which Hotel Department have you visited? </h6>
          <>
      <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Check in' />
      <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Food & Beverage Outlet-Al Mabeet' defaultChecked />
      <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Food & Beverage Outlet-Hayaakoom' />
      <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Room Services' defaultChecked />
      <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Business Center' />
      <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Gift Shop' defaultChecked />
      <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Laundry Services' />
      <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Health Club & Recreation' defaultChecked />
      <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Spa' defaultChecked />

      <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Check-Out' defaultChecked />
      <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Food & Beverage Outlet-Terra Secca' defaultChecked />
      <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Food & Beverage Outlet-Al Mesayan' defaultChecked />
      <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Food & Bevera Outlet-Panache ' defaultChecked />
      <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Food & Beverage Outlet-Bait Al Hanine' defaultChecked />
    </>
          <form>
            {((user, index) => (
              <div className="form-check" key={index}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  name={user.name}
                  checked={user?.isChecked || false}
                  onChange={handleChange}
                />
                <label className="form-check-label ms-2">{user.name}</label>
              </div>
            ))}
          </form>
        </AccordionDetails>
      </Accordion>




      


      <div className="container my-4" style={{ backgroundColor: "#D3D3D3", width: "700px", border: "1px solid #b3b3cc", padding: "10px" }}>
        <div style={{ display: "flex" }}>
          {/* <input type="checkbox" onChange={handleCheckbox2Change} /> */}
          <input type="checkbox" /><p>section start</p>
        </div>

        <div className="d-grid gap-1">
          <Button variant="success" onClick={handleShow1}>
            CheckIn
          </Button>



        </div>

        {isButton1 === true ? <div><div style={{ border: "1px solid #b3b3cc", padding: "20px"}}>
          <div style={{ display: "flex" }}>
          </div>

          <form className="form w-100" style={{ backgroundColor: "white", padding: "40px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
            <input type="checkbox" /><Typography>Question</Typography>
          </AccordionSummary>

            <AccordionDetails>
           
            <div style={{ border: "1px solid #b3b3cc", padding: "10px" }}>
              <div style={{ display: "flex" }}>
              </div>
             
              <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "20px"}}>
                <div style={{ display: "flex"}} />

           
                <p>Date of Arrival? </p>
                <input type="date" />
              </form>


              
            </div>
          </AccordionDetails>

          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
            <input type="checkbox" /><Typography>Question</Typography>
          </AccordionSummary>

            <AccordionDetails>
           
            <div style={{ border: "1px solid #b3b3cc", padding: "10px" }}>
              <div style={{ display: "flex" }}>
              </div>
             

              <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "20px"}}>
                <div style={{ display: "flex" }} />

           
                <p>Time of arrival? </p>
                <input type="time" />
              </form>


              
            </div>
          </AccordionDetails>


          
          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p> Was the guest identity verification done with your Passport Or Id?</p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>
  
          
          </form>
  
          




         
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"520px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Outlet Name </p>
                <textarea id="w3review" name="w3review" rows="1" cols="50" />
                </form>
</div>
</AccordionDetails>
  
          
          </form>






          
          
          </form>
          </form>
        </div>



          
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Room Assigned </p>
                <textarea id="w3review" name="w3review" rows="1" cols="50" />
                </form>
</div>
</AccordionDetails>
  
          
          </form>



          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p> Where you asked to pay Advance Deposit for Extras?</p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>
  
          
          </form>






          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Have You Received advance Deposit Receipt?  </p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>
  
          
          </form>


        
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Deposit Receipt Number (if applicable)</p>
                <textarea id="w3review" name="w3review" rows="1" cols="45" />
  </form>
</div>
</AccordionDetails>
  
          
          </form>




          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p style={{ color: "red" }}>Please Verify Room Charges/Deposit Transaction is recorded in system? </p>
    <div style={{ display: "flex", justifyContent: "end" }}></div>
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
  </form>

  
  <p>Comment</p>
  <textarea rows="4" cols="50" name="comment" form="usrform"></textarea>
</div>
</AccordionDetails>
  
    
          </form>



            
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p  >Have You Exchanged The Foreign Currency ? </p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>
  
          
          </form>




          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Amount and Foreign Currency Used?</p>
                <textarea rows="1" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
          
          </form>





          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p  >Were you Provided with a Foreign exchange reciept?</p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>
  
          
          </form>



          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" ,width:"600px"}}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p style={{ color: "red" }}>Please Verify Foreign Currency exchange  Transaction is recorded in system</p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>
  
          
          </form>


          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" ,width:"600px"}}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    
    
    <p>Shopper Comments</p>
                <textarea id="w3review" name="w3review" rows="2" cols="65" />
                
  </form>
</div>
</AccordionDetails>
  
          
          </form>

          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" ,width:"600px"}}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    
    <p>Check -In Rating</p>
   
                <p>Comment:</p>
                <textarea type="comment" id="name" name="name" required
                  minlength="10" rows="1" cols="60" />
                   <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
                
              
                
  </form>
</div>
</AccordionDetails>
  
          
          </form>






      </div>
          : null}

       
        

      </div>

      < div style={{ border: "1px solid #b3b3cc", padding: "24px" }}>

        <div style={{ display: "flex" }}>
      
          <input type="checkbox" /><p>section start</p>

        </div>

      
<div className="d-grid gap-1">
          
          <Button variant="success" onClick={handleShow2}>
            Tera Secca    </Button>
        </div>




        {isButton2 === true ? <div><div style={{ border: "1px solid #b3b3cc", padding: "10px" }}>
          <div style={{ display: "flex" }}>
          </div>

          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
            <input type="checkbox" /><Typography>Question</Typography>
          </AccordionSummary>

            <AccordionDetails>
           
            <div style={{ border: "1px solid #b3b3cc", padding: "10px" }}>
              <div style={{ display: "flex" }}>
              </div>
             

              <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "20px" }}>
                <div style={{ display: "flex" }} />

           
                <p>Date Of Visit?</p>
                <input type="date" />
              </form>


              
            </div>
          </AccordionDetails>

          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
            <input type="checkbox" /><Typography>Question</Typography>
          </AccordionSummary>

          <AccordionDetails>
           
           <div style={{ border: "1px solid #b3b3cc", padding: "10px" }}>
             <div style={{ display: "flex" }}>
             </div>
            

             <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "20px" }}>
               <div style={{ display: "flex" }} />

          
               <p>Outlet Name</p>
               <textarea id="w3review" name="w3review" rows="1" cols="45" />

             </form>


             
           </div>
         </AccordionDetails>


          
          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
    <div style={{ display: "flex" }} />
    
    <label for="appt">Time of Visit</label>

<input type="time" id="appt" name="appt" placeholder="HH:MM"
  min="09:00" max="18:00" required></input>

  </form>
</div>
</AccordionDetails>
  
          
          </form>
  
          




         





          
          
          </form>
          </form>
        </div>





          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p> Where you greeted at the outlet within 30 seconds of your arrival?</p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>
  
          
          </form>






          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Was the outlet Serving  A- la -Carte? </p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>
  
          
          </form>


          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Served By </p>
                <textarea id="w3review" name="w3review" rows="1" cols="45" />
  </form>
</div>
</AccordionDetails>
  

  

<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Was the Associate Knowledgeable About the menu?  </p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>


  



  
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"520px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Ordered At? </p>
    <input type="time" id="appt" name="appt"
                    min="09:00" max="18:00" required></input>
  </form>
</div>
</AccordionDetails>


  

  
          
          </form>



          
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"520px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Ordered Item/s</p>
                <textarea id="w3review" name="w3review" rows="1" cols="45" />
  </form>
</div>
</AccordionDetails>


  



  
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px" ,width:"520px"}}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Served At? </p>
    <input type="time" id="appt" name="appt"
                    min="09:00" max="18:00" required></input>
  </form>
</div>
</AccordionDetails>


  

  
          
          </form>
  
          
          </form>
          
  </form>

  
          


  
  

        


            
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p  >Was a check Presented? </p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>
  
          
          </form>
          

          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p  >Were The Ordered Items matching with check? </p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>
  
          
          </form>


          





          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>How Did You Pay ?</p>
                <textarea rows="1" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
          
          </form>



          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p style={{ color: "red" }}>Please Verify if the complete check is recorded in system? </p>
    <div style={{ display: "flex", justifyContent: "end" }}></div>
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
  </form>

  
  <p>Comment</p>
              <textarea rows="2" cols="50" name="comment" form="usrform"></textarea>
</div>
</AccordionDetails>
  
          
          </form>
          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Time Of Payment </p>
    <input type="time" id="appt" name="appt"
                    min="09:00" max="18:00" required></input>
  </form>
</div>
</AccordionDetails>
  
          
          </form>
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Check Number (If applicable)</p>
                <textarea rows="1" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
          
          </form>

          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Check Amount (If applicable)</p>
                <textarea rows="1" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
          
          </form>
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Cash Paid (If applicable)</p>
                <textarea rows="1" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
  
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p  >Did You collect The balance (if applicable)</p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>
  
          
          </form>


          

          
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Who Handled The Billing and Cashering</p>
                <textarea rows="1" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
          
          </form>
          </form>



        


          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" ,width:"550px"}}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    
    
    <p>Shopper Comments</p>
                <textarea id="w3review" name="w3review" rows="2" cols="65" />
                
  </form>
</div>
</AccordionDetails>
  
          
          </form>

          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" ,width:"550px"}}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    
    <p>Food & Beverage - Tera Secca Rating</p>
   
                <p>Comment:</p>
                <textarea type="comment" id="name" name="name" required
                  minlength="10" rows="1" cols="60" />
                   <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
                
              
                
  </form>
</div>
</AccordionDetails>
  
          
          </form>





</form>
      </div>
          : null}



      </div>


      < div style={{ border: "1px solid #b3b3cc", padding: "24px" }}>

        <div style={{ display: "flex" }}>
          {/* <input type="checkbox" onChange={handleCheckbox5Change} /> */}
          {/* <div style={{ marginLeft: "10px" }}>Question</div> */}
          <input type="checkbox" /><p>section start</p>

        </div>

        <div className="d-grid gap-1">
          <Button variant="success" onClick={handleShow3}>
            Al Mahbeet
          </Button>
        </div>

        {isButton3 === true ? <div><div style={{ border: "1px solid #b3b3cc", padding: "10px" }}>
          <div style={{ display: "flex" }}>
          </div>

          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
            <input type="checkbox" /><Typography>Question</Typography>
          </AccordionSummary>

            <AccordionDetails>
           
            <div style={{ border: "1px solid #b3b3cc", padding: "10px" }}>
              <div style={{ display: "flex" }}>
              </div>
             

              <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "20px" }}>
                <div style={{ display: "flex" }} />

           
                <p>Date Of Visit?</p>
                <input type="date" />
              </form>


              
            </div>
          </AccordionDetails>

          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
            <input type="checkbox" /><Typography>Question</Typography>
          </AccordionSummary>

          <AccordionDetails>
           
           <div style={{ border: "1px solid #b3b3cc", padding: "10px" }}>
             <div style={{ display: "flex" }}>
             </div>
            

             <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "20px" }}>
               <div style={{ display: "flex" }} />

          
               <p>Outlet Name</p>
               <textarea id="w3review" name="w3review" rows="1" cols="45" />

             </form>


             
           </div>
         </AccordionDetails>


          
          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
    <div style={{ display: "flex" }} />
    
    <label for="appt">Time of Visit</label>

<input type="time" id="appt" name="appt" placeholder="HH:MM"
  min="09:00" max="18:00" required></input>

  </form>
</div>
</AccordionDetails>
  
          
          </form>
  
          




         





          
          
          </form>
          </form>
        </div>



          
{/* <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Room Assigned </p>
                <textarea id="w3review" name="w3review" rows="1" cols="50" />
                </form>
</div>
</AccordionDetails>
  
          
          </form> */}



          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p> Where you greeted at the outlet within 30 seconds of your arrival?</p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>
  
          
          </form>






          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Was the outlet Serving  A- la -Carte? </p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>
  
          
          </form>


          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Served By </p>
                <textarea id="w3review" name="w3review" rows="1" cols="45" />
  </form>
</div>
</AccordionDetails>
  

  

<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Was the Associate Knowledgeable About the menu?  </p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>


  



  
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"520px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Ordered At? </p>
    <input type="time" id="appt" name="appt"
                    min="09:00" max="18:00" required></input>
  </form>
</div>
</AccordionDetails>


  

  
          
          </form>



          
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"520px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Ordered Item/s</p>
                <textarea id="w3review" name="w3review" rows="1" cols="45" />
  </form>
</div>
</AccordionDetails>


  



  
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px" ,width:"520px"}}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Served At? </p>
    <input type="time" id="appt" name="appt"
                    min="09:00" max="18:00" required></input>
  </form>
</div>
</AccordionDetails>


  

  
          
          </form>
  
          
          </form>
          
  </form>

  
          


  
  

        


            
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p  >Was a check Presented? </p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>
  
          
          </form>
          

          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p  >Were The Ordered Items matching with check? </p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>
  
          
          </form>


          





          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>How Did You Pay ?</p>
                <textarea rows="1" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
          
          </form>



          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p style={{ color: "red" }}>Please Verify if the complete check is recorded in system? </p>
    <div style={{ display: "flex", justifyContent: "end" }}></div>
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
  </form>

  
  <p>Comment</p>
              <textarea rows="2" cols="50" name="comment" form="usrform"></textarea>
</div>
</AccordionDetails>
  
          
          </form>
          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Time Of Payment </p>
    <input type="time" id="appt" name="appt"
                    min="09:00" max="18:00" required></input>
  </form>
</div>
</AccordionDetails>
  
          
          </form>
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Check Number (If applicable)</p>
                <textarea rows="1" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
          
          </form>

          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Check Amount (If applicable)</p>
                <textarea rows="1" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
          
          </form>
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Cash Paid (If applicable)</p>
                <textarea rows="1" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
  
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p  >Did You collect The balance (if applicable)</p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>
  
          
          </form>


          

          
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Who Handled The Billing and Cashering</p>
                <textarea rows="1" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
          
          </form>
          </form>



        


          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" ,width:"550px"}}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    
    
    <p>Shopper Comments</p>
                <textarea id="w3review" name="w3review" rows="2" cols="65" />
                
  </form>
</div>
</AccordionDetails>
  
          
          </form>

          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>ting


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" ,width:"550px"}}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    
    <p>Food & Beverage -Al Mabeet Rating</p>
   
                <p>Comment:</p>
                <textarea type="comment" id="name" name="name" required
                  minlength="10" rows="1" cols="60" />
                   <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
                
              
                
  </form>
</div>
</AccordionDetails>
  
          
          </form>





</form>
      </div>
          : null}
          </div>
          
      < div style={{ border: "1px solid #b3b3cc", padding: "24px" }}>

<div style={{ display: "flex" }}>
  {/* <input type="checkbox" onChange={handleCheckbox5Change} /> */}
  {/* <div style={{ marginLeft: "10px" }}>Question</div> */}
  <input type="checkbox" /><p>section start</p>

</div>

<div className="d-grid gap-1">
  <Button variant="success" onClick={handleShow4}>
  Hayaakom
  </Button>
</div>
        



        {isButton4 === true ? <div><div style={{ border: "1px solid #b3b3cc", padding: "10px" }}>
          <div style={{ display: "flex" }}>
          </div>

          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
            <input type="checkbox" /><Typography>Question</Typography>
          </AccordionSummary>

            <AccordionDetails>
           
            <div style={{ border: "1px solid #b3b3cc", padding: "10px" }}>
              <div style={{ display: "flex" }}>
              </div>
             

              <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "20px" }}>
                <div style={{ display: "flex" }} />

           
                <p>Date Of Visit?</p>
                <input type="date" />
              </form>


              
            </div>
          </AccordionDetails>

          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
            <input type="checkbox" /><Typography>Question</Typography>
          </AccordionSummary>

          <AccordionDetails>
           
           <div style={{ border: "1px solid #b3b3cc", padding: "10px" }}>
             <div style={{ display: "flex" }}>
             </div>
            

             <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "20px" }}>
               <div style={{ display: "flex" }} />

          
               <p>Outlet Name</p>
               <textarea id="w3review" name="w3review" rows="1" cols="45" />

             </form>


             
           </div>
         </AccordionDetails>


          
          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
    <div style={{ display: "flex" }} />
    
    <label for="appt">Time of Visit</label>

<input type="time" id="appt" name="appt" placeholder="HH:MM"
  min="09:00" max="18:00" required></input>

  </form>
</div>
</AccordionDetails>
  
          
          </form>
  
          




         





          
          
          </form>
          </form>
        </div>



          
{/* <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Room Assigned </p>
                <textarea id="w3review" name="w3review" rows="1" cols="50" />
                </form>
</div>
</AccordionDetails>
  
          
          </form> */}



          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p> Where you greeted at the outlet within 30 seconds of your arrival?</p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>
  
          
          </form>






          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Was the outlet Serving  A- la -Carte? </p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>
  
          
          </form>


          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Served By </p>
                <textarea id="w3review" name="w3review" rows="1" cols="45" />
  </form>
</div>
</AccordionDetails>
  

  

<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Was the Associate Knowledgeable About the menu?  </p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>


  



  
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"520px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Ordered At? </p>
    <input type="time" id="appt" name="appt"
                    min="09:00" max="18:00" required></input>
  </form>
</div>
</AccordionDetails>


  

  
          
          </form>



          
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"520px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Ordered Item/s</p>
                <textarea id="w3review" name="w3review" rows="1" cols="45" />
  </form>
</div>
</AccordionDetails>


  



  
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px" ,width:"520px"}}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Served At? </p>
    <input type="time" id="appt" name="appt"
                    min="09:00" max="18:00" required></input>
  </form>
</div>
</AccordionDetails>


  

  
          
          </form>
  
          
          </form>
          
  </form>

  
          


  
  

        


            
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p  >Was a check Presented? </p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>
  
          
          </form>
          

          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p  >Were The Ordered Items matching with check? </p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>
  
          
          </form>


          





          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>How Did You Pay ?</p>
                <textarea rows="1" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
          
          </form>



          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p style={{ color: "red" }}>Please Verify if the complete check is recorded in system? </p>
    <div style={{ display: "flex", justifyContent: "end" }}></div>
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
  </form>

  
  <p>Comment</p>
              <textarea rows="2" cols="50" name="comment" form="usrform"></textarea>
</div>
</AccordionDetails>
  
          
          </form>
          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Time Of Payment </p>
    <input type="time" id="appt" name="appt"
                    min="09:00" max="18:00" required></input>
  </form>
</div>
</AccordionDetails>
  
          
          </form>
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Check Number (If applicable)</p>
                <textarea rows="1" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
          
          </form>

          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Check Amount (If applicable)</p>
                <textarea rows="1" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
          
          </form>
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Cash Paid (If applicable)</p>
                <textarea rows="1" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
  
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p  >Did You collect The balance (if applicable)</p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>
  
          
          </form>


          

          
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Who Handled The Billing and Cashering</p>
                <textarea rows="1" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
          
          </form>
          </form>



        


          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" ,width:"550px"}}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    
    
    <p>Shopper Comments</p>
                <textarea id="w3review" name="w3review" rows="2" cols="65" />
                
  </form>
</div>
</AccordionDetails>
  
          
          </form>

          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" ,width:"550px"}}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    
    <p>Food & Beverage - Hayakoom Rating</p>
   
                <p>Comment:</p>
                <textarea type="comment" id="name" name="name" required
                  minlength="10" rows="1" cols="60" />
                   <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
                
              
                
  </form>
</div>
</AccordionDetails>
  
          
          </form>





</form>
      </div>
          : null}
          </div>
               
      < div style={{ border: "1px solid #b3b3cc", padding: "24px" }}>

<div style={{ display: "flex" }}>
  {/* <input type="checkbox" onChange={handleCheckbox5Change} /> */}
  {/* <div style={{ marginLeft: "10px" }}>Question</div> */}
  <input type="checkbox" /><p>section start</p>

</div>

<div className="d-grid gap-1">
  <Button variant="success" onClick={handleShow5}>
  Al-Mesayan
  </Button>
</div>



{isButton5 === true ? <div><div style={{ border: "1px solid #b3b3cc", padding: "10px" }}>
          <div style={{ display: "flex" }}>
          </div>

          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
            <input type="checkbox" /><Typography>Question</Typography>
          </AccordionSummary>

            <AccordionDetails>
           
            <div style={{ border: "1px solid #b3b3cc", padding: "10px" }}>
              <div style={{ display: "flex" }}>
              </div>
             

              <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "20px" }}>
                <div style={{ display: "flex" }} />

           
                <p>Date Of Visit?</p>
                <input type="date" />
              </form>


              
            </div>
          </AccordionDetails>

          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
            <input type="checkbox" /><Typography>Question</Typography>
          </AccordionSummary>

          <AccordionDetails>
           
           <div style={{ border: "1px solid #b3b3cc", padding: "10px" }}>
             <div style={{ display: "flex" }}>
             </div>
            

             <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "20px" }}>
               <div style={{ display: "flex" }} />

          
               <p>Outlet Name</p>
               <textarea id="w3review" name="w3review" rows="1" cols="45" />

             </form>


             
           </div>
         </AccordionDetails>


          
          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
    <div style={{ display: "flex" }} />
    
    <label for="appt">Time of Visit</label>

<input type="time" id="appt" name="appt" placeholder="HH:MM"
  min="09:00" max="18:00" required></input>

  </form>
</div>
</AccordionDetails>
  
          
          </form>
  
          




         





          
          
          </form>
          </form>
        </div>



          
{/* <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Room Assigned </p>
                <textarea id="w3review" name="w3review" rows="1" cols="50" />
                </form>
</div>
</AccordionDetails>
  
          
          </form> */}



          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p> Where you greeted at the outlet within 30 seconds of your arrival?</p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>
  
          
          </form>






          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Was the outlet Serving  A- la -Carte? </p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>
  
          
          </form>


          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Served By </p>
                <textarea id="w3review" name="w3review" rows="1" cols="45" />
  </form>
</div>
</AccordionDetails>
  

  

<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Was the Associate Knowledgeable About the menu?  </p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>


  



  
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"520px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Ordered At? </p>
    <input type="time" id="appt" name="appt"
                    min="09:00" max="18:00" required></input>
  </form>
</div>
</AccordionDetails>


  

  
          
          </form>



          
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"520px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Ordered Item/s</p>
                <textarea id="w3review" name="w3review" rows="1" cols="45" />
  </form>
</div>
</AccordionDetails>


  



  
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px" ,width:"520px"}}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Served At? </p>
    <input type="time" id="appt" name="appt"
                    min="09:00" max="18:00" required></input>
  </form>
</div>
</AccordionDetails>


  

  
          
          </form>
  
          
          </form>
          
  </form>

  
          


  
  

        


            
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p  >Was a check Presented? </p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>
  
          
          </form>
          

          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p  >Were The Ordered Items matching with check? </p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>
  
          
          </form>


          





          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>How Did You Pay ?</p>
                <textarea rows="1" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
          
          </form>



          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p style={{ color: "red" }}>Please Verify if the complete check is recorded in system? </p>
    <div style={{ display: "flex", justifyContent: "end" }}></div>
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
  </form>

  
  <p>Comment</p>
              <textarea rows="2" cols="50" name="comment" form="usrform"></textarea>
</div>
</AccordionDetails>
  
          
          </form>
          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Time Of Payment </p>
    <input type="time" id="appt" name="appt"
                    min="09:00" max="18:00" required></input>
  </form>
</div>
</AccordionDetails>
  
          
          </form>
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Check Number (If applicable)</p>
                <textarea rows="1" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
          
          </form>

          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Check Amount (If applicable)</p>
                <textarea rows="1" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
          
          </form>
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Cash Paid (If applicable)</p>
                <textarea rows="1" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
  
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p  >Did You collect The balance (if applicable)</p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>
  
          
          </form>


          

          
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Who Handled The Billing and Cashering</p>
                <textarea rows="1" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
          
          </form>
          </form>



        


          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" ,width:"550px"}}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    
    
    <p>Shopper Comments</p>
                <textarea id="w3review" name="w3review" rows="2" cols="65" />
                
  </form>
</div>
</AccordionDetails>
  
          
          </form>

          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" ,width:"550px"}}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    
    <p>Food & Beverage - Al Mesayan Rating</p>
   
                <p>Comment:</p>
                <textarea type="comment" id="name" name="name" required
                  minlength="10" rows="1" cols="60" />
                   <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
                
              
                
  </form>
</div>
</AccordionDetails>
  
          
          </form>





</form>
      </div>
          : null}
          </div>
         < div style={{ border: "1px solid #b3b3cc", padding: "24px" }}>

<div style={{ display: "flex" }}>
  {/* <input type="checkbox" onChange={handleCheckbox5Change} /> */}
  {/* <div style={{ marginLeft: "10px" }}>Question</div> */}
  <input type="checkbox" /><p>section start</p>

</div>

<div className="d-grid gap-1">
  <Button variant="success" onClick={handleShow6}>
  Panache
  </Button>
</div>


          
{isButton6 === true ? <div><div style={{ border: "1px solid #b3b3cc", padding: "10px" }}>
          <div style={{ display: "flex" }}>
          </div>

          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
            <input type="checkbox" /><Typography>Question</Typography>
          </AccordionSummary>

            <AccordionDetails>
           
            <div style={{ border: "1px solid #b3b3cc", padding: "10px" }}>
              <div style={{ display: "flex" }}>
              </div>
             

              <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "20px" }}>
                <div style={{ display: "flex" }} />

           
                <p>Date Of Visit?</p>
                <input type="date" />
              </form>


              
            </div>
          </AccordionDetails>

          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
            <input type="checkbox" /><Typography>Question</Typography>
          </AccordionSummary>

          <AccordionDetails>
           
           <div style={{ border: "1px solid #b3b3cc", padding: "10px" }}>
             <div style={{ display: "flex" }}>
             </div>
            

             <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "20px" }}>
               <div style={{ display: "flex" }} />

          
               <p>Outlet Name</p>
               <textarea id="w3review" name="w3review" rows="1" cols="45" />

             </form>


             
           </div>
         </AccordionDetails>


          
          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
    <div style={{ display: "flex" }} />
    
    <label for="appt">Time of Visit</label>

<input type="time" id="appt" name="appt" placeholder="HH:MM"
  min="09:00" max="18:00" required></input>

  </form>
</div>
</AccordionDetails>
  
          
          </form>
  
          




         





          
          
          </form>
          </form>
        </div>



          
{/* <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Room Assigned </p>
                <textarea id="w3review" name="w3review" rows="1" cols="50" />
                </form>
</div>
</AccordionDetails>
  
          
          </form> */}



          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p> Where you greeted at the outlet within 30 seconds of your arrival?</p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>
  
          
          </form>






          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Was the outlet Serving  A- la -Carte? </p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>
  
          
          </form>


          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Served By </p>
                <textarea id="w3review" name="w3review" rows="1" cols="45" />
  </form>
</div>
</AccordionDetails>
  

  

<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Was the Associate Knowledgeable About the menu?  </p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>


  



  
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"520px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Ordered At? </p>
    <input type="time" id="appt" name="appt"
                    min="09:00" max="18:00" required></input>
  </form>
</div>
</AccordionDetails>


  

  
          
          </form>



          
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"520px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Ordered Item/s</p>
                <textarea id="w3review" name="w3review" rows="1" cols="45" />
  </form>
</div>
</AccordionDetails>


  



  
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px" ,width:"520px"}}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Served At? </p>
    <input type="time" id="appt" name="appt"
                    min="09:00" max="18:00" required></input>
  </form>
</div>
</AccordionDetails>


  

  
          
          </form>
  
          
          </form>
          
  </form>

  
          


  
  

        


            
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p  >Was a check Presented? </p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>
  
          
          </form>
          

          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p  >Were The Ordered Items matching with check? </p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>
  
          
          </form>


          





          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>How Did You Pay ?</p>
                <textarea rows="1" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
          
          </form>



          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p style={{ color: "red" }}>Please Verify if the complete check is recorded in system? </p>
    <div style={{ display: "flex", justifyContent: "end" }}></div>
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
  </form>

  
  <p>Comment</p>
              <textarea rows="2" cols="50" name="comment" form="usrform"></textarea>
</div>
</AccordionDetails>
  
          
          </form>
          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Time Of Payment </p>
    <input type="time" id="appt" name="appt"
                    min="09:00" max="18:00" required></input>
  </form>
</div>
</AccordionDetails>
  
          
          </form>
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Check Number (If applicable)</p>
                <textarea rows="1" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
          
          </form>

          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Check Amount (If applicable)</p>
                <textarea rows="1" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
          
          </form>
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Cash Paid (If applicable)</p>
                <textarea rows="1" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
  
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p  >Did You collect The balance (if applicable)</p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>
  
          
          </form>


          

          
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Who Handled The Billing and Cashering</p>
                <textarea rows="1" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
          
          </form>
          </form>



        


          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" ,width:"550px"}}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    
    
    <p>Shopper Comments</p>
                <textarea id="w3review" name="w3review" rows="2" cols="65" />
                
  </form>
</div>
</AccordionDetails>
  
          
          </form>

          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" ,width:"550px"}}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    
    <p>Food & Beverage - Panache Rating</p>
   
                <p>Comment:</p>
                <textarea type="comment" id="name" name="name" required
                  minlength="10" rows="1" cols="60" />
                   <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
                
              
                
  </form>
</div>
</AccordionDetails>
  
          
          </form>





</form>
      </div>
          : null}
          </div>
          
          
             
      < div style={{ border: "1px solid #b3b3cc", padding: "24px" }}>

<div style={{ display: "flex" }}>
  {/* <input type="checkbox" onChange={handleCheckbox5Change} /> */}
  {/* <div style={{ marginLeft: "10px" }}>Question</div> */}
  <input type="checkbox" /><p>section start</p>

</div>

<div className="d-grid gap-1">
  <Button variant="success" onClick={handleShow7}>
  Bait All Hanine
  </Button>
</div>


          
{isButton7 === true ? <div><div style={{ border: "1px solid #b3b3cc", padding: "10px" }}>
          <div style={{ display: "flex" }}>
          </div>

          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
            <input type="checkbox" /><Typography>Question</Typography>
          </AccordionSummary>

            <AccordionDetails>
           
            <div style={{ border: "1px solid #b3b3cc", padding: "10px" }}>
              <div style={{ display: "flex" }}>
              </div>
             

              <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "20px" }}>
                <div style={{ display: "flex" }} />

           
                <p>Date Of Visit?</p>
                <input type="date" />
              </form>


              
            </div>
          </AccordionDetails>

          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
            <input type="checkbox" /><Typography>Question</Typography>
          </AccordionSummary>

          <AccordionDetails>
           
           <div style={{ border: "1px solid #b3b3cc", padding: "10px" }}>
             <div style={{ display: "flex" }}>
             </div>
            

             <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "20px" }}>
               <div style={{ display: "flex" }} />

          
               <p>Outlet Name</p>
               <textarea id="w3review" name="w3review" rows="1" cols="45" />

             </form>


             
           </div>
         </AccordionDetails>


          
          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
    <div style={{ display: "flex" }} />
    
    <label for="appt">Time of Visit</label>

<input type="time" id="appt" name="appt" placeholder="HH:MM"
  min="09:00" max="18:00" required></input>

  </form>
</div>
</AccordionDetails>
  
          
          </form>
  
          




         





          
          
          </form>
          </form>
        </div>



          



          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p> Where you greeted at the outlet within 30 seconds of your arrival?</p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>
  
          
          </form>






          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Was the outlet Serving  A- la -Carte? </p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>
  
          
          </form>


          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Served By </p>
                <textarea id="w3review" name="w3review" rows="1" cols="45" />
  </form>
</div>
</AccordionDetails>
  

  

<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Was the Associate Knowledgeable About the menu?  </p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>


  



  
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"520px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Ordered At? </p>
    <input type="time" id="appt" name="appt"
                    min="09:00" max="18:00" required></input>
  </form>
</div>
</AccordionDetails>


  

  
          
          </form>



          
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"520px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Ordered Item/s</p>
                <textarea id="w3review" name="w3review" rows="1" cols="45" />
  </form>
</div>
</AccordionDetails>


  



  
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px" ,width:"520px"}}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Served At? </p>
    <input type="time" id="appt" name="appt"
                    min="09:00" max="18:00" required></input>
  </form>
</div>
</AccordionDetails>


  

  
          
          </form>
  
          
          </form>
          
  </form>

  
          


  
  

        


            
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p  >Was a check Presented? </p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>
  
          
          </form>
          

          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p  >Were The Ordered Items matching with check? </p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>
  
          
          </form>


          





          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>How Did You Pay ?</p>
                <textarea rows="1" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
          
          </form>



          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p style={{ color: "red" }}>Please Verify if the complete check is recorded in system? </p>
    <div style={{ display: "flex", justifyContent: "end" }}></div>
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
  </form>

  
  <p>Comment</p>
              <textarea rows="2" cols="50" name="comment" form="usrform"></textarea>
</div>
</AccordionDetails>
  
          
          </form>
          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Time Of Payment </p>
    <input type="time" id="appt" name="appt"
                    min="09:00" max="18:00" required></input>
  </form>
</div>
</AccordionDetails>
  
          
          </form>
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Check Number (If applicable)</p>
                <textarea rows="1" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
          
          </form>

          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Check Amount (If applicable)</p>
                <textarea rows="1" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
          
          </form>
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Cash Paid (If applicable)</p>
                <textarea rows="1" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
  
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p  >Did You collect The balance (if applicable)</p>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <input type="radio" id="html" name="fav_language" value="Yes" />
      <label stylefor="html">Yes</label>
      <input type="radio" id="html" name="fav_language" value="No" />
      <label for="html">No</label></div>
  </form>
</div>
</AccordionDetails>
  
          
          </form>


          

          
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Who Handled The Billing and Cashering</p>
                <textarea rows="1" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
          
          </form>
          </form>



        


          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" ,width:"550px"}}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    
    
    <p>Shopper Comments</p>
                <textarea id="w3review" name="w3review" rows="2" cols="65" />
                
  </form>
</div>
</AccordionDetails>
  
          
          </form>

          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" ,width:"550px"}}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    
    <p>Food & Beverage - Panache Rating</p>
   
                <p>Comment:</p>
                <textarea type="comment" id="name" name="name" required
                  minlength="10" rows="1" cols="60" />
                   <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
                
              
                
  </form>
</div>
</AccordionDetails>
  
          
          </form>





</form>
      </div>
          : null}
          </div>
          
          
             
          < div style={{ border: "1px solid #b3b3cc", padding: "24px" }}>
    
    <div style={{ display: "flex" }}>
      {/* <input type="checkbox" onChange={handleCheckbox5Change} /> */}
      {/* <div style={{ marginLeft: "10px" }}>Question</div> */}
      <input type="checkbox" /><p>section start</p>
    
    </div>
    
    <div className="d-grid gap-1">
      <Button variant="success" onClick={handleShow8}>
      Room Service Ordering Experince
      </Button>
    </div>
    
    
              
    {isButton8 === true ? <div><div style={{ border: "1px solid #b3b3cc", padding: "10px" }}>
              <div style={{ display: "flex" }}>
              </div>
    
              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
                <input type="checkbox" /><Typography>Question</Typography>
              </AccordionSummary>
    
                <AccordionDetails>
               
                <div style={{ border: "1px solid #b3b3cc", padding: "10px" }}>
                  <div style={{ display: "flex" }}>
                  </div>
                 
    
                  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "20px" }}>
                    <div style={{ display: "flex" }} />
    
               
                    <p>Date Of Ordering</p>
                    <input type="date" />
                  </form>
    
    
                  
                </div>
              </AccordionDetails>


              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
        <div style={{ display: "flex" }} />
        
        <label for="appt">Time of Ordering</label>
    
    <input type="time" id="appt" name="appt" placeholder="HH:MM"
      min="09:00" max="18:00" required></input>
    
      </form>
    </div>
    </AccordionDetails>
      
              
              </form>


              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
        <div style={{ display: "flex" }} />
        <p>Name Of Associate who took the Order?</p>
                   <textarea id="w3review" name="w3review" rows="1" cols="45" />
        
    
      </form>
    </div>
    </AccordionDetails>
      
              
              </form>


              
              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
        <div style={{ display: "flex" }} />
        <p>Item's ordered</p>
                   <textarea id="w3review" name="w3review" rows="1" cols="45" />
        
    
      </form>
    </div>
    </AccordionDetails>
      
              
              </form>


              
              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
        <div style={{ display: "flex" }} />
        <p>Name of Associate who delivered the Items</p>
                   <textarea id="w3review" name="w3review" rows="1" cols="45" />
        
    
      </form>
    </div>
    </AccordionDetails>
      
              
              </form>


              
 
              </form>
            </div>
    
    
    
    
    
    
    
              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
        <div style={{ display: "flex" }} />
        <p>Check Number(if applicable) </p>
                    <textarea id="w3review" name="w3review" rows="1" cols="45" />
      </form>
    </div>
    </AccordionDetails>

    
    <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
        <div style={{ display: "flex" }} />
        <p>Check Amount(if applicable) </p>
                    <textarea id="w3review" name="w3review" rows="1" cols="45" />
      </form>
    </div>
    </AccordionDetails>
    </form>
    
    <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
        <div style={{ display: "flex" }} />
        <p>Cash Paid </p>
                    <textarea id="w3review" name="w3review" rows="1" cols="45" />
      </form>
    </div>
    </AccordionDetails>
    </form>
      
      
    
  
    
    
      

    
      
    <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"520px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
        <div style={{ display: "flex" }} />
        <p>Time of payment? </p>
        <input type="time" id="appt" name="appt"
                        min="09:00" max="18:00" required></input>
      </form>
    </div>
    </AccordionDetails>
    
    
      
    
      
              
              </form>
    
    
    
              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
        <div style={{ display: "flex" }} />
        <p>Did you order additional items at the time of delivery ?</p>
                   <textarea id="w3review" name="w3review" rows="1" cols="45" />
                   <div style={{ display: "flex", justifyContent: "end" }}>
          <input type="radio" id="html" name="fav_language" value="Yes" />
          <label stylefor="html">Yes</label>
          <input type="radio" id="html" name="fav_language" value="No" />
          <label for="html">No</label></div>
        
    
      </form>
    </div>
    </AccordionDetails>
      
              
              </form>

              
              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
        <div style={{ display: "flex" }} />
        <p>Did you pay cash for additional items </p>
                   
                   <div style={{ display: "flex", justifyContent: "end" }}>
          <input type="radio" id="html" name="fav_language" value="Yes" />
          <label stylefor="html">Yes</label>
          <input type="radio" id="html" name="fav_language" value="No" />
          <label for="html">No</label></div>
        
    
      </form>
    </div>
    </AccordionDetails>
      
              
              </form>
    
    
    
      
      
    
            
    
    
                
             
              
    
              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
        <div style={{ display: "flex" }} />
        <p>Check Number(if applicable) </p>
                    <textarea id="w3review" name="w3review" rows="1" cols="45" />
      </form>
    </div>
    </AccordionDetails>

    
    <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
        <div style={{ display: "flex" }} />
        <p>Check Amount(if applicable) </p>
                    <textarea id="w3review" name="w3review" rows="1" cols="45" />
      </form>
    </div>
    </AccordionDetails>
    </form>
    
              
    
    
    <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p style={{ color: "red" }}>Please Verify Room Charges/Deposit Transaction is recorded in system? </p>
    <div style={{ display: "flex", justifyContent: "end" }}></div>
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
  </form>

  
  <p>Comment</p>
              <textarea rows="3" cols="50" name="comment" form="usrform"></textarea>
</div>
</AccordionDetails>
  
          

          </form>



         < form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Did you collect the balance (if applicable) </p>
    <div style={{ display: "flex", justifyContent: "end" }}></div>
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
  </form>

  
  <p>Comment</p>
              <textarea rows="1" cols="50" name="comment" form="usrform"></textarea>
</div>
</AccordionDetails>
  
          
          </form>

         




                   
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Who Handled The Billing and Cashering</p>
                <textarea rows="1" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
          
          </form>
    


                       
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Shopper Comments</p>
                <textarea rows="2" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
          
          </form>
    
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" ,width:"500px"}}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    
    <p>Room Services Rating</p>
    <div style={{ display: "flex", justifyContent: "end" }}>
   
                <p>Comment:</p>
                <textarea type="comment" id="name" name="name" required
                  minlength="10" rows="1" cols="60" />
                   <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
                
          </div>    
                
  </form>
</div>
</AccordionDetails>
  
          
          </form>

    
    
    
    
    </form>
    </form>
    </div>
  
  
              : null}
               </div>
          
          
             
          < div style={{ border: "1px solid #b3b3cc", padding: "24px" }}>
    
    <div style={{ display: "flex" }}>
      {/* <input type="checkbox" onChange={handleCheckbox5Change} /> */}
      {/* <div style={{ marginLeft: "10px" }}>Question</div> */}
      <input type="checkbox" /><p>section start</p>
    
    </div>
    
    <div className="d-grid gap-1">
      <Button variant="success" onClick={handleShow9}>
    Bussiness Center Experience
      </Button>
    </div>

                
    {isButton9 === true ? <div><div style={{ border: "1px solid #b3b3cc", padding: "10px" }}>
              <div style={{ display: "flex" }}>
              </div>
    
              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
                <input type="checkbox" /><Typography>Question</Typography>
              </AccordionSummary>
    
                <AccordionDetails>
               
                <div style={{ border: "1px solid #b3b3cc", padding: "10px" }}>
                  <div style={{ display: "flex" }}>
                  </div>
                 
    
                  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "20px" }}>
                    <div style={{ display: "flex" }} />
    
               
                    <p>Date Of Availing Services</p>
                    <input type="date" />
                  </form>
    
    
                  
                </div>
              </AccordionDetails>


              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
        <div style={{ display: "flex" }} />
        
        <label for="appt">Time of Availing Services</label>
    
    <input type="time" id="appt" name="appt" placeholder="HH:MM"
      min="09:00" max="18:00" required></input>
    
      </form>
    </div>
    </AccordionDetails>
      
              
              </form>


              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
        <div style={{ display: "flex" }} />
        <p>Type of services Orderd?</p>
                   <textarea id="w3review" name="w3review" rows="1" cols="45" />
        
    
      </form>
    </div>
    </AccordionDetails>
      
              
              </form>


              
              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
        <div style={{ display: "flex" }} />
        <p>Who provided the services?</p>
                   <textarea id="w3review" name="w3review" rows="1" cols="45" />
        
    
      </form>
    </div>
    </AccordionDetails>
      
              
              </form>


              
              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
        <div style={{ display: "flex" }} />
        <p>Was a bill presented?</p>
                   <textarea id="w3review" name="w3review" rows="1" cols="45" />
        
    
      </form>
    </div>
    </AccordionDetails>
      
              
              </form>
              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
        <div style={{ display: "flex" }} />
        <p>Cash Paid</p>
                   <textarea id="w3review" name="w3review" rows="1" cols="45" />
        
    
      </form>
    </div>
    </AccordionDetails>
      
              
              </form>


              
          
    
    
 
              </form>
            </div>
    
    

    
    
    
    
    
              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
        <div style={{ display: "flex" }} />
        <p>Did You collect the balance(if applicable) </p>
                    <textarea id="w3review" name="w3review" rows="1" cols="45" />
      </form>
    </div>
    </AccordionDetails>

   
    
    
    <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p style={{ color: "red" }}>Please Verify Room Charges/Deposit Transaction is recorded in system? </p>
    <div style={{ display: "flex", justifyContent: "end" }}></div>
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
  </form>

  
  <p>Comment</p>
              <textarea rows="3" cols="50" name="comment" form="usrform"></textarea>
</div>
</AccordionDetails>
  
          

          </form>


    


                       
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Shopper Comments</p>
                <textarea rows="2" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
          
          </form>
    
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" ,width:"500px"}}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    
    <p>Room Centre Rating</p>
    <div style={{ display: "flex", justifyContent: "end" }}>
   
                <p>Comment:</p>
                <textarea type="comment" id="name" name="name" required
                  minlength="10" rows="1" cols="60" />
                   <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
                
          </div>    
                
  </form>
</div>
</AccordionDetails>
  
          
          </form>

    
    
    
    
    </form>
    </div>
    
  
              : null}

</div>
          
          
             
          < div style={{ border: "1px solid #b3b3cc", padding: "24px" }}>
    
    <div style={{ display: "flex" }}>
      {/* <input type="checkbox" onChange={handleCheckbox5Change} /> */}
      {/* <div style={{ marginLeft: "10px" }}>Question</div> */}
      <input type="checkbox" /><p>section start</p>
    
    </div>
    
    <div className="d-grid gap-1">
      <Button variant="success" onClick={handleShow10}>
    Gift Shop Experience
      </Button>
    </div>

                
    {isButton10 === true ? <div><div style={{ border: "1px solid #b3b3cc", padding: "10px" }}>
              <div style={{ display: "flex" }}>
              </div>
    
              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
                <input type="checkbox" /><Typography>Question</Typography>
              </AccordionSummary>
    
                <AccordionDetails>
               
                <div style={{ border: "1px solid #b3b3cc", padding: "10px" }}>
                  <div style={{ display: "flex" }}>
                  </div>
                 
    
                  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "20px" }}>
                    <div style={{ display: "flex" }} />
    
               
                    <p>Date Of Availing Services</p>
                    <input type="date" />
                  </form>
    
    
                  
                </div>
              </AccordionDetails>


              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
        <div style={{ display: "flex" }} />
        
        <label for="appt">Time of Availing Services</label>
    
    <input type="time" id="appt" name="appt" placeholder="HH:MM"
      min="09:00" max="18:00" required></input>
    
      </form>
    </div>
    </AccordionDetails>
      
              
              </form>


              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
        <div style={{ display: "flex" }} />
        <p>Items Purchased</p>
                   <textarea id="w3review" name="w3review" rows="1" cols="45" />
        
    
      </form>
    </div>
    </AccordionDetails>
      
              
              </form>


              
              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
        <div style={{ display: "flex" }} />
        <p>Who provided the services?</p>
                   <textarea id="w3review" name="w3review" rows="1" cols="45" />
        
    
      </form>
    </div>
    </AccordionDetails>
      
              
              </form>


              
              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
        <div style={{ display: "flex" }} />
        <p>Was a bill presented?</p>
                   <textarea id="w3review" name="w3review" rows="1" cols="45" />
        
    
      </form>
    </div>
    </AccordionDetails>
      
              
              </form>
              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
        <div style={{ display: "flex" }} />
        <p>Cash Paid</p>
                   <textarea id="w3review" name="w3review" rows="1" cols="45" />
        
    
      </form>
    </div>
    </AccordionDetails>
      
              
              </form>


              
    
 
              </form>
            </div>
    
    

    
    
    
    
    
    
    
    
              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
        <div style={{ display: "flex" }} />
        <p>Did You collect the balance(if applicable) </p>
                    <textarea id="w3review" name="w3review" rows="1" cols="45" />
      </form>
    </div>
    </AccordionDetails>

   
    
    
    <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p style={{ color: "red" }}>Please Verify Room Charges/Deposit Transaction is recorded in system? </p>
    <div style={{ display: "flex", justifyContent: "end" }}></div>
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
  </form>

  
  <p>Comment</p>
              <textarea rows="3" cols="50" name="comment" form="usrform"></textarea>
</div>
</AccordionDetails>
  
          

          </form>


    


                       
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Shopper Comments</p>
                <textarea rows="2" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
          
          </form>
    
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" ,width:"500px"}}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    
    <p>Gift Shop Rating</p>
    <div style={{ display: "flex", justifyContent: "end" }}>
   
                <p>Comment:</p>
                <textarea type="comment" id="name" name="name" required
                  minlength="10" rows="1" cols="60" />
                   <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
                
          </div>    
                
  </form>
</div>
</AccordionDetails>
  
          
          </form>

    
    
    
    
    </form>
    </div>
    
  
              : null}
              
</div>
          
          
             
          < div style={{ border: "1px solid #b3b3cc", padding: "24px" }}>
    
    <div style={{ display: "flex" }}>
      {/* <input type="checkbox" onChange={handleCheckbox5Change} /> */}
      {/* <div style={{ marginLeft: "10px" }}>Question</div> */}
      <input type="checkbox" /><p>section start</p>
    
    </div>
    
    <div className="d-grid gap-1">
      <Button variant="success" onClick={handleShow11}>
  Laundery Service Ordering Experience
      </Button>
    </div>

                
    {isButton11 === true ? <div><div style={{ border: "1px solid #b3b3cc", padding: "10px" }}>
              <div style={{ display: "flex" }}>
              </div>
    
              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
                <input type="checkbox" /><Typography>Question</Typography>
              </AccordionSummary>
    
                <AccordionDetails>
               
                <div style={{ border: "1px solid #b3b3cc", padding: "10px" }}>
                  <div style={{ display: "flex" }}>
                  </div>
                 
    
                  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "20px" }}>
                    <div style={{ display: "flex" }} />
    
               
                    <p>Date Of Ordering</p>
                    <input type="date" />
                  </form>
    
    
                  
                </div>
              </AccordionDetails>


              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
        <div style={{ display: "flex" }} />
        
        <label for="appt">Time of Ordering</label>
    
    <input type="time" id="appt" name="appt" placeholder="HH:MM"
      min="09:00" max="18:00" required></input>
    
      </form>
    </div>
    </AccordionDetails>
      
              
              </form>


            


              
              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
        <div style={{ display: "flex" }} />
        <p>Was a check presented?</p>
                   <textarea id="w3review" name="w3review" rows="1" cols="45" />
        
    
      </form>
    </div>
    </AccordionDetails>
      
              
              </form>
              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
        <div style={{ display: "flex" }} />
        <p>Cash Paid</p>
                   <textarea id="w3review" name="w3review" rows="1" cols="45" />
        
    
      </form>
    </div>
    </AccordionDetails>
      
              
              </form>


              
    
 
              </form>
            </div>
    
    

    
    
    
    
    
    
    
    
              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
        <div style={{ display: "flex" }} />
        <p>Did You collect the balance(if applicable) </p>
                    <textarea id="w3review" name="w3review" rows="1" cols="45" />
      </form>
    </div>
    </AccordionDetails>

   
    
    
    <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p style={{ color: "red" }}>Please Verify Room Charges/Deposit Transaction is recorded in system? </p>
    <div style={{ display: "flex", justifyContent: "end" }}></div>
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
  </form>

  
  <p>Comment</p>
              <textarea rows="3" cols="50" name="comment" form="usrform"></textarea>
</div>
</AccordionDetails>
  
          

          </form>


    


          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Did you leave cash in the cloths </p>
    <div style={{ display: "flex", justifyContent: "end" }}></div>
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
  </form>

  
  <p>Comment</p>
              <textarea rows="2" cols="50" name="comment" form="usrform"></textarea>
</div>
</AccordionDetails>
  
          

          </form>


          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Were you informed Associate about money? </p>
    <div style={{ display: "flex", justifyContent: "end" }}></div>
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
  </form>

  
  <p>Comment</p>
              <textarea rows="2" cols="50" name="comment" form="usrform"></textarea>
</div>
</AccordionDetails>
  
          

          </form>
          
    <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p style={{ color: "red" }}>Please Verify if the Money was recorded under Lost & Found? </p>
    <div style={{ display: "flex", justifyContent: "end" }}></div>
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
  </form>

  
  <p>Comment</p>
              <textarea rows="2" cols="50" name="comment" form="usrform"></textarea>
</div>
</AccordionDetails>
  
          

          </form>


                       
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Shopper Comments</p>
                <textarea rows="2" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
          
          </form>
    
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" ,width:"500px"}}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    
    <p>Laundery Services Rating</p>
    <div style={{ display: "flex", justifyContent: "end" }}>
   
                <p>Comment:</p>
                <textarea type="comment" id="name" name="name" required
                  minlength="10" rows="1" cols="60" />
                   <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
                
          </div>    
                
  </form>
</div>
</AccordionDetails>
  
          
          </form>

    
    
    
    
    </form>
    </div>
    
  
              : null}
              
   
          
</div>

             
          < div style={{ border: "1px solid #b3b3cc", padding: "24px" }}>
    
    <div style={{ display: "flex" }}>
    
      <input type="checkbox" /><p>section start</p>
    
    </div>
    
    <div className="d-grid gap-1">
      <Button variant="success" onClick={handleShow12}>
  Health Club & Recreation Experience
      </Button>
    </div>



            
{isButton12 === true ? <div><div style={{ border: "1px solid #b3b3cc", padding: "10px" }}>
              <div style={{ display: "flex" }}>
              </div>
    
              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
              
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
                <input type="checkbox" /><Typography>Question</Typography>
              </AccordionSummary>
    
                <AccordionDetails>
               
                <div style={{ border: "1px solid #b3b3cc", padding: "10px" }}>
                  <div style={{ display: "flex" }}>
                  </div>
                 
    
                  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "20px" }}>
                    <div style={{ display: "flex" }} />
    
               
                    <p>Date Of Availing Services</p>
                    <input type="date" />
                  </form>
    
    
                  
                </div>
              </AccordionDetails>


              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
               
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
        <div style={{ display: "flex" }} />
        
        <label for="appt">Time of Availing Services</label>
    
    <input type="time" id="appt" name="appt" placeholder="HH:MM"
      min="09:00" max="18:00" required></input>
    
      </form>
    </div>
    </AccordionDetails>
      
              
              </form>




              
              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
        <div style={{ display: "flex" }} />
        <p>Types of Services Ordered</p>
                   <textarea id="w3review" name="w3review" rows="1" cols="45" />
        
    
      </form>
    </div>
    </AccordionDetails>
      
              
              </form>
              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
        <div style={{ display: "flex" }} />
        <p>Who Provided the services </p>
                   <textarea id="w3review" name="w3review" rows="1" cols="45" />
        
    
      </form>
    </div>
    </AccordionDetails>
      
              
              </form>


              
    
 
              </form>
            </div>
            
            <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
        <div style={{ display: "flex" }} />
        <p>Was bill presented</p>
        <div style={{ display: "flex", justifyContent: "end" }}></div>
                   <textarea id="w3review" name="w3review" rows="1" cols="45" />
                
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
    
      </form>
    </div>
    </AccordionDetails>
      
              
              </form>
    
    
              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
        <div style={{ display: "flex" }} />
        <p>Cash Paid</p>
       
                   <textarea id="w3review" name="w3review" rows="1" cols="45" />
                
          
      </form>
    </div>
    </AccordionDetails>
      
              
              </form>
    
    

    
    
    
    
    
    
    
    
              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
               
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
        <div style={{ display: "flex" }} />
        <p>Did You collect the balance(if applicable) </p>
                    <textarea id="w3review" name="w3review" rows="1" cols="45" />
      </form>
    </div>
    </AccordionDetails>

   
    
    
    <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
         
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p style={{ color: "red" }}>Please Verify Complete Transaction is recorded in system? </p>
    <div style={{ display: "flex", justifyContent: "end" }}></div>
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
  </form>

  
  <p>Comment</p>
              <textarea rows="3" cols="50" name="comment" form="usrform"></textarea>
</div>
</AccordionDetails>
  
          

          </form>


    


    


                       
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Shopper Comments</p>
                <textarea rows="2" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
          
          </form>
    
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" ,width:"500px"}}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    
    <p>Health Club Rating</p>
    <div style={{ display: "flex", justifyContent: "end" }}>
   
                <p>Comment:</p>
                <textarea type="comment" id="name" name="name" required
                  minlength="10" rows="1" cols="60" />
                   <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
                
          </div>    
                
  </form>
</div>
</AccordionDetails>
  
          
          </form>

    
    
    
    
    </form>
    </div>
    
  
              : null}
              </div>
          
          
             
          < div style={{ border: "1px solid #b3b3cc", padding: "24px" }}>
    
    <div style={{ display: "flex" }}>
   
      <input type="checkbox" /><p>section start</p>
    
    </div>
    
    <div className="d-grid gap-1">
      <Button variant="success" onClick={handleShow13}>
  Spa Experience
      </Button>
    </div>




{isButton13 === true ? <div><div style={{ border: "1px solid #b3b3cc", padding: "10px" }}>
              <div style={{ display: "flex" }}>
              </div>
    
              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
                <input type="checkbox" /><Typography>Question</Typography>
              </AccordionSummary>
    
                <AccordionDetails>
               
                <div style={{ border: "1px solid #b3b3cc", padding: "10px" }}>
                  <div style={{ display: "flex" }}>
                  </div>
                 
    
                  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "20px" }}>
                    <div style={{ display: "flex" }} />
    
               
                    <p>Date Of Availing Services</p>
                    <input type="date" />
                  </form>
    
    
                  
                </div>
              </AccordionDetails>


              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
        <div style={{ display: "flex" }} />
        
        <label for="appt">Time of Availing Services</label>
    
    <input type="time" id="appt" name="appt" placeholder="HH:MM"
      min="09:00" max="18:00" required></input>
    
      </form>
    </div>
    </AccordionDetails>
      
              
              </form>



              
              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
        <div style={{ display: "flex" }} />
        <p>Types Of Services Ordered</p>
                   <textarea id="w3review" name="w3review" rows="1" cols="45" />
        
    
      </form>
    </div>
    </AccordionDetails>
      
              
              </form>



               
    <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Were You Greeted at the spa with warm smile & Eye Contact</p>
    <div style={{ display: "flex", justifyContent: "end" }}></div>
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
  </form>

  
  <p>Comment</p>
              <textarea rows="3" cols="50" name="comment" form="usrform"></textarea>
</div>
</AccordionDetails>
  
          

          </form>

          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
        <div style={{ display: "flex" }} />
        <p>Who Provided the Services</p>
                   <textarea id="w3review" name="w3review" rows="1" cols="45" />
        
    
      </form>
    </div>
    </AccordionDetails>
      
              
              </form>











           
              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Was  the Spa Table is good condition with cleaned & Crisp Line? </p>
    <div style={{ display: "flex", justifyContent: "end" }}></div>
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
  </form>

  
  <p>Comment</p>
              <textarea rows="3" cols="50" name="comment" form="usrform"></textarea>
</div>
</AccordionDetails>
  
          

          </form>




          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Was  the Towels Provided of Good Condition </p>
    <div style={{ display: "flex", justifyContent: "end" }}></div>
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
  </form>

  
  <p>Comment</p>
              <textarea rows="3" cols="50" name="comment" form="usrform"></textarea>
</div>
</AccordionDetails>
  
          

          </form>

          
          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Was a bill Presented </p>
    <div style={{ display: "flex", justifyContent: "end" }}></div>
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
  </form>

  
  <p>Comment</p>
              <textarea rows="3" cols="50" name="comment" form="usrform"></textarea>
</div>
</AccordionDetails>
  
          

          </form>

          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Did You Collect Balance?</p>
    <div style={{ display: "flex", justifyContent: "end" }}></div>
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
  </form>

  
  <p>Comment</p>
              <textarea rows="3" cols="50" name="comment" form="usrform"></textarea>
</div>
</AccordionDetails>
  
          

          </form>
            

              
    
 
              </form>
            </div>
    
    

    
    
    
    
    
    
    
    
              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
               
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
        <div style={{ display: "flex" }} />
        <p style={{ color: "red" }}>Please Verify if the Complete Transaction Was Recorded In the System? </p>
    <div style={{ display: "flex", justifyContent: "end" }}></div>
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
      </form>
    </div>
    </AccordionDetails>




                       
<form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
        
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Shopper Comments</p>
                <textarea rows="2" cols="55" name="comments" id="comments" ></textarea>
  </form>
</div>
</AccordionDetails>
  
          
          </form>
    
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
          
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" ,width:"500px"}}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    
    <p>Spa Rating</p>
    <div style={{ display: "flex", justifyContent: "end" }}>
   
                <p>Comment:</p>
                <textarea type="comment" id="name" name="name" required
                  minlength="10" rows="1" cols="60" />
                   <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
                
          </div>    
                
  </form>
</div>
</AccordionDetails>
  
          
          </form>

    
    
    
    
    </form>
    </div>
    
  
              : null}
              </div>
          
          
             
          < div style={{ border: "1px solid #b3b3cc", padding: "24px" }}>
    
    <div style={{ display: "flex" }}>
  
      <input type="checkbox" /><p>section start</p>
    
    </div>
    
    <div className="d-grid gap-1">
      <Button variant="success" onClick={handleShow14}>
  Check Out  Experience
      </Button>
    </div>




              
{isButton14 === true ? <div><div style={{ border: "1px solid #b3b3cc", padding: "10px" }}>
              <div style={{ display: "flex" }}>
              </div>
    
              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
             
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
                <input type="checkbox" /><Typography>Question</Typography>
              </AccordionSummary>
    
                <AccordionDetails>
               
                <div style={{ border: "1px solid #b3b3cc", padding: "10px" }}>
                  <div style={{ display: "flex" }}>
                  </div>
                 
    
                  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "20px" }}>
                    <div style={{ display: "flex" }} />
    
               
                    <p>Date Of Checkout</p>
                    <input type="date" />
                  </form>
    
    
                  
                </div>
              </AccordionDetails>


              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
              
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
        <div style={{ display: "flex" }} />
        
        <label for="appt">Time of Checkout</label>
    
    <input type="time" id="appt" name="appt" placeholder="HH:MM"
      min="09:00" max="18:00" required></input>
    
      </form>
    </div>
    </AccordionDetails>
      
              
              </form>


              


              
              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
        <div style={{ display: "flex" }} />
        <p>Check out Associate</p>
                   <textarea id="w3review" name="w3review" rows="1" cols="45" />
        
    
      </form>
    </div>
    </AccordionDetails>
      
              
              </form>
              



              
    
 
              </form>
            </div>
    
    

    
    
    
    
            <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
           
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Was information Bill/Folio Presented? </p>
    <div style={{ display: "flex", justifyContent: "end" }}></div>
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
  </form>

  
  <p>Comment</p>
              <textarea rows="2" cols="50" name="comment" form="usrform"></textarea>
</div>
</AccordionDetails>
  
          

          </form>

          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Did You Recive The final bill</p>
    <div style={{ display: "flex", justifyContent: "end" }}></div>
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
  </form>

  
  <p>Comment</p>
              <textarea rows="2" cols="50" name="comment" form="usrform"></textarea>
</div>
</AccordionDetails>
  
          

          </form>

          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
           
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Folio/Invoice No</p>
    <div style={{ display: "flex", justifyContent: "end" }}></div>
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
  </form>

  
  <p>Comment</p>
              <textarea rows="2" cols="50" name="comment" form="usrform"></textarea>
</div>
</AccordionDetails>
  
          

          </form>
          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
          
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Have You Settled Bill</p>
    <div style={{ display: "flex", justifyContent: "end" }}></div>
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
  </form>

  
  <p>Comment</p>
              <textarea rows="2" cols="50" name="comment" form="usrform"></textarea>
</div>
</AccordionDetails>
  
          

          </form>
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p style={{ color: "red" }} >Please Verify if bill Settlement Transaction is recorded in the system?</p>
    <div style={{ display: "flex", justifyContent: "end" }}></div>
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
  </form>

  
  <p>Comment</p>
              <textarea rows="2" cols="50" name="comment" form="usrform"></textarea>
</div>
</AccordionDetails>
  
          

          </form>


          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
          
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p >Were You Informed About Balance due</p>
    <div style={{ display: "flex", justifyContent: "end" }}>
   
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
    </div>            
  </form>


  
</div>

</AccordionDetails>
  
          

          </form>

          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p >Have You Made Telephone Call from the Room?</p>
    <div style={{ display: "flex", justifyContent: "end" }}>
   
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
    </div>            
  </form>


  
</div>

</AccordionDetails>
  
          

          </form>
          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
                <div style={{ display: "flex" }} />
    
                <AccordionSummary
          
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
               
              </AccordionSummary>
    
              <AccordionDetails>
    
    
    <Typography> <input type="checkbox" />Question</Typography>
    
    <div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"500px" }}>
      <div style={{ display: "flex" }}>
      </div>
    
    
      <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
        <div style={{ display: "flex" }} />
        <p>Dialled Number,Time of Call & Approximate Duration</p>
                   <textarea id="w3review" name="w3review" rows="1" cols="45" />
        
    
      </form>
    </div>
    </AccordionDetails>
      
              
              </form>
              <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
          
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Has the Telephone call appeared in the folio/invoice</p>
    <div style={{ display: "flex", justifyContent: "end" }}>
   
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
    </div>            
  </form>


  
</div>

</AccordionDetails>
  
          

          </form>
              

          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p style={{ color: "red" }} >Please Verify ,telephone call transactions is recorded in the system</p>
    <div style={{ display: "flex", justifyContent: "end" }}></div>
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
  </form>

  
  <p>Comment</p>
              <textarea rows="2" cols="50" name="comment" form="usrform"></textarea>
</div>
</AccordionDetails>
  
          

          </form>
    
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
      
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Have You Consumed from the minibar?</p>
    <div style={{ display: "flex", justifyContent: "end" }}>
   
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
    </div>            
  </form>


  
</div>

</AccordionDetails>
  
          

          </form>
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
      
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Item Consumed And Quantity</p>
    <textarea id="w3review" name="w3review" rows="1" cols="45" />
   
  </form>


  
</div>

</AccordionDetails>
  
          

          </form>
          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p>Has the minibar consumption appeared in the folio/invoice</p>
    <div style={{ display: "flex", justifyContent: "end" }}>
   
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
    </div>            
  </form>


  
</div>

</AccordionDetails>
  
          

          </form>
              


          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p style={{ color: "red" }} >Please Verify ,minibar consumption  is recorded in the system</p>
    <div style={{ display: "flex", justifyContent: "end" }}></div>
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
  </form>

  
  <p>Comment</p>
              <textarea rows="2" cols="50" name="comment" form="usrform"></textarea>
</div>
</AccordionDetails>
  
          

          </form>
          
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p  >Was The check out process completed within 5 minutes</p>
    <div style={{ display: "flex", justifyContent: "end" }}></div>
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
  </form>

  
  <p>Comment</p>
              <textarea rows="2" cols="50" name="comment" form="usrform"></textarea>
</div>
</AccordionDetails>
  
          

          </form>
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" }}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    <p  >Did The Associate enquires about the stay</p>
    <div style={{ display: "flex", justifyContent: "end" }}></div>
                <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
  </form>

  
  <p>Comment</p>
              <textarea rows="2" cols="50" name="comment" form="usrform"></textarea>
</div>
</AccordionDetails>
  
          

          </form>
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" ,width:"550px"}}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    
    
    <p>Shopper Comments</p>
                <textarea id="w3review" name="w3review" rows="3" cols="50" />
                
  </form>
</div>
</AccordionDetails>
  
          
          </form>
          <form className="form w-100" style={{ backgroundColor: "white", padding: "20px" }}>
            <div style={{ display: "flex" }} />

            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
           
          </AccordionSummary>

          <AccordionDetails>


<Typography> <input type="checkbox" />Question</Typography>

<div style={{ border: "1px solid #b3b3cc", padding: "10px",width:"550px" ,width:"500px"}}>
  <div style={{ display: "flex" }}>
  </div>


  <form className="form w-100" style={{ backgroundColor: "#D3D3D3", padding: "25px" }}>
    <div style={{ display: "flex" }} />
    
    <p>Check-Out Rating</p>
    <div style={{ display: "flex", justifyContent: "end" }}>
   
                <p>Comment:</p>
                <textarea type="comment" id="name" name="name" required
                  minlength="10" rows="1" cols="60" />
                   <input type="radio" id="html" name="fav_language" value="Yes" />
                <label for="html">Yes</label>
                <input type="radio" id="html" name="fav_language" value="No" />
                <label for="html">No</label>
                
          </div>    
                
  </form>
</div>
</AccordionDetails>
  
          
          </form>

    
    
    </div>
    
  
              : null}





</div>
        
 
        
        
      </div>
  
    
  
  );

};

export default Mcq;
