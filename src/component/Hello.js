import { connect } from 'react-redux';
import { hello,hello1 } from '../reducers/asyncReducerA';
import React,{useRef}from "react";

const Hello = (props)=>{
    console.log(props.name);
    const inputRef= useRef(null);
    const helloName = ()=>{
        props.hello(inputRef.current.value);
    }
    return<><div>
    <input ref={inputRef} type={"text"} size="medium" width={20}></input>
    <button onClick={helloName}>bean2</button>
    <button onClick={()=>props.hello1(Math.random())}>Jimmy11</button>
    </div>
      <div>hello1 {props.async.name}</div></>

}


const mapStateToProps = (state)=>{
    return state;
    
}


const actionCreators = {
    hello,
    hello1
}

export default connect(mapStateToProps,actionCreators)(Hello);