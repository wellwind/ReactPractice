var CommentBox = React.createClass({
  displayName: "CommentBox",

  render: function () {
    return React.createElement(
      "div",
      { className: "commentBox" },
      React.createElement(
        "h1",
        null,
        "Comments"
      ),
      React.createElement(CommentList, null),
      React.createElement(CommentForm, null)
    );
  }
});

var CommentList = React.createClass({
  displayName: "CommentList",

  render: function () {
    return React.createElement(
      "div",
      { className: "commentList" },
      React.createElement(
        Comment,
        { author: "Mike" },
        "Good using React."
      ),
      React.createElement(
        Comment,
        { author: "Bill" },
        "I'm Bill."
      )
    );
  }
});

var CommentForm = React.createClass({
  displayName: "CommentForm",

  render: function () {
    return React.createElement(
      "div",
      { className: "commentForm" },
      "Hello, world! I am a CommentForm."
    );
  }
});

var Comment = React.createClass({
  displayName: "Comment",

  render: function () {
    return React.createElement(
      "div",
      { className: "comment" },
      React.createElement(
        "h2",
        { "class": "commentAuthor" },
        this.props.author
      ),
      React.createElement(
        "div",
        { "class": "commentContent" },
        this.props.children
      )
    );
  }
});

ReactDOM.render(React.createElement(CommentBox, null), document.getElementById('content'));