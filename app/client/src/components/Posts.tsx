import React, {useState, useEffect} from 'react';
import Post from "./Post"
import '../css/App.css';

function Posts() {

  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    if (allArticles.length == 0) {
      fetch("/posts").then(res => res.json()).then(data => {
        setAllArticles(data)
      })
    }
  }, []);

  console.log(allArticles)

  console.log(allArticles.length)

  return (
    <div>
      <p>Articles</p>
      <div>{allArticles.map(function(item: any) {
        return <Post key={item.articleTitle} postData={item} />
      })}
      </div>
    </div>
  );
}

export default Posts;
