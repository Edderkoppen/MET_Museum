import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';
 import "../compoments.scss/Article.scss"

 export default function Article(){
  return (
    <CardDeck>
      <Card>

        <CardImg className="taille" src="https://previews.123rf.com/images/djvstock/djvstock1608/djvstock160807811/64099465-porter-kawaii-animal-mignon-petite-ic%C3%B4ne-isol%C3%A9-et-plat-illustration.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg className="taille" src="https://previews.123rf.com/images/djvstock/djvstock1608/djvstock160807811/64099465-porter-kawaii-animal-mignon-petite-ic%C3%B4ne-isol%C3%A9-et-plat-illustration.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
      <CardImg className="taille" src="https://previews.123rf.com/images/djvstock/djvstock1608/djvstock160807811/64099465-porter-kawaii-animal-mignon-petite-ic%C3%B4ne-isol%C3%A9-et-plat-illustration.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardDeck>
  );
};