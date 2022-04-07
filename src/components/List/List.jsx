import styles from './List.module.css'
const List=({list})=>{

const listitems=list.map((item,index)=>{
        return(
           <li key={index}>{item} offering a tip of 100 rupees</li> 
        )

    })
    return(
        <div className={styles.list}>
        <ul>
         {listitems}
        </ul>
        </div>
   );
};

export default List;