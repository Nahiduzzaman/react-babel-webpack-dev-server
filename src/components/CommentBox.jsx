import React from 'react';
import ReactDOM from 'react-dom';
import {CommentList} from './CommentList.jsx';
import {CommentForm} from './CommentForm.jsx';

class CommentBox extends React.Component {
  render() {
    return (
      <div className="CommentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    )
  }
}

ReactDOM.render(<CommentBox />, document.getElementById('react-main-component'));
