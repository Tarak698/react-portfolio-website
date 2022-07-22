import React from "react";
import './testimonials.css'
import AVTR1 from '../../assets/avtar1.jfif'
import AVTR2 from '../../assets/avtar2.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar: AVTR1,
        name: 'Sohail Ahmad',
        review: 'Tarak and I worked together on several projects, and I was lucky to call him my coworker. He consistently gave 100 percent effort to the team and played a significant role in ensuring that we completed assignments on time. He had excellent time management skills and had a knack for keeping everyone calm and productive during intense crunch periods. Any team would be lucky to have Tarak, and I couldn’t recommend him more for any business looking for new talent.'
    },
    {
        avatar: AVTR2,
        name: 'Sahil Shahab',
        review: 'Tarak is one of the most delightful people I had the pleasure of working for in my career. Not only did he have a unique ability to keep our team organized and on schedule, but his constant communication helped lift our spirits in challenging situations. I learned a lot from Tarak. he’s is always willing to lend a hand to anyone who needs it. His ability to overcome challenges with a smile made her stand out as a cut above the rest. I highly recommend working with Tarak.'
    },
]

const Testimonials = () => {
    return(
        <section id="testimonials">
            <h5>Words I Cherish</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container" 
            // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}>
                {
                    data.map(({avatar, name, review}, index) => {
                        return(
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar}/>
                                </div>
                                <h5 className="client__name">{name}</h5>
                                <small className="client__review">{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials