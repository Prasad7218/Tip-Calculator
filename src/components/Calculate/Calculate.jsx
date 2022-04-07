import Header from "../Header/Header";
import Input from "../Input/Input";
import Output from "../Output/Output";
import Footer from "../Footer/Footer";
import Service from "../Service/Service";
import Customer from "../Customer/Customer";
import Button from "../Button/Button";
import List from "../List/List";
import Button1 from "../Button1/Button1";
import { useState } from "react";

const Calculate=()=>{
    const[inputText,setInputText]=useState('');
    const[list,setList]=useState([])
    const[service,setService]=useState('');
    const[inputAmt,setInputAmt]=useState('');
    const[output,setOutput]=useState('')
    const changeHandler=(event)=>{
        const value=event.target.value;
        setInputAmt(value);
    }

    const changeHandler1 =(event)=>{
        const value=event.target.value;
        setInputText(value)
        }

    const btnClickHandler=()=>{
        console.log('click');
        const items=[...list];
        items.push(inputText);
        setList(items);
    }    
    return(
        <>
        <Header/>

        <Input
        value={inputAmt}
        changeHandler={changeHandler}/>

        <Service 
        value={service}/>

        <Customer
        value={inputText} 
        changeHandler1={changeHandler1}/>

        <Button 
        btnlabel="Add Customer"
        btnClickHandler={btnClickHandler}/>

        <List list={list}/>
        
        <Button1
        btnlabel="Calculate Tip"
        btnClickHandler1={(event)=>{
            const value=event.target.value
            console.log(value)
            const tip=inputAmt*0.2;
            setOutput(tip);
            
        }}
        />

        <Output msg={output}/>

        <Footer/>
        </>

    )
}

export default Calculate;