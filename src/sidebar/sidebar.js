import "./sidebar.css";

const Sidebar = props => {
    const message = props.children;
    return(
        <div className="sidebar">
            <div>{message}</div>
            <div></div>
        </div>
    );
}

export default Sidebar;