import React from 'react'
import { useHistory } from 'react-router-dom'

function Header() {
  const history=useHistory()
  
  return (
    <div style={{position:"fixed",width:"100%"}}>
       <div className=' bg-white ' style={{height:"70px",paddingTop:"15px"}}>
       
       <nav  class="navbar navbar-expand-lg navbar-light bg-white">
   <div class="container-fluid">
     <a class="navbar-brand " href="#">DJ</a>
     <button class="navbar-toggler  bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div style={{marginRight:"auto"}} class="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <li class="nav-item">
           <p class="nav-link  " data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{cursor:"pointer"}} onClick={()=>history.push("/")} aria-current="page" >Home</p>
         </li>
         <li class="nav-item">
           <p  className="nav-link " data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{cursor:"pointer"}} onClick={()=>history.push("/works")}  >Works</p>
         </li>
        
        
         <li class="nav-item">
           <p class="nav-link  " data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{cursor:"pointer"}} onClick={()=>history.push("/services")}  tabindex="-1" aria-disabled="true">Services</p>
         </li>
         <li class="nav-item">
           <p  class="nav-link " data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{cursor:"pointer"}} onClick={()=>history.push("/certifications")}   href="#">Certifications</p>
         </li>
       </ul>
       
     </div>
   </div>
 </nav>
       </div>
      
    </div>
  )
}

export default Header
