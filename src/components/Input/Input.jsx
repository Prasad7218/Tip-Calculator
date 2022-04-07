const Input =({inputAmt})=>{
    return(
        <>
        <input 
          value={inputAmt}
          type="number"
          placeholder="billamt"
          onChange={props.changeHandler}/><br/>
        </>
    )
}

export default Input;