import React from 'react';

/*
If you want to import this class as "import CommentList from 'path.jsx'"
then you need to export this class as default like "export default class ..."
otherwise you need to import this class as "import {CommentList} from 'path.jsx'"
*/

export class CommentForm extends React.Component {
  render() {
    return (
      <div className="CommentForm">
        Comment Form
      </div>
    )
  }
}
