import { Container } from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import styles from './Table.module.scss'
const Table = ({key, status}) => {

    
    return (
        <Container>
            <Row>
                <Col><li className={styles.gird} key={key}>{status}</li></Col>
                <Col><li className={styles.gird} key={key}>{status}</li></Col>
            </Row>
        </Container>
    )
}

export default Table;