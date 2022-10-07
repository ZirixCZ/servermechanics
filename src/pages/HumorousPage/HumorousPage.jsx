import HumorBox from "../../components/HumorBox/HumorBox";
import {rProgrammerHumor} from "../../constants";
import styles from "./HumorousPage.module.css";

const HumorousPage = () => {

    return (
        <div className={styles.container}>
            {rProgrammerHumor.map(obj => {
                return <HumorBox properties={obj} />
            })}
        </div>
    )

}

export default HumorousPage;