import React from 'react';
import { post } from 'axios';

class BookmarkAdd extends React.Component {
    constructor() {
        super();
        this.state = { title: '', category:'', notes:'', domain:'', url: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        post('/api/bookmarks', this.state)
            .then((response) => {
                this.props.history.push(`/bookmarks/`); // Goes to BookmarkList
                //this.props.history.push(`/bookmarks/${response.data._id}`); // Goes to BookmarkInfo 
            })
            .catch(error => console.log("error : ", error))
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleCancel() {
        this.props.history.push('/bookmarks') //Goes to BookmarkList
    }
    
    render() {
        return (
            <div>
                <h1>Crete Bookmark</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label htmlFor="titleLabell" className="col-sm-2 col-form-label text-left">Title</label>
                        <div className="col-sm-10">                        
                        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} className="form-control " id="titleLabell" placeholder="title" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="categoryLabell" className="col-sm-2 col-form-label text-left">Category</label>
                        <div className="col-sm-10">                        
                        <input type="text" name="category" value={this.state.category} onChange={this.handleChange} className="form-control " id="categoryLabell" placeholder="category" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="urlLabell" className="col-sm-2 col-form-label text-left">Url</label>
                        <div className="col-sm-10">                        
                        <input type="text" name="url" value={this.state.url} onChange={this.handleChange} className="form-control " id="urlLabell" placeholder="url" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="domainLabell" className="col-sm-2 col-form-label text-left">Domain</label>
                        <div className="col-sm-10">                        
                        <input type="text" name="domain" value={this.state.domain} onChange={this.handleChange} className="form-control " id="domainLabell" placeholder="domain" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="notesLabell" className="col-sm-2 col-form-label text-left">Note</label>
                        <div className="col-sm-10">                        
                        <textarea name="notes" rows="5" value={this.state.notes} onChange={this.handleChange} className="form-control " id="notesLabell" placeholder="notes" />
                        </div>
                    </div>
                    <div className="btn-group">
                        <button type="submit" className="btn btn-primary">Create</button>
                        <button type="button" onClick={this.handleCancel} className="btn btn-secondary">Cancel</button>
                    </div>
                </form>
            </div>
        )
    }// render end

} // Class End

export default BookmarkAdd