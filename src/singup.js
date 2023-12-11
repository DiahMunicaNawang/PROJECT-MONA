import React from 'react';
import Navibar from './navibar';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import axios from 'axios';



import { db } from './firebase-config'
import { collection, addDoc } from "firebase/firestore";
import './App.css';

function Signup() {


    const [User, setUser] = useState([]);
    const UserCollectionRef = collection(db, "User")

    const [newName, setNewName] = useState(" Nothing selected")
    const [newEmail, setNewEmail] = useState(" Nothing entered")
    const [newPass, setNewPass] = useState(" Nothing entered")
    const [newPhone, setNewPhone] = useState(" Nothing entered")
    const [newAge, setNewAge] = useState(" Nothing entered")
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dob, setDob] = useState('');
  
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();
  
      if (name === "" || phone === "" || email === ""|| password === ""|| dob === "") {
        alert("Failed to Register,fill all the form ");
      } else {
        try {
            const response = await axios.post("http://localhost:8080/register", {
                name,
                phone,
                email,
                password,
                dob
            });
            
  
          if (response.status === 200) {
            alert("Register Successful");
            window.location.replace('http://localhost:3000/');
          } else {
            alert("Failed to register");
          }
        } catch (error) {
          console.error(error);
          alert("An error occurred while submitting data");
        }
      }
    };







    // const onSubmitDo = async (event) => {
    //     event.preventDefault();
    //     alert('Signed in Successfully!!!')


    //     await addDoc(UserCollectionRef, { u_name: newName, u_email: newEmail, u_pass: newPass, u_phone: newPhone, u_age: newAge });







    //     // localStorage.setItem('name', state.name);
    //     // localStorage.setItem('age', state.age);
    //     // localStorage.setItem('email_id', state.email_id);
    //     // localStorage.setItem('phone_no', state.phone_no);
    //     // localStorage.setItem('password', state.password);
    //     // alert('Form submitted successfully!');
    //     console.log("your details has been submitted")
    // }




    // const [state, setState] = useState({
    //     name: '',
    //     password: '',
    //     age: '',
    //     phone_no: '',
    //     email_id: '',
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
                    <h3 className=" text-black tex-bold section-title mb-4 ">Halaman Pendaftaran Pengguna</h3>
                    <p className="   mb-5 pb-4">Jika Anda seorang Consellor/Psikolog yang ingin mendaftar , klik Sekarang <u><Link to='/Signc' >klik disini</Link></u> untuk Mendaftar sebagai Counsellors.</p>


                    <div className="contact text-left">
                        <div className="form">
                            <h6 className="subtitle">Tersedia 24/7</h6>
                            <h6 className="section-title mb-4">Gabung Sekarang</h6>
                            {/* <h6 className="subtitle">User Form</h6> */}

                            
                            <form onSubmit={handleFormSubmit}>
                                {/*   NAME INPUT    */}
                                <div className="form-group">
                                    <input type="name" name="name" onChange={(event) => { setName(event.target.value) }} className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Masukkan Nama Lengkap"></input>
                                </div>

                                {/* PASSWORD  */}
                                <div className="form-group">
                                    <input type="password" name="password" onChange={(event) => { setPassword(event.target.value) }} className="form-control" id="exampleInputPassword1" placeholder="Masukkan Password"></input>
                                </div>

                                {/* phone_no */}
                                <div className="form-group">
                                    <input type="number" name="phone" onChange={(event) => { setPhone(event.target.value) }} className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Masukkan No Telp"></input>
                                </div>


                                {/* email */}
                                <div className="form-group">
                                    <input type="email" name="email" onChange={(event) => { setEmail(event.target.value) }} className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Masukkan Alamat Email"></input>
                                </div>



                                {/* AGE */}
                                <p className='mt-3 pt-3'>Masukkan Umur anda</p>
                                <div className="form-group">
                                    <input type="date" name="dob" onChange={(event) => { setDob(event.target.value) }} className="form-control" id="exampleFormControlInput1" placeholder="Date"></input>
                                </div>


                                <button type="submit" className="btn btn-primary btn-block rounded w-lg"  >Kirim</button>





                            </form>
                        </div>

                    </div>
                </div>



            </section>

        </div>
    )
}

export default Signup;