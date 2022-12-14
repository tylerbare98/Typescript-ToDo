import {useState} from 'react';
//import todo from '../models/todo'
import styles from './AddToDo.module.css'
import {useDispatch} from 'react-redux'
import {v4 as uuidv4} from 'uuid'

const AddToDo: React.FC<{}> = (props) =>
{
    //state
    const [input, setInput] = useState(""); 
    const dispatch = useDispatch();

    //handler functions
    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        var id = uuidv4();
        setInput("");
        dispatch({
            type: 'AddToDo',
            label: input,
            id: id,
            isChecked: false   
        });
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }
    
    //return
    return(
        <form onSubmit={submitHandler} className={styles.container}>
            <div className={styles.border}>
                <input className={styles.inputField} onChange={changeHandler} type="text" placeholder="Create a new todo..." value={input}/ >
            </div>
            <input type="submit" value="Submit" className={styles.hideSubmit} />
        </form> 
    )
}

export default AddToDo;