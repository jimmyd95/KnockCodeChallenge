import React from 'react';
import b1 from "../images/blend_icon/Apex.svg";
import b2 from "../images/blend_icon/Canopy.svg";
import b3 from "../images/blend_icon/Coastal.svg";
import b4 from "../images/blend_icon/Howler.svg";
import b5 from "../images/blend_icon/Restful.svg";

export const cards = [
  {
      content: (
          <div className="card-content">
            <img src={b1} alt="Background" className="card-bg" />
            <div className="card-top-section">
                <h2>Hand selected</h2>
                <span>●</span>
            </div>
            <div className="card-bottom-section">
                <h2>Hand selected</h2>
                <span>●</span>
            </div>
          </div>
      )
  },
  {
      content: (
          <div className="card-content">
              <div className="card-title">
                  <h2>Ethically sourced</h2>
                  <span>●</span>
              </div>
              <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                  sed diam voluptua. 
              </p>
          </div>
      )
  },
  {
      content: (
          <div className="card-content">
              <div className="card-title">
                  <h2>Locally roasted</h2>
                  <span>●</span>
              </div>
              <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                  sed diam voluptua. 
              </p>
          </div>
      )
  },
  {
      content: (
          <div className="card-content">
              <div className="card-title">
                  <h2>Small batched</h2>
                  <span>●</span>
              </div>
              <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                  sed diam voluptua. 
              </p>
          </div>
      )
  },
]