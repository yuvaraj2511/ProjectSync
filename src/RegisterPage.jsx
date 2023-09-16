import React, { useState } from 'react';
import './RegisterPage.css';

const RegisterPage = () => {
    // State for user registration
    const [userType, setUserType] = useState('student');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [university, setUniversity] = useState('');
    const [universityOptions, setUniversityOptions] = useState([]);
    const [yearOfStudy, setYearOfStudy] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [isInstitutionVerified, setIsInstitutionVerified] = useState(false);
    const [institutionName, setInstitutionName] = useState('');
    const [institutionLocation, setInstitutionLocation] = useState('');
    const [institutionWebsite, setInstitutionWebsite] = useState('');
    const [institutionContact, setInstitutionContact] = useState('');
    const [institutionLogo, setInstitutionLogo] = useState('');

    // List of universities
    const universities = [
        'University 1',
        'University 2',
        'University 3',
        // Add more universities here
    ];

    // Handle functions
    const handleUniversityInput = (event) => {
        const input = event.target.value;
        setUniversity(input);

        
        const filteredOptions = universities.filter((option) =>
            option.toLowerCase().includes(input.toLowerCase())
        );
        setUniversityOptions(filteredOptions);
    };

    const handleYearOfStudyChange = (event) => {
        const value = event.target.value.replace(/\D/g, '');
        setYearOfStudy(value);
    };

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        // Implement password strength logic here and update passwordStrength state
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleUserTypeChange = (type) => {
        setUserType(type);
    };

    const handleInstitutionVerification = () => {
        // Implement institution verification logic here
        setIsInstitutionVerified(true);
    };

    const handleRegister = () => {
        // Implement registration logic here
    };

    return (
        <div className="register-container">
            <div className="register-form">
                <h2 className="register-heading">Registration</h2>
                {/* User type selection */}
                <div className="user-type-buttons">
                    <button
                        className={`user-type-btn ${userType === 'student' ? 'active' : ''}`}
                        onClick={() => handleUserTypeChange('student')}
                    >
                        Student
                    </button>
                    <button
                        className={`user-type-btn ${userType === 'institution' ? 'active' : ''}`}
                        onClick={() => handleUserTypeChange('institution')}
                    >
                        Institution
                    </button>
                </div>
                {/* Registration form */}
                <form>
                    {/* Common fields */}
                    <div className="input-group">
                        <label className="input-label" htmlFor="fullName">
                            Full Name
                        </label>
                        <input
                            className="input-field"
                            type="text"
                            id="fullName"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label className="input-label" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            className="input-field"
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label className="input-label" htmlFor="password">
                            Password
                        </label>
                        <div className="password-field">
                            <input
                                className="input-field"
                                type={passwordVisible ? 'text' : 'password'}
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                            <div className="password-toggle" onClick={togglePasswordVisibility}>
                                {passwordVisible ? 'Hide' : 'Show'}
                            </div>
                        </div>
                        <div className={`password-strength ${passwordStrength}`}>
                            {/* Display password strength status */}
                        </div>
                    </div>
                    {/* Student-specific fields */}
                    {userType === 'student' && (
                        <>
                            <div className="input-group">
                    <label className="input-label" htmlFor="university">
                        University/College Name
                    </label>
                    <input
                        className="input-field"
                        type="text"
                        id="university"
                        value={university}
                        onChange={handleUniversityInput}
                        required
                        autoComplete="off"
                        list="universityOptions"
                    />
                    <datalist id="universityOptions">
                        {universityOptions.map((option, index) => (
                            <option key={index} value={option} />
                        ))}
                    </datalist>
                </div>
                            <div className="input-group">
                                <label className="input-label" htmlFor="yearOfStudy">
                                    Year of Study
                                </label>
                                <input
                                    className="input-field"
                                    type="text"
                                    id="yearOfStudy"
                                    value={yearOfStudy}
                                    onChange={handleYearOfStudyChange}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label className="input-label" htmlFor="profilePicture">
                                    Profile Picture
                                </label>
                                <input
                                    className="input-field"
                                    type="file"
                                    id="profilePicture"
                                    accept="image/*"
                                    onChange={(e) => setProfilePicture(e.target.files[0])}
                                />
                            </div>
                        </>
                    )}
                    {/* Institution-specific fields */}
                    {userType === 'institution' && (
                        <>
                            <div className="input-group">
                                <label className="input-label" htmlFor="institutionName">
                                    Institution Name
                                </label>
                                <input
                                    className="input-field"
                                    type="text"
                                    id="institutionName"
                                    value={institutionName}
                                    onChange={(e) => setInstitutionName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label className="input-label" htmlFor="institutionLocation">
                                    Location
                                </label>
                                <input
                                    className="input-field"
                                    type="text"
                                    id="institutionLocation"
                                    value={institutionLocation}
                                    onChange={(e) => setInstitutionLocation(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label className="input-label" htmlFor="institutionWebsite">
                                    Website
                                </label>
                                <input
                                    className="input-field"
                                    type="url"
                                    id="institutionWebsite"
                                    value={institutionWebsite}
                                    onChange={(e) => setInstitutionWebsite(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label className="input-label" htmlFor="institutionContact">
                                    Contact Information
                                </label>
                                <input
                                    className="input-field"
                                    type="text"
                                    id="institutionContact"
                                    value={institutionContact}
                                    onChange={(e) => setInstitutionContact(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label className="input-label" htmlFor="institutionLogo">
                                    Institution Logo
                                </label>
                                <input
                                    className="input-field"
                                    type="file"
                                    id="institutionLogo"
                                    accept="image/*"
                                    onChange={(e) => setInstitutionLogo(e.target.files[0])}
                                />
                            </div>
                            {isInstitutionVerified ? (
                                <p className="verified-text">Institution verified</p>
                            ) : (
                                <button className="btn-verify" onClick={handleInstitutionVerification}>
                                    Verify Institution
                                </button>
                            )}
                        </>
                    )}
                    {/* Registration button */}
                    <button className="btn-register" onClick={handleRegister}>
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
