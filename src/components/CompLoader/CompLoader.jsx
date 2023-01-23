import { faScreenpal } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CompLoader.css';

const CompLoader = () => {
  return (
    <div className="compLoader flex_center">
      <FontAwesomeIcon icon={faScreenpal} spin />
    </div>
  )
}

export default CompLoader