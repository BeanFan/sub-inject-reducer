import React from "react";


const HelloSynce = function(injectReducer){
    return React.lazy( ()=>import("./src/component/Hello").then((module)=>{     
            const reducer = require("./src/reducers/asyncReducerA");
            injectReducer("async", reducer.default);
            return module;
        })
    )
} 

export default HelloSynce;
 
