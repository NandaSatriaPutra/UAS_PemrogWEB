import React, { Fragment, useContext, useState } from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Container
} from 'reactstrap';


import { Jumbotron, Button } from 'reactstrap';
import { AuthContext } from '../../App';
import { Link } from 'react-router-dom';

const items = [
    {
        src: 'https://www.decolonialitylondon.org/wp-content/uploads/2015/05/B26A14621-1170x500.jpg',
        altText: 'Slide 1'
    },
    {
        src: 'https://news.tokocrypto.com/wp-content/uploads/2019/04/Jurnal_Blog_Pentingnya-Analisa-Pasar-yang-Tepat-untuk-Kesuksesan-Bisnis-1170x500-1024x438.jpg',
        altText: 'Slide 2'
    },
    {
        src: 'https://jurnal-blog-prod.cd.jurnal.id/wp-content/uploads/2019/06/shutterstock_188613179-1-1170x500.jpg',
        altText: 'Slide 3'
    }
];


function HomePage() {
    const { state, dispatch } = useContext(AuthContext)

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
           
            
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });


    return (
        <Container>
            
        

        <Jumbotron>
        
            <h1 className="display-3">HI, {state.user}!</h1>
            <p className="lead">
            <h2>Pilih Halaman</h2>
        </p>
        
        <Link to="/about"><Button color="primary">About</Button>{' '}</Link>
        <Link to="/supplier"><Button color="primary">Supplier</Button>{' '}</Link>
        <Link to="/daftarproduk"><Button color="primary">Daftar produk Dijual</Button></Link>

    </Jumbotron>
          
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>

       
            </Container>
    )
}
export default HomePage;