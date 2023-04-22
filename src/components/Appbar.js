import React from 'react'


function Appbar() {
  return (<div>
    
    <nav style={{backgroundColor:"red"}}  class="navbar navbar-expand-lg ">
    <a style={{marginLeft:"1%",fontSize:"22px", color:"white"}} class="navbar-brand" href="/">HS Pizzah Order System</a>
    
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto" style={{marginLeft:"80%"}}>

      <li style={{fontSize:"18px",color:"yellow"}}  class="nav-item">
          <a class="nav-link" style={{color:"#e3f2fd"}}>AD00-AD08</a>
        </li>
      
        <li style={{fontSize:"18px",color:"yellow"}} class="nav-item active">
          <a  class="nav-link" href="/Register" style={{color:"#e3f2fd"}}>Register</a>
        </li>
      
        <li style={{fontSize:"18px",color:"yellow"}}  class="nav-item">
          <a class="nav-link" href="/login" style={{color:"#e3f2fd"}}>Login</a>
        </li>
      

      
        </ul>
     
    </div>
  </nav>

  </div>
  )
}

export default Appbar