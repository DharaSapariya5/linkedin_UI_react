import './App.css';
import React from 'react'
import SideBar from "./SideBar/SideBar"
import Footer from './Footer/Footer';

export default function Home() {
  return (
    <>
      <div className='main'>

        <div className="one">
          <div>
            <img alt='img' className='top' src='https://marketplace.canva.com/EAENvp21inc/1/0/1600w/canva-simple-work-linkedin-banner-qt_TMRJF4m0.jpg' />
          </div>
          <div className="header">

            <div className="sendfile">
              <img alt='img' src='https://cdn-icons-png.flaticon.com/128/3496/3496100.png'
                width={20} height={20} style={{ marginTop: 5 }} />
            </div>

            <div className="edit">
              <img src='https://cdn-icons-png.flaticon.com/128/860/860814.png'
                width={20} alt="edit" style={{ margin: 5 }} />
              <label style={{ margin: 6 }}>Edit</label>
            </div>

            <div className="dot">
              <img src='https://cdn-icons-png.flaticon.com/128/2311/2311524.png'
                alt='dot' width={30} style={{ marginLeft: 3, marginTop: 2 }}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="profile"></div>
          <div className='logoname'>
            <div className='name'>Dmitry Kargaev</div>
            <div><img src='../small.png' alt='logo'
              width={20} style={{ marginLeft: '41%', marginTop: "26%", position: 'absolute' }} /></div>
            <div className="share">
              <img src='https://cdn-icons-png.flaticon.com/128/929/929468.png' alt='logo' className='shareimg'
                width={20} style={{}} />
              <div className="shareinfo">Saint Petersburg, Russian Federation</div>
            </div>
            <div className='des'>Freelance UX/UI designer, 80+ projects in web design, mobile apps (iOS & android) and creative projects. Open to offers.</div>
            <button className="btninfo">CONTACT INFO</button>
            <button className="btninfo1">1,043 CONNECTIONS</button>

          </div>
        </div>

        <div className='tab'>
          <button className="new1" style={{ fontWeight: 'bold' }}>PROFILE</button>
          <button className="new2" style={{ fontWeight: 'bold' }}>ACTIVITY & INTERESTE</button>
          <button className="new3" style={{ fontWeight: 'bold' }}>ARTICLES (3)</button>
        </div>

        <div className="aboutinfo">
          <div style={{ marginTop: 20, marginLeft: 20 }}>
            <div style={{ marginBottom: 15, }}>
              <label style={{ fontWeight: 'bold', marginTop: 5 }}>About</label>
            </div>
            <label style={{}}>I'm more experienced in eCommerce web projects and mobile banking apps, but also like to work with creative projects, such as landing pages or unusual corporate websites.</label>
            <div style={{ marginTop: 20 }}><label style={{ color: '#0275B1', fontWeight: 'bold' }}>SEE MORE</label></div>
          </div>
        </div>

        <div className="project">
          <div className='projectname'>
            <div style={{ fontWeight: 'bold' }}>Projects <label style={{ color: '#b2b2b2', fontWeight: "normal" }}>3 of 12</label></div>
          </div>
          <div className="imgconten">
            <div className="img1"></div>
            <div className='zara'>ZARA Redesign Concept
              <div></div>
              <label style={{ fontWeight: 'normal' }}>UX/UI design, 15.07.2019</label>
            </div>
          </div>

          <div className="imgconten" style={{ marginLeft: 270 }}>
            <div className="img2"></div>
            <div className='zara'>SCTHON event brand identity
              <div></div>
              <label style={{ fontWeight: 'normal' }}>Graphic design, 03.31.2019</label>
            </div>
          </div>

          <div className="imgconten" style={{ marginLeft: 538 }}>
            <div className="img3"></div>
            <div className='zara'>Drozd. Brand identity. 2016
              <div></div>
              <label style={{ fontWeight: 'normal' }}>Graphic design, 03.04.2016</label>
            </div>
          </div>
          <div className='SHOW'>SHOW APP (37)</div>
        </div>

        <div className="exper">
          <div className='nameex'>
            Experience
          </div>
          <div className='f1'>
            <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS2OT-jWxzdyaNlc4by3LBomthpbBsZh7o23BHjwiNlxlCQEsBB'
              alt='logo' width={50} height={50} style={{ margin: 10 }} />
            <label style={{ marginTop: 15, fontWeight: 'bold' }}>Freelance UX/UI designer</label>
            <div className='self'>Self Employed <label style={{ color: '#b2b2b2' }}>Around the world</label></div>
            <div className='date'>Jun 2016 — Present <label style={{ fontWeight: 'bold', color: '#0275B1' }}>3 yrs 3 mos</label></div>
            <div className='work'>Work with clients and web studios as freelancer. Work in next areas: eCommerce web projects; creative landing pages; iOs and Android apps; corporate web sites and corporate identity sometimes.</div>
          </div>

          <div className='f2'>
            <img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSJ47a_bsWAmGNOJkpAQa25piQlrbBOvuyFRYKNSlkYqsUuSRt0'
              alt='logo' width={50} height={50} style={{ margin: 10, borderRadius: 50 }} />
            <label style={{ marginTop: 15, fontWeight: 'bold' }}>Freelance UX/UI designer</label>
            <div className='self'>Upwork <label style={{ color: '#b2b2b2' }}>International</label></div>
            <div className='date'>Jun 2019 — Present <label style={{ fontWeight: 'bold', color: '#0275B1' }}>3 mos</label></div>
            <div className='work'>New experience with Upwork system. Work in next areas: UX/UI design, graphic design, interaction design, UX research.</div>
          </div>
        </div>

        <div className="edu">
          <div className="eduheader">Education</div>
          <div className='f3'>
            <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTQYoFH1RZcvlZUXOEq8rk-HsqpYPsvRlxNms7K-NlgUtKdSZfI'
              alt='logo' width={100} height={100} style={{ margin: 10 }} />
            <label style={{ marginTop: 15, fontWeight: 'bold' }}>Moscow State Linguistic University</label>
            <div className='self1'>Bachelor's degree Field Of StudyComputer and Information Systems Security/Information Assurance</div>
            <div className='date' style={{ fontSize: 11, marginTop: 5, marginBottom: 5 }}>2013 - 2016</div>
            <div className='work' style={{ fontSize: 12, marginTop: 5 }}>Additional English classes and UX profile courses​.</div>
          </div>
        </div>
      </div>
      <SideBar/>
      <Footer/>
    </>
  )
}
