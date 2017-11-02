import React from 'react';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';

const CardWithText = () => (
  <Card className="card_background">
    <CardText className="text">
    After this course, you will be able to:

    1)	Apply intermediate skills in front end
      web development
    2)	Create a simple web application and deploy it
    3)	Understand foundational programming
      principles in JavaScript
    4)	Use the front end development library React

    Entry requirements:  Basic Frontend Web Development course or equivalent skills in JS 
   </CardText>
  </Card>
);

export default CardWithText;