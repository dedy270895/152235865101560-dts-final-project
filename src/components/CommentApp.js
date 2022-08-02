import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import './CommentApp.css';

export default class CommentApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }
    componentWillMount() {
        this._loadComments();
    }
    _loadComments() {
        this.setState({
            comments: JSON.parse(localStorage.getItem('comments')) || []
        })
    }
    _saveComments({ userName, content, createTime } = {}) {
        const { comments } = this.state;
        comments.push({
            userName,
            content,
            createTime
        });
        this.setState({
            comments
        });
        localStorage.setItem('comments', JSON.stringify(comments));
    }
    handleSubmit(comment) {
        this._saveComments(comment)
    }
    render() {
        const { comments } = this.state;

        return (
            <div className='wrapper'>
                <CommentInput onSubmit={ this.handleSubmit.bind(this) }/>
                <CommentList comments={ comments } />
            </div>
        )
    }
}