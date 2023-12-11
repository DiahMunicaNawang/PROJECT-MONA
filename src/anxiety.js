import React from 'react';
import Navibar from './navibar';
import Foot from './foot';
import './App.css';


function Anxiety() {
    return (
        <div>
            <div >
                <Navibar />
                <section id="contact" className="position-relative section      before-content   bgg ">
                    <div className="container text-center aboutfont ">
                        {/* <h6 className="subtitle">Contact</h6> */}
                        <h1 className="section-title mb-4  tfonts ">Kecemasan & Serangan panik</h1>
                        {/* <p className="mb-5 pb-4">on various mental health conditions people might suffer through.</p> */}




                        <section id="portfolio" className="section ">
                            <div className="container text-center">

                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="img-wrapper">
                                            {/* <img src={process.env.PUBLIC_URL + "imgs/folio-1.jpg"} /> */}
                                            <img src={process.env.PUBLIC_URL + "anxiety/panic11.png"} />



                                        </div>
                                        <div className="img-wrapper">

                                            <img src={process.env.PUBLIC_URL + "anxiety/panic22.png"} />




                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="img-wrapper">
                                            <img src={process.env.PUBLIC_URL + "anxiety/panic33.png"} />




                                        </div>
                                        <div className="img-wrapper">
                                            <img src={process.env.PUBLIC_URL + "anxiety/panic44.png"} />




                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="img-wrapper">
                                            <img src={process.env.PUBLIC_URL + "anxiety/panic55.png"} />




                                        </div>
                                        <div className="img-wrapper">
                                            <img src={process.env.PUBLIC_URL + "anxiety/panic66.png"} />



                                        </div>
                                    </div>

                                </div>


                            </div>
                            <div className='ml-5 mr-5 text-secondary'>
                                <b >Serangan kecemasan cenderung terjadi sebagai respons terhadap tekanan tertentu dan dapat berkembang secara bertahap, 
sedangkan serangan panik dapat terjadi tiba-tiba dan dengan cepat. Keduanya bisa menunjukkan adanya kondisi kesehatan yang mendasar. 
Gejala kecemasan meliputi:
                                </b>
                                <div>
                                    <b>
                                        <ol>Kekhawatian</ol>
                                        <ol>Kesedihan</ol>
                                        <ol>Rasa takut</ol>

                                    </b>
                                    <b>Jika Anda merasakan diri Anda berada di tengah-tengah serangan kecemasan atau serangan panik... 
Ambil napas dalam-dalam secara perlahan: Praktikkan mindfulness, gunakan teknik relaksasi, 
kurangi dan kelola sumber stres dalam hidup Anda. Pelajari cara mengidentifikasi dan menghentikan pikiran negatif. 
Lakukan olahraga teratur yang sedang. Praktikkan meditasi atau yoga. Konsumsi makanan seimbang. 
Bergabung dengan kelompok dukungan untuk orang dengan kecemasan atau serangan panik. Batasi konsumsi alkohol dan kafein serta penggunaan obat-obatan.
</b>
                                </div>
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
}

export default Anxiety;