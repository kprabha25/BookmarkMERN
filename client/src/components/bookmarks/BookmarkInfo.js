import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { functions } from "lodash";

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
          } catch(error) {
            console.error(error);
          }        
    }

    return(
    <div>
        <h2>{bookmark.title}</h2>
        <small>_id: {article._id}</small>
        <p>{article.url}</p>
        <div className="btn-group">
            <Link to={`/bookmarks/${bookmark._id}/edit`} className="btn btn-primary">Edit</Link>
            <button onClick={handleDelete} className="btn btn-danger">Delete</button>
            <Link to="/bookmarks" className="btn btn-secondary">Close</Link>
        </div>
    </div>
    )

} // Main End

export default BookmarkInfo;