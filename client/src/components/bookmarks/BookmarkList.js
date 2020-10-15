import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

function BookmarkList() {
    const [bookmarks, setBookmarks] = useState([])

    useEffect(function () {
        async function getBookmarks() {
            try {
                const response = await axios.get('/api/bookmarks')
                setBookmarks(response.data);
            } catch (error) {
                console.log('error : ', error)
            }
        }
        getBookmarks();
    }, []); // effect end

    return (
        <div>
            <h2>Bookmarks
            <Link to="/bookmarks/new" className="btn btn-primary float-right" >Add Bookmark</Link>
            </h2>
            <hr />
            {
                bookmarks.map((bookmark) => {
                    return (
                        <div key={bookmark._id}>
                            <h4><Link to={`/bookmarks/${bookmark._id}`} >{bookmark.title}</Link></h4>
                            <small>_id: {bookmark._id}</small>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
} //Main end

export default BookmarkList