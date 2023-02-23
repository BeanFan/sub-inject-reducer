import React from "react";


const HelloSynce = function(injectReducer){
    const Hello = require("./src/component/Hello");
    const reducer = require("./src/reducers/asyncReducerA");
    injectReducer("async", reducer.default);
    return Hello;
}
    

export default HelloSynce;
 
