// import React, {useContext, useState} from "react";
// import MyContext from "./MyContext.js";

// function Component2() {
// const context = useContext(MyContext);
// console.log(context);
//   return (
//   <div>Component2</div>
//   )
// }

// export default Component2;

import React, {useContext, useState} from "react";
import MyContext from "./MyContext.js";

function Component2() {
  return (
    <MyContext.Consumer>{
      (value555) => {
        console.log("Value = ", value555);
        return (
          <div>Component2</div>
        )
      }
    }
    </MyContext.Consumer>
  )
}

export default Component2;