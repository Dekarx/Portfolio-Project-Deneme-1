import React from 'react'
import TestimonialsCarousel from './TestimonialsCarousel'


function Team() {
  return (
    <div>

        <div className="testimonials">
            <h1>Our Team</h1>
            <div className="container">
                <div className="testimonials-content">
                    <TestimonialsCarousel />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Team