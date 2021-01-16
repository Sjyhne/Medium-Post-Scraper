import React from 'react';
import { Card } from "react-bootstrap"

interface PostProps {
    postData: {
        article_author: string,
        article_claps: number,
        article_date: string,
        article_readtime: string,
        article_title: string,
        article_url: string,
        author_url: string,
    }
}

function Post(postData: PostProps) {

  console.log(postData)

  return (
    <Card>
        <Card.Body>
            <Card.Title><a href={postData.postData.article_url}>{postData.postData.article_title}</a></Card.Title>
            <Card.Text>The article has {postData.postData.article_claps} and is written by <a href={postData.postData.author_url}>{postData.postData.article_author}</a></Card.Text>
        </Card.Body>
    </Card>
  );
}

export default Post;
