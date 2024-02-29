import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {


    const navLinks = [
        {
          name: "Host",
          path: "/host",
          icon: ""
        },
        {
          name: "About",
          path: "/about"
        },
        {
          name: "Vans",
          path: "/vans",
          icon: ""
        },
        {
          name: "signin",
          path: "/",
          icon: "/public/images/user.svg"
        },
       
      ]



  return (
    <>
      <nav className="navbar bg-body-secondary">
  <div className="container-fluid">
    <Link to={"/home"} className="navbar-brand"><h2>#VANLIFE</h2></Link>
    <div className="d-flex gap-5" role="search">
    <div className="d-flex gap-5" >
    {
                navLinks.map((data, i) => {
                    return (
                        <div key={i}>
                            <NavLink  className={({isActive}) => (isActive? "text-info fw-bolder underline":"text-dark text-decoration-none")}  to={data.path}>
                            {data.name === "signin" ? <img src={data.icon} alt={data.name} style={{height:24,   width:24}} />: data.name }
                             </NavLink>
                        </div>
                    );
                  })
                }
                </div>
               
    </div>
  </div>
</nav>  
    </>
  )
}

export default Navbar