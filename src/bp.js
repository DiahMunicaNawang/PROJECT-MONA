import React from 'react';
import Navibar from './navibar';
import Foot from './foot';

function Bp(){
    return(
        <div>
        <div >
            <Navibar />
            <section id="contact" className="position-relative section      before-content   bgg ">
                <div className="container text-center aboutfont ">
                    {/* <h6 className="subtitle">Contact</h6> */}
                    <h1 className="section-title mb-4  tfonts ">Bipolar Disorder</h1>
                    {/* <p className="mb-5 pb-4">on various mental health conditions people might suffer through.</p> */}




                    <section id="portfolio" className="section ">
                        <div className="container text-center">

                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="img-wrapper">
                                        {/* <img src={process.env.PUBLIC_URL + "imgs/folio-1.jpg"} /> */}
                                        <img src={process.env.PUBLIC_URL + "bp/bp1.png"} />



                                    </div>
                                    <div className="img-wrapper">

                                        <img src={process.env.PUBLIC_URL + "bp/bp2.jpg"} />





                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "bp/bp3.png"} />





                                    </div>
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "bp/bp4.jpg"} />





                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "bp/bp5.png"} />





                                    </div>
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "bp/bp6.jpg"} />




                                    </div>
                                </div>

                            </div>


                        </div>

                        <b>Gangguan Bipolar, juga dikenal sebagai gangguan suasana hati bipolar, adalah kondisi kesehatan mental yang melibatkan 
perubahan ekstrem antara episode mania yang tinggi energi dan episode depresi yang rendah energi. Pada episode mania, 
seseorang mungkin mengalami energi berlebih, pikiran yang cepat, dan kurang tidur tanpa kelelahan yang berarti. 
Di sisi lain, episode depresi ditandai oleh perasaan sedih, kehilangan minat, isolasi sosial, dan pikiran negatif.</b>
                        <div>

                            <b>Manajemen gangguan bipolar melibatkan perawatan medis oleh profesional kesehatan mental, terapi bicara seperti terapi 
kognitif perilaku untuk mengatasi pola pikir negatif, dan menjaga pola hidup sehat, termasuk pola tidur yang teratur, 
olahraga teratur, dan nutrisi seimbang. Dukungan sosial dari keluarga, teman, dan kelompok dukungan juga memainkan peran 
penting dalam membantu individu menghadapi tantangan gangguan bipolar.
                            </b>

                            <b>Penting untuk menyadari stigma seputar gangguan bipolar dan bekerja bersama untuk menciptakan lingkungan yang mendukung dan inklusif. 
Jika Anda atau seseorang yang Anda kenal mengalami gejala gangguan bipolar, segera mencari bantuan profesional dapat memberikan 
evaluasi dan perencanaan perawatan yang sesuai.</b>
                        </div>
                    </section>

                </div>
            </section>

            <div className='mt-5'>

            </div>


            <Foot/>
        </div>
    </div>
    )
}export default Bp;