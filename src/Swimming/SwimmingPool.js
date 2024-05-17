import React from 'react';
import './SwimmingPool.css';
import swimingimage from '../ImagesFolder/SwimmingPool/swimmingpool.jpg';
import { Link } from 'react-router-dom';

const SwimmingPool = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-sm-6">
             <div className='pool-para-content'>
                <h3>Swimming Pool</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente porro aut nisi corrupti debitis aperiam architecto voluptates iusto, earum in?</p>
                <h3>Yoga Terrace</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatem eum a totam qui! Enim velit vitae facere tempore unde dolorem ipsam, eius perferendis ea, repellendus tenetur fugit autem? Velit!</p>
                <Link to="/contact">Find Out More</Link>
            </div>
        </div>
        <div className="col-sm-6 pool-image-section">
            <div className="room-content">
                    <h3>Exterior</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum similique in alias nemo quas asperiores! Soluta ipsa quidem voluptas repellat?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nesciunt sapiente neque aut quia eaque ab, corporis facilis assumenda perspiciatis vel sed earum tempore! Ad consequatur vitae laboriosam quaerat cupiditate.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aspernatur soluta minima! Aliquam dolore iure illo totam sed distinctio quaerat eveniet perferendis, incidunt aspernatur. Nam.</p>
                </div>
        </div>
      </div>
    </div>
  )
}

export default SwimmingPool
