import React from 'react';
import { Card, Col, Button, Table, ListGroup, ListGroupItem } from "react-bootstrap"
import "../css/Post.css"

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
    <Card className="postCard bg-light">
        <Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem className="bg-light">
                    <span className="blackLink postTextTitle">{postData.postData.article_title}</span>
                    <hr></hr>
                    <span className="blackLink postTextAuthor">{postData.postData.article_author}</span>
                </ListGroupItem>
                    <Table className="postText">
                        <tbody>
                            <tr>
                                <th>{postData.postData.article_claps} claps</th>
                                <th>{postData.postData.article_readtime} minutes</th>
                                <th>{postData.postData.article_date.split("T")[0]}</th>
                            </tr>
                        </tbody>
                    </Table>
                    <Table className="postText">
                        <tbody>
                            <tr>
                                <th><a className="blackLink" href={postData.postData.article_url}>Go To Article</a></th>
                                <th><a className="blackLink" href={postData.postData.author_url}>Go To Author</a></th>
                            </tr>
                        </tbody>
                    </Table>
            </ListGroup>
        </Card.Body>
    </Card>
  );
}

export default Post;
