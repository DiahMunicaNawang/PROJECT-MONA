import React from 'react';
import Foot from './foot';
import Navibar from './navibar';

function Suicidal(){
    return(
        <div>
        <div >
            <Navibar />
            <section id="contact" className="position-relative section      before-content   bgg ">
                <div className="container text-center aboutfont ">
                    {/* <h6 className="subtitle">Contact</h6> */}
                    <h1 className="section-title mb-4  tfonts ">Mengatasi Perasaan Ingin Bunuh Diri: Mencari Harapan dan Dukungan</h1>
                    {/* <p className="mb-5 pb-4">on various mental health conditions people might suffer through.</p> */}




                    <section id="portfolio" className="section ">
                        <div className="container text-center">

                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "suicidal/suci11.png"} />



                                    </div>
                                    <div className="img-wrapper">

                                        <img src={process.env.PUBLIC_URL + "suicidal/suci22.png"} />





                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "suicidal/suci33.png"} />





                                    </div>
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "suicidal/suci44.png"} />





                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "suicidal/suicidal5.jpeg"} />





                                    </div>
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "suicidal/suicidal6.jpeg"} />




                                    </div>
                                </div>

                            </div>


                        </div>

                        <div className='ml-5 mr-5 text-secondary'>
                           
                                <b >Perasaan suicidal adalah pengalaman yang sangat sulit dan mendalam yang sering kali muncul sebagai respons terhadap beban emosional yang berat. 
Jika Anda atau seseorang yang Anda kenal mengalami perasaan seperti ini, sangat penting untuk segera mencari bantuan dan dukungan. 
Berbicara dengan orang-orang terdekat, teman, atau anggota keluarga bisa menjadi langkah pertama yang sangat berarti. 
Mengungkapkan perasaan kepada profesional kesehatan mental atau layanan bantuan krisis adalah tindakan berani yang dapat membuka pintu 
menuju pemahaman, dukungan, dan perawatan yang sesuai.

Jangan ragu untuk menghubungi nomor darurat setempat atau layanan bantuan krisis jika Anda atau seseorang yang 
Anda kenal menghadapi situasi mendesak. Setiap negara memiliki sumber daya bantuan krisis yang dapat memberikan pertolongan dan panduan saat Anda membutuhkannya.

Penting untuk diingat bahwa perasaan ini dapat diatasi, dan banyak orang yang mengalami perasaan suicidal 
mendapatkan bantuan yang mereka butuhkan untuk pulih. Meminta bantuan adalah tindakan kuat dan bijaksana yang menunjukkan 
komitmen untuk mencari solusi dan harapan di tengah-tengah kesulitan.
             </b>
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
}export default Suicidal;