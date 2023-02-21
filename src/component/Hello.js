import { connect } from 'react-redux';
import { actions } from '../reducers/asyncReducerA';
import React from "react";
function Hello(props={}){
    return   <div>hello {props.name}</div>
}


const mapStateToProps = (state){
    return state;
}


const mapAction = actions;

export default connect(mapStateToProps,mapActions)(Hello);