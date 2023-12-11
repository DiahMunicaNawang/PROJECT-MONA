import React from 'react';
import Foot from './foot';
import Navibar from './navibar';

function Ptsd(){
    return(
        <div>
            <div >
                <Navibar />
                <section id="contact" className="position-relative section      before-content   bgg ">
                    <div className="container text-center aboutfont ">
                        {/* <h6 className="subtitle">Contact</h6> */}
                        <h5 className="section-title mb-4  tfonts ">PTSD (Post-Traumatic Stress Disorder) adalah gangguan mental yang dapat terjadi setelah seseorang mengalami atau menyaksikan peristiwa traumatis yang mengancam jiwa atau keamanan diri.</h5>
                        {/* <p className="mb-5 pb-4">on various mental health conditions people might suffer through.</p> */}




                        <section id="portfolio" className="section ">
                            <div className="container text-center">

                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="img-wrapper">
                                            {/* <img src={process.env.PUBLIC_URL + "imgs/folio-1.jpg"} /> */}
                                            <img src={process.env.PUBLIC_URL + "ptsd/ptsd1.jpeg"} />



                                        </div>
                                        <div className="img-wrapper">

                                            <img src={process.env.PUBLIC_URL + "ptsd/ptsd11.png"} />





                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="img-wrapper">
                                            <img src={process.env.PUBLIC_URL + "ptsd/ptsd22.png"} />





                                        </div>
                                        <div className="img-wrapper">
                                            <img src={process.env.PUBLIC_URL + "ptsd/ptsd33.png"} />





                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="img-wrapper">
                                            <img src={process.env.PUBLIC_URL + "ptsd/ptsd5.jpeg"} />





                                        </div>
                                        <div className="img-wrapper">
                                            <img src={process.env.PUBLIC_URL + "ptsd/ptsd6.jpeg"} />




                                        </div>
                                    </div>

                                </div>


                            </div>

                            <b>Sejumlah perilaku terkait PTSD. Beberapa yang lebih umum melibatkan kesulitan fokus atau konsentrasi pada tugas, 
lupa menyelesaikan tugas, mudah teralihkan, kesulitan untuk duduk diam, dan menginterupsi orang saat berbicara. 
Gangguan stres pascatrauma (PTSD) dapat menyebabkan hiperaktivitas, kesulitan fokus, kelelahan, impulsivitas, dan kurang perhatian. 
Anda mungkin hanya mengalami beberapa gejala ini, tergantung pada jenis PTSD yang Anda alami. 
PTSD dapat mengganggu fungsi sehari-hari secara serius. PTSD merupakan kondisi kesehatan mental yang dapat menyebabkan 
tingkat hiperaktivitas dan perilaku impulsif yang tidak lazim. Penderita PTSD juga mungkin mengalami kesulitan memusatkan 
perhatian pada satu tugas atau duduk diam untuk waktu yang lama. Pengobatan untuk PTSD umumnya mencakup terapi perilaku, obat-obatan, 
atau kombinasi keduanya. Terapi melibatkan psikoterapi atau terapi bicara, di mana Anda atau anak Anda akan membahas bagaimana 
PTSD memengaruhi kehidupan Anda dan cara untuk mengelolanya. Terapi perilaku juga dapat membantu Anda atau anak Anda belajar cara 
memantau dan mengelola perilaku. Obat juga dapat sangat membantu ketika Anda hidup dengan PTSD, dirancang untuk memengaruhi zat kimia 
otak sehingga Anda dapat lebih baik mengendalikan impuls dan tindakan.</b>
                            <div>
               
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

export default Ptsd;