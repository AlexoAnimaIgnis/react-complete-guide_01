import './ExpenseItem.css'; // tells built process that css file should be considered

/**
 * A component in react is just a javascript function which return an HTML code (JSx)
 * @returns 
 */
function ExpenseItem() {
    // react rule: you must only have one root element per JSX code snippet
    return (
        <div className='expense-item'>
            <div>April 11, 2022</div>
            <div className='expense-item__description'>
                <h2>Car Insurance</h2>
                <div className='expense-item__price'>$2900.00</div>
            </div>
        </div>
    );
}

/**
 * add the following line, to be able to use the component. otherwise, this will
 * only be usable in this file.
 */
export default ExpenseItem;