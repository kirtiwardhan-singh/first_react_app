import styles from './Item.module.css';

const Item=({foodItem,bought,handleBuyButton})=>{

  const handleBuyButtonClicked=(event)=>{
    console.log(event)
  console.log(` ${foodItem} being bought`)}


    return <>
    <li  classNameNameName={`${styles["kw-item"]} list-group-item ${bought&& "active"}`}>
            <span classNameNameName={styles["kw-span"] }>{foodItem}</span>
            <button classNameNameName={`${styles.button} btn btn-info`} onClick={handleBuyButton}>Buy</button>
          </li>
    </>
}

export default Item;