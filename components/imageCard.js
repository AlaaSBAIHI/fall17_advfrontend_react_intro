import React from 'react';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';

const styles = {
  col: {
    color: "blue",
  },
};

const CardWithImage = () => (
  <Card className="card_background">
    <CardMedia>
      <img src="static/course_pic@2x.png" alt="" />
    </CardMedia>
  
    <CardTitle style={styles.col} title="Advanced Frontend web development (JavaScript) + React" />

    <CardText className="text">
      Create and deploy a simple web application using JavaScript
    </CardText>
  </Card>
);

export default CardWithImage;