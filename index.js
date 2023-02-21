import asyncReducerA from '@/reducers/asyncReducerA' ;
import Hello from './src/component/Hello';


export default function HelloSync(injectReducer){
    injectReducer("asyncReducerA",asyncReducerA);
    return Hello;
}