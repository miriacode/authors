import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <h4>We couldn't find the author. Try to add it.</h4>
            <Link to="/new" className="btn btn-success">Create a new author</Link>
        </div>

    )
}

export default Error;