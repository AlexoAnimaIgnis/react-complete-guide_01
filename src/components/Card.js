import './Card.css';

function Card(props) {
    const classes = 'card ' + props.className;
    // for wrapper components, 'children' is a reserved word which every components receive
    return <div className={classes}>{props.children}</div>
}

export default Card;