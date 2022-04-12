import './ExpenseItem.css'; // tells built process that css file should be considered

/**
 * A component in react is just a javascript function which return an HTML code (JSx)
 * @param {*} props one object which holds all the received attribute (we can get key-value pairs)
 * @returns 
 */
function ExpenseItem(props) {
    // react rule: you must only have one root element per JSX code snippet
    return (
        <div className='expense-item'>
            <div>{props.date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    );
}

/**
 * add the following line, to be able to use the component. otherwise, this will
 * only be usable in this file.
 */
export default ExpenseItem;