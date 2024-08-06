import styles from "./Heading.module.css"
const Heading=({actual})=>{
  return  <input className={styles.text} value={actual} type="text" readOnly />
}
export default Heading;