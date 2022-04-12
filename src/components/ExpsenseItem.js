import './ExpenseItem.css'; // tells built process that css file should be considered

/**
 * A component in react is just a javascript function which return an HTML code (JSx)
 * @returns 
 */
function ExpenseItem() {

    const expenseDate = new Date(2022, 4, 12);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 2000;
    // react rule: you must only have one root element per JSX code snippet
    return (
        <div className='expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
        </div>
    );
}

/**
 * add the following line, to be able to use the component. otherwise, this will
 * only be usable in this file.
 */
export default ExpenseItem;