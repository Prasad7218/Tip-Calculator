const Customer=(props)=>{
    return(
        <>
        <input 
        value={props.value}
        type="text" 
        placeholder="custName" 
        onChange={props.changeHandler1}/>
        </>
    )
}
export default Customer;