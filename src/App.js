import React,{useState,useEffect} from 'react';
import './App.css';
import './theme.scss';
function App() {
  const [color,setColor]=useState('t-magenta');
  useEffect(() => {
     const curColor=localStorage.getItem('theme-color');
     if(curColor){
       setColor(curColor);
     }
  },[]);

  //event handlers
  const handle=(theme)=>{
   setColor(theme);
   localStorage.setItem('theme-color',theme);
  }

  return (
    <div className={`App ${color}`}>
      <div className="themes">
        <div className="active" id="t-magenta"
        onClick={()=>handle("t-magenta")}/>
        <div className="active" id="t-violet"
        onClick={()=>handle("t-violet")}/>
        <div className="active" id="t-teal"
        onClick={()=>handle("t-teal")}/>
        <div className="active" id="t-purple"
        onClick={()=>handle("t-purple")}/>
        <div class="active" id="t-rose"
        onClick={()=>handle("t-rose")}/>
      </div>
      <div className="info">
          <h1>Themes Toggler</h1>
          <p>It can toggle different colors which user wants and gives an attractive UI</p>
      </div>
    </div>
  );
}

export default App;
