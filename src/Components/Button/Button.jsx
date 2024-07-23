import React from "react";
import './index'
import './style.css'
function Button() {
  return (
    <div className="container relative">
      <button className="button dark:bg-white text-black bg-secondary w-full rounded-md absolute
      -bottom-11 left-0 py-1 hover:bg-">Add to cart</button>
    </div>
  //   <div class="container">
  //   <div class="center">
  //     <button class="btn">
  //       <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
  //         <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
  //         <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
  //       </svg>
  //       <span>HOVER ME</span>
  //     </button>
  //   </div>
  // </div>
  );
}

export default Button;
