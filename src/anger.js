import React from 'react';
import Navibar from './navibar';
import Foot from './foot';

function Anger(){
    return(
        <div>
        <div >
            <Navibar />
            <section id="contact" className="position-relative section      before-content   bgg ">
                <div className="container text-center aboutfont ">
                    {/* <h6 className="subtitle">Contact</h6> */}
                    <h1 className="section-title mb-4  tfonts ">Mengelola Emosi Marah: Menemukan Keseimbangan dalam Bukan Ekspresi Kemarahan Yang Merugikan</h1>
                    {/* <p className="mb-5 pb-4">on various mental health conditions people might suffer through.</p> */}




                    <section id="portfolio" className="section ">
                        <div className="container text-center">

                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "anger/anger1.png"} />



                                    </div>
                                    <div className="img-wrapper">

                                        <img src={process.env.PUBLIC_URL + "anger/anger2.png"} />





                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "anger/anger3.png"} />





                                    </div>
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "anger/anger4.png"} />





                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "anger/anger5.jpeg"} />





                                    </div>
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "anger/anger6.jpeg"} />




                                    </div>
                                </div>

                            </div>


                        </div>

                        <b>Marah adalah emosi alami yang muncul sebagai respons terhadap frustrasi, ketidakpuasan, atau rasa tidak setuju. 
Pentingnya mengelola emosi marah adalah agar tidak merugikan diri sendiri atau orang lain. 
Mengekspresikan kemarahan dengan cara yang konstruktif melibatkan kesadaran akan sumber ketidakpuasan dan mencari solusi yang produktif. 
Terkadang, mengambil napas dalam-dalam, memberi diri waktu untuk merenung, atau berbicara secara tenang dapat membantu menyejukkan diri. 
Penting juga untuk mengidentifikasi pola-pola pikiran yang dapat memperburuk kemarahan dan mencari alternatif positif. 
Mendekati situasi dengan pemahaman dan empati dapat memperkuat hubungan interpersonal. 
Dengan mengembangkan keterampilan mengelola emosi marah, 
seseorang dapat menciptakan lingkungan yang lebih positif dan sehat bagi dirinya sendiri dan orang lain.
</b>
                        
                    </section>

                </div>
            </section>

            <div className='mt-5'>

            </div>


            <Foot/>
        </div>
    </div>
    )
}export default Anger;