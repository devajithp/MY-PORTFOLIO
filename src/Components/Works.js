import React from 'react'

function Works() {
   let works=[{
      name:"RESTAURANT WEBSITE",
      video:"https://youtu.be/hQ6vlTYH6rk",
      stacks:["NODE JS","REACT JS","EXPRESS","MONGOOSE"],
      about:"The e-commerce restaurant website created using Node.js, React.js, Mongoose, JWT token, and online payment integration is a fully functional platform that allows users to order food online from a restaurant. The website has been built using Node.js and React.js, which are popular JavaScript frameworks. Mongoose, a MongoDB object modeling tool, has been used to simplify database operations. JWT token has been integrated to ensure secure authentication and authorization of users. The website includes online payment integration to allow customers to make payments through various online payment methods. This feature enhances convenience and security for users. Overall, the website offers a seamless and user-friendly experience for customers to place orders and make payments online, while also providing efficient management for restaurant owners.",
      url:"https://devajithp.github.io/restaurant-client/"
   },
{
   name:"CHAT WEBSITE",
   video:"https://youtu.be/J8bLxJij2w0",
   stacks:["NODE JS","REACT JS","EXPRESS","MONGOOSE","WEBSOCKET"],
   about:"The website has been built using Node.js and React.js, which are popular JavaScript frameworks. Mongoose, a MongoDB object modeling tool, has been used to simplify database operations. Socket.io has been integrated to enable real-time communication between users, allowing them to send and receive messages without delay. The group chat rooms allow users to join and participate in conversations with multiple users. Chat history storage enables users to view previous messages that were sent in the chat room. Overall, the website offers a seamless and user-friendly experience for users to communicate with each other in real-time through group chat rooms, while also providing chat history storage for users to view previous messages that were sent in the chat room.",
   url:"https://devajithp.github.io/Chat-app-client/"
},
{
   name:"BLOG WEBSITE",
   video:"https://youtu.be/pRfLh_jWLzM",
   stacks:["NODE JS","REACT JS","EXPRESS","MONGOOSE"],
   about:"The website includes features such as blog post creation, updating and deletion, and user authentication. The blog post creation feature allows users to create new posts with a title and content. The updating and deletion features enable users to edit or remove posts they have created. User authentication ensures that only authorized users can create, update, and delete blog posts. This enhances security and privacy for users. Overall, the website offers a seamless and user-friendly experience for users to read and interact with blog posts, while also providing efficient management for website administrators through the implementation of CRUD operations.",
   url:"https://devajithp.github.io/Blog-App-Client/"
},
{
   name:"NETFLIX CLONE WEBSITE",
   video:"https://youtu.be/k3oDxlQtDH4",
   stacks:["REACT JS"],
   about:"The website has been built using React.js, which is a popular JavaScript framework, and TMDB database, which provides a comprehensive collection of movies and TV shows. The website includes features such as browsing movie trailers and trailer playback. Users can navigate through a collection of movie trailers displayed on the website and select the trailers they want to watch. Trailer playback enables users to watch the selected movie trailers directly on the website. Overall, the website offers a seamless and user-friendly experience for users to browse and watch movie trailers, similar to the popular streaming service, Netflix.",
   url:"https://devajithp.github.io/Netflix-clone/"
}]
  return (
    
    <div className='row' style={{paddingTop:"109px",minHeight:"700px", backgroundColor:"#e0e0d1", textAlign:"center",display:"block"}}>
      <div className='Headings bg-dark text-white col-md-12' style={{height:"75px",width:"",paddingTop:"10px"}}>
     <h2  >My Works</h2>
     </div>
    
     {
      works && works.map((work)=>
      {
         return(
            <div className='bg-light ' style={{minHeight:"600px",width:"800px", marginLeft:"auto",marginRight:"auto",paddingTop:"20px",borderRadius:"10px",marginTop:"40px",marginBottom:"10px"}}>
               
            <h3 className='ubuntu' >{work.name}</h3>
           <iframe style={{marginTop:"10px"}} width="350" height="250"
      src={`https://www.youtube.com/embed/${work.video.substring(17)}`}>
          </iframe><br></br> 
          <a className='text-secondary' href={work.url} target="_blank">Website</a>
          <hr></hr>
          <div className='container'>
          <div className='row'>
         
             <div style={{textAlign:"left"}} className='col-md-5'>
                  <h5 className='ubuntu'>Stacks Used</h5>
                  { work.stacks && work.stacks.map((stack)=>
                  {
                     return(
                        <div>
                        <li className='ubuntu' style={{color:" #6b6b47"}}>{stack}</li>
                        
                        </div>
                     )
                  }) 
                  }
             </div>
             <div className='col-md-7'>
                  <h5 className='ubuntu'>About</h5>
                  {
                     <div style={{backgroundColor:"white",maxHeight:"140px",overflowWrap:"break-word",overflowY:"scroll",textAlign:"justify" }}>
                         {work.about}
                        
                     </div>
                  }
             </div>
            
          </div>
          <br></br><br></br>
          </div>
  </div>
         )
      })
     }
     
     
    </div>
    
  )
}

export default Works
