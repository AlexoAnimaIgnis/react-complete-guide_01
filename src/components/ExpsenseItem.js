import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css'; // tells built process that css file should be considered


/**
 * A component in react is just a javascript function which return an HTML code (JSx)
 * @param {*} props one object which holds all the received attribute (we can get key-value pairs)
 * @returns 
 */
function ExpenseItem(props) {

    // react rule: you must only have one root element per JSX code snippet
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </Card>
    );
}

/**
 * add the following line, to be able to use the component. otherwise, this will
 * only be usable in this file.
 */
export default ExpenseItem;