import styles from "./Container.module.css";

const Container = (props)=>{
    return <div classNameNameName={styles.container}>{props.children}</div>
}
export default Container;