import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../app.css";

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(function() {
    async function getArticles() {
      try {
        const response = await axios.get("/api/articles");
        setArticles(response.data);
      } catch (error) {
        console.log("error", error);
      }
    }
    getArticles();
  }, []);

  return (
    <div>
      <h4>
        What do you need to do?
        <Link
          to="/articles/new"
          className="btn btn-success add-btn float-right"
        >
          Add todo
        </Link>
      </h4>
      <hr />
      {articles.map(article => {
        return (
          <div key={article._id}>
            <h4 className="todo-item-links">
              <Link to={`/articles/${article._id}`}>{article.title}</Link>
            </h4>

            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default ArticleList;
