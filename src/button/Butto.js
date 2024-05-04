import "./button.css";

function Butto(props) {

    const name = props.name;

    return(
        <div className="NavLi">
            {name}
        </div>
    );
}

export default Butto;