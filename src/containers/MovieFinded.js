import { Box, Pagination, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';


import tmdb from '../apis/tmdb';
import NewsCard from '../components/NewsCard';

const MovieFinded = () => {
    
    const [news, setNews] = useState([]);
    const [newsReady, setNewsReady] = useState(false);
    const [page, setPage] = useState(1);
    const [countPage, setCountPage] = useState(1)
    const params = useParams();
    const key = params?.movie ;
    const url = 'search/movie?query=' + key;

    

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const fetchedNews = await tmdb.get('news/top',{params :{
                    page:page,
                    search:key,
                    locale:'id'
                }});
                setNews(fetchedNews.data.data);
                setCountPage(fetchedNews.data.meta.found)
                setNewsReady(true);
                // /console.log(news);
            } catch (error) {
                console.log(error);
            }
        }

        fetchNews();
    }, [url,page]);


    const handleChange = (event, value) => {
        setPage(value);
      };
  
    const pageX = Math.round(countPage/5);


    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            mt: 5,mb:10
        }}>
            <Box sx={{
                mt: 5,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
            }}>
                
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: "center",
                mt: 5,mb:10,paddingLeft:5,paddingRight:5,gap:5
            }}>
                {
                    news.map(movie => (
                        <NewsCard key={movie.title} news={movie}></NewsCard>
                    ))
                }
            </Box>
            <Box sx={{display: 'flex',alignItems: 'center',
                justifyContent: "center"}}>
                <Stack spacing={2}>
                    <Typography>Page: {page}</Typography>
                    <Pagination count={pageX} color="primary" page={page} onChange={handleChange}/>
                </Stack>
            </Box>
        </Box>
    );
}

export default MovieFinded;