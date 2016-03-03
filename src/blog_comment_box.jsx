var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <hr/>
        <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        <Comment author="Mike">Good using React.</Comment>
        <Comment author="Bill">I'm <b>Bill</b>.</Comment>
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

var Comment = React.createClass({
    render: function(){
        return(
            <div className="comment">
                <h2 class="commentAuthor">
                {this.props.author}
                </h2>
                <div class="commentContent">
                {marked(this.props.children.toString())}
                </div>
            </div>
        )
    }
})

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);