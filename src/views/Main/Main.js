import React from 'react';
import './Main.css';
import Img1 from '../Main/img/pratu.jpg';
import Img2 from '../Main/img/img-1.jpg';
import Img3 from '../Main/img/img-2.jpg';
import Img4 from '../Main/img/img-4.jpg';
import Mic from '../Main/img/mute-mic.png';
import Mic1 from '../Main/img/mic.png'   

const Main = () => {
    return (
        <main className="main">
            <div className="video-grid">
                {/* Example video tiles */}
                <div className="video-tile">
                <img className='mic' src={Mic} alt="" />
                <img className='student-photo img' src={Img1} alt="" />
                <h3 className='student-name'>Pratuu</h3>
                     </div>

                <div className="video-tile">
                <img className='mic' src={Mic1} alt="" />
                <img className='student-photo' src={Img2} alt="" />
                <h3 className='student-name'>Atharva</h3>

                     </div>
                     <div className="video-tile">
                     <img className='mic' src={Mic} alt="" />     
                <img className='student-photo' src={Img3} alt="" />
                <h3 className='student-name'>Sai</h3>

                     </div>
                     <div className="video-tile">
                     <img className='mic' src={Mic} alt="" />
                <img className='student-photo' src={Img4} alt="" />
                <h3 className='student-name'  >Saiyli</h3>

                     </div>
            </div>
        </main>
    );
};

export default Main;
