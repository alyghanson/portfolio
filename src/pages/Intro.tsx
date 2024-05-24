
import { Link } from 'react-router-dom';
import '../styles/Intro.css'


function Intro() {
    return (
      <div className="Intro">
        <header className="Intro-header">
          <p>
            <code>Hey! I'm Aly, a Data Scientist.</code>
          </p>
          <p>
            <Link className='link' to="res">Resume</Link>
          </p>
          <p>
            <Link className='link' to="contact">Contact</Link>
          </p>
        </header>
      </div>
    );
  }

  export default Intro