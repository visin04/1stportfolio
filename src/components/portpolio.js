import React from 'react';

function Portfolio() {
    return (
        <>
            <section id="portfolio" className="portfolio">
                <div className="portfolio-details">
                    <div className="section-heading text-center">
                        <h2>Projects</h2>
                    </div>
                    <div className="container">
                        <div className="portfolio-content">
                            <div className="row mb-4 project-row">
                                <div className="col-md-6">
                                    <div className="project-details">
                                        <h3>Table Booking & Food Showcase Website</h3>
                                        <p>Experience our innovative table booking and food showcase website. Discover a seamless platform where users can reserve tables at their favorite restaurants and explore a delectable array of culinary delights. Dive into curated menus, chef recommendations, and customer reviews, all designed to enhance the dining experience. Explore how we've combined intuitive booking functionalities with mouth-watering food presentations to create a delightful journey for food enthusiasts.</p>
                                        <a href="https://visin04.github.io/food-clone/" target="_blank" rel="noopener noreferrer">Visit Website</a>
                                        <br />
                                        <a href="https://github.com/visin04/food-clone" target="_blank" rel="noopener noreferrer">View Code on GitHub</a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="item">
                                        <img src="assets/images/portfolio/food.png" alt="portfolio image" />
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-4 project-row">
                                <div className="col-md-6">
                                    <div className="project-details">
                                        <h3>Simple Calculator</h3>
                                        <p>This HTML code snippet creates a simple calculator with basic arithmetic operations (addition, subtraction, multiplication, division). Users can enter two numbers, select an operation, and see the result displayed below. The calculator uses JavaScript to perform calculations based on user input dynamically.</p>
                                        <a href="https://visin04.github.io/simple-calculator/" target="_blank" rel="noopener noreferrer">Visit Website</a>
                                        <br />
                                        <a href="https://github.com/yourusername/project-name2" target="_blank" rel="noopener noreferrer">View Code on GitHub</a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="item">
                                        <img src="assets/images/portfolio/cals.png" alt="portfolio image" />
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-4 project-row">
                                <div className="col-md-6">
                                    <div className="project-details">
                                        <h3>business expo</h3>
                                        <p>This cloned business website replicates the original design and functionality to showcase our products/services effectively. It includes detailed product/service descriptions, interactive features, and a user-friendly interface that mirrors the original site's functionality. Explore our portfolio, learn about our business model, and experience our customer-centric approach through this faithful recreation.</p>
                                      
                                        <br />
                                        <a href="https://github.com/visin04/templates" target="_blank" rel="noopener noreferrer">View Code on GitHub</a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="item">
                                        <img src="assets/images/portfolio/a1.jpeg" alt="portfolio image" />
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-4 project-row">
                                <div className="col-md-6">
                                    <div className="project-details">
                                        <h3>One page Podcast</h3>
                                        <p>This cloned one-page podcast or music website replicates the original design and functionality to showcase our episodes/tracks effectively. It includes interactive features and a user-friendly interface that mirrors the original site's functionality. Explore our latest content, enjoy seamless navigation, and immerse yourself in a captivating listening experience through this faithful recreation.</p>
                                        <br />
                                        <a href="https://github.com/visin04/templates" target="_blank" rel="noopener noreferrer">View Code on GitHub</a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="item">
                                        <img src="assets/images/portfolio/a3.jpeg" alt="portfolio image" />
                                    </div>
                                </div>
                            </div>
                            {/* Repeat similar structure for other projects */}
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Portfolio;