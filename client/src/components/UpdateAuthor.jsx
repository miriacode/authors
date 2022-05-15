import React, {useState, useEffect} from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const UpdateAuthor = () => {
    const {id} = useParams();
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [books, setBooks] = useState(false);
    const [articles, setArticles] = useState(false);
    const [graphicnovels, setGraphicNovels] = useState(false);
    const [tales, setTales] = useState(false);

    const [errors, setErrors] = useState({});
    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/"+id)
            .then(res => {
                setName(res.data.name);
                setImage(res.data.image);
                setBooks(res.data.books);
                setArticles(res.data.articles);
                setGraphicNovels(res.data.graphicnovels);
                setTales(res.data.tales);
            })
            .catch(err => history.push("/error"));
    }, [id, history])

    const updateAuthor = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/autores/"+id, {
            name: name,
            image: image,
            books: books,
            articles: articles,
            graphicnovels: graphicnovels,
            tales: tales
        })
            .then(res => history.push("/"))
            .catch(error => setErrors(error.response.data.errors))
    }

    return (
        <div>
            <h1>Edith Author</h1>
            <form onSubmit={updateAuthor}>
                <div className="form-group">
                    <label htmlFor="nombre">Name:</label>
                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                    {errors.name ? <span className="text-danger">{errors.name.message}</span> : null}
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="image">URL Image:</label>
                            <input type="text" id="image" name="image" value={image} onChange={(e) => setImage(e.target.value)} className="form-control" />
                        </div>
                        <div className="col-6">
                            <img src={image} className="img-fluid" alt={"img-"+name}/>
                        </div>
                    </div>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="books" name="books" checked={books} onChange={(e) => setBooks(e.target.checked)} />
                    <label className="form-check-label" htmlFor="books">Author of books</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="articles" name="articles" checked={articles} onChange={(e) => setArticles(e.target.checked)} />
                    <label className="form-check-label" htmlFor="articles">Author of articles</label>
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

export default UpdateAuthor;