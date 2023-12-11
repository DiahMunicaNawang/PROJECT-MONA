import React from 'react';
import Navibar from './navibar';
import Foot from './foot.js'

function Aspect() {
    return (
        <div>
            <Navibar />
            <section id="blog" className="section     before-content ">
                <div className="container text-center ">
                    <div className='titles' >
                        <h6 className="subtitle ">Ayo Mahasiswa</h6>
                        <h6 className="section-title mb-2 ">Hidupkan Kembali Pikiranmu</h6>
                        <p className="mb-5 pb-4">Rasakan pencerahan dan tinggalkan ernergi negativemu</p>
                    </div>

                    {/* ************************  MEDICATION ******************************** */}

                    <div>
                        <h2 className='text-justify' >Meditasi</h2>
                        <p className='text-justify' >Mari Saling Dukung! Bergabunglah dalam Sesi Meditasi Bersama Sebagai Mahasiswa untuk Menjaga Kesehatan Mental Kita. Temukan Landasan Spiritual yang Membantu Melakukan Latihan Meditasi yang Sempurna untuk Menyokong Perjalanan Kita sebagai Mahasiswa.</p>
                    </div>

                    <div className="row text-left">
                        <div className="col-md-4">
                            <div className="card border mb-4">
                                {/* <img src="assets/imgs/blog-1.jpg" alt="" className="card-img-top w-100"></img> */}
                                <img className='card-img-top' src={process.env.PUBLIC_URL + "myimg/medi.jpg"} />

                                <div className="card-body">
                                    <h5 className="card-title">Lakukan Meditasi Ini Untuk Penyembuhan Diri! Rasakan Manfaat Meditasi Ini Untuk Tubuhmu!</h5>
                                    <div className="post-details">
                                        <a href="#">Posted By: SKWAD Health</a>
                                        {/* <a href="#"><i className="ti-thumb-up"></i> 456</a>
                                        <a href="#"><i className="ti-comment"></i> 123</a> */}
                                    </div>
                                    <p>Mari Lakukan Meditasi Ini sebagai Proses Penyembuhan Diri! Rasakan Sendiri Manfaat Luar Biasa Meditasi Ini untuk Kesehatan Tubuhmu!</p>
                                    <a href="https://youtu.be/Wv1Likcjjho?si=UtddcYA7O-xyVDKW">Coba Sekarang..</a>
                                </div>
                            </div>
                        </div>

                        {/* ************************ 2 **************************** */}

                        <div className="col-md-4">
                            <div className="card border mb-4">
                                {/* <img src="assets/imgs/blog-2.jpg" alt="" className="card-img-top w-100"></img> */}
                                <img className='card-img-top' src={process.env.PUBLIC_URL + "myimg/medi2.jpg"} />

                                <div className="card-body">
                                    <h5 className="card-title">Sering Merasa Overthingking? Lakukan Meditasi Mindfulness Ini Untuk Mengatasinya!</h5>
                                    <div className="post-details">
                                        <a href="#">Posted By: SKWAD Health</a>
                                        {/* <a href="#"><i className="ti-thumb-up"></i> 456</a>
                                        <a href="#"><i className="ti-comment"></i> 123</a> */}
                                    </div>
                                    <p>Praktik Meditasi ini dapat Membantu Mengatasi Overthinking serta Memberikan Dampak Positif pada Kesejahteraan Mental dan Emosional dalam Perjalanan Kita sebagai Mahasiswa.</p>
                                    <a href="https://youtu.be/wIiUxN5sE7Y?si=yd4Yxe6DOUwD3SAY">Coba Sekarang..</a>
                                </div>
                            </div>
                        </div>

                        {/* ************************ 3 **************************** */}


                        <div className="col-md-4">
                            <div className="card border mb-4">
                                {/* <img src="assets/imgs/blog-3.jpg" alt="" className="card-img-top w-100"></img> */}
                                <img className='card-img-top' src={process.env.PUBLIC_URL + "myimg/medi3.jpg"} />

                                <div className="card-body">
                                    <h5 className="card-title">Merasa Hidupmu Dalam Kondisi Tertekan? Lakukan Meditasi Ini Untuk Membuat Hidupmu Lebih Tenang!</h5>
                                    <div className="post-details">
                                        <a href="#">Posted By: SKWAD Health</a>
                                        {/* <a href="#"><i className="ti-thumb-up"></i> 456</a>
                                        <a href="#"><i className="ti-comment"></i> 123</a> */}
                                    </div>
                                    <p>Ajak Diri Kamu untuk Menjelajahi Ketenangan Diri Melalui Meditasi! Temukan Cara Ini untuk Membuat Hidup sebagai Mahasiswa Lebih Tenang dan Penuh Keseimbangan. </p>
                                    <a href="https://youtu.be/Wn-K5nCcQ-g?si=XpQpkqZ86hbldazL">Coba Sekarang..</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* **********************************************  MUSIC  ************************** */}



                    <div>
                        <h2 className='text-justify' >Musik lembut</h2>
                        <p className='text-justify' >
                        Ini memberikan latihan otak total. Dapat mengurangi kecemasan, tekanan darah, dan nyeri serta meningkatkan kualitas tidur, suasana hati, kewaspadaan mental, dan daya ingat</p>
                    </div>
                    <div className="row text-left">
                        <div className="col-md-4">
                            <div className="card border mb-4">
                                {/* <img src="assets/imgs/blog-1.jpg" alt="" className="card-img-top w-100"></img> */}
                                <img className='card-img-top' src={process.env.PUBLIC_URL + "myimg/music.jpg"} />

                                <div className="card-body">
                                    <h5 className="card-title">Penyembuhan Insomnia, pelepasan melatonin dan racun, relaksasi instan - penyembuhan musik tidur</h5>
                                    <div className="post-details">
                                        <a href="#">Posted By: Music For Sleep</a>
                                        {/* <a href="#"><i className="ti-thumb-up"></i> 456</a>
                                        <a href="#"><i className="ti-comment"></i> 123</a> */}
                                    </div>
                                    <p>Temukan Manfaat Pelepasan Melatonin dan Detoksifikasi Tubuh dengan Meditasi Tidur serta Nikmati Sensasi Relaksasi Instan Melalui Pengalaman Mendengarkan Musik Tidur yang Dapat Membantu Proses PenyembuhanF. </p>
                                    <a href="https://youtu.be/BVAw2eDQWf0?si=UMY9xbufEA7wAdfm">Coba Sekarang..</a>
                                </div>
                            </div>
                        </div>
                        {/* ***************** 2 ************************************ */}

                        <div className="col-md-4">
                            <div className="card border mb-4">
                                {/* <img src="assets/imgs/blog-2.jpg" alt="" className="card-img-top w-100"></img> */}
                                <img className='card-img-top' src={process.env.PUBLIC_URL + "myimg/music2.jpg"} />

                                <div className="card-body">
                                    <h5 className="card-title">Gelombang alfa menyembuhkan kerusakan pada tubuh, pijat otak saat Anda tidur, meningkatkan ingatan A</h5>
                                    <div className="post-details">
                                        <a href="#">Posted By: Lovely Sensation</a>
                                        {/* <a href="#"><i className="ti-thumb-up"></i> 456</a>
                                        <a href="#"><i className="ti-comment"></i> 123</a> */}
                                    </div>
                                    <p>Manfaatkan Gelombang Alfa untuk Mendukung Proses Penyembuhan Tubuh Anda, Aktifkan Pijatan Otak Saat Tidur untuk Mahasiswa yang Sibuk, dan Tingkatkan Kapasitas Ingatan Secara Optimal.</p>
                                    <a href="https://www.youtube.com/live/rDjUx6_Itdg?si=eD6cT64svyLNYniB">Coba Sekarang..</a>
                                </div>
                            </div>
                        </div>
                        {/* ***************** 3 ************************************ */}


                        <div className="col-md-4">
                            <div className="card border mb-4">
                                {/* <img src="assets/imgs/blog-3.jpg" alt="" className="card-img-top w-100"></img> */}
                                <img className='card-img-top' src={process.env.PUBLIC_URL + "myimg/music3.jpg"} />

                                <div className="card-body">
                                    <h5 className="card-title">Musik Relaksasi Untuk Tidur dan Meditasi | Musik Tidur Nyenyak│Yang Terbaik Musik Santai</h5>
                                    <div className="post-details">
                                        <a href="#">Posted By: Soothing Relaxation Music </a>
                                        {/* <a href="#"><i className="ti-thumb-up"></i> 456</a>
                                        <a href="#"><i className="ti-comment"></i> 123</a> */}
                                    </div>
                                    <p>Nikmati Musik Relaksasi Khusus untuk Mahasiswa yang Mendukung Kualitas Tidur dan Meditasi. Temukan Pengalaman Tidur Nyenyak dengan Deretan Musik Santai Terbaik yang Dikurasi untuk Menunjang Kesejahteraan Mahasiswa.
</p>
                                    <a href="https://youtu.be/nKHBIAdBvZ4?si=BAsQWvelPgWw7SHq">Coba Sekarang..</a>
                                </div>
                            </div>
                        </div>
                    </div>




                    {/* ********************************** PODCAST  ***************************************** */}




                    <div>
                        <h2 className='text-justify' >Podcast</h2>
                        <p className='text-justify' >Podcast bisa menjadi alat yang sangat berguna bagi mahasiswa dalam membangun koneksi sosial dan menghindari perasaan terisolasi selama mereka berfokus pada pengelolaan kesehatan mental.</p>
                    </div>
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
                                    <a href="https://youtu.be/m3eJG5mnsrY?si=atsYaqJwV2R2FKbO">Coba Sekarang..</a>
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
                                    <a href="https://youtu.be/MKJppZ18FYU?si=9gmRIkCXa36Gxwd4">Coba Sekarang..</a>
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
                                    <a href="https://youtu.be/wrktmhWo4f4?si=ptAdRjjNfoDGtV8h">Coba Sekarang..</a>
                                </div>
                            </div>
                        </div>
                    </div>




                    {/* ********************** YOGA **************** */}


                    <div>
                        <h2 className='text-justify' >Yoga</h2>
                        <p className='text-justify' >Dalam Konteks Mahasiswa, Yoga Menjadi Pilar Penting dalam Menangani Manajemen Stres, Meningkatkan Kesehatan Mental, Membangun Kewaspadaan, Mendorong Pola Makan Sehat, Menunjang Proses Penurunan Berat Badan, serta Meningkatkan Kualitas Tidur.</p>
                    </div>
                    <div className="row text-left">
                        <div className="col-md-4">
                            <div className="card border mb-4">
                                {/* <img src="assets/imgs/blog-1.jpg" alt="" className="card-img-top w-100"></img> */}
                                <img className='card-img-top' src={process.env.PUBLIC_URL + "myimg/yoga.jpg"} />

                                <div className="card-body">
                                    <h5 className="card-title">YOGA MENGATASI RASA CEMAS | Menenangkan Pikiran & Meringankan Kecemasan </h5>
                                    <div className="post-details">
                                        <a href="#">Posted By: Noise Peace</a>
                                        {/* <a href="#"><i className="ti-thumb-up"></i> 456</a>
                                        <a href="#"><i className="ti-comment"></i> 123</a> */}
                                    </div>
                                    <p> Menenangkan Pikiran dan Meringankan Kecemasan Sebagai Suatu Keterampilan Hidup yang Bermanfaat. Temukan Bagaimana Praktik Yoga Dapat Memberikan Dukungan Nyata untuk Mengelola Stres dan Kecemasan Selama Perjalanan Kita Sebagai Mahasiswa.</p>
                                    <a href="https://youtu.be/hSE1IhoP7Gk?si=lboJci0HhmqeAko5">Coba Sekarang..</a>
                                </div>
                            </div>
                        </div>
                        {/* ********************** 2 **************************** */}
                        <div className="col-md-4">
                            <div className="card border mb-4">
                                {/* <img src="assets/imgs/blog-2.jpg" alt="" className="card-img-top w-100"></img> */}
                                <img className='card-img-top' src={process.env.PUBLIC_URL + "myimg/yoga2.jpeg"} />

                                <div className="card-body">
                                    <h5 className="card-title">Yoga untuk Kesehatan Mental </h5>
                                    <div className="post-details">
                                        <a href="#">Posted By: Penyogaster Official</a>
                                        {/* <a href="#"><i className="ti-thumb-up"></i> 456</a>
                                        <a href="#"><i className="ti-comment"></i> 123</a> */}
                                    </div>
                                    <p>Mengintegrasikan Yoga dalam Gaya Hidup Mahasiswa: Sebuah Pendekatan Holistik untuk Menjaga dan Meningkatkan Kesehatan Mental. Temukan Keseimbangan dalam Tantangan Kehidupan Akademis dan Pribadi dengan Praktik Yoga yang Menyeluruh.</p>
                                    <a href="https://youtu.be/-JOd2zokIAE?si=B5PTLHVLpS7eE9uR">Coba Sekarang..</a>
                                </div>
                            </div>
                        </div>

                        {/* ************************** 3 **************************** */}


                        <div className="col-md-4">
                            <div className="card border mb-4">
                                {/* <img src="assets/imgs/blog-3.jpg" alt="" className="card-img-top w-100"></img> */}
                                <img className='card-img-top' src={process.env.PUBLIC_URL + "myimg/yoga3.jpeg"} />

                                <div className="card-body">
                                    <h5 className="card-title">Hilangkan Rasa Sakit dengan Mencoba Yoga | Melepas Trauma | Relaksasi Rasa Sakit </h5>
                                    <div className="post-details">
                                        <a href="#">Posted By: JIVVA Fit</a>
                                        {/* <a href="#"><i className="ti-thumb-up"></i> 456</a>
                                        <a href="#"><i className="ti-comment"></i> 123</a> */}
                                    </div>
                                    <p>Mengatasi Trauma dan Mencapai Relaksasi untuk Mahasiswa yang Mengalami Beban Emosional. Rasakan Sendiri Ketenangan dan Penyembuhan untuk Mengurangi Rasa Sakit dalam Perjalanan Keseharian sebagai Mahasiswa yang Penuh Tantangan.</p>
                                    <a href="https://youtu.be/3LqPhHlpwgs?si=Z3s-zp40V2Z9oIu_">Coba Sekarang..</a>
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

export default Aspect;