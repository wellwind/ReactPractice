var CommentBox = React.createClass({
  displayName: "CommentBox",

  loadCommentsFromServer: function () {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ data: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleCommentSubmit: function (comment) {
    this.state.data.push({
      id: this.state.data.length + 1,
      author: comment.author,
      text: comment.text });
    this.setState({ data: this.state.data });
    // ajax call...
  },
  getInitialState: function () {
    return { data: [] };
  },
  componentDidMount: function () {
    this.loadCommentsFromServer();
    // setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function () {
    return React.createElement(
      "div",
      { className: "commentBox" },
      React.createElement(
        "h1",
        null,
        "Comments"
      ),
      React.createElement(CommentList, { data: this.state.data }),
      React.createElement("hr", null),
      React.createElement(CommentForm, { onCommentSubmit: this.handleCommentSubmit })
    );
  }
});

var CommentList = React.createClass({
  displayName: "CommentList",

  render: function () {
    var commentNodes = this.props.data.map(function (comment) {
      return React.createElement(
        Comment,
        { author: comment.author, key: comment.id },
        comment.text
      );
    });
    return React.createElement(
      "div",
      { className: "commentList" },
      commentNodes
    );
  }
});

var CommentForm = React.createClass({
  displayName: "CommentForm",

  getInitialState: function () {
    return { author: '', text: '' };
  },
  handleAuthorChange: function (e) {
    this.setState({ author: e.target.value });
  },
  handleTextChange: function (e) {
    this.setState({ text: e.target.value });
  },
  handleSubmit: function (e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    this.props.onCommentSubmit({ author: author, text: text });
    this.setState({ author: '', text: '' });
  },
  render: function () {
    return React.createElement(
      "div",
      { className: "commentForm" },
      React.createElement(
        "form",
        { className: "commentForm", onSubmit: this.handleSubmit },
        React.createElement("input", { type: "text", placeholder: "Your name", onChange: this.handleAuthorChange }),
        React.createElement("input", { type: "text", placeholder: "Say something...", onChange: this.handleTextChange }),
        React.createElement("input", { type: "submit", value: "Post" })
      )
    );
  }
});

var Comment = React.createClass({
  displayName: "Comment",

  rawMarkup: function () {
    var rawMarkup = marked(this.props.children.toString(), { sanitize: true });
    return { __html: rawMarkup };
  },
  render: function () {
    return React.createElement(
      "div",
      { className: "comment" },
      React.createElement(
        "h2",
        { className: "commentAuthor" },
        this.props.author
      ),
      React.createElement(
        "div",
        { className: "commentContent" },
        React.createElement("span", { dangerouslySetInnerHTML: this.rawMarkup() })
      )
    );
  }
});

ReactDOM.render(React.createElement(CommentBox, { url: "/api/comments.json", pollInterval: 2000 }), document.getElementById('content'));