import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Rating, Chip,Stack } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
import NewsDetail from './NewsDetail';



export default function NewsCard({news}) {
  const navigate = useNavigate();


  
  const handlerDetail = (id) =>{
    
    navigate(`../newsdetail/${id}`);
    
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Box>
        <CardMedia
          component="img"
          height="140"
          image={ news.image_url}
          alt={news.title}>
        </CardMedia>
        <Stack direction="row" spacing={1} sx={{mt:-2, ml:1}}>
            <Chip label={news.source} color="primary"  />
        </Stack>
        </Box>
        
        <CardContent sx={{ flex: '1 0 auto', height: 270, textAlign: 'justify' }}>
          <Typography gutterBottom variant="h6" component="div">
          {news.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" >
          {news.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=> handlerDetail(news.uuid)}>
          Read 
        </Button>
      </CardActions>
    </Card>
  );
}

