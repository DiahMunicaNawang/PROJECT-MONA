import React from 'react';
import { useState, useEffect } from 'react';
import Foot from './foot';
import Navibar from './navibar';
import Bookapt from './bookapt';
import { Link } from 'react-router-dom';
import { db } from './firebase-config'
import { collection, addDoc, getDocs } from "firebase/firestore";


function Consul() {

    const [Consultant, setConsultant] = useState([]);
    const ConsultantCollectionRef = collection(db, "Consultant")


    useEffect(() => {
        const getConsultant = async () => {
          const data = await getDocs(ConsultantCollectionRef);
          setConsultant(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    
        getConsultant();
      }, []);

// _____________LOCAL STORAGE__________________________________

    // const gotCname = localStorage.getItem('Cname');
    // const gotCpassword = localStorage.getItem('Cpassword');
    // const gotCphone_no = localStorage.getItem('Cphone_no');
    // const gotCaca = localStorage.getItem('Caca');
    // const gotCspeci = localStorage.getItem('Cspeci');
    // const gotCemail_id = localStorage.getItem('Cemail_id');
    // const gotCphoto = localStorage.getItem('Cphoto');



    // const storedConsultant = localStorage.getItem('consultant');

// ___________CHAT COLUMN_________________


    const [showPopup1, setShowPopup1] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);
    const [showPopup3, setShowPopup3] = useState(false);
    const [showPopup4, setShowPopup4] = useState(false);
    const [showPopup5, setShowPopup5] = useState(false);

    // ______________________________FIRESTORE____________________
    // const [Consultant, setConsultant] = useState([]);
    // const ConsultantCollectionRef = collection(db, "Consultant")

    // const [newConsul, setNewConsul] = useState(" Nothing selected")
    // const [newFeedback, setNewFeedback] = useState(" Nothing entered")



    // CHAT 1
    const openChat1 = () => {
        setShowPopup1(true);
        console.log('clicked on chat box!!!');
    };
    const closeChat1 = () => {
        setShowPopup1(false);
        console.log('clicked on CLOSE!!!');
    };


    // CHAT 2
    const openChat2 = () => {
        setShowPopup2(true);
        console.log('clicked on chat box!!!');
    };
    const closeChat2 = () => {
        setShowPopup2(false);
        console.log('clicked on CLOSE!!!');
    };

    // CHAT 3
    const openChat3 = () => {
        setShowPopup3(true);
        console.log('clicked on chat box!!!');
    };
    const closeChat3 = () => {
        setShowPopup3(false);
        console.log('clicked on CLOSE!!!');
    };

    // CHAT 4
    const openChat4 = () => {
        setShowPopup4(true);
        console.log('clicked on chat box!!!');
    };
    const closeChat4 = () => {
        setShowPopup4(false);
        console.log('clicked on CLOSE!!!');
    };

    // CHAT 5
    const openChat5 = () => {
        setShowPopup5(true);
        console.log('clicked on chat box!!!');
    };
    const closeChat5 = () => {
        setShowPopup5(false);
        console.log('clicked on CLOSE!!!');
    };



    return (
        <div>
            <Navibar />

           



            <section id="about" className="section   before-content">


                <div className="container text-center">
                    <div >
                        <h6 className="subtitle ">Prioritaskan Kesehatan Mentalmu</h6>
                        <h6 className="section-title mb-2 tfonts">Temui Ahli Konsultan Kami!</h6>
                        <p className="mb-5 pb-4">Dapatkan Pencerahan dan Panduan yang Tepat untuk Meninggalkan Pola Pikir Negatifmu sebagai Mahasiswa Melalui Sesi Konsultasi Online Bersama Psikolog Profesional.
</p>
                    </div>

                </div>




                <div className="container mt-0">
                    <div className="row text-center text-md-left">
                        <div className="col-md-3">
                            {/* <img src="assets/imgs/psikolog2.jpg" alt="" className="img-thumbnail mb-4"></img> */}
                            <img className='img-thumbnail mb-4       shadow-lg p-3 mb-5 bg-white rounded     ' src={process.env.PUBLIC_URL + "myimg/psikolog2.jpg"} />

                        </div>
                        <div className="pl-md-4 col-md-9">
                            <h6 className="title">Dr. Desti Nur Fauzi Rahmawati</h6>
                            <p className="subtitle">MBBS, MD(Psychiatry)</p>

                            {/* // startss */}
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            {/* <span className="fa fa-star"></span> */}

                            <p>Dr. Desti Nur Fauzi Rahmawati adalah seorang psikiater terkemuka dengan pengalaman lebih dari 5 tahun dalam praktiknya. Beliau merupakan konsultan psikiater di Rumah Sakit Super Spesialis di Surabaya dan mengkhususkan diri dalam ADHD (dewasa), penyalahgunaan zat, gangguan tidur, depresi, kecemasan, OCD, sexology, LGBTQ+, dan masalah pernikahan. Beliau memiliki sejumlah makalah penelitian yang telah diterbitkan atas namanya dalam bidang psikiatri geriatri.</p>

                            <button className="btn btn-primary rounded mt-3">  <Link to='/Bookapt' className='text-dark'>Book Appointment</Link> </button>


                            <button className="btn btn-primary rounded mt-3 ml-3 pl-4 pr-4" onClick={openChat1} >Chat</button>

                            {showPopup1 && (
                                <div>
                                    <section >
                                        <div className="container py-5">

                                            <div className="row d-flex justify-content-center">
                                                <div className="col-md-10 col-lg-8 col-xl-6">

                                                    <div className="card" id="chat2">
                                                        <div className="card-header d-flex justify-content-between align-items-center p-3">
                                                            <h5 className="mb-0">Chat</h5>
                                                            <button type="button" className="btn btn-primary btn-sm" data-mdb-ripple-color="dark" onClick={closeChat1} >Close
                                                            </button>
                                                        </div>
                                                        <div className="card-body" data-mdb-perfect-scrollbar="true">

                                                            <div className="d-flex flex-row justify-content-start">
                                                                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                                           alt="avatar 1" > </img> */}
                                                                <div>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary" >Hallo Mahasiswa</p>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary" >Welcome to the Chat box
                                                                    </p>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary"> Untuk menanyakan pertanyaan apa pun, silakan hubungi di 123-456-7890
                                                                    </p>
                                                                    {/* <p className="small ms-3 mb-3 rounded-3 text-muted">23:58</p> */}
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </section>
                                </div>
                            )}




                        </div>
                    </div>
                </div>










                {/* ________________________________________  2ND CONSULTANT  ________________________________________ */}


                <div className="container mt-5">
                    <div className="row text-center text-md-left">
                        <div className="col-md-3">
                            {/* <img src="assets/imgs/avatar.jpg" alt="" className="img-thumbnail mb-4"></img> */}
                            <img className='img-thumbnail mb-4   shadow-lg p-3 mb-5 bg-white rounded' src={process.env.PUBLIC_URL + "myimg/psikolog22.jpg"} />

                        </div>
                        <div className="pl-md-4 col-md-9">
                            <h6 className="title">Dr. Aprillia Diah Mentari</h6>
                            <p className="subtitle">MBBS, DPM</p>


                            {/* // startss */}
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>


                            <p>Dr. Aprillia Diah Mentari adalah Psikolog yang penuh perhatian dan berpusat pada pasien, dengan pengalaman luas dalam konseling. Beliau dengan penuh kasih berkomitmen untuk bekerja dengan remaja dan mahasiswa yang membutuhkan bantuan psikologis. Pendekatannya terutama melibatkan konseling kognitif-perilaku, humanistik, dan psikodinamik. Beliau menyesuaikan dialog dan rencana pengobatan untuk memenuhi kebutuhan unik dan khusus mahasiswa agar dapat membawa perubahan positif yang diinginkan.</p>

                            {/* <p>Anxiety, Depression, OCD, Relationship Issues, Couple Counseling, Grief & Loss, Bipolar Disorder, Suicidal Ideation, Psychosis, Sleep Issues, Cognitive Rehabilitation, Trauma, Phobia, Family Therapy, Narcissistic Abuse, LGBTQI, Anger, Self Confidence, ADHD (Adult)</p> */}

                            <button className="btn btn-primary rounded mt-3">  <Link to='/Bookapt' className='text-dark'>Book Appointment</Link> </button>



                            <button className="btn btn-primary rounded mt-3 ml-3 pl-4 pr-4" onClick={openChat2} >Chat</button>

                            {showPopup2 && (
                                <div>
                                    <section >
                                        <div className="container py-5">

                                            <div className="row d-flex justify-content-center">
                                                <div className="col-md-10 col-lg-8 col-xl-6">

                                                    <div className="card" id="chat2">
                                                        <div className="card-header d-flex justify-content-between align-items-center p-3">
                                                            <h5 className="mb-0">Chat</h5>
                                                            <button type="button" className="btn btn-primary btn-sm" data-mdb-ripple-color="dark" onClick={closeChat2} >Close
                                                            </button>
                                                        </div>
                                                        <div className="card-body" data-mdb-perfect-scrollbar="true">

                                                            <div className="d-flex flex-row justify-content-start">
                                                                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                                           alt="avatar 1" > </img> */}
                                                                <div>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary" >Hallo Mahasiswa</p>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary" >Welcome to the Chat box
                                                                    </p>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary"> Untuk menanyakan pertanyaan apa pun, silakan hubungi on 123-456-7890
                                                                    </p>
                                                                    {/* <p className="small ms-3 mb-3 rounded-3 text-muted">23:58</p> */}
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </section>
                                </div>
                            )}




                        </div>
                    </div>
                </div>









                {/* ------------------ 3 rd Consultant ----------------------------- */}




                <div className="container mt-5">
                    <div className="row text-center text-md-left">
                        <div className="col-md-3">
                            {/* <img src="assets/imgs/avatar.jpg" alt="" className="img-thumbnail mb-4"></img> */}
                            <img className='img-thumbnail mb-4       shadow-lg p-3 mb-5 bg-white rounded     ' src={process.env.PUBLIC_URL + "myimg/psikolog3.jpg"} />


                        </div>
                        <div className="pl-md-4 col-md-9">
                            <h6 className="title">Dr. Eliya Dwi Maulidai</h6>
                            <p className="subtitle">MBBS, DNB</p>

                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>




                            <p>Dr. Eliya Dwi Maulida adalah seorang psikolog konseling dengan pengalaman 7 tahun bekerja dengan mahasiswa, remaja, dan orang dewasa. Beliau terlatih sebagai Terapis Behavioral Kognitif namun mengadopsi pendekatan multidisiplin berdasarkan kebutuhan setiap mahasiswa. Tujuan beliau dalam terapi adalah memberikan mahasiswa dengan ruang yang aman untuk menjelajahi perasaan dan perilaku mereka. Beliau percaya bahwa setiap mahasiswa memiliki jawaban mereka sendiri dan mendukung mereka melalui perjalanan mereka dalam menjelajahi dan menemukan jawaban mereka.</p>


                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, pariatur, aperiam aut autem voluptas odit. Odio ducimus delectus totam sed aliquam sequi praesentium mollitia, illum repudiandae quidem quod, magni magnam.</p> */}

                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, eius, nam. Quo praesentium qui temporibus voluptatum, facilis aliquid eligendi fugiat beatae neque inventore non. Laborum repellendus consequatur ullam voluptatum asperiores.</p> */}
                            <button className="btn btn-primary rounded mt-3">  <Link to='/Bookapt' className='text-dark'>Book Appointment</Link> </button>

                            <button className="btn btn-primary rounded mt-3 ml-3 pl-4 pr-4" onClick={openChat3} >Chat</button>

                            {showPopup3 && (
                                <div>
                                    <section >
                                        <div className="container py-5">

                                            <div className="row d-flex justify-content-center">
                                                <div className="col-md-10 col-lg-8 col-xl-6">

                                                    <div className="card" id="chat2">
                                                        <div className="card-header d-flex justify-content-between align-items-center p-3">
                                                            <h5 className="mb-0">Chat</h5>
                                                            <button type="button" className="btn btn-primary btn-sm" data-mdb-ripple-color="dark" onClick={closeChat3} >Close
                                                            </button>
                                                        </div>
                                                        <div className="card-body" data-mdb-perfect-scrollbar="true">

                                                            <div className="d-flex flex-row justify-content-start">
                                                                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
               alt="avatar 1" > </img> */}
                                                                <div>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary" >Hallo Mahasiswa</p>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary" >Welcome to the Chat box
                                                                    </p>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary"> Untuk menanyakan pertanyaan apa pun, silakan hubungi 123-456-7890
                                                                    </p>
                                                                    {/* <p className="small ms-3 mb-3 rounded-3 text-muted">23:58</p> */}
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </section>
                                </div>
                            )}

                        </div>
                    </div>
                </div>

                {/* ------------------ 4 th Consultant ----------------------------- */}



                <div className="container mt-5">
                    <div className="row text-center text-md-left">
                        <div className="col-md-3">
                            <img className='img-thumbnail mb-4   shadow-lg p-3 mb-5 bg-white rounded' src={process.env.PUBLIC_URL + "imgs/psikolog7.jpg"} />

                        </div>
                        <div className="pl-md-4 col-md-9">
                            <h6 className="title">Fajar Hasby Madani.,M.Psi.</h6>
                            <p className="subtitle">MA in Counselling Psychology</p>


                            {/* // startss */}
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>


                            <p>Fajar Hasby Madani, M.Psi adalah seorang Psikolog Kesehatan berlisensi dan mantan peneliti yang berpengalaman lebih dari 4 tahun di bidang penelitian kesehatan dan praktik konseling. Beliau memiliki keahlian dalam konseling hubungan, psikoedukasi kesejahteraan, bimbingan pendidikan dan karier, psikoterapi eklektik, perawatan trauma, konseling nyeri kronis, perawatan paliatif, dan perawatan penggunaan zat. Dengan fokus pada mahasiswa, Fajar siap mendukung perjalanan kesehatan mental dan kesejahteraan Anda selama masa perkuliahan.</p>
                            {/* <p>Anxiety, Depression, OCD, Relationship Issues, Couple Counseling, Grief & Loss, Bipolar Disorder, Suicidal Ideation, Psychosis, Sleep Issues, Cognitive Rehabilitation, Trauma, Phobia, Family Therapy, Narcissistic Abuse, LGBTQI, Anger, Self Confidence, ADHD (Adult)</p> */}
                            <button className="btn btn-primary rounded mt-3">  <Link to='/Bookapt' className='text-dark'>Book Appointment</Link> </button>

                            <button className="btn btn-primary rounded mt-3 ml-3 pl-4 pr-4" onClick={openChat4} >Chat</button>

                            {showPopup4 && (
                                <div>
                                    <section >
                                        <div className="container py-5">

                                            <div className="row d-flex justify-content-center">
                                                <div className="col-md-10 col-lg-8 col-xl-6">

                                                    <div className="card" id="chat2">
                                                        <div className="card-header d-flex justify-content-between align-items-center p-3">
                                                            <h5 className="mb-0">Chat</h5>
                                                            <button type="button" className="btn btn-primary btn-sm" data-mdb-ripple-color="dark" onClick={closeChat4} >Close
                                                            </button>
                                                        </div>
                                                        <div className="card-body" data-mdb-perfect-scrollbar="true">

                                                            <div className="d-flex flex-row justify-content-start">
                                                                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
               alt="avatar 1" > </img> */}
                                                                <div>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary" >Hallo Mahasiswa</p>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary" >Welcome to the Chat box
                                                                    </p>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary"> Untuk menanyakan pertanyaan apa pun, silakan hubungi 123-456-7890
                                                                    </p>
                                                                    {/* <p className="small ms-3 mb-3 rounded-3 text-muted">23:58</p> */}
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </section>
                                </div>
                            )}

                        </div>
                    </div>
                </div>



                {/* ------------------ 5 th Consultant ----------------------------- */}


                <div className="container mt-5">
                    <div className="row text-center text-md-left">
                        <div className="col-md-3">
                            {/* <img src="assets/imgs/avatar.jpg" alt="" className="img-thumbnail mb-4"></img> */}
                            <img className='img-thumbnail mb-4   shadow-lg p-3 mb-5 bg-white rounded' src={process.env.PUBLIC_URL + "imgs/psikolog5.jpg"} />

                        </div>
                        <div className="pl-md-4 col-md-9">
                            <h6 className="title">Endrias Dendy Pratama., M.Psi.</h6>
                            <p className="subtitle">Msc in Health Psychology (gold medalist)</p>


                            {/* // startss */}
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>


                            <p>Endrias Dendy Pratama, M.Psi, seorang pembicara dibidang kesehatan mental, telah menjalani praktik profesionalnya selama 5 tahun. Beliau meyakini pentingnya memiliki kepedulian, pemahaman, dan sikap ramah terhadap klien dalam setiap situasi. Endrias berkomitmen untuk meningkatkan tingkat kesadaran kesehatan mental di kalangan mahasiswa di Indonesia, dengan harapan menciptakan pemahaman yang lebih baik.</p>
                            {/* <p>Anxiety, Depression, OCD, Relationship Issues, Couple Counseling, Grief & Loss, Bipolar Disorder, Suicidal Ideation, Psychosis, Sleep Issues, Cognitive Rehabilitation, Trauma, Phobia, Family Therapy, Narcissistic Abuse, LGBTQI, Anger, Self Confidence, ADHD (Adult)</p> */}
                            <button className="btn btn-primary rounded mt-3">  <Link to='/Bookapt' className='text-dark'>Book Appointment</Link> </button>

                            <button className="btn btn-primary rounded mt-3 ml-3 pl-4 pr-4" onClick={openChat5} >Chat</button>

                            {showPopup5 && (
                                <div>
                                    <section >
                                        <div className="container py-5">

                                            <div className="row d-flex justify-content-center">
                                                <div className="col-md-10 col-lg-8 col-xl-6">

                                                    <div className="card" id="chat2">
                                                        <div className="card-header d-flex justify-content-between align-items-center p-3">
                                                            <h5 className="mb-0">Chat</h5>
                                                            <button type="button" className="btn btn-primary btn-sm" data-mdb-ripple-color="dark" onClick={closeChat5} >Close
                                                            </button>
                                                        </div>
                                                        <div className="card-body" data-mdb-perfect-scrollbar="true">

                                                            <div className="d-flex flex-row justify-content-start">
                                                                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
               alt="avatar 1" > </img> */}
                                                                <div>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary" >Hallo Mahasiswa</p>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary" >Welcome to the Chat box
                                                                    </p>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary"> Untuk menanyakan pertanyaan apa pun, silakan hubungi 123-456-7890
                                                                    </p>
                                                                    {/* <p className="small ms-3 mb-3 rounded-3 text-muted">23:58</p> */}
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </section>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
                {/* ___________________________________________FROM - LOCAL STORAGE _____________ */}


                {/* <div className="container mt-5">
                    <div className="row text-center text-md-left">
                        <div className="col-md-3">
                            <img className='img-thumbnail mb-4   shadow-lg p-3 mb-5 bg-white rounded'  src={process.env.PUBLIC_URL + "myimg/anonymous.jpg"} alt='NO image uploaded' /> */}
                {/* src={process.env.PUBLIC_URL +  `{gotCphoto && (<div>{gotCphoto}</div>)}}` */}
                {/* </div> */}



                {/* Cname, Cpassword,Cphone_no,Caca,Cspeci,Cemail_id,Cphoto, */}

                {/* <div className="pl-md-4 col-md-9">
                            <h6 className="title"> {gotCname && (
                                <div> {gotCname} </div>
                            )}  </h6>
                            <div className="subtitle"> {gotCaca && (
                                <p>{gotCaca}</p>
                            )}  </div> */}


                {/* // startss */}
                {/* <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>


                            <div> {gotCspeci && (
                                <p> {gotCspeci} </p>
                            )}  </div> */}
                {/* <p>Anxiety, Depression, OCD, Relationship Issues, Couple Counseling, Grief & Loss, Bipolar Disorder, Suicidal Ideation, Psychosis, Sleep Issues, Cognitive Rehabilitation, Trauma, Phobia, Family Therapy, Narcissistic Abuse, LGBTQI, Anger, Self Confidence, ADHD (Adult)</p> */}
                {/* <button className="btn btn-primary rounded mt-3">  <Link to='/Bookapt' className='text-dark'>Book Appointment</Link> </button>

                            <button className="btn btn-primary rounded mt-3 ml-3 pl-4 pr-4" onClick={openChat4} >Chat</button>

                            {showPopup4 && gotCphone_no && (
                                <div>
                                    <section >
                                        <div className="container py-5">

                                            <div className="row d-flex justify-content-center">
                                                <div className="col-md-10 col-lg-8 col-xl-6">

                                                    <div className="card" id="chat2">
                                                        <div className="card-header d-flex justify-content-between align-items-center p-3">
                                                            <h5 className="mb-0">Chat</h5>
                                                            <button type="button" className="btn btn-primary btn-sm" data-mdb-ripple-color="dark" onClick={closeChat4} >Close
                                                            </button>
                                                        </div>
                                                        <div className="card-body" data-mdb-perfect-scrollbar="true">

                                                            <div className="d-flex flex-row justify-content-start"> */}
                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
               alt="avatar 1" > </img> */}
                {/* <div>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary" >Hello User</p>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary" >Welcome to the Chat box
                                                                    </p>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary"> To ask any queries please contact on <b>{gotCphone_no}</b>
                                                                    </p> */}
                {/* <p className="small ms-3 mb-3 rounded-3 text-muted">23:58</p> */}
                {/* </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </section>
                                </div> */}
                {/* )}

                        </div>
                    </div>
                </div>







 */}









                {/* __________________________________________FIRESTORE_______________________________________________ */}

{Consultant.map((Consultant, index) => { 
  return <div key={index} >
    {/* <b>{index+1} .</b>
    <b>Consultant Name :</b>  {Consultant.c_name} <br/>
    <b>Speci :</b>   {Consultant.c_speci}
    <hr/> */}
    <div className="container mt-5">
                    <div className="row text-center text-md-left">
                        <div className="col-md-3">
                            <img className='img-thumbnail mb-4   shadow-lg p-3 mb-5 bg-white rounded' src={process.env.PUBLIC_URL + "myimg/anonymous.jpg"} alt='NO image uploaded' />
                            {/* src={process.env.PUBLIC_URL +  `{gotCphoto && (<div>{gotCphoto}</div>)}}` */}
                        </div>



                        {/* Cname, Cpassword,Cphone_no,Caca,Cspeci,Cemail_id,Cphoto, */}

                        <div className="pl-md-4 col-md-9">
                            <h6 className="title">{Consultant.c_name}  </h6>
                            <div className="subtitle">
                                <p>{Consultant.c_aca}</p>
                            </div>


                            {/* // startss */}
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>


                            <div> {Consultant.c_speci}  </div>
                            {/* <p>Anxiety, Depression, OCD, Relationship Issues, Couple Counseling, Grief & Loss, Bipolar Disorder, Suicidal Ideation, Psychosis, Sleep Issues, Cognitive Rehabilitation, Trauma, Phobia, Family Therapy, Narcissistic Abuse, LGBTQI, Anger, Self Confidence, ADHD (Adult)</p> */}
                            <button className="btn btn-primary rounded mt-3">  <Link to='/Bookapt' className='text-dark'>Book Appointment</Link> </button>

                            <button className="btn btn-primary rounded mt-3 ml-3 pl-4 pr-4" onClick={openChat4} >Chat</button>

                            {showPopup4 && (
                                <div>
                                    <section >
                                        <div className="container py-5">

                                            <div className="row d-flex justify-content-center">
                                                <div className="col-md-10 col-lg-8 col-xl-6">

                                                    <div className="card" id="chat2">
                                                        <div className="card-header d-flex justify-content-between align-items-center p-3">
                                                            <h5 className="mb-0">Chat</h5>
                                                            <button type="button" className="btn btn-primary btn-sm" data-mdb-ripple-color="dark" onClick={closeChat4} >Close
                                                            </button>
                                                        </div>
                                                        <div className="card-body" data-mdb-perfect-scrollbar="true">

                                                            <div className="d-flex flex-row justify-content-start">
                                                                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
               alt="avatar 1" > </img> */}
                                                                <div>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary" >Hallo Mahasiswa</p>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary" >Welcome to the Chat box
                                                                    </p>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary"> To ask any queries please contact on <b>{Consultant.c_phone}</b>
                                                                    </p>
                                                                    {/* <p className="small ms-3 mb-3 rounded-3 text-muted">23:58</p> */}
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </section>
                                </div>
                            )}

                        </div>
                    </div>
                </div>

  </div>
  })}
            </section>
            <Foot />
        </div>
    )
}

export default Consul;