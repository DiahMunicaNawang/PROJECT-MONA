import React from 'react';
import Navibar from './navibar';
import Foot from './foot';

function Other(){
    return(
        <div>
        <div >
            <Navibar />
            <section id="contact" className="position-relative section      before-content   bgg ">
                <div className="container text-center aboutfont ">
                    {/* <h6 className="subtitle">Contact</h6> */}
                    <h1 className="section-title mb-4  tfonts ">Isu Lainnya: Menyikapi Tantangan Hidup dengan Bijak</h1>
                    {/* <p className="mb-5 pb-4">on various mental health conditions people might suffer through.</p> */}




                    <section id="portfolio" className="section ">
                        <div className="container text-center">

                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="img-wrapper">
                                        {/* <img src={process.env.PUBLIC_URL + "imgs/folio-1.jpg"} /> */}
                                        <img src={process.env.PUBLIC_URL + "other/isu11.png"} />



                                    </div>
                                    <div className="img-wrapper">

                                        <img src={process.env.PUBLIC_URL + "other/isu22.png"} />





                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "other/isu33.png"} />





                                    </div>
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "other/isu44.png"} />





                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "other/other5.jpeg"} />





                                    </div>
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "other/other2.jpeg"} />




                                    </div>
                                </div>

                            </div>


                        </div>

                        <b>Terkadang, dalam perjalanan hidup, kita dihadapkan pada berbagai isu yang dapat memengaruhi kesejahteraan mental dan emosional kita.
 Isu-isu ini dapat berkisar dari stres sehari-hari, perubahan hidup yang signifikan, hingga tantangan interpersonal. 
Langkah pertama dalam mengatasi isu-isu ini adalah menyadari perasaan dan dampaknya terhadap kehidupan sehari-hari.

Mengembangkan keterampilan manajemen stres, seperti latihan pernapasan dalam dan teknik relaksasi, dapat membantu mengatasi tekanan harian. 
Terapi, baik individual maupun kelompok, juga bisa menjadi sumber dukungan yang berharga untuk mengeksplorasi dan memecahkan isu-isu pribadi. 

Menjaga keseimbangan hidup, mendukung kesehatan fisik dan mental, serta mencari dukungan dari teman, keluarga, 
atau profesional kesehatan mental adalah langkah-langkah yang penting dalam menghadapi isu-isu hidup. Penting untuk 
diingat bahwa setiap individu memiliki cara unik untuk menanggapi dan mengatasi isu-isu ini, dan tidak ada rasa malu dalam mencari bantuan ketika dibutuhkan.

Jangan ragu untuk berbicara dengan seseorang yang Anda percayai atau mencari bantuan profesional jika Anda merasa kesulitan 
mengatasi isu-isu ini sendiri. Memiliki pendekatan bijaksana dan berkomitmen untuk mencari solusi adalah langkah positif menuju 
kesejahteraan dan kehidupan yang lebih baik.</b>
                       
                    </section>

                </div>
            </section>

            <div className='mt-5'>

            </div>


            <Foot />
        </div>
    </div>
    )
}export default Other;