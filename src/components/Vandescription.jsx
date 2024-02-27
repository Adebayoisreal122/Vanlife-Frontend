import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Vandescription = () => {

  let { id } = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    axios.get(`https://van-backend.onrender.com/api/vans/${id}`)
      .then(res => {
        console.log(res.data);
        setVan(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);


  return (
    <>
      <div className='rent'>

<Link to={"/vans"} className="col-sm-6 vanlink  col-md-2 p-2 text-center my-2 mx-4">Go back to all vans</Link>

{van && (
  <div className='container-fluid  w-50 mx-auto gap-5 p-4 gap-5 '>
    <div className="card me-5 ">
      <img src={van.imageUrl} className="card-img-top" style={{height:550, width:660}} alt={van.name} />
    </div>
        <button  className="btn  m-3 p-3 w-50" style={{background: van.type === 'simple' ? 'orange' : van.type ==='luxury' ? 'black' : 'green', color: 'white', fontWeight: 'bolder'}} >{van.type}</button>
      <div className="card-body ms-5">
        <h1 className="card-title">{van.name}</h1>
        <h2 className="">  ${van.price} <span className='fw-lighter'>/Day</span></h2>
        <p className="">{van.description}</p>
        <button  className="btn bell m-3 p-3 w-100" >Rent This Van</button>

      </div>
  </div>
)}
</div>
    </>
  )
}

export default Vandescription