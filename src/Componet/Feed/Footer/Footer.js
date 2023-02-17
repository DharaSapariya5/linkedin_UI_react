import React from 'react'
import "./App.css"

export default function Footer() {
  const mystyle = { marginBottom: 2 }
  return (
    <div className='feedFooter'>
      <div className="color">
        <div className="logo">
          <img src="./linkedin.png" alt='img logo' width={50} height={50} />
          <div className='text'>Linked<label style={{ color: '#0077B5' }}>In</label></div>
        </div>

        <div className="parttwo">

          <div className='maintext'>Navigation</div>

          <div className="about">
            <div style={mystyle}>About</div>
            <div style={mystyle}>Careers</div>
            <div style={mystyle}>Advertising</div>
            <div style={mystyle}>Small Business</div>
          </div>

          <div className="about1">
            <div style={mystyle}>Talent Solution</div>
            <div style={mystyle}>Marketing Solutions</div>
            <div style={mystyle}>Sales Solution</div>
            <div style={mystyle}>Safety Centre</div>
          </div>

          <div className="about2">
            <div style={mystyle}>Community Guidelines</div>
            <div style={mystyle}>Privacy & Terms</div>
            <div style={mystyle}>Mobile App</div>
          </div>
        </div>

        <div className="partthree">
          <div className='maintext1'>Fast Acess</div>

          <button className="btn1">
            <label style={{ color: '#fff', marginTop: 5, marginBottom: 5, marginLeft: 0 }}>Questions?</label>
            <img src="./question.png" alt='img logo' width={20} height={20} style={{ marginLeft: 60, marginTop: 3 }} />
          </button>

          <button className="btn2"><label style={{ color: '#0275B1', marginBottom: 5, marginLeft: 0, marginTop: 6 }}>Settings</label>
            <img src="./setting.png" alt='img logo' width={20} height={20} style={{ marginLeft: 80, marginTop: 3 }} />
          </button>

        </div>

        <div className="partfor">
          <div className='maintext2'>Language</div>
          <div className='last'>
            <label style={{ margin: 4 }}>ENGLISH</label>
            <img src="https://cdn-icons-png.flaticon.com/128/2951/2951226.png" alt='img logo' width={20} height={20} style={{ marginLeft: 150, marginTop: 5 }} />
          </div>
        </div>
      </div>
    </div>
  )
}
