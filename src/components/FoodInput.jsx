import styles from "./FoodInput.module.css";

const FoodInput = ({handleKeyDown}) => {
  return (
    <>
      <input
        classNameNameName={styles.foodInput}
        type="text"
        placeholder="Enter food item"
        onKeyDown={handleKeyDown}
        
      />
    </>
  );
};
export default FoodInput;
