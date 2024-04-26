import { useEffect, useState } from "react";
import styles from './TableForm.module.scss'
import {Button} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectedTable } from "../../redux/tableRedux";
import { useDispatch } from "react-redux";
import { fetchingTables } from "../../redux/tableRedux";
import { fetchingTablesPOST } from "../../redux/tableRedux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const TableForm = () => {

    const disptach = useDispatch();
    const navigate = useNavigate();

    //Sends fetch request
    useEffect(() => {
        disptach(fetchingTables());
    }, [disptach]) //Stops from erros / get's triggered once

    //Stores form submit data
    const [formInfo, setFormInfo] = useState(''); 
  
    const submitHandler = (e) => {
        e.preventDefault();
        disptach(fetchingTablesPOST({
            id, 
            status: e.target.selectStatus.value,
            peopleAmount: e.target.peopleAmount.value, 
            maxPeopleAmount: e.target.maxPeopleAmount.value, 
            bill: e.target.bill.value
        }));
        setFormInfo({
            id, 
            status: e.target.selectStatus.value,
            peopleAmount: e.target.peopleAmount.value, 
            maxPeopleAmount: e.target.maxPeopleAmount.value, 
            bill: e.target.bill.value
        });
        navigate("/")
    }

     //Current table id
     const {id} = useParams();
     //Getting table information from store
     const table = useSelector(state => selectedTable({state, id}));
     const { bill, status, peopleAmount, maxPeopleAmount } = table[0] || formInfo;

    return (
        <form onSubmit={submitHandler}>
           <div className={styles.formType}>
            <label className={styles.label1}>Status</label>
            {status && (
                 <select name="selectStatus" defaultValue={status} class={`form-select ${styles.select}`}>
                        <option value='Free'>Free</option>
                        <option value='Reserved'>Reserved</option>
                        <option value='Busy'>Busy</option>
                        <option value='Cleaning'>Cleaning</option>
                </select>
            )}
            </div> 
            <div className={styles.formType}>
                <label className={styles.label2}>People</label>
                <input name="peopleAmount" defaultValue={peopleAmount} className={`form-control ${styles.input}`} type="text"></input>
                /
                <input name="maxPeopleAmount" defaultValue={maxPeopleAmount} className={`form-control ${styles.input}`} type="text"></input> 
            </div>
            <div className={styles.formType}>
                 <label className={styles.label3}>Bill  $</label>
                 <input name='bill' defaultValue={bill} className={`form-control ${styles.input}`} type='text'></input>
            </div>
            <button>Submit</button>
        </form>
    )
}

export default TableForm