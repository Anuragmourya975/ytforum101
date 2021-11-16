import React, { Component } from "react";

export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.commentBox = React.createRef();
  }

  componentDidMount() {
    let scriptEl = document.createElement("script");

    scriptEl.setAttribute("src", "https://utteranc.es/client.js");
    scriptEl.setAttribute("crossorigin", "anonymous");
    scriptEl.setAttribute("async", true);
    scriptEl.setAttribute("repo", "Anuragmourya975/ytforum101");
    scriptEl.setAttribute("issue-term", "url");
    scriptEl.setAttribute("theme", "github-light");
    this.commentBox.current.appendChild(scriptEl);
  }

  render() {
    return (
      <div style={{ width: "100%", marginTop: "50px" }} id="comments">
        <div ref={this.commentBox}></div>
      </div>
    );
  }
}
