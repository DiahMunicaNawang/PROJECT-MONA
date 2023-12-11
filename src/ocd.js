import React from 'react';
import Navibar from './navibar';
import Foot from './foot';

function Ocd(){
    return(
        <div>
        <div >
            <Navibar />
            <section id="contact" className="position-relative section      before-content   bgg ">
                <div className="container text-center aboutfont ">
                    {/* <h6 className="subtitle">Contact</h6> */}
                    <h1 className="section-title mb-4  tfonts ">Obsessive-Compulsive Disorder (ODC): Menyelami Tantangan Pikiran dan Perilaku Berulang</h1>
                    {/* <p className="mb-5 pb-4">on various mental health conditions people might suffer through.</p> */}




                    <section id="portfolio" className="section ">
                        <div className="container text-center">

                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "ocd/ocd11.png"} />



                                    </div>
                                    <div className="img-wrapper">

                                        <img src={process.env.PUBLIC_URL + "ocd/ocd22.png"} />





                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "ocd/ocd33.png"} />





                                    </div>
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "ocd/ocd44.png"} />





                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "ocd/ocd55.png"} />





                                    </div>
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "ocd/ocd6.jpeg"} />




                                    </div>
                                </div>

                            </div>


                        </div>

                        <b>
Gangguan Obsesif-Compulsif (ODC) adalah kondisi mental yang melibatkan pola pikiran obsesif yang mengganggu, 
diikuti oleh perilaku kompulsif sebagai upaya untuk meredakan kecemasan. 
Orang dengan ODC mungkin mengalami pikiran yang terus-menerus dan tidak diinginkan, 
seperti kekhawatiran berlebihan tentang kebersihan, keselamatan, atau kesejahteraan diri dan orang lain. 
Kompulsi, tindakan berulang yang dilakukan untuk mengurangi kecemasan, sering kali mencakup ritual tertentu atau 
tindakan yang diulang secara berulang. Manajemen ODC melibatkan terapi, terutama terapi kognitif perilaku (CBT),
 yang membantu mengubah pola pikiran dan perilaku negatif. Obat-obatan tertentu juga dapat digunakan untuk mengurangi gejala. 
Penting bagi individu dengan ODC dan orang-orang di sekitarnya untuk memahami bahwa ini adalah kondisi medis yang dapat diatasi dengan 
dukungan, pengobatan, dan pemahaman yang tepat.</b>
                       
                    </section>

                </div>
            </section>

            <div className='mt-5'>

            </div>


            <Foot/>
        </div>
    </div>
    )
}export default Ocd;