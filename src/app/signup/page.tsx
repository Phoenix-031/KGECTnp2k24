"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import "./signup.css";

interface InputField {
  value: string;
}

const SignUp: React.FC = () => {
  const domainOptions = [
    'Frontend Development', 'Backend Development', 'Fullstack Development', 
    'Android Development', 'Game Development', 'Cybersecurity', 
    'AI/ML', 'UI/UX'
  ];

  const skillOptions = [
    'HTML', 'CSS', 'Javascript', 'React Js', 'Node Js', 'Express Js',
    'MERN stack', 'Java', 'C++', 'C', 'Python', 'Go', 'AWS', 'Next Js'
  ];

  const [domains, setDomains] = useState<InputField[]>([{ value: '' }]);
  const [skills, setSkills] = useState<InputField[]>([{ value: '' }]);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [conpass, setConpass] = useState('');
  const [yog, setYog] = useState("");
  const [department, setDepartment] = useState("");
  const [roll, setRoll] = useState('');
  const [registration, setRegistration] = useState('');
  const [sgpa1, setSgpa1] = useState('');
  const [sgpa2, setSgpa2] = useState('');
  const [sgpa3, setSgpa3] = useState('');
  const [sgpa4, setSgpa4] = useState('');
  const [sgpa5, setSgpa5] = useState('');
  const [sgpa6, setSgpa6] = useState('');
  const [sgpa7, setSgpa7] = useState('');
  const [sgpa8, setSgpa8] = useState('');
  const [link, setLink] = useState('');

  const handleAddDomain = () => {
    setDomains([...domains, { value: '' }]);
  };

  const handleDomainChange = (index: number, event: ChangeEvent<HTMLSelectElement>) => {
    const newDomains = [...domains];
    newDomains[index].value = event.target.value;
    setDomains(newDomains);
  };

  const handleDeleteDomain = (index: number) => {
    const newDomains = domains.filter((_, i) => i !== index);
    setDomains(newDomains);
  };

  const getAvailableDomains = (index: number) => {
    const selectedOptions = domains.map(input => input.value);
    return domainOptions.filter(option => !selectedOptions.includes(option) || domains[index].value === option);
  };

  const handleAddSkill = () => {
    setSkills([...skills, { value: '' }]);
  };

  const handleSkillChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const newSkills = [...skills];
    newSkills[index].value = event.target.value;
    setSkills(newSkills);
  };

  const handleDeleteSkill = (index: number) => {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
  };

  const getAvailableSkills = (index: number) => {
    const selectedOptions = skills.map(input => input.value);
    return skillOptions.filter(option => !selectedOptions.includes(option) || skills[index].value === option);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  function validateNumber(input: HTMLInputElement) {
    input.value = input.value.replace(/[^0-9]/g, '');
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);
  };

  return (
    <div className='signup-back'>
      <div className='signup-container'>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="formOutline mb4">
            <input type="text" id="name" className="formControl" required value={name} onChange={(e) => setName(e.target.value)} />
            <label className="formLabel" htmlFor="name">Name</label>
          </div>
          <div className="formOutline mb4">
            <input type="text" id="phone" className="formControl" required value={phone} pattern="\d*" onInput={(e) => validateNumber(e.target as HTMLInputElement)} onChange={(e) => setPhone(e.target.value)} />
            <label className="formLabel" htmlFor="phone">Phone Number</label>
          </div>
          <div className="formOutline mb4">
            <input type="email" id="email" className="formControl" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <label className="formLabel" htmlFor="email">Email address</label>
          </div>
          <div className="formOutline mb4">
            <input type="password" id="password" className="formControl" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <label className="formLabel" htmlFor="password">Password</label>
          </div>
          <div className="formOutline mb4">
            <input type="password" id="conpass" className="formControl" required value={conpass} onChange={(e) => setConpass(e.target.value)} />
            <label className="formLabel" htmlFor="conpass">Confirm Password</label>
          </div>
          <div className="formOutline mb4 input-group select-container">
            <select name="yog" id="yog" value={yog} onChange={(e) => setYog(e.target.value)} className='formControl' required>
              <option value="2025" selected>2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
            </select>
            <label className="formLabel" htmlFor="yog">Year of Graduation</label>
          </div>
          <div className="formOutline mb4 input-group select-container">
            <select name="department" id="department" value={department} onChange={(e) => setDepartment(e.target.value)} className='formControl' required>
              <option value="" selected disabled>Select your Department</option>
              <option value="CSE">Computer Science and Engineering</option>
              <option value="IT">Information Technology</option>
              <option value="ECE">Electronics and Communication Engineering</option>
              <option value="EE">Electrical Engineering</option>
              <option value="ME">Mechanical Engineering</option>
            </select>
            <label className="formLabel" htmlFor="department">Department</label>
          </div>
          <div className="formOutline mb4">
            <input type="text" id="roll" className="formControl" required value={roll} pattern="\d*" onInput={(e) => validateNumber(e.target as HTMLInputElement)} onChange={(e) => setRoll(e.target.value)} />
            <label className="formLabel" htmlFor="roll">Roll Number</label>
          </div>
          <div className="formOutline mb4">
            <input type="text" id="registration" className="formControl" required value={registration} pattern="\d*" onInput={(e) => validateNumber(e.target as HTMLInputElement)} onChange={(e) => setRegistration(e.target.value)} />
            <label className="formLabel" htmlFor="registration">Registration Number</label>
          </div>
          <div className="select-container formOutline mb4">
            <label htmlFor="domains">Domains:</label>
            {domains.map((input, index) => (
              <div key={index} className='input-group'>
                <select
                  id='domains'
                  value={input.value}
                  onChange={(event) => handleDomainChange(index, event)}
                  className='formControl'
                  required
                >
                  <option value="" disabled>Select an option</option>
                  {getAvailableDomains(index).map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {index !== 0 && (
                  <button type="button" onClick={() => handleDeleteDomain(index)} className='delete-btn'>
                  <svg style={{ color: 'red', width: '16px', height: '16px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" fill="red"></path></svg>
                </button>
                )}
              </div>
            ))}
            <button type="button" onClick={handleAddDomain} className='add-more-btn'>
                <svg style={{ color: '#0C84AA', width: '16px', height: '16px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 13.3-10.7 24-24 24H280v128c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H104c-13.3 0-24-10.7-24-24s10.7-24 24-24h128V104c0-13.3 10.7-24 24-24s24 10.7 24 24v128h128c13.3 0 24 10.7 24 24z" fill="#0C84AA"></path></svg>
                Add more Domains
              </button>
          </div>
          <div className="select-container formOutline mb4">
            <label htmlFor="skills">Skills:</label>
            {skills.map((input, index) => (
              <div key={index} className='input-group'>
                <input
                  type='text'
                  id='skills'
                  value={input.value}
                  onChange={(event) => handleSkillChange(index, event)}
                  list={`skillsList-${index}`}
                  className='formControl'
                  required
                  placeholder='Select an option or write your own'
                />
                <datalist id={`skillsList-${index}`}>
                  {getAvailableSkills(index).map((option, optionIndex) => (
                    <option key={optionIndex} value={option} />
                  ))}
                </datalist>
                {index !== 0 && (
                  <button type="button" onClick={() => handleDeleteSkill(index)} className='delete-btn'>
                  <svg style={{ color: 'red', width: '16px', height: '16px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" fill="red"></path></svg>
                </button>
                )}
              </div>
            ))}
            <button type="button" onClick={handleAddSkill} className='add-more-btn'>
                <svg style={{ color: '#0C84AA', width: '16px', height: '16px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 13.3-10.7 24-24 24H280v128c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H104c-13.3 0-24-10.7-24-24s10.7-24 24-24h128V104c0-13.3 10.7-24 24-24s24 10.7 24 24v128h128c13.3 0 24 10.7 24 24z" fill="#0C84AA"></path></svg>
                Add more Skills
              </button>
          </div>
          <div className="sgpa">
          <div className="formOutline mb4">
                <input type="text" id="sgpa1" className="formControl" value={sgpa1} onChange={(e) => setSgpa1(e.target.value)} />
                <label className="formLabel" htmlFor="sgpa1">SGPA for 1st semester</label>
              </div>
              <div className="formOutline mb4">
                <input type="text" id="sgpa2" className="formControl" value={sgpa2} onChange={(e) => setSgpa2(e.target.value)} />
                <label className="formLabel" htmlFor="sgpa2">SGPA for 2nd semester</label>
              </div>
              <div className="formOutline mb4">
                <input type="text" id="sgpa3" className="formControl" value={sgpa3} onChange={(e) => setSgpa3(e.target.value)} />
                <label className="formLabel" htmlFor="sgpa3">SGPA for 3rd semester</label>
              </div>
              <div className="formOutline mb4">
                <input type="text" id="sgpa4" className="formControl" value={sgpa4} onChange={(e) => setSgpa4(e.target.value)} />
                <label className="formLabel" htmlFor="sgpa4">SGPA for 4th semester</label>
              </div>
              <div className="formOutline mb4">
                <input type="text" id="sgpa5" className="formControl" value={sgpa5} onChange={(e) => setSgpa5(e.target.value)} />
                <label className="formLabel" htmlFor="sgpa5">SGPA for 5th semester</label>
              </div>
              <div className="formOutline mb4">
                <input type="text" id="sgpa6" className="formControl" value={sgpa6} onChange={(e) => setSgpa6(e.target.value)} />
                <label className="formLabel" htmlFor="sgpa6">SGPA for 6th semester</label>
              </div>
              <div className="formOutline mb4">
                <input type="text" id="sgpa7" className="formControl" value={sgpa7} onChange={(e) => setSgpa7(e.target.value)} />
                <label className="formLabel" htmlFor="sgpa7">SGPA for 7th semester</label>
              </div>
              <div className="formOutline mb4">
                <input type="text" id="sgpa8" className="formControl" value={sgpa8} onChange={(e) => setSgpa8(e.target.value)} />
                <label className="formLabel" htmlFor="sgpa8">SGPA for 8th semester</label>
              </div>
              </div>
              <div className="formOutline mb4">
            <input type="text" id="link" className="formControl" required value={link} onChange={(e) => setLink(e.target.value)} />
            <label className="formLabel" htmlFor="link">Linkedin link</label>
          </div>
          <div className="formOutline mb4">
            <input type="file" id="resume" className="formControl" required onChange={handleFileUpload} />
            <label className="formLabel" htmlFor="Resume">Upload your Resume</label>
          </div>
          <button type="submit" className="btn btnPrimary btnBlock">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
