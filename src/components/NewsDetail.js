import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import tmdb from '../apis/tmdb';
import { Box, Button, CardActionArea, CardActions, Chip, Grid, Stack } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Spinner from './SpinnerFull';
import SpinnerFull from './SpinnerFull';




const NewsDetail = () => {
  const [news, setNews] = useState([]);
  const [newsReady, setNewsReady] = useState(false);
  const [categories, setCategories] = useState([]);
 
  
  const params = useParams();
  //console.log('ini adalah ' + params?.id );

  const url = "/news/uuid/" + params?.uuid;
  
  


  useEffect(() => {
      const fetchNews = async () => {
          try {
              
              const fetchedNews = await tmdb.get(url);
              setNews(fetchedNews.data);
              setCategories(fetchedNews.data.categories);
              setNewsReady(true);
              
          } catch (error) {
              console.log(error);
          }
      }

      fetchNews();
  }, [url]);
//   console.log(news)
  const navigate = useNavigate();
  

  

  return (
    <div>
    <SpinnerFull></SpinnerFull>    
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '250vh' }}
    >
    
      <Card sx={{ maxWidth: '85%',mt:7,mb:5,flexDirection: 'column' }} display={'flex'}>
      
        <CardActionArea>
          <CardMedia
            component="img"
            height="500"
            width="200"
            image={ news.image_url}
            alt={news.title}
          />
            
                <Chip label={news.source} color="primary" sx={{mt:-3,ml:1}} />
       
          
          <CardContent>
            
            <Typography gutterBottom variant="h5" component="div">
              {news.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Date Publish : {news.published_at}
            </Typography>
            <Typography variant="body2" color="text.primary">
            {news.description}
            <br></br>
            {news.snippet}
            
            </Typography>
             
            
          </CardContent>
          <Stack direction="row" spacing={1} sx={{ml:2,mb:1}}>
                { 
                    categories.map(element => (
                      <Chip label={element} size="small" />
                    ))
                }
                
            </Stack> 
        </CardActionArea>
        <CardActions sx={{ml:1}}>
            <Button size="small" color="primary" onClick={()=>window.open(`${news.url}`, '_blank')}>
            Read More
          </Button>
          <Button size="small" color="success" onClick={()=>navigate('/')} sx={{textAlign:'right'}}>
            Back
          </Button>
          <Stack direction="row" spacing={1} sx={{ml:80}}>
            <Chip label={news.language} variant="outlined" />
          </Stack>
        </CardActions>
      </Card>
      
    </Grid>
    </div>
  );
}

export default NewsDetail;