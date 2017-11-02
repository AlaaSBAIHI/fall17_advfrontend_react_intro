import React from 'react';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';


const CardWithMap = () => (
  <Card className="card_background">
    <CardTitle className="title" title="When" />
    <CardText className="text">
      Monday and Thursday 19:00-21:00
    + TechTalk: Wednesday 19:00-21:00
    </CardText>
    <CardTitle className="title" title="Where" />
    <CardText className="text">
      Digitales Lernzentrum, Kemperplatz 1a, 7th floor, 10785, Berlin0
    </CardText >
    <CardMedia>
      <img src="static/gmap@2x.png" alt="" />
    </CardMedia>
  </Card>
);

export default CardWithMap;