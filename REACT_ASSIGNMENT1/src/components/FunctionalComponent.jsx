import React,{useState} from "react";
import './style.css'
const FunctionalComponent = () => {

    const[show,setShow] = useState(false)

    return ( <div>

     <button className="button" onClick={()=>setShow(!show)}>To see styling in functional component</button>
     {
        show ? <div className="box">
            <h2>This is Created using Functional Component</h2>
            <>This is done using External CSS</>
            <div style={{color:'blue',padding:'10px'}}>This is done using Inline CSS</div>
        </div>
        :
        null

     }

    </div> );
}
 
export default FunctionalComponent;