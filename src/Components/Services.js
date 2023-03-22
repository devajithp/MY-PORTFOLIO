import React from 'react'

function Services() {
  const services=[{
    title:"Front End Development",
    image:"https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png",
    about:"I specialize in creating user interface and user experience designs for websites and applications using HTML, CSS, JavaScript and react library. I have experience in building static websites using HTML, CSS, and JavaScript. I specialize in creating visually appealing layouts that are optimized for a seamless user experience. My skills in developing static websites enable me to provide valuable services to businesses or individuals who require a simple and cost-effective online presence."
  },
{
  title:"Back End Development",
  image:"https://www.pngfind.com/pngs/m/683-6833893_node-js-logo-png-transparent-png.png",
  about:" I am proficient in developing server-side components of web applications, including database management, server-side logic, and APIs, using technologies like Node.js. Developing server-side code using Node.js that is optimized for scalability and performance. Implementing authentication and authorization protocols to ensure the security of user data and prevent unauthorized access to the backend infrastructure of a web application."
},
{
  title:"Full Stack Development",
  image:"https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg",
  about:"I specialize in building user interfaces using React, writing efficient back-end code using Express and Node.js, and designing and implementing databases using MongoDB. I keep myself up-to-date with emerging technologies and best practices to deliver successful projects that meet business needs"
},
{
  title:"Database Management",
  image:"https://w7.pngwing.com/pngs/216/509/png-transparent-mongodb-node-js-npm-open-source-model-angularjs-leaf-leaf-logo-grass.png",
  about:"I can create and manage databases for web applications, ensuring their efficiency and security.Designing and implementing database schemas that are optimized for the specific requirements of a web application, using MongoDB's flexible document-based data model. With my expertise in MongoDB development, I can help businesses and individuals build secure and scalable web applications that can handle large amounts of data. I understand that maintaining a MongoDB database can be challenging, which is why I offer ongoing maintenance and support to my clients to ensure that their database remains up-to-date and secure."
},
{
  title:"Testing and Debugging",
  image:"https://ih1.redbubble.net/image.404023266.1965/aps,504x498,small,transparent-pad,600x600,f8f8f8.u2.jpg",
  about:"I am experienced in testing and debugging web applications to ensure they are functioning correctly and free from errors or bugs."

},
{
  title:"Deployment ",
  image:"https://cdn-1.webcatalog.io/catalog/cyclic-sh/cyclic-sh-icon-filled-256.png?v=1669863995747",
  about:"I can deploy web applications to a hosting environment and manage their ongoing maintenance, including security updates and performance optimization."
}]
  return (
    <div style={{paddingTop:"80px",backgroundColor:"#e0e0d1"}}>
      {/* <img style={{width:"100%"}} src='https://res.cloudinary.com/dw7fovacw/image/upload/v1679476019/service_cover_du0dxe.jpg'></img> */}
      <div className='Headings bg-dark text-white  ' style={{height:"75px",width:"",paddingTop:"10px",textAlign:"center"}}>
     <h2  >My Services</h2>
     </div>
      <br></br><br></br>
      <div className='container' style={{alignItems:"center"}}>
        <div style={{}} className='row'>
          {services && services.map((service)=>
          {
               return(
                <div  style={{alignItems:"center",textAlign:"center",height:"400px",width:"370px",marginTop:"30px",marginLeft:"40px",paddingTop:"20px",borderRadius:"10px"}} className='col-md-4 bg-light'>
                  <img style={{height:"100px",width:"110px",borderRadius:"50%",borderStyle:"solid",borderColor:"green"}} src={`${service.image}`}></img><br></br>
                  <h4 className='ubuntu'>{service.title}</h4><br></br>
                  <div style={{height:"200px",overflowY:"scroll",overflowWrap:"break-word",textAlign:"justify"}}>
                    <p>{service.about}</p>
                  </div>
                  

                      
                </div>
               )
          })}
          

        </div>
      </div>
    </div>
  )
}

export default Services
