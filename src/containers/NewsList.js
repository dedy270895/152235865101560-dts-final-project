import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import tmdb from '../apis/tmdb';
import NewsCard from '../components/NewsCard';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const NewsList = () => {
    const [queryParams, setQueryParams] = useSearchParams();
    const [news, setNews] = useState([]);
    const [newsReady, setNewsReady] = useState(false);
    const [page, setPage] = useState(1);
    const [countPage, setCountPage] = useState(1)

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const fetchedNews = await tmdb.get('news/top',{params :{
                    page:page,
                    language:'id'
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

    useEffect(() => {
        if (!newsReady) return;
        const sortNews = (type) => {
            if (type === 'asc') {
                const sorted = [...news].sort((a, b) => a.vote_average - b.vote_average);
                setNews(sorted);
                
            }
            if (type === 'desc') {
                const sorted = [...news].sort((a, b) => b.vote_average - a.vote_average);
                setNews(sorted);
            }
        }

        sortNews(queryParams.get('sort'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queryParams, newsReady]);

    const setSortParam = (type) => {
        queryParams.set("sort", type);
        setQueryParams(queryParams);
    }

    
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
                justifyContent: 'flex-end',
                alignItems: 'center',
            }}>
                Sort by Rating
                <Button
                    variant="contained"
                    sx={{ ml: 2 }}
                    onClick={() => setSortParam("asc")}
                >
                    Asc
                </Button>
                <Button
                    sx={{ ml: 2, mr: 2 }}
                    onClick={() => setSortParam("desc")}
                >
                    Desc
                </Button>
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
        </Box>
    );
}

export default NewsList;