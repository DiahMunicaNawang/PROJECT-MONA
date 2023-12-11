import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

import Foot from './foot';
import Navibar from './navibar';
import './App.css';

function Blog() {
    return (
        <div>
            <Navibar />
            <section id="service" className="section     before-content ">
                <div className="container text-center">
                    {/* <h6 className="subtitle">Service</h6> */}
                    <h1 className="section-title mb-4  tfonts">Daily Insight</h1>
                    <p className="mb-5 pb-4">Bantulah dirimu sendiri  dengan mencari berbagai informasi kondisi kesehatan mental yang mungkin kamu alami sebagai seorang mahasiswa.</p>


                    <div className="row">

                        <div className="col-sm-6 col-md-3 mb-4">
                            <div className="custom-card card border">
                                <img  className='card-img-top'  src={process.env.PUBLIC_URL + "myimg/anxiety.jpg"} />

                                <div className="card-body">
                                

                                    <i className="icon ti-crown"></i>
                                    <Link to="/Anxiety" ><h5>Kecemasan & Serangan panik</h5></Link>
                                    
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-sm-6 col-md-3 mb-4">
                            <div className="custom-card card border">
                            <img  className='card-img-top'  src={process.env.PUBLIC_URL + "myimg/adhd.jpg"} />

                                <div className="card-body">
                                    <i className="icon ti-desktop"></i>
                                    <Link to="/Adhd" ><h5>ADHD</h5></Link>

                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3 mb-4">
                            <div className="custom-card card border">
                            <img  className='card-img-top'  src={process.env.PUBLIC_URL + "myimg/ptsd.jpg"} />

                                <div className="card-body">
                                    <i className="icon ti-desktop"></i>
                                    <Link to="/PTSD" ><h5>PTSD</h5></Link>

                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3 mb-4">
                            <div className="custom-card card border">
                            <img  className='card-img-top'  src={process.env.PUBLIC_URL + "myimg/pmdd.jpg"} />

                                <div className="card-body">
                                    <i className="icon ti-desktop"></i>
                                    <Link to="/Pmdd" ><h5>PMDD</h5></Link>

                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3 mb-4">
                            <div className="custom-card card border">
                            <img  className='card-img-top'  src={process.env.PUBLIC_URL + "myimg/bipolar.jpg"} />

                                <div className="card-body">
                                    <i className="icon ti-desktop"></i>
                                    
                                    <Link to="/Bp" ><h5>Bipolar Disorder</h5></Link>

                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3 mb-4">
                            <div className="custom-card card border">
                            <img  className='card-img-top'  src={process.env.PUBLIC_URL + "myimg/anger.jpg"} />

                                <div className="card-body">
                                    <i className="icon ti-mobile"></i>
                                    <Link to="/Anger" ><h5>Emosi Marah</h5></Link>

                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3 mb-4">
                            <div className="custom-card card border">
                            <img  className='card-img-top'  src={process.env.PUBLIC_URL + "myimg/ocd.jpg"} />

                                <div className="card-body">
                                    <i className="icon ti-bar-chart"></i>
                                    <Link to="/Ocd" ><h5>OCD</h5></Link>

                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3 mb-4">
                            <div className="custom-card card border">
                            <img  className='card-img-top'  src={process.env.PUBLIC_URL + "myimg/depression.jpg"} />

                                <div className="card-body">
                                    <i className="icon ti-mobile"></i>
                                    <Link to="/Dep" ><h5>Depresi</h5></Link>
                                    
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-sm-6 col-md-3 mb-4">
                            <div className="custom-card card border">
                            <img  className='card-img-top'  src={process.env.PUBLIC_URL + "myimg/persona.jpg"} />

                                <div className="card-body">
                                    <i className="icon ti-mobile"></i>
                                    <Link to="/Pd" >Gangguan Kepribadian </Link>

                                </div>
                            </div>
                        </div>
                        
                        <div className="col-sm-6 col-md-3 mb-4">
                            <div className="custom-card card border">
                            <img  className='card-img-top'  src={process.env.PUBLIC_URL + "myimg/phobia.jpg"} />

                                <div className="card-body">
                                    <i className="icon ti-mobile"></i>
                                    <Link to="/Phobia" ><h5>Phobia</h5></Link>

                                </div>
                            </div>
                        </div>
                        
                        <div className="col-sm-6 col-md-3 mb-4">
                            <div className="custom-card card border">
                            <img  className='card-img-top'  src={process.env.PUBLIC_URL + "myimg/suicidal.jpg"} />

                                <div className="card-body">
                                    <i className="icon ti-mobile"></i>
                                    <Link to="/Suicidal" ><h5>Rasa Ingin Bunuh Diri</h5></Link>

                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3 mb-4">
                            <div className="custom-card card border">
                            <img  className='card-img-top'  src={process.env.PUBLIC_URL + "myimg/others.jpg"} />

                                <div className="card-body">
                                    <i className="icon ti-mobile"></i>
                                    <Link to="/Other" ><h5>Isu Lainnya</h5></Link>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Foot />
        </div>
    )
}

export default Blog;