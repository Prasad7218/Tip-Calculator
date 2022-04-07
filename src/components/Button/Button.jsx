const Button=({btnlabel,btnClickHandler})=>{
    return(
        <>
        <button 
        onClick={btnClickHandler}>{btnlabel}
        </button>
        </>
    )
}
export default Button;