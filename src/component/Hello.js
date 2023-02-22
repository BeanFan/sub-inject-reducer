import { connect } from 'react-redux';
import { hello,hello1 } from '../reducers/asyncReducerA';
import React from "react";

const Hello = (props)=>{
    console.log(props);
    return  <div>222</div>
}


const mapStateToProps = (state)=>{
    return state;
    
}


const actionCreators = {
    hello,
    hello1
}

export default connect(mapStateToProps,actionCreators)(Hello);