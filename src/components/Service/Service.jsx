const Service=(props)=>{
    return(
        <>
          <select>
            <option>Excellent(20%){props.value}</option>
            <option>Good(10%)</option>
            <option>Bad(5%)</option>
        </select>
        </>
    )
}
export default Service;