import React from 'react';
import { Card, Col, Button, Table, ListGroup, ListGroupItem } from "react-bootstrap"
import "../css/Post.css"
import { HeartFill, Stopwatch } from "react-bootstrap-icons";

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

  var articleClaps = postData.postData.article_claps.toString()

  if (postData.postData.article_claps >= 1000) {
      var tempClaps = Math.round(postData.postData.article_claps/1000 * 1000) / 1000
      articleClaps = tempClaps.toString() + "K"
  }

  return (
    <Card className="postCard bg-light">
        <Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem className="bg-light custWrap" data-toggle="tooltip" title={postData.postData.article_title}>
                    <div className="blackLink postTextTitle">{postData.postData.article_title}</div>
                </ListGroupItem>
                <ListGroupItem className="bg-light">
                    <div className="blackLink postTextAuthor">{postData.postData.article_author}</div>
                </ListGroupItem>
                    <Table className="postText">
                        <tbody>
                            <tr>
                                <th>{articleClaps} <HeartFill size={14}/></th>
                                <th>{postData.postData.article_readtime} <Stopwatch size={14}/></th>
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
