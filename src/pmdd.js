import React from 'react';
import Foot from './foot';
import Navibar from './navibar';

function Pmdd(){
    return(
        <div>
        <div >
            <Navibar />
            <section id="contact" className="position-relative section      before-content   bgg ">
                <div className="container text-center aboutfont ">
                    {/* <h6 className="subtitle">Contact</h6> */}
                    <h1 className="section-title mb-4  tfonts ">Gangguan Disforik Premenstruasi (PMDD): Memahami dan Mengelola Tantangan
</h1>
                    {/* <p className="mb-5 pb-4">on various mental health conditions people might suffer through.</p> */}




                    <section id="portfolio" className="section ">
                        <div className="container text-center">

                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="img-wrapper">
                                        {/* <img src={process.env.PUBLIC_URL + "imgs/folio-1.jpg"} /> */}
                                        <img src={process.env.PUBLIC_URL + "pmdd/pmdd1.jpeg"} />



                                    </div>
                                    <div className="img-wrapper">

                                        <img src={process.env.PUBLIC_URL + "pmdd/pmdd11.png"} />





                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "pmdd/pmdd22.png"} />





                                    </div>
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "pmdd/pmdd4.jpeg"} />





                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "pmdd/pmdd5.jpeg"} />





                                    </div>
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "pmdd/pmdd6.jpeg"} />




                                    </div>
                                </div>

                            </div>


                        </div>

                        <b>Gejala Umum:

Perubahan Mood: PMDD dapat menyebabkan perubahan mood yang parah, menciptakan perasaan sedih, putus asa, atau iritabilitas yang intens.
Kelelahan: Perempuan dengan PMDD sering mengalami kelelahan ekstrem, memengaruhi tingkat energi dan aktivitas sehari-hari.
Kesulitan Berkonsentrasi: PMDD dapat menyebabkan kesulitan fokus pada tugas, mengakibatkan tantangan dalam pekerjaan atau lingkungan akademis.
Perubahan Nafsu Makan: Beberapa orang mungkin mengalami perubahan nafsu makan, menyebabkan makan berlebihan atau kehilangan minat pada makanan.
Gangguan Tidur: Insomnia atau pola tidur yang terganggu adalah gejala umum, berkontribusi pada keseluruhan tekanan.

Manajemen PMDD:

Konsultasi Medis: Konsultasi dengan profesional kesehatan sangat penting untuk diagnosis yang akurat dan rencana pengobatan yang disesuaikan.
Obat-obatan: Bergantung pada keparahan gejala, obat seperti antidepresan atau pengobatan hormonal dapat direkomendasikan.
Perubahan Gaya Hidup: Mengadopsi gaya hidup sehat, termasuk olahraga teratur, nutrisi seimbang, dan tidur yang cukup, dapat berdampak positif pada gejala PMDD.
Dukungan Terapi: Psikoterapi dapat membantu individu mengembangkan strategi penanganan dan mengelola tantangan emosional.
Lingkungan Dukungan: Membangun jaringan pendukung dari teman, keluarga, atau kelompok dukungan dapat memberikan bantuan emosional selama masa-masa sulit.</b>
                       
                    </section>

                </div>
            </section>

            <div className='mt-5'>

            </div>


            <Foot/>
        </div>
    </div>
    )
}export default Pmdd;