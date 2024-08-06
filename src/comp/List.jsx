import styles from "./List.module.css"
function List({value,method}){
    return <div className={styles.itemsContainer}>
        {value.map((item)=><button onClick={()=>method(item)}  className={styles.btn}>{item}</button>)}
  </div>
}
export default List;