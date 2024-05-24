import '../styles/Res.css'
import { template } from './Resume_General_html';

const Res = () => {
    
    return (
      <div className='resume-box'>
      <div dangerouslySetInnerHTML={{ __html: template }}></div>
      </div>
    )
  };
  export default Res;