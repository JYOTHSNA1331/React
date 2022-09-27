import React, { useState } from "react";
import "./style.css";
import Back from './back'

function FormDisplay() {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [rating, setRating] = useState("");
  const [List, setList] = useState([]);
  const [show, setShow] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, department, rating);
    const data = { name, department, rating };

    if (name && department && rating) {
      setList((ls) => [...ls, data]);
      setName("");
      setDepartment("");
      setRating("");
      setShow(!show)

    } else {
      alert("Fill all details");
    }
  };

  const GoBack = () => {
    setShow(!show)
  };

  return (
    <div>
      {show ? (
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="label">
                <label>Name : </label>
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name' required></input><br />

                <label>Department : </label>
                <input type='text' value={department} onChange={(e)=>setDepartment(e.target.value)} placeholder='Department' ></input><br />

                <label>Rating : </label>
                <input type='number' value={rating} onChange={(e)=>setRating(e.target.value)} placeholder='Rating' required></input><br />

                <label>Submit</label>
                <input style={{backgroundColor:'skyblue',width:'10vw' , cursor:'pointer',borderRadius:'13px'}} type='submit'></input>
            </div>
          </form>
        </div>
      ) : (
        <div className="BOX" style={{display: "flex",justifyContent: "space-around",flexWrap: "wrap"}}>
        {List.map((a)=> {
         return (<div className='box' > <Back Name={a.name}  Department={a.department}  Rating={a.rating} back={GoBack} /> </div>)
        })}
</div>




      )}
      
    </div>
  );
}

export default FormDisplay;