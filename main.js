import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './src/components/CommentBox.jsx';
import Comments from './src/data/comments.json';

ReactDOM.render(<CommentBox data={Comments}/>, document.getElementById('react-main-component'));
