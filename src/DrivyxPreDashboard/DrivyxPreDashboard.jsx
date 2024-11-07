import React, { useState } from 'react';
import "./DrivyxPreDashboard.css";

const DrivyxPreDashboard = () => {
    const [isPersonal, setIsPersonal] = useState(false);

    return (
        <div className='DrivyxPreDashboard'>
            <div className='DrivyxPreDashboard-header'>
                <div className='DrivyxPreDashboard-header-content'>
                    <h1>SetUp your profile</h1>
                    <label className="DrivyxPreDashboard-headerInput">
                        Click or drag photo
                        <input type="file" style={{ display: 'none' }} />
                    </label>

                    <h2>Select Your Profile Type</h2>

                    <div className='DrivyxPreDashboard-header-button'>
                        <button
                            className='DrivyxPreDashboard-btnTwo'
                            onClick={() => setIsPersonal(true)}
                        >
                            Personal
                        </button>
                        <button
                            className='DrivyxPreDashboard-btnOne'
                            onClick={() => setIsPersonal(false)}
                        >
                            Organization
                        </button>
                    </div>
                </div>

                {/* Conditionally render form content based on isPersonal */}
                {isPersonal && (
                    <div className='DrivyxPreDashboard-form-content'>
                        <form action="DrivyxPreDashboard-form">
                            <div>
                                <h3 className='DrivyxPreDashboard-form-label'>Description</h3> <br />
                                <input className='DrivyxPreDashboard-input' type="text" placeholder='Type here...' />
                            </div>

                            <div>
                                <h3 className='DrivyxPreDashboard-form-label'>Links</h3> <br />
                                <input className='DrivyxPreDashboard-input' type="text" placeholder='Enter Website address' /> <br />
                                <input className='DrivyxPreDashboard-input' type="text" placeholder='Enter social link(s)' />
                            </div>

                            <input className='DrivyxPreDashboard-inputs' type="submit" value='Save' />
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DrivyxPreDashboard;
