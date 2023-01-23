import images from '../../constants';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="work-steps" id="work-steps">
      <h2 className="main-title">HOW IT WORKS ?</h2>
      <div className="container">
        <img src={images.work_steps} alt="WorkSteps" />
          <div className="info">
            <div className="box">
              <img src={images.worksteps1} alt="WorkSteps" />
                <div className="text">
                  <h3>Business Analysis</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum recusandae debitis vel</p>
                </div>
            </div>
            <div className="box">
              <img src={images.worksteps2} alt="WorkSteps" />
                <div className="text">
                  <h3>Architecture</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum recusandae debitis vel</p>
                </div>
            </div>
            <div className="box">
              <img src={images.worksteps3} alt="WorkSteps" />
                <div className="text">
                  <h3>Developement</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum recusandae debitis vel</p>
                </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default HowItWorks