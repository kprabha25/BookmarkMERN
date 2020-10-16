import React from 'react';
import { post } from 'axios';

class BookmarkAdd extends React.Component {
    constructor() {
        super();
        this.state = { title: '', url: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        post('/api/bookmarks', this.state)
            .then((response) => {
                this.props.history.push(`/bookmarks/${response.data._id}`);
            })
            .catch(error => console.log("error : ", error))
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleCancel() {
        this.props.history.push('/bookmarks')
    }

    render() {
        return (
            <div>
                <h1>Crete Bookmark</h1>
                <hr />
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Url</label>
                        <textarea name="url" rows="5" value={this.state.url} onChange={this.handleChange} className="form-control" />
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