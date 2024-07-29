
import Header from '../components/Header';
import '../styles/Res.css'
import { template } from './Resume_General_html';

const Res = () => {
    return (
      <div>
      <Header/>
        <div className='resume-box'>
          <div dangerouslySetInnerHTML={{ __html: template }}></div>
        </div>
      </div>
    );
  };
  export default Res;