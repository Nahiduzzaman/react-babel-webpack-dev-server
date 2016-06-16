import React from 'react';
import {Comment} from './Comment.jsx';

/*
If you want to import this class as "import CommentList from 'path.jsx'"
then you need to export this class as default like "export default class ..."
otherwise you need to import this class as "import {CommentList} from 'path.jsx'"
*/

export class CommentList extends React.Component {
  render() {
    var commentNodes = this.props.data.map(function(comment){
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      )
    });

    return (
      <div className="CommentList">
        {commentNodes}
      </div>
    )
  }
}
