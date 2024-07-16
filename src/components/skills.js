import React from 'react';

function Skill() {
    return (
        <section id="skills" className="skills">
            <div className="skill-content">
                <div className="section-heading text-center">
                    <h2>Skills</h2>
                </div>
                <div className="container">
                    <div className="row added">
                        <div className="col-md-6">
                            <div className="single-skill-content">
                                <div className="barWrapper">
                                    <span className="progressText n">HTML</span>
                                    <div className="single-progress-txt">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <h3 className='n'>90%</h3>
                                    </div>
                                </div>
                                <div className="barWrapper">
                                    <span className="progressText n">CSS</span>
                                    <div className="single-progress-txt">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <h3 className='n'>75%</h3>
                                    </div>
                                </div>
                                <div className="barWrapper">
                                    <span className="progressText n">JavaScript</span>
                                    <div className="single-progress-txt">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <h3 className='n'>70%</h3>
                                    </div>
                                </div>
                                <div className="barWrapper">
                                    <span className="progressText n">Bootstrap</span>
                                    <div className="single-progress-txt">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <h3 className='n'>80%</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="single-skill-content">
                                <div className="barWrapper">
                                    <span className="progressText n">Node.js</span>
                                    <div className="single-progress-txt">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <h3 className='n'>70%</h3>
                                    </div>
                                </div>
                                <div className="barWrapper">
                                    <span className="progressText n">Express.js</span>
                                    <div className="single-progress-txt">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <h3 className='n'>60%</h3>
                                    </div>
                                </div>
                                <div className="barWrapper">
                                    <span className="progressText n">MongoDB</span>
                                    <div className="single-progress-txt">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ width: '87%' }} aria-valuenow="87" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <h3 className='n'>87%</h3>
                                    </div>
                                </div>
                                <div className="barWrapper">
                                    <span className="progressText n">React Redux</span>
                                    <div className="single-progress-txt">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <h3 className='n'>90%</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skill;
