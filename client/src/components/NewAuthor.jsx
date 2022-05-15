import React, {useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const NewAuthor = () => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [books, setBooks] = useState(false);
    const [articles, setArticles] = useState(false);
    const [graphicnovels, setGraphicNovels] = useState(false);
    const [tales, setTales] = useState(false);


    const [errors, setErrors] = useState({});
    const history = useHistory();

    const saveAuthor = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors",{
            name: name,
            image: image,
            books: books,
            articles: articles,
            graphicnovels: graphicnovels,
            tales: tales
        })
            .then(res => history.push("/"))
            .catch(error => setErrors(error.response.data.errors));
    }

    return (
        <div>
            <h1>New Author</h1>
            <form onSubmit={saveAuthor}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                    {errors.name ? <span className="text-danger">{errors.name.message}</span> : null}
                </div>
                <div className="form-group">
                    <label htmlFor="image">URL Image:</label>
                    <input type="text" id="image" name="image" value={image} onChange={(e) => setImage(e.target.value)} className="form-control" />
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="books" name="books" checked={books} onChange={(e) => setBooks(e.target.checked)} />
                    <label className="form-check-label" htmlFor="books">Author of Books</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="articles" name="articles" checked={articles} onChange={(e) => setArticles(e.target.checked)} />
                    <label className="form-check-label" htmlFor="articles">Author of Articles</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="graphicnovels" name="graphicnovels" checked={graphicnovels} onChange={(e) => setGraphicNovels(e.target.checked)} />
                    <label className="form-check-label" htmlFor="graphicnovels">Author of Graphic Novels</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="tales" name="tales" checked={tales} onChange={(e) => setTales(e.target.checked)} />
                    <label className="form-check-label" htmlFor="tales">Author of Tales</label>
                </div>
                <input type="submit" value="Save" className="btn btn-success" />
            </form>
        </div>

    )
}

export default NewAuthor;