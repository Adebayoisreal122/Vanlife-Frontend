import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Hostnavs = () => {

        
    const navLinks = [
        {
          name: "Dashboard",
          path: "/host/dashboard"
        },
        {
          name: "Income",
          path: "/host/income"
        },
        {
          name: "Vans",
          path: "/host/van"
        },
        {
            name: "Review",
            path: "/host/review"
          },
      ]


  return (
    <>
     <nav className="navbar">
  <div className="container-fluid">
   
    <div className="d-flex  ms-5 gap-5 my-5" >
    {
                navLinks.map((data, i) => {
                    return (
                        <div key={i}>
                            <NavLink  className={({isActive}) => (isActive? "text-warning fw-bolder underline":"text-dark text-decoration-none")}  to={data.path}>{data.name}</NavLink>
                        </div>
                    );
                })
            }
                </div>
    </div>
</nav>
    </>
  )
}

export default Hostnavs