import React from 'react';
import Navibar from './navibar'
import Signup from './singup';
import Foot from './foot';
import './App.css';
import { Link } from 'react-router-dom';

// import { FaHeart } from "react-icons/fa";

function Home() {
    return (
        <div data-spy="scroll" data-target=".navbar" data-offset="40" id="home"   >
            {/* <FaHeart /> */}
            {/* <!-- Page navigation --> */}
            <Navibar />
            {/* <!-- End of page navibation --> */}

            {/* <!-- Page Header --> */}
            <header className="header" id="home">
                <div className="container">
                    <div className="infos">
                        <h1 className="subtitle">Hello Welcome To,</h1>
                        <h6 className="title">Student </h6>
                        <h6 className="title">Mentality !</h6>

                        {/* <p>UI/UX Designer</p> */}

                        {/* <div className="buttons pt-3">
                            <button className="btn btn-primary rounded">HIRE ME</button>
                            <button className="btn btn-dark rounded">DOWNLOAD CV</button>
                        </div> */}

                        {/* <div className="socials mt-4">
                            <a className="social-item" href="#"><i className="ti-facebook"></i></a>
                            <a className="social-item" href="#"><i className="ti-google"></i></a>
                            <a className="social-item" href="#"><i className="ti-github"></i></a>
                            <a className="social-item" href="#"><i className="ti-twitter"></i></a>
                        </div> */}
                    </div>
                    <div className="img-holder">
                        {/* <img src="assets/imgs/man.svg" alt=""></img> */}
                        <img src={process.env.PUBLIC_URL + "myimg/home.jpeg"} />

                    </div>
                </div>

                {/* <!-- Header-widget --> */}
                <div className="widget">
                    <div className="widget-item">
                        <h2>Daily</h2>
                        <p>Insight</p>
                    </div>
                    <div className="widget-item">
                        <h2>Many</h2>
                        <p>Aspects</p>
                    </div>
                    <div className="widget-item">
                        <h2>There is</h2>
                        <p>Concelling</p>
                    </div>
                </div>
            </header>
            {/* <!-- End of Page Header --> */}

            {/* <!-- About section --> */}
            {/* <section id="about" className="section mt-3">
                <div className="container mt-5">
                    <div className="row text-center text-md-left">
                        <div className="col-md-3">
                            <img src="assets/imgs/avatar.jpg" alt="" className="img-thumbnail mb-4"></img>
                        </div>
                        <div className="pl-md-4 col-md-9">
                            <h6 className="title">James Smith</h6>
                            <p className="subtitle">UI/UX Designer</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, pariatur, aperiam aut autem voluptas odit. Odio ducimus delectus totam sed aliquam sequi praesentium mollitia, illum repudiandae quidem quod, magni magnam.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, eius, nam. Quo praesentium qui temporibus voluptatum, facilis aliquid eligendi fugiat beatae neque inventore non. Laborum repellendus consequatur ullam voluptatum asperiores.</p>
                            <button className="btn btn-primary rounded mt-3">DOWNLOAD CV</button>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <!-- Service section --> */}


            {/* Blogs */}





            {/* Consultant snippet */}
            <section id="testmonial" className="section">
                <div className="container text-center  ">
                    {/* <h6 className="subtitle"> Counsellors </h6> */}
                    <div className='hometitle' >

                        <h1 className="section-title  tfonts  mb-4"> Counsellors / Psikolog </h1>
                        <p className="mb-5 pb-4">Melangkah pasti , Berani hadapi Kesehatan Mental Mahasiswa dengan konsultasi di Platform kami.
</p>
                    </div>

                    <div id="carouselExampleIndicators" className="carousel slide  " data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators " data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>





                        <div className="carousel-inner ">
                            <div className="carousel-item active   ">
                                <div className="card testmonial-card border">
                                    <div className="card-body  ">
                                        {/* <img src="assets/imgs/avatar-1.jpg" alt=""></img> */}
                                        <img src={process.env.PUBLIC_URL + "myimg/psikolog2.jpg"} />

                                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nostrum voluptates in enim vel amet?</p> */}
                                        <div>
                                        KLIK DI BAWAH UNTUK MENGETAHUI LEBIH LANJUT 

                                        </div>

                                        <h1 className="title">Dr. Desti Nur Fauzi Rahmawati</h1>
                                        <h1 className="subtitle">MBBS, MD(Psychiatry)</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card testmonial-card border">
                                    <div className="card-body">
                                        {/* <img src="assets/imgs/avatar-2.jpg" alt=""></img> */}
                                        <img src={process.env.PUBLIC_URL + "myimg/psikolog22.jpg"} />

                                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nostrum voluptates in enim vel amet?</p> */}

                                        <div>
                                        KLIK DI BAWAH UNTUK MENGETAHUI LEBIH LANJUT

                                        </div>


                                        <h1 className="title">Dr. Aprillia Diah Mentari</h1>
                                        <h1 className="subtitle">MBBS, DPM</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card testmonial-card border">
                                    <div className="card-body">
                                        {/* <img src="assets/imgs/avatar-3.jpg" alt=""></img> */}
                                        <img src={process.env.PUBLIC_URL + "myimg/psikolog3.jpg"} />

                                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nostrum voluptates in enim vel amet?</p> */}
                                        <div>
                                        KLIK DI BAWAH UNTUK MENGETAHUI LEBIH LANJUT
                                        </div>

                                        <h1 className="title">Dr. Eliya Dwi Maulida</h1>
                                        <h1 className="subtitle">MBBS, DNB</h1>
                                    </div>
                                </div>
                            </div>




                        </div>
                        <button className="btn btn-light rounded">

                            <Link to='/Consul' className='text-dark' >Selengkapnya</Link>
                        </button>
                    </div>

                </div>


            </section>

            {/* <!-- End of Sectoin --> */}




            {/* <!-- Portfolio section --> */}
            {/* img cluster for BLOGS */}
            <section id="portfolio" className="section">
                <div className="container text-center">
                    {/* <h6 className="subtitle">Portfolio</h6> */}
                    <h6 className="section-title mb-4   tfonts">Daily Insight </h6>
                    <p className="mb-5 pb-4">Membantu perjalanan mahasiswa solusi revosioner untuk menangani beragam tantangan kesehatan mental.</p>

                    <div className="row">
                        <div className="col-sm-4">
                            <div className="img-wrapper">
                                {/* <img src={process.env.PUBLIC_URL + "imgs/folio-1.jpg"} /> */}
                                <img src={process.env.PUBLIC_URL + "myimg/anxiety.jpg"} />


                                <div className="overlay">
                                    <div className="overlay-infos">
                                        <h5>Kecemasan & Serangan panik</h5>
                                        <i className="ti-link"><Link to="/Anxiety" ></Link></i>
                                    </div>
                                </div>
                            </div>
                            <div className="img-wrapper">
                                {/* <img src="assets/imgs/folio-2.jpg" alt=""></img> */}
                                {/* <img src={process.env.PUBLIC_URL + "imgs/folio-2.jpg"} /> */}
                                <img src={process.env.PUBLIC_URL + "myimg/adhd.jpg"} />


                                <div className="overlay">
                                    <div className="overlay-infos">
                                        <h5>ADHD</h5>
                                        <i className="ti-link"><Link to="/Adhd" ></Link></i>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="img-wrapper">
                                {/* <img src="assets/imgs/folio-3.jpg" alt=""></img> */}
                                {/* <img src={process.env.PUBLIC_URL + "imgs/folio-3.jpg"} /> */}
                                <img src={process.env.PUBLIC_URL + "myimg/others.jpg"} />


                                <div className="overlay">
                                    <div className="overlay-infos">
                                        <h5>Isu Lainnya </h5>
                                        <i className="ti-link"><Link to="/Other" ></Link></i>

                                    </div>
                                </div>
                            </div>
                            <div className="img-wrapper">
                                {/* <img src="assets/imgs/folio-4.jpg" alt=""></img> */}
                                {/* <img src={process.env.PUBLIC_URL + "imgs/folio-4.jpg"} /> */}
                                <img src={process.env.PUBLIC_URL + "myimg/bipolar.jpg"} />


                                <div className="overlay">
                                    <div className="overlay-infos">
                                        <h5>Bipolar Disorder</h5>
                                        <i className="ti-link"><Link to="/Bp" ></Link></i>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="img-wrapper">
                                {/* <img src={process.env.PUBLIC_URL + "imgs/folio-5.jpg"} /> */}
                                <img src={process.env.PUBLIC_URL + "myimg/pmdd.jpg"} />


                                <div className="overlay">
                                    <div className="overlay-infos">
                                        <h5>PMDD</h5>
                                        <i className="ti-link"><Link to="/Pmdd" ></Link></i>

                                    </div>
                                </div>
                            </div>
                            <div className="img-wrapper">
                                {/* <img src="assets/imgs/folio-6.jpg" alt=""></img> */}
                                {/* <img src={process.env.PUBLIC_URL + "imgs/folio-6.jpg"} /> */}
                                <img src={process.env.PUBLIC_URL + "myimg/ptsd.jpg"} />

                                <div className="overlay">
                                    <div className="overlay-infos">
                                        <h5>PTSD</h5>
                                        <i className="ti-link"><Link to="/Ptsd" ></Link></i>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <button className="btn btn-primary rounded">

                            <Link to='/Blog' className='text-dark' >Baca Selengkapnya</Link>
                        </button>
                    </div>

                </div>
            </section>
            {/* <!-- End of portfolio section --> */}






            {/* <!-- Skills section --> */}
            {/* NOT IN USE */}
            {/* <section className="section">
                <div className="container text-center">
                    <h6 className="subtitle">Skills</h6>
                    <h6 className="section-title mb-4">Why Choose me</h6>
                    <p className="mb-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos.  rerum commodi corrupti, temporibus non quam.</p>

                    <div className="row text-left">
                        <div className="col-sm-6">
                            <h6 className="mb-3">Photoshop</h6>
                            <div className="progress">
                                <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>89%</span></div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <h6 className="mb-3">Web Design</h6>
                            <div className="progress">
                                <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>83%</span></div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <h6 className="mb-3">App Design</h6>
                            <div className="progress">
                                <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>95%</span></div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <h6 className="mb-3">SEO</h6>
                            <div className="progress">
                                <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>90%</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}




            {/* ASSPECTS SNIPPET */}


            <section id="blog" className="section     before-content ">


                <div className="container text-center ">
                    <div className='titles' >
                        {/* <h6 className="subtitle ">use our</h6> */}
                        <h6 className="section-title mb-2    tfonts">Hidupkan Kembali Pikiranmu</h6>
                        <p className="mb-5 pb-4">Rasakan pencerahan dan tinggalkan ernergi negativemu</p>
                    </div>

                    {/* ************************  MEDICATION ******************************** */}

                    <div className="row text-left">
                        <div className="col-md-4">
                            <div className="card border mb-4">
                                {/* <img src="assets/imgs/blog-1.jpg" alt="" className="card-img-top w-100"></img> */}
                                <img className='card-img-top' src={process.env.PUBLIC_URL + "myimg/pod.jpeg"} />

                                <div className="card-body">
                                    <h5 className="card-title">Tentang Mental Health & Cara Kamu Bisa Menyikapinya Dengan Positif</h5>
                                    <div className="post-details">
                                        <a href="#">Posted By: Merry Riana</a>
                                        {/* <a href="#"><i className="ti-thumb-up"></i> 456</a>
                                        <a href="#"><i className="ti-comment"></i> 123</a> */}
                                    </div>
                                    <p>Sebagai mahasiswa, penting bagi kita untuk memberikan perhatian yang lebih pada kesehatan mental guna mampu menghadapi tantangan dalam lingkungan perkuliahan.</p>
                                    <a href="https://youtu.be/m3eJG5mnsrY?si=atsYaqJwV2R2FKbO">Read More..</a>
                                </div>
                            </div>
                        </div>

                        {/* ************************ 2 *********************** */}

                        <div className="col-md-4">
                            <div className="card border mb-4">
                                {/* <img src="assets/imgs/blog-2.jpg" alt="" className="card-img-top w-100"></img> */}
                                <img className='card-img-top' src={process.env.PUBLIC_URL + "myimg/pod2.jpeg"} />

                                <div className="card-body">
                                    <h5 className="card-title">Kesehatan Mental: Apa Aku Normal?</h5>
                                    <div className="post-details">
                                        <a href="#">Posted By: Satu Persen-Indonesian Life School</a>
                                        {/* <a href="#"><i className="ti-thumb-up"></i> 456</a>
                                        <a href="#"><i className="ti-comment"></i> 123</a> */}
                                    </div>
                                    <p>Eksplorasi Kesehatan Mental dalam Konteks Kehidupan Mahasiswa: Membahas Stres dan Overthinking serta Merenungkan Pertanyaan, "Apakah Aku Normal?"</p>
                                    <a href="https://youtu.be/MKJppZ18FYU?si=9gmRIkCXa36Gxwd4">Read More..</a>
                                </div>
                            </div>
                        </div>


                        {/* ************************ 3 *********************** */}


                        <div className="col-md-4">
                            <div className="card border mb-4">
                                {/* <img src="assets/imgs/blog-3.jpg" alt="" className="card-img-top w-100"></img> */}
                                <img className='card-img-top' src={process.env.PUBLIC_URL + "myimg/pod3.jpeg"} />

                                <div className="card-body">
                                    <h5 className="card-title">Mental Health | Apa Kamu Baik-Baik Saja?</h5>
                                    <div className="post-details">
                                        <a href="#">Posted By: 1 Hari Sukses</a>
                                        {/* <a href="#"><i className="ti-thumb-up"></i> 456</a>
                                        <a href="#"><i className="ti-comment"></i> 123</a> */}
                                    </div>
                                    <p>Mendalami Dimensi Kesehatan Mental sebagai Mahasiswa: Sebuah Refleksi Pribadi dengan Pertanyaan, "Apa Kamu Baik-Baik Saja?". Ayo kenali dari sekarang, jangan terlambat. !!</p>
                                    <a href="https://youtu.be/wrktmhWo4f4?si=ptAdRjjNfoDGtV8h">Read More..</a>
                                </div>
                            </div>
                        </div>
                    </div>





                    <div>
                        <button className="btn btn-light rounded">

                            <Link to='/Aspect' className='text-dark' >Selengkapnya</Link>
                        </button>
                    </div>



                </div>
            </section>













            {/* <!-- End of Skills sections --> */}








            <Signup />




            {/* <!-- Blog Section --> */}
            {/* kept in aspectmodule */}



            {/* <!-- Hire me section --> */}
            {/* footer - still not registered..???? */}

            {/* <!-- End od Hire me section. --> */}

            {/* <!-- Contact Section --> */}
            {/* <!-- End of Contact Section --> */}

            {/* <!-- Page Footer --> */}
            <Foot />
            {/* <!-- End of page footer --> */}
            {/* <!-- End of page footer --> */}

            {/* <!-- core  --> */}
            {/* <script src="assets/vendors/jquery/jquery-3.4.1.js"></script> */}
            {/* <script src="assets/vendors/bootstrap/bootstrap.bundle.js"></script> */}
            {/* <!-- bootstrap 3 affix --> */}
            {/* <script src="assets/vendors/bootstrap/bootstrap.affix.js"></script> */}

            {/* <!-- steller js --> */}
            {/* <script src="assets/js/steller.js"></script> */}

        </div>
    );
}

export default Home;
