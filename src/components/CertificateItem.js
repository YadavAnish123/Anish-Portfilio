import React from 'react'
import './Certificateitem.css'
const CertificateItem=(props)=>{
    let { title,  urlToImage,  publishedAt,courseName,from,driveLink} = props
    const onclickHandeler=()=>{
      
      const element = document.getElementById('myElement');
      element.classList.add('active');
      console.log("zoom is calling")
      
    }
  return (
    <div>
       

    <div className="card" style={{ width: "18rem",marginTop:"20px",marginBottom:"10px" }}>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
         {title}
      </span>
      
      <img src={require(`./${urlToImage}`)} id="myElement"  onClick={onclickHandeler}   className="card-img-top"  alt="" />
       
       
      <div className="card-body">
        <h5 className="card-title">Course:-{courseName}</h5>
        <p className="card-text">From:-{from}</p> 
        <p className="card-text"><small className="text-danger ">Date:{publishedAt}  <a href={driveLink} className="btn btn-dark" style={{marginRight:"10px",float:"right"}} target="_blank">🔗</a> </small></p>
        {/* <a rel="noreferrer" href= ""target="_blank" className="btn btn-sm btn-dark">Read more..</a> */}
        
      </div>
    </div>
  </div>
  )
}

export default CertificateItem