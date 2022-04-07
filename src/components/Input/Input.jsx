const Input =(props)=>{
    return(
        <>
        <input 
          value={props.value}
          type="number"
          placeholder="billamt"
          onChange={props.changeHandler}/><br/>
        </>
    )
}

export default Input;