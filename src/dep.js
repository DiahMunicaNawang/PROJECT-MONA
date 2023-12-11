import React from 'react';
import Navibar from './navibar';
import Foot from './foot';

function Dep(){
    return(
        <div>
        <div >
            <Navibar />
            <section id="contact" className="position-relative section      before-content   bgg ">
                <div className="container text-center aboutfont ">
                    {/* <h6 className="subtitle">Contact</h6> */}
                    <h1 className="section-title mb-4  tfonts ">Mengatasi Depresi: Langkah Pertama Menuju Kesejahteraan Emosional</h1>
                    {/* <p className="mb-5 pb-4">on various mental health conditions people might suffer through.</p> */}




                    <section id="portfolio" className="section ">
                        <div className="container text-center">

                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "dep/depresi11.png"} />



                                    </div>
                                    <div className="img-wrapper">

                                        <img src={process.env.PUBLIC_URL + "dep/depresi22.png"} />





                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "dep/depresi33.png"} />





                                    </div>
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "dep/depresi44.png"} />





                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "dep/dep5.jpeg"} />





                                    </div>
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "dep/dep6.jpeg"} />




                                    </div>
                                </div>

                            </div>


                        </div>

                        <b>Depresi adalah gangguan kesehatan mental yang memengaruhi suasana hati, energi, dan persepsi diri. 
Individu yang mengalami depresi mungkin merasa sedih yang mendalam, kehilangan minat pada aktivitas yang biasa dinikmati, dan mengalami gangguan tidur. 
Langkah pertama dalam mengatasi depresi adalah menyadari gejala dan mencari bantuan. 
Terapi psikologis, terutama terapi kognitif perilaku (CBT), dapat membantu mengidentifikasi dan mengubah pola pikiran negatif. 
Obat-obatan juga dapat direkomendasikan oleh profesional kesehatan mental untuk mengelola gejala. 
Menjaga gaya hidup sehat, termasuk olahraga teratur, pola tidur yang baik, dan dukungan sosial, juga berperan penting dalam pemulihan. 
Penting untuk diingat bahwa depresi adalah kondisi medis yang dapat diatasi dengan perawatan yang tepat dan dukungan yang baik dari keluarga, 
teman, dan profesional kesehatan mental. Jika Anda atau seseorang yang Anda kenal mengalami gejala depresi, 
mencari bantuan segera adalah langkah penting menuju kesejahteraan emosional.</b>
                       
                    </section>

                </div>
            </section>

            <div className='mt-5'>

            </div>


            <Foot/>
        </div>
    </div>
    )
}export default Dep;