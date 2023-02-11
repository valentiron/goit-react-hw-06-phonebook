import { useDispatch } from "react-redux"
import { filteredContacts } from "../../redux/filterSlice";
import css from './Filter.module.css'

const Filter = () => {
    const dispatch = useDispatch();

    function onInputChange(event) {
        dispatch(filteredContacts(event.currentTarget.value));
    }

    return (
        <label className={css.form}>
            <span>Find contact</span>
            <input className={css.input} type="text" onChange={onInputChange} />
        </label>
    );
};

export default Filter;