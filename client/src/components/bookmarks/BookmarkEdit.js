import React from 'react';
import { get, patch } from 'axios';

class BookmarkEdit extends React.Component{
    constructor(){
        super();
        this.state = {title: '', url: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentDidMount(){
        get(`/api/bookmarks/${this.props.match.params._id}`)
            .then((response)=>{ this.setState(response.data)})
            .catch(error => console.log("error : ", error))
    }

    handleSubmit(event){
        event.preventDefault();
        patch(`/api/bookmarks/${this.state._id}`, this.state)
        .then(()=>{
            this.props.history.push(`/bookmarks/${this.state._id}`);
        })
        .catch(error => console.log("error : ", error))
    }

    handleCancel(event){
        this.props.history.push(`/boomarks/${this.state._id}`);
    }

    render(){
        return(
            <div>
                <h1>Edit {this.state.title}</h1>
                <hr/>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div className="form-group">
                            <label>Title</label>
                            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Title</label>
                            <textarea name="url" rows="5" value={this.state.url} onChange={this.handleChange} className="form-control" />                            
                        </div>
                        <div className="btn-group">
                            <button type="submit" className="btn btn-primary">Update</button>
                            <button type="button" onClick={this.handleCancel} className="btn btn-secondary">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default BookmarkEdit;