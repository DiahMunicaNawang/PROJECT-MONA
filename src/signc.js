import React from 'react';
import Navibar from './navibar';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import { useRef } from 'react';
// import { firestore } from './firebase.js';



import { db } from './firebase-config'
import { collection, addDoc } from "firebase/firestore";
import './App.css';
import Foot from './foot';

function Signup() {

    
    const [Consultant, setConsultant] = useState([]);
    const ConsultantCollectionRef = collection(db, "Consultant")
  
    const [newName, setNewName] = useState(" Nothing selected")
    const [newPass, setNewPass] = useState(" Nothing entered")
    const [newPhone, setNewPhone] = useState(" Nothing entered")
    const [newEmail, setNewEmail] = useState(" Nothing entered")
    const [newAca, setNewAca] = useState(" Nothing entered")
    const [newSpeci, setNewSpeci] = useState(" Nothing entered")
    const [newPhoto, setNewPhoto] = useState(" Nothing entered")








    const onSubmitDo = async (event) => {
        event.preventDefault();


        alert('Form submitted successfully!');




        console.log('CONSULTANT done')
        await addDoc(ConsultantCollectionRef, { c_name: newName, c_pass: newPass, c_email: newEmail, c_phone : newPhone, c_aca:newAca, c_speci:newSpeci, c_photo: newPhoto });




        // localStorage.setItem('Cname', state.Cname);
        // localStorage.setItem('Caca', state.Caca);
        // localStorage.setItem('Cemail_id', state.Cemail_id);
        // localStorage.setItem('Cphone_no', state.Cphone_no);
        // localStorage.setItem('Cpassword', state.Cpassword);
        // localStorage.setItem('Cspeci', state.Cspeci);

    }




    // const [state, setState] = useState({
    //     Cname: '',
    //     Cpassword: '',
    //     Caca: '',
    //     Cphone_no: '',
    //     Cemail_id: '',
    //     Cphoto : "",
    //     Cspeci: "",
    // });

    // const onChangeDo = (event) => {
    //     setState({
    //         ...state,
    //         [event.target.name]: event.target.value
    //     });
    // }


    return (
        <div>
            <Navibar />
            {/* <hr/> */}
            <section id="contact" className="position-relative section      before-content">
                <div className="container text-center">
                    {/* <h6 className="subtitle">Contact</h6> */}
                    <h6 className=" text-primary section-title mb-4   tfonts">Halaman Pendaftaran Consellor / Psikolog</h6>
                    <p className="   mb-5 pb-4">Jika anda seorang mahasiswa dan ingin bergabung di platform kami <u><Link to='/Signup' >klik disini</Link></u> dan rasakan setiap fiturnya.</p>



                    <div className="contact text-left mt-0">
                        <div className="form">
                            <h6 className="subtitle">Tersedia 24/7</h6>
                            <h6 className="section-title mb-4">Gabung Sekarang</h6>



                            <form onSubmit={onSubmitDo}  >
                                {/*   NAME INPUT    */}
                                <div className="form-group">
                                    <input type="name" onChange={(event) => { setNewName(event.target.value) }}  name="Cname" className="form-control " id="exampleInputName1" aria-describedby="nameHelp" placeholder="Masukkan Nama Lengkap"></input>
                                </div>

                                {/* PASSWORD  */}
                                <div className="form-group">
                                    <input type="password" onChange={(event) => { setNewPass(event.target.value) }} name="Cpassword"  className="form-control" id="exampleInputPassword1" placeholder="Masukkan Password"></input>
                                </div>

                                {/* phone_no */}
                                <div className="form-group">
                                    <input type="number" onChange={(event) => { setNewPhone(event.target.value) }} name="Cphone_no"   className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Masukkan No.Tlp"></input>
                                </div>


                                {/* email */}
                                <div className="form-group">
                                    <input type="email" onChange={(event) => { setNewEmail(event.target.value) }} name="Cemail_id"   className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Masukkan Alamat Email"></input>
                                </div>


                                {/* ACA */}
                                <div className="form-group">
                                    <input type="text" onChange={(event) => { setNewAca(event.target.value) }} name="Caca" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Masukkan Pendidikan Terakhir"></input>
                                </div>


                                {/* SPECIALIZATION */}
                                <div className="form-group">
                                    <textarea type="text" onChange={(event) => { setNewSpeci(event.target.value) }} name="Cspeci"  className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Tulis Spesialisasi Anda di Bidang Kesehatan Mental"></textarea>
                                </div>


                                {/* PHOTO */}
                                <p className='mt-3 pt-3'>Upload fotomu dengan resolusi terbaik</p>
                                <div className="form-group">
                                    <input type="file" onChange={(event) => { setNewPhoto(event.target.value) }}  name="Cphoto" className="form-control" id="exampleFormControlInput1" placeholder="Date"></input>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block rounded w-lg"  >Kirim</button>
                                <p className="   mt-2 text-center "> <u><Link to='/ConEdit' >klik di sini untuk diarahkan ke halaman pengeditan</Link>  </u></p>

                            </form>
                        </div>

                    </div>
                </div>



            </section>

        </div>
    )
}

export default Signup;