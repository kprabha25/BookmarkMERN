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
            <div className="table-responsive">
                <table className="table table-bordered ">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Category</th>
                            <th scope="col">Domain</th>
                            <th scope="col">Url</th>
                        </tr>
                    </thead>
                    <tbody className="text-left">
                        {
                            bookmarks.map((bookmark, index) => {
                                return (
                                    <tr key={bookmark._id}>
                                        <th scope="row"> { index = index + 1 } </th>
                                        <td><Link to={`/bookmarks/${bookmark._id}`} >{bookmark.title}</Link></td>
                                        <td>{bookmark.category}</td>
                                        <td>{bookmark.domain}</td>
                                        <td><a href={bookmark.url} target="_blank"  rel="noopener noreferrer">{bookmark.url}</a></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
} //Main end

export default BookmarkList