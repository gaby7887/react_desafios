import * as React from 'react';
import '../Item/Item.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
 
const Item = ({user}) => {
  return (
    <Card className="card" style={{margin: 60}} sx={{ maxWidth: 345 }}>
      <CardContent className="cardInd">
        <CardMedia
            component="img"
            height="140"
            image={user.avatar_url}
            alt="green iguana"
        />
        <Typography gutterBottom variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.username}
        </Typography>
        <a href={user.html_url} target='_blank' rel="noreferrer">Repo</a>
      </CardContent>
    </Card>
  );
};

export default Item;
