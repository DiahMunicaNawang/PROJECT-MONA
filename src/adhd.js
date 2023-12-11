import React from 'react';
import Navibar from './navibar';
import Foot from './foot';

function Adhd() {
    return (
        <div>
            <div >
                <Navibar />
                <section id="contact" className="position-relative section      before-content   bgg ">
                    <div className="container text-center aboutfont ">
                        {/* <h6 className="subtitle">Contact</h6> */}
                        <h1 className="section-title mb-4  tfonts ">Gangguan Hiperaktivitas dan Perhatian (ADHD): Mengatasi Tantangan dan Menerima Kekuatan</h1>
                        {/* <p className="mb-5 pb-4">on various mental health conditions people might suffer through.</p> */}




                        <section id="portfolio" className="section ">
                            <div className="container text-center">

                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="img-wrapper">
                                            {/* <img src={process.env.PUBLIC_URL + "imgs/folio-1.jpg"} /> */}
                                            <img src={process.env.PUBLIC_URL + "adhd/adhd1.png"} />



                                        </div>
                                        <div className="img-wrapper">

                                            <img src={process.env.PUBLIC_URL + "adhd/adhd2.jpeg"} />





                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="img-wrapper">
                                            <img src={process.env.PUBLIC_URL + "adhd/adhd3.png"} />





                                        </div>
                                        <div className="img-wrapper">
                                            <img src={process.env.PUBLIC_URL + "adhd/adhd44.png"} />





                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="img-wrapper">
                                            <img src={process.env.PUBLIC_URL + "adhd/adhd5.jpeg"} />





                                        </div>
                                        <div className="img-wrapper">
                                            <img src={process.env.PUBLIC_URL + "adhd/adhd4.png"} />




                                        </div>
                                    </div>

                                </div>


                            </div>

                            <b>Gejala Umum:

Ketidakfokusan: Kesulitan mempertahankan perhatian, sering membuat kesalahan karena ceroboh, dan lupa.
Hiperaktivitas: Gelisah, sering menggerak-gerakkan tubuh, dan kesulitan berpartisipasi dalam kegiatan yang tenang.
Impulsivitas: Bertindak tanpa berpikir, menginterupsi orang lain, dan kesulitan menunggu giliran.

Menerima Kekuatan:

Kreativitas: Banyak individu dengan ADHD menunjukkan kreativitas tinggi, berpikir di luar kebiasaan, dan memberikan solusi inovatif.
Energi dan Antusiasme: Tingkat energi yang tinggi dapat diarahkan ke dalam antusiasme, membuat tugas menjadi menarik dan menantang.
Hiperfokus: Meskipun perhatian mungkin sulit, beberapa orang dengan ADHD mengalami hiperfokus, memungkinkan konsentrasi mendalam pada area minat tertentu.

Strategi Manajemen:

Rutinitas Terstruktur: Menetapkan rutinitas harian yang konsisten membantu menciptakan lingkungan yang dapat diprediksi.
Membagi Tugas Menjadi Langkah-langkah Kecil: Membagi tugas menjadi langkah-langkah kecil membuatnya lebih dapat dicapai.
Penggunaan Alat dan Teknologi: Planner, pengingat, dan teknologi dapat membantu dalam organisasi dan manajemen waktu.
Penguatan Positif: Memberikan dorongan dan mengakui pencapaian meningkatkan harga diri dan motivasi.
Dukungan Terapi: Terapi kognitif perilaku (CBT) menyediakan strategi penanganan dan meningkatkan keterampilan eksekutif.
</b>
                            <div>

                                     <b>
                                        

                                    </b>




                                                            </div>
                        </section>

                    </div>
                </section>

                <div className='mt-5'>

                </div>


                <Foot />
            </div>
        </div>
    )
} export default Adhd;