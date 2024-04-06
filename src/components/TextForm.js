import React, {useState} from 'react'

export default function TextForm(props) {
  // eslint-disable-next-line
    const handleupclick = ()=>{
    let  newText = text.toUpperCase();
   setText(newText);
    }

 const handleonchange = (event)=>{
   console.log("clicke worked");
   setText(event.target.value)
 }

const [text,setText] = useState('enter text');

const handledown = ()=>{
   let shittytext = text.toLowerCase();
   setText(shittytext);
}

const[ isitalic, setitalic] = useState(false)

 const italic = () =>{
  
  setitalic(!isitalic);
}

const[ isbold,setbold] = useState(false)

const bold =  () => {
  setbold(!isbold)
  }

  const deletet = () =>{
     let txt = " "
     setText(txt);
     props.showAlert("your text deleted !!","success",)
  }

  const copy = () =>{
    let newlol = document.getElementById('exampleFormControlTextarea1')
    newlol.select();
    navigator.clipboard.writeText(newlol.value);
    props.showAlert(" your text copied !!","success",)
  }


  return (
    <>
      <div className="container">
         <h1>{props.textarea }</h1>
        <div className="mb-3">
          <textarea className="form-control"   style ={{  fontStyle: isitalic ? 'italic' : 'normal' , fontWeight : isbold ? 'bold' : 'normal',fontSize : '18px',}}     value={text} onChange={handleonchange}  id="exampleFormControlTextarea1" rows="25"></textarea>
        </div> 
        <div className="container " >
     
     <p style={{margin : '0px'}}>{text.split(" ").length} words and  {text.length} characters </p>
     <p  style={{margin : '0px'}}>    you need { 0.008*text.split(" ").length}  Minutes to read</p>
   </div>
        <button type="button" className="btn btn-outline-success mx-2 my-2" onClick={handledown} >convert to lower case</button>
        <button type="button"   className="btn btn-outline-success mx-2 my-2" onClick={italic} >convert to Italic</button>
        <button type="button"   className="btn btn-outline-success mx-2 my-2" onClick={bold} >convert to Bold</button>
        <button type="button"   className="btn btn-outline-success mx-2 my-2" onClick={deletet} >Delete</button>
        <button type="button"   className="btn btn-outline-success mx-2 my-2" onClick={copy} >copy</button>
        <button type="button"   className="btn btn-outline-success mx-2 my-2" onClick={handleupclick} >convert to upper case</button>

    </div>

    </>
  )
}
