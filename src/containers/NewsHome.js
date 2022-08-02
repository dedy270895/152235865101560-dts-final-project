import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

import tmdb from '../apis/tmdb';
import NewsCard from '../components/NewsCard';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import CommentApp from '../components/CommentApp';
import Alert from '@mui/material/Alert';


const NewsHome = () => {
    
    const [news, setNews] = useState([]);
    const [newsReady, setNewsReady] = useState(false);
    const [page, setPage] = useState(1);
    const [countPage, setCountPage] = useState(1)

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const fetchedNews = await tmdb.get('news/top',{params :{
                    page:page,
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
    }, [page]);


    
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
            {/* <CarouselHead></CarouselHead> */}
            <Box sx={{
                mt: 5,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Stack sx={{ width: '75%' }} spacing={2}>
                    
                    <Alert severity="success" sx={{textAlign:'center'}}>Top News Today</Alert>
                </Stack>
                
                
                
            </Box>
            
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: "center",
                mt: 5,mb:10,paddingLeft:5,paddingRight:5,gap:5
            }}>
                
                {
                    
                    news.map(news => (
                        <NewsCard key={news.title} news={news}></NewsCard>
                    ))
                }
                    
                
            </Box>
            <Box sx={{display: 'flex',alignItems: 'center',
                justifyContent: "center"}}>
                <Stack spacing={2}>
                    {/* <Typography>Page: {page}</Typography> */}
                    <Pagination count={pageX} color="primary" page={page} onChange={handleChange}/>
                </Stack>
            </Box>
            <Box sx={{
                mt: 5,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Stack sx={{ width: '75%',mb:2 }} spacing={2} >
                    <Alert severity="info">Thread Discussion</Alert>
                </Stack>
                
            </Box>
            
            <Box >
                <CommentApp/>
                
            </Box>
        </Box>
    );
}

export default NewsHome;