import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const AllAuthors = () => {

    const [authors, setAuthors] = useState([]);

    useEffect(() =>{
        axios.get("http://localhost:8000/api/authors")
            .then(res => setAuthors(res.data))
            .catch(error => console.log(error));
    }, [])

    const deleteAuthor = (idAutor) => {

        axios.delete("http://localhost:8000/api/authors/"+idAutor)
            .then(res => {
                let newList = authors.filter(autor => autor._id !== idAutor);
                setAuthors(newList);
            })
    }

    return (
        <div>
            <h1>Authors</h1>
            <Link to="/new" className="btn btn-success">New Author</Link>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Books</th>
                        <th>Articles</th>
                        <th>Graphic Novel</th>
                        <th>Tales</th>
                        <th>Created Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((author, index) => (
                            <tr key={index}>
                                <td>{author.name}</td>
                                <td><img className="img-fluid" src={author.image} alt={"img-"+author.name}/></td>
                                <td>
                                    { author.books ? <span className="glyphicon glyphicon-ok text-success"></span> : <span className="glyphicon glyphicon-remove text-danger"></span>}
                                </td>
                                <td>
                                    { author.articles ? <span className="glyphicon glyphicon-ok text-success"></span> : <span className="glyphicon glyphicon-remove text-danger"></span>}
                                </td>
                                <td>
                                    { author.graphicnovels ? <span className="glyphicon glyphicon-ok text-success"></span> : <span className="glyphicon glyphicon-remove text-danger"></span>}
                                </td>
                                <td>
                                    { author.tales ? <span className="glyphicon glyphicon-ok text-success"></span> : <span className="glyphicon glyphicon-remove text-danger"></span>}
                                </td>
                                <td>{ author.createdAt}</td>
                                <td>
                                    <Link to={`/author/edit/${author._id}`} className="btn btn-warning">Edit</Link>
                                    <button className="btn btn-danger" onClick={() => deleteAuthor(author._id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )

}

export default AllAuthors;