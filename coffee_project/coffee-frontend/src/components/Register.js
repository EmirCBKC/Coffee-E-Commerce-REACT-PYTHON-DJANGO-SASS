import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        first_name: '',
        last_name: '',
        password: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        // POST isteği için veri hazırla
        const postData = {
            username: formData.username,
            email: formData.email,
            first_name: formData.first_name,
            last_name: formData.last_name,
            password: formData.password
        };

        // Veriyi API'ye gönder
        axios.post("http://127.0.0.1:8000/users/?format=json", postData)
            .then(response => {
                setFormData({
                    username: '',
                    email: '',
                    first_name: '',
                    last_name: '',
                    password: ''
                }); // Form verilerini sıfırla
                navigate('/');
                console.log('Registration successful:', response.data);
                // İşlemler tamamlandıktan sonra giriş yapma veya başka bir yönlendirme yapabilirsiniz
            })
            .catch(error => {
                console.error('Error during registration:', error);
            });
    };

    return (
        <>
            <section className="h-100 bg-dark mt-5">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card card-registration mt-4">
                                <div className="row g-0">
                                    <div className="col-xl-6 d-none d-xl-block">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                                            alt="A woman enjoying a cup of coffee" className="img-fluid"
                                            style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' }} />
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="card-body p-md-5 text-black">

                                            <form className="register-form" onSubmit={handleSubmit}>
                                                <div className="form-outline mb-4">
                                                    <input type="text" id="username" name="username" onChange={(e) => setFormData({ ...formData, username: e.target.value })} className="form-control form-control-lg" />
                                                    <label className="form-label" htmlFor="username">Username</label>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <input type="text" id="first_name" name="first_name" onChange={(e) => setFormData({ ...formData, first_name: e.target.value })} className="form-control form-control-lg" />
                                                            <label className="form-label" htmlFor="first_name">First name</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <input type="text" id="last_name" name="last_name" onChange={(e) => setFormData({ ...formData, last_name: e.target.value })} className="form-control form-control-lg" />
                                                            <label className="form-label" htmlFor="last_name">Last name</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="email" id="email" name="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="form-control form-control-lg" />
                                                    <label className="form-label" htmlFor="email">Email</label>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <input type="password" id="password" name="password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} className="form-control form-control-lg" />
                                                            <label className="form-label" htmlFor="password">Password</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <input type="password" id="password2" name="password2" className="form-control form-control-lg" />
                                                            <label className="form-label" htmlFor="password2">Password Confirm</label>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="d-flex justify-content-end pt-3">
                                                    <button type="submit" className="btn btn-warning btn-lg ms-2">Submit form</button>
                                                </div>
                                            </form>

                                            <button onClick={() => console.log(formData)}>TIKLA</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register;