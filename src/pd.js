import React from 'react';
import Foot from './foot';
import Navibar from './navibar';

function Pd(){
    return(
        <div>
        <div >
            <Navibar />
            <section id="contact" className="position-relative section      before-content   bgg ">
                <div className="container text-center aboutfont ">
                    {/* <h6 className="subtitle">Contact</h6> */}
                    <h1 className="section-title mb-4  tfonts ">Gangguan Kepribadian: Memahami Dinamika Unik Dalam Kesehatan Mental</h1>
                    {/* <p className="mb-5 pb-4">on various mental health conditions people might suffer through.</p> */}




                    <section id="portfolio" className="section ">
                        <div className="container text-center">

                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="img-wrapper">
                                        {/* <img src={process.env.PUBLIC_URL + "imgs/folio-1.jpg"} /> */}
                                        <img src={process.env.PUBLIC_URL + "pd/kepribadian11.png"} />



                                    </div>
                                    <div className="img-wrapper">

                                        <img src={process.env.PUBLIC_URL + "pd/kepribadian22.png"} />





                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "pd/kepribadian33.png"} />





                                    </div>
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "pd/kepribadian44.png"} />





                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "pd/pd5.jpeg"} />





                                    </div>
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "pd/pd6.jpeg"} />




                                    </div>
                                </div>

                            </div>


                        </div>

                        <b>Gangguan kepribadian mencakup berbagai kondisi mental di mana pola pikiran, emosi, 
dan perilaku seseorang berbeda secara signifikan dari norma, sehingga memengaruhi interaksi sosial dan fungsi pribadi. 
Individu dengan gangguan kepribadian mungkin mengalami kesulitan dalam memahami dan merespon situasi secara tepat, 
serta menjaga hubungan interpersonal yang sehat. Terdapat beberapa jenis gangguan kepribadian, 
termasuk gangguan kepribadian antisosial, borderline, dan paranoid. Diagnosis dan penanganan gangguan 
kepribadian melibatkan evaluasi mendalam oleh profesional kesehatan mental, dan terapi, terutama terapi kognitif perilaku (CBT), 
sering digunakan untuk membantu individu mengidentifikasi dan mengubah pola pikir dan perilaku yang merugikan. 
Dukungan sosial dan pemahaman dari lingkungan sekitar juga berperan penting dalam manajemen gangguan kepribadian. 
Penting untuk diingat bahwa setiap individu unik, dan pendekatan perawatan yang disesuaikan dapat membantu meningkatkan
 kesejahteraan mental bagi mereka yang menghadapi gangguan kepribadian.</b>
                       
                    </section>

                </div>
            </section>

            <div className='mt-5'>

            </div>


            <Foot />
        </div>
    </div>
    )
}export default Pd;