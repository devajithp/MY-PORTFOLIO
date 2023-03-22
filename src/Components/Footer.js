import React from 'react'

function Footer() {
  return (
    <div>
    <div className='bg-dark' style={{ height:"80px" ,paddingTop:"10px", textAlign:"center" }}>
     <p className='text-light'>Connect Me</p>   
   <a href='https://www.linkedin.com/in/devajith-p-1a2983182/'> <i  style={{marginRight:"20px",scale:"1.5",cursor:"pointer"}} class="fa-brands fa-linkedin bg-light"></i></a>
   <a href="https://www.instagram.com/devajith98/"> <i style={{marginLeft:"20px",scale:"1.5",cursor:"pointer"}} class="fa-brands fa-instagram bg-light"></i></a>
      
    </div>
    
    </div>
  )
}

export default Footer
