import { useState } from "react";
import styles from './TableForm.module.scss'
import {Button} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectedTable } from "../../redux/tableRedux";

const TableForm = () => {
    
    //Stores form submit data
    const [formInfo, setFormInfo] = useState(''); 

    const {id} = useParams();

    const table = useSelector(state => selectedTable({state, id}));
    const {bill, maxPeopleAmount, peopleAmount, status} = table[0];
    console.log(bill)

    console.log(id);
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(e);
        setFormInfo({
            status: e.target[0].value
        })
    }
    
    return (
        <form onSubmit={submitHandler}>

           <div className={styles.formType}>
                <label className={styles.label1}>Status</label>
                <select value={status} class={`form-select ${styles.select}`}>
                    <option value='Free'>Free</option>
                    <option value='Reserved'>Reserved</option>
                    <option value='Busy'>Busy</option>
                    <option value='Cleaning'>Cleaning</option>
                </select>
            </div> 
            <div className={styles.formType}>
                <label className={styles.label2}>People</label>
                <input value={peopleAmount} className={`form-control ${styles.input}`} type="text"></input>
                /
                <input value={maxPeopleAmount} className={`form-control ${styles.input}`} type="text"></input> 
            </div>
            <div className={styles.formType}>
                 <label className={styles.label3}>Bill</label>
                 <input value={bill} className={`form-control ${styles.input}`} type='text'></input>
            </div>
            <Button variant="primary">Submit</Button>
        </form>
    )
}

export default TableForm