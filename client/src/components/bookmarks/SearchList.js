import React, { useState, useEffect } from 'react';
import axios, { post } from 'axios'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";


function SearchList(props) {
    const [bookmarks, setBookmarks] = useState([])
    const { register, handleSubmit, errors } = useForm();


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

    const onSubmit = data => {
        async function getBookmarks() {
            try {
                const response = await post('/api/bookmarks/search', data)
                setBookmarks(response.data);
            } catch (error) {
                console.log('error : ', error)
            }
        }
        getBookmarks();
    };

    return (
        <div>
               <fieldset>     
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group row">
                    {/* <label htmlFor="searchLabell" className="col-sm-2 col-form-label text-left">Search</label> */}
                    <div className="col-sm-6">                        
                    <input type="text" name="search" ref={register({ required: true, maxLength: 30 })} className="form-control " id="searchLabell" placeholder="Search" />
                    </div>
                    <div className="btn-group col-sm-2">
                    <button type="submit" className="btn btn-primary">Search</button>                    
                </div>
                </div>
                
            </form>
            </fieldset>   
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
                                        <th scope="row"> {index = index + 1} </th>
                                        <td><Link to={`/bookmarks/${bookmark._id}`} >{bookmark.title}</Link></td>
                                        <td>{bookmark.category}</td>
                                        <td>{bookmark.domain}</td>
                                        <td><a href={bookmark.url} target="_blank" rel="noopener noreferrer">{bookmark.url}</a></td>
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

export default SearchList