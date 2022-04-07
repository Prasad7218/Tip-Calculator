const Service=(props)=>{
    return(
        <>
          <select onSelect={props.value}>
            <option>Excellent(20%)</option>
            <option>Good(10%)</option>
            <option>Bad(5%)</option>
        </select>
        </>
    )
}
export default Service;