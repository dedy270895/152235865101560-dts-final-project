import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CommentInput extends Component {
    static propTypes = {
        onSubmit: PropTypes.func
    }
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            content: '',
            createTime: 0
        }
    }
    userNameChange(e) {
        this.setState({
            userName: e.target.value
        })
    }
    contentChange(e) {
        this.setState({
            content: e.target.value
        })
    }
    publish() {
        const { userName, content } = this.state;
        if(!userName || !content) {
            return alert('Username or content cannot be empty!');
        }
        if( this.props.onSubmit ) {
            this.props.onSubmit({
                userName,
                content,
                createTime: +new Date()
            });
        }
        this.setState({
            content: ''
        })
    }
    componentWillMount() {
        this._loadUserName();
    }
    _loadUserName() {
        this.setState({
            userName: localStorage.getItem('userName') || ''
        });
    }
    _saveUserName() {
        localStorage.setItem('userName', this.state.userName);
    }
    handleBlur() {
        this._saveUserName();
    }
    render() {
        const { userName, content } = this.state;
        
        return (
            <div className='comment-input'>
                <Input fieldName='Name' value={ userName } blur={ this.handleBlur.bind(this) } type='input' change={ this.userNameChange.bind(this) }/>
                <Input fieldName='Comment'  value={ content } type='textarea' change={ this.contentChange.bind(this) }/>
                <div className='comment-field-button'>
                    <button onClick={ this.publish.bind(this) }>Publish</button>
                </div>
            </div>
        )
    }
}

const Input = (props) => {
    const { fieldName, type, change, value, blur } = props
    return (
        <div className='comment-field'>
            <span className='comment-field-name'>{ fieldName }</span>
            <div className='comment-field-input'>
                { 
                    type === 'input' ? 
                    <input type='text' value={ value } name='userName' onChange={ change } onBlur={ blur } /> : 
                    <textarea name="content" value={ value } onChange={ change }/> 
                }
            </div>
        </div>
    )
}