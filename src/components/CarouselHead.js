import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from 'react';
import tmdb from '../apis/tmdb';
import Badge from 'react-bootstrap/Badge';

function CarouselHead() {
  const [news, setNews] = useState([]);
  const [newsReady, setNewsReady] = useState(false);
  
  useEffect(() => {
    const fetchNews = async () => {
        try {
            const fetchedNews = await tmdb.get('news/top',{params :{
                language:'id',
                limit:3
            }});
            setNews(fetchedNews.data.data);
            setNewsReady(true);
            // /console.log(news);
        } catch (error) {
            console.log(error);
        }
      }
      fetchNews();
    }, []);


  return (
    <Carousel className="carouselStyling">
      {      
        news.map(news => (
          
            <Carousel.Item key={news.title}>
              <img
                className="d-block w-100 fittingImage"
                src={news.image_url}
                alt="First slide"
              />
              <Carousel.Caption >
                <Badge pill bg="danger"><h3>Read News Everywhere</h3></Badge>
                
                <p>{news.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
        ))
      }

    </Carousel>
  );
}

export default CarouselHead;