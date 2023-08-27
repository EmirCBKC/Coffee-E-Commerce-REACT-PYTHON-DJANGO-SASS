import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

function Profile() {

    return (
        <>
            <section className="vh-100 bg-dark">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-12 mb-4 mb-lg-0">'
                            <div className="card" style={{ borderRadius: '.5rem', height: '30rem' }}>
                                <div className="row g-0 h-100">
                                    <div className="col-md-4 gradient-custom text-center text-white"
                                        style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                            alt="Avatar" className="img-fluid my-5" style={{ width: '80px' }} />
                                        <h5>Marie36</h5>
                                        <p>Web Designer</p>'
                                        <button className='profile-settings-btn' style={{background:'transparent',border:'none'}}><FontAwesomeIcon icon={faEdit} size="2xl" /></button>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body p-4">
                                            <h6>Information</h6>
                                            <hr className="mt-0 mb-4"></hr>
                                            <form className="row profile-info pt-1">
                                                    <div className="col-6 mb-3">
                                                        <label className="form-label" htmlFor="first_name">First name</label>
                                                        <input type="text" id="first_name" name="first_name" className="form-control form-control-lg" />
                                                    </div>
                                                    <div className="col-6 mb-3">
                                                        <label className="form-label" htmlFor="last_name">Last name</label>
                                                        <input type="text" id="last_name" name="last_name" className="form-control form-control-lg" />
                                                    </div>
                                                    <div className="col-12 mb-3">
                                                        <label className="form-label" htmlFor="email">E-mail</label>
                                                        <input type="email" id="email" name="email" className="form-control form-control-lg" />
                                                    </div>
                                                    <div className="col-6 mb-3">
                                                        <label className="form-label" htmlFor="password">Password</label>
                                                        <input type="password" id="password" name="password" className="form-control form-control-lg" />
                                                    </div>
                                                    <div className="col-6 mb-3">
                                                        <label className="form-label" htmlFor="password2">Password Confirm</label>
                                                        <input type="password" id="password2" name="password2" className="form-control form-control-lg" />
                                                    </div>
                                                    <div className="d-flex justify-content-end pt-3">
                                                        <button type="submit" className="btn btn-warning btn-lg ms-2">Save</button>
                                                    </div>
                                            </form>
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

export default Profile;