var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <hr/>
        <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
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
    rawMarkup: function() {
        var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
        return { __html: rawMarkup };
    },
    render: function(){
        return(
            <div className="comment">
                <h2 class="commentAuthor">
                {this.props.author}
                </h2>
                <div class="commentContent">
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
                </div>
            </div>
        )
    }
})


var data = [
  {id: 1, author: "Wellwind", text: "Hello React."},
  {id: 2, author: "Bill", text: "I'm Bill."}
];

ReactDOM.render(
  <CommentBox data={data}/>,
  document.getElementById('content')
);