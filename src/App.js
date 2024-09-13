import dog1 from "./assets/images/d1.jpeg"
import dog2 from "./assets/images/d2.jpeg"
import dog3 from "./assets/images/d3.jpeg"
import dog4 from "./assets/images/d4.jpeg"
import dog5 from "./assets/images/d5.jpeg"
import dog6 from "./assets/images/d6.jpeg"
import dog7 from "./assets/images/d7.jpeg"
import dog8 from "./assets/images/d8.jpeg"
import dog9 from "./assets/images/d9.jpeg"
import dog10 from "./assets/images/d10.jpeg"


function Doggie() {
    return (
      <div>
        <h1>Image-Gallery</h1>
        <div className="gallery">
          <div className="image">
            <img src={dog1} alt="dog" />
            <p>Jullie's Rabbit Ears</p>
          </div>
          <div className="image">
            <img src={dog2} alt="dog" />
            <p>The Smiley Kuttu</p>
          </div>
          <div className="image">
            <img src={dog3} alt="dog" />
            <p>The Innocent Look</p>
          </div>
          <div className="image">
            <img src={dog4} alt="dog" />
            <p>The Blacky Bunny</p>
          </div>
          <div className="image">
            <img src={dog5} alt="dog" />
            <p>Cutie Runny</p>
          </div>
          <div className="image">
            <img src={dog6} alt="dog" />
            <p>The Saint Doggy</p>
          </div>
          <div className="image">
            <img src={dog7} alt="dog" />
            <p>Whitey Doggy</p>
          </div>
          <div className="image">
            <img src={dog8} alt="dog" />
            <p>Mr.Rio</p>
          </div>
          <div className="image">
            <img src={dog9} alt="dog" />
            <p>Papy</p>
          </div>
          <div className="image">
            <img src={dog10} alt="dog" />
            <p>Maddy</p>
          </div>
        </div>
      </div>
    );
  }

export default Doggie