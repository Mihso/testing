
import './item.css';

const Item = props => {

    const [name, type] = props.children;

    console.log(props);
  return (
    <div className="item">
        <div>{name}</div>
        <div>{type}</div>
    </div>
  );
}

export default Item;