import { Link } from 'react-router-dom'

const Navy = () => {
    
    return (
      <div>
      <nav>
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo">Valmaids</Link>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Get in touch</Link></li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li><a href="/">Home</a></li>
        <li><a href="about">About Us</a></li>
        <li><a href="services">Services</a></li>
        <li><a href="contact">Get in touch</a></li>
      </ul>
      </div>
    );
}

export default Navy
