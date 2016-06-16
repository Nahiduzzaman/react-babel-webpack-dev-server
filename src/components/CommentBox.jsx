import React from 'react';
import ReactDOM from 'react-dom';
import {CommentList} from './CommentList.jsx';
import {CommentForm} from './CommentForm.jsx';

export default class CommentBox extends React.Component {
  render() {
    return (
      <div className="CommentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data.comments} />
        <CommentForm />
      </div>
    )
  }
}
