import React from 'react';
import Foot from './foot';
import Navibar from './navibar';

function Phobia(){
    return(
        <div>
        <div >
            <Navibar />
            <section id="contact" className="position-relative section      before-content   bgg ">
                <div className="container text-center aboutfont ">
                    {/* <h6 className="subtitle">Contact</h6> */}
                    <h1 className="section-title mb-4  tfonts ">Fobia: Mengatasi Ketakutan yang Menghambat Kehidupan</h1>
                    {/* <p className="mb-5 pb-4">on various mental health conditions people might suffer through.</p> */}




                    <section id="portfolio" className="section ">
                        <div className="container text-center">

                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="img-wrapper">
                                        {/* <img src={process.env.PUBLIC_URL + "imgs/folio-1.jpg"} /> */}
                                        <img src={process.env.PUBLIC_URL + "phobia/phobia11.png"} />



                                    </div>
                                    <div className="img-wrapper">

                                        <img src={process.env.PUBLIC_URL + "phobia/phobia22.png"} />





                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "phobia/phobia33.png"} />





                                    </div>
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "phobia/phobia4.jpeg"} />





                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "phobia/phobia5.jpeg"} />





                                    </div>
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "phobia/phobia6.jpeg"} />




                                    </div>
                                </div>

                            </div>


                        </div>

                        <b>Fobia adalah bentuk gangguan kecemasan yang melibatkan ketakutan yang berlebihan terhadap objek atau situasi tertentu. 
Orang dengan fobia sering mengalami kecemasan yang intens dan usaha yang berlebihan untuk menghindari stimulus yang memicu ketakutan mereka.
 Fobia dapat berkisar dari ketakutan terhadap hewan, tempat, hingga situasi sosial. 
Langkah pertama dalam mengatasi fobia adalah mengidentifikasi jenis fobia yang dialami dan menyadari dampaknya terhadap kehidupan sehari-hari. 
Terapi perilaku kognitif (CBT) sering digunakan untuk membantu individu menghadapi dan mengelola ketakutan mereka secara progresif. 
Teknik relaksasi, visualisasi, dan desensitisasi sistematis juga dapat menjadi bagian dari perawatan. 
Penting untuk mencari bantuan profesional jika fobia menghambat kehidupan sehari-hari atau mengganggu kualitas hidup. 
Dengan dukungan yang tepat, individu dapat belajar menghadapi ketakutan mereka dan mendapatkan kontrol yang lebih baik atas kehidupan mereka.</b>
                       
                    </section>

                </div>
            </section>

            <div className='mt-5'>

            </div>


            <Foot />
        </div>
    </div>
    )
}export default Phobia;