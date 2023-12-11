import React from 'react';
import Navibar from './navibar';
import Foot from './foot';

import { Link } from 'react-router-dom';
import './App.css';

// import './App.css';


function About() {
    return (
        <div>
            <Navibar />



            <section id="contact" className="position-relative section      before-content">
                <div className="container text-center">
                    {/* <h6 className="subtitle">Contact</h6> */}
                    <h1 className="section-title mb-4  tfonts">About Us</h1>
                    {/* <p className="mb-5 pb-4">on various mental health conditions people might suffer through.</p> */}






                    <div className="carousel-item active          ">
                        <div className="card testmonial-card border  aboutfont">
                            <div className="card-body  ">

                                <p >
                                Misi platform "Student Mentality" adalah memberikan akses mudah, terjangkau, 
dan nyaman terhadap layanan kesehatan mental bagi mahasiswa yang menghadapi tantangan hidup. Melalui platform ini, 
mahasiswa dapat terhubung dengan psikolog berlisensi, terapis individu dan keluarga yang berpengalaman, 
serta konselor profesional berlisensi. Kami menawarkan layanan 'penilaian' untuk membantu mahasiswa menentukan perawatan yang paling sesuai, 
dan bekerja sama dengan mereka dalam menemukan solusi terbaik untuk mendukung kesehatan mental mereka. Dengan demikian, 
mahasiswa dapat mengakses bantuan kapan saja dan di mana saja sesuai dengan kebutuhan mereka.</p>
                                {/* <h1 className="title">Dr. Arwa Vohra</h1>
                                        <h1 className="subtitle">MBBS, MD(Psychiatry)</h1> */}
                            </div>
                        </div>
                    </div>



                </div>
            </section>

            <div>
                <img className='aboutimg' src={process.env.PUBLIC_URL + "myimg/about.jpeg"} />

            </div>


            <Foot />

        </div>
    )
}
export default About;