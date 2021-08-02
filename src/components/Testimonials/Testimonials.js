import React from 'react';
import './Testimonials.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dina from '../../images/dina.png';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const reviewsData = [
    {
        id: 1, image: dina,
        name: "Dina Jems",
        profession: "Traveller",
        speech: "Fusce aliquam luctus est, eget tincidunt velit scelerisque rhoncus. Aliquam lacinia ipsum ornare, porttitor risus nec, mattis mauris"
    }, {
        id: 2, image: dina,
        name: "Dina Jems",
        profession: "Traveller",
        speech: "Fusce aliquam luctus est, eget tincidunt velit scelerisque rhoncus. Aliquam lacinia ipsum ornare, porttitor risus nec, mattis mauris"
    }, {
        id: 3, image: dina,
        name: "Dina Jems",
        profession: "Traveller",
        speech: "Fusce aliquam luctus est, eget tincidunt velit scelerisque rhoncus. Aliquam lacinia ipsum ornare, porttitor risus nec, mattis mauris"
    }, {
        id: 4, image: dina,
        name: "Dina Jems",
        profession: "Traveller",
        speech: "Fusce aliquam luctus est, eget tincidunt velit scelerisque rhoncus. Aliquam lacinia ipsum ornare, porttitor risus nec, mattis mauris"
    }, {
        id: 5, image: dina,
        name: "Dina Jems",
        profession: "Traveller",
        speech: "Fusce aliquam luctus est, eget tincidunt velit scelerisque rhoncus. Aliquam lacinia ipsum ornare, porttitor risus nec, mattis mauris"
    }, {
        id: 6, image: dina,
        name: "Dina Jems",
        profession: "Traveller",
        speech: "Fusce aliquam luctus est, eget tincidunt velit scelerisque rhoncus. Aliquam lacinia ipsum ornare, porttitor risus nec, mattis mauris"
    }, {
        id: 7, image: dina,
        name: "Dina Jems",
        profession: "Traveller",
        speech: "Fusce aliquam luctus est, eget tincidunt velit scelerisque rhoncus. Aliquam lacinia ipsum ornare, porttitor risus nec, mattis mauris"
    }, {
        id: 8, image: dina,
        name: "Dina Jems",
        profession: "Traveller",
        speech: "Fusce aliquam luctus est, eget tincidunt velit scelerisque rhoncus. Aliquam lacinia ipsum ornare, porttitor risus nec, mattis mauris"
    }, {
        id: 9, image: dina,
        name: "Dina Jems",
        profession: "Traveller",
        speech: "Fusce aliquam luctus est, eget tincidunt velit scelerisque rhoncus. Aliquam lacinia ipsum ornare, porttitor risus nec, mattis mauris"
    }

]

const Testimonials = () => {
    return (
        <div className="reviews-container">
            <h5 className="text-center">Testimonials</h5>
            <h2>What Our Traveller Say</h2>
            <h2>About Us</h2>
            <div className="container mt-5">
                <OwlCarousel className='owl-theme' loop margin={10} nav>
                    {
                        reviewsData.map(review => <TestimonialCard key={review.id} data={review}></TestimonialCard>)
                    }
                </OwlCarousel>
            </div>
        </div>
    );
};

export default Testimonials;