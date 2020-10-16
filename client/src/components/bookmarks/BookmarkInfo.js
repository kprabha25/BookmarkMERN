import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

function BookmarkInfo(props) {
    const [bookmark, setBookmark] = useState({})

    useEffect(function () {
        async function getBookmark() {
            try {
                const response = await axios.get(`/api/bookmarks/${props.match.params._id}`);
                setBookmark(response.data);
            } catch (error) {
                console.log('error', error);
            }
        }
        getBookmark();
    }, [props]); // Effect End

    async function handleDelete() {
        try {
            await axios.delete(`/api/bookmarks/${props.match.params._id}`);
            props.history.push("/bookmarks");
        } catch (error) {
            console.error(error);
        }
    }

    return (        
        <div>
            <h3>Bookmark Info</h3>
            <fieldset disabled key={bookmark._id} className="text-left">
                <div className="form-group">
                    <label htmlFor="titleTextInput">Title</label>
                    <input type="text" id="titleTextInput" className="form-control" placeholder={bookmark.title} />
                </div>
                <div className="form-group">
                    <label htmlFor="categoryTextInput">Category</label>
                    <input type="text" id="categoryTextInput" className="form-control" placeholder={bookmark.category} />
                </div>                
                <div className="form-group">
                    <label htmlFor="urlTextInput">Url</label>
                    <input type="text" id="urlTextInput" className="form-control" placeholder={bookmark.url} />
                </div>
                <div className="form-group">
                    <label htmlFor="domainTextInput">Domain</label>
                    <input type="text" id="domainTextInput" className="form-control" placeholder={bookmark.domain} />
                </div>
                <div className="form-group">
                    <label htmlFor="urlTextInput">Note</label>
                    <textarea type="text" id="urlTextInput" className="form-control" placeholder={bookmark.notes} />
                </div>
            </fieldset>
            <div>
                <Link to={`/bookmarks/${bookmark._id}/edit`} className="btn btn-primary">Edit</Link>
                <button onClick={handleDelete} className="btn btn-danger">Delete</button>
                <Link to="/bookmarks" className="btn btn-secondary">Close</Link>
            </div>
        </div>
        )
} // Main End

export default BookmarkInfo;