import { Component } from "react";
import "./ArticleStyles.css"

class ArticleData extends Component {
  render() {
    return(
      <div className={this.props.className}>
        <div className="project-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img src={this.props.img1} alt="exImg"/>
          <img src={this.props.img2} alt="exImg"/>
        </div>
      </div>
    );
  }
}

export default ArticleData;