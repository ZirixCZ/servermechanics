import styles from "./HumorBox.module.css";

const HumorBox = (props) => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h2>{props.properties.setup}</h2>
                <h3>{props.properties.punchline}</h3>
            </div>
        </div>
    )

}

export default HumorBox;