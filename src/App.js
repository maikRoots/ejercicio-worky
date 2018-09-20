import React, { Component } from 'react';
import logo from './logoWorky.svg';
import './App.css';

// Default Article
import { articles } from './article.json';

// Components
import Editor from './components/Editor';

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles
    }
    this.handleAddArticle = this.handleAddArticle.bind(this);
  }

  removeArticle(index) {
    this.setState({
      articles: this.state.articles.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddArticle(article) {
    this.setState({
      articles: [...this.state.articles, article]
    })
  }

  render() {
    const articles = this.state.articles.map((article, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card card-shadow mt-4">
            <div className="card-title text-center">
              <h4>{article.titulo}</h4>
            </div>
            <div className="badge-center">
			  <span className="badge badge-pill text-center badge-autor ml-2">
                {article.autor}
              </span>
            </div>
            <hr></hr>
            <div className="card-body content-block">
              {article.descripcion}
            </div>
            <div className="card-footer text-center">
              <button
                className="btn btn-gray"
                onClick={this.removeArticle.bind(this, i)}>
                Eliminiar
              </button>
            </div>
          </div>
        </div>
      )
    });

    // RETURN THE COMPONENT
    return (
      <div className="App">

        <nav className="navbar navbar-blue">
          <a className="navbar-brand" href="/">
            Publicaciones
            <span className="badge badge-pill badge-light badge-gray ml-3">
              {this.state.articles.length}
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-5">

            <div className="col-md-4 text-center">
                <img src={logo} className="App-logo" alt="logo" />
              <Editor onAddArticle={this.handleAddArticle}></Editor>
            </div>

            <div className="col-md-8">
              <div className="row">
                {articles}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
