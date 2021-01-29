import React, {useState, useEffect} from 'react';
import Post from "./Post"
import '../css/App.css';
import { Container, Row, Col } from "react-bootstrap"
import "../css/Post.css"

function Posts() {

  //const [allArticles, setAllArticles] = useState([]);

/*  useEffect(() => {
    if (allArticles.length == 0) {
      fetch("/posts").then(res => res.json()).then(data => {
        setAllArticles(data)
      })
    }
  }, []); */

  const testData = [
    {
        article_author: "Sander Jyhne",
        article_claps: 628,
        article_date: "2021-01-17T06:15:23Z",
        article_readtime: "6",
        article_title: "Dette er en tittel",
        article_url: "google.com",
        author_url: "google.com",
    },
    {
        article_author: "Sander Jyhne",
        article_claps: 230,
        article_date: "2021-01-12T06:15:23Z",
        article_readtime: "12",
        article_title: "Dette er en enda en tittel for testing",
        article_url: "google.com",
        author_url: "google.com",
    },
    {
      article_author: "Sander Jyhne",
      article_claps: 230,
      article_date: "2021-01-12T06:15:23Z",
      article_readtime: "12",
      article_title: "Dette er en enda en tittel for testing",
      article_url: "google.com",
      author_url: "google.com",
    },
    {
      article_author: "Sander Jyhne",
      article_claps: 230,
      article_date: "2021-01-12T06:15:23Z",
      article_readtime: "12",
      article_title: "Dette er en enda en tittel for testing",
      article_url: "google.com",
      author_url: "google.com",
    },
    {
      article_author: "Sander Jyhne",
      article_claps: 2300,
      article_date: "2021-01-12T06:15:23Z",
      article_readtime: "12",
      article_title: "Dette er en enda en tittel for testing",
      article_url: "google.com",
      author_url: "google.com",
    },
  ]

  return (
    <div>
      <Container>
        <Row className="postsRow">
        {testData.map(function(item: any) {
          return <Col className="col-lg-4 d-flex align-items-stretch"><Post key={item.article_url} postData={item} /></Col>
        })}
        </Row>
      </Container>
    </div>
  );
}

export default Posts;
