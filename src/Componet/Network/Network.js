import React from 'react'
import Footer from "./Footer/Footer"
import "./App.css"

export default function Network() {
  return (
    <>
      <div className='networkMain'>

        <div className="onenetwork">
          <div className="onenetconnimg">
            <img src="https://cdn-icons-png.flaticon.com/128/2838/2838908.png"
              alt="link img" width={20} />
          </div>
          <div className="onenetconn">Connections</div>
          <div className="onenetconncount">1,038</div>
        </div>

        <div className="twonetwork">
          <div className="linetwonet"></div>
          <div className="onenetconnimg" style={{ opacity: 0.15 }}>
            <img src="https://cdn-icons-png.flaticon.com/128/70/70982.png"
              alt="link img" width={20} style={{ marginLeft: -5 }} />
          </div>
          <div className="onenetconn" style={{ opacity: 0.15 }}>invitations</div>
          <div className="onenetconncount"><label style={{ color: '#FFB75E' }}>2</label><div style={{
            backgroundColor: '#FFB75E',
            width: 10, height: 10, borderRadius: 5, marginLeft: 16, marginTop: -10
          }} /></div>
        </div>

        <div className="threenetwork">
          <div className="onenetconnimg">
            <img src="https://cdn-icons-png.flaticon.com/128/2671/2671987.png"
              alt="link img" width={20} style={{ marginLeft: -5 }} />
          </div>
          <div className="onenetconn">teammates</div>
        </div>

        <div className="fournetwork">
          <div className="onenetconnimg">
            <img src="https://cdn-icons-png.flaticon.com/128/3394/3394785.png"
              alt="link img" width={20} style={{ marginLeft: -5 }} />
          </div>
          <div className="onenetconn">Groups</div>
          <div className="onenetconncount" style={{ marginLeft: 20 }}>6</div>
        </div>

        <div className="fivenetwork">
          <div className="onenetconnimg">
            <img src="https://cdn-icons-png.flaticon.com/128/9726/9726892.png"
              alt="link img" width={20} style={{ marginLeft: -5 }} />
          </div>
          <div className="onenetconn">pages</div>
          <div className="onenetconncount" style={{ marginLeft: 15 }}>28</div>
        </div>

        <div className="sixnetwork">
          <div className="onenetconnimg">
            <img src="https://cdn-icons-png.flaticon.com/128/74/74559.png"
              alt="link img" width={18} style={{ marginLeft: -5 }} />
          </div>
          <div className="onenetconn">hashtags</div>
          <div className="onenetconncount" style={{ marginLeft: 20 }}>8</div>
        </div>

      </div>
      <div className="networksecond">

        <div className="secondonebtn">
          <label style={{
            color: '#fff', fontWeight: 'bold', textTransform: 'uppercase'
            , marginTop: 12, marginLeft: 0
          }}>Received</label>
        </div>
        <div className="secondtwobtn">
          <label style={{
            color: '#000', fontWeight: 'bold', textTransform: 'uppercase'
            , marginTop: 12, marginLeft: 0
          }}>send</label>
        </div>

        <div className="secondrightline"></div>
        <div className="secondline">you have 2 <label style={{ color: '#0275B1' }}>new connections</label></div>
        <div className="secondleftline"></div>

        <div className="secondonepost">
          <div className="secondnepostimg1">
            <img src="https://cdn-icons-png.flaticon.com/128/1154/1154448.png"
              alt="img logo" width={60} />
          </div>
          <div className="secondnepostheader">Brandon Wilson</div>
          <div className="secondpostbodytext">Senior UX designer</div>
          <div className="secondpostbodyconn">623 connections</div>
          <div className="secondpostbodyline"></div>
          <div className="secondpostbodylasttext">
            Hey, I saw your works. I like it! Can we do something together? Or maybe you have project for UX at the moment?
          </div>
          <div className="secondonebtn1"><label style={{ color: '#fff', textTransform: 'uppercase', marginTop: 3 }}>accept</label></div>
          <div className="secondonebtn2"><label style={{ color: '#B7B7B7', textTransform: 'uppercase', marginTop: 3 }}>Decline</label></div>
        </div>

        <div className="secondtwopost">
          <div className="secondnepostimg1">
            <img src="https://cdn-icons-png.flaticon.com/128/668/668709.png"
              alt="img logo" width={60} />
          </div>
          <div className="secondnepostheader">Theresa Steward</div>
          <div className="secondpostbodytext">IOS developer</div>
          <div className="secondpostbodyconn">481 connections</div>
          <div className="secondonebtn1"><label style={{ color: '#fff', textTransform: 'uppercase', marginTop: 3 }}>accept</label></div>
          <div className="secondonebtn2"><label style={{ color: '#B7B7B7', textTransform: 'uppercase', marginTop: 3 }}>Decline</label></div>

        </div>

        <div style={{}}>
          <div className="secondrightline" style={{ marginTop: 290 }}></div>
          <div className="secondline" style={{ marginTop: 290 }}>recent connections</div>
          <div className="secondleftline" style={{ marginTop: 290 }}></div>
        </div>

        <div className="secondonepost" style={{ marginTop: 290, width: 420 }}>
          <div className="secondnepostimg1">
            <img src="https://cdn-icons-png.flaticon.com/128/4323/4323004.png"
              alt="img logo" width={60} />
          </div>
          <div className="secondnepostheader" style={{ marginTop: 7 }}>Audrey Alexander</div>
          <div className="secondpostbodytext" style={{ fontWeight: 'normal', marginTop: 10 }}>Team lead at Gooogle</div>
          <div className="secondpostbodytexttime">
            Yesterday, 14:30
          </div>
        </div>

        <div className="secondtwopost" style={{ marginTop: 290, width: 420 }}>
          <div className="secondnepostimg1">
            <img src="https://cdn-icons-png.flaticon.com/128/4140/4140039.png"
              alt="img logo" width={60} />
          </div>
          <div className="secondnepostheader" style={{ marginTop: 7 }}>Darlene Black</div>
          <div className="secondpostbodytext" style={{ fontWeight: 'normal', marginTop: 10 }}>HR-manager, 10 000 connections</div>
          <div className="secondpostbodytexttime">
            26 aug, monday
          </div>
        </div>

        <div className="secondonepost" style={{ marginTop: 290, width: 420, marginLeft: 430 }}>
          <div className="secondnepostimg1">
            <img src="https://cdn-icons-png.flaticon.com/128/4139/4139993.png"
              alt="img logo" width={60} />
          </div>
          <div className="secondnepostheader" style={{ marginTop: 7 }}>Kyle Fisher</div>
          <div className="secondpostbodytext" style={{ fontWeight: 'normal', marginTop: 10 }}>Product designer at Commandor Corp</div>
          <div className="secondpostbodytexttime">Yesterday, 12:03</div>
        </div>

        <div className="secondtwopost" style={{ marginTop: 290, width: 420, marginLeft: 430 }}>
          <div className="secondnepostimg1">
            <img src="https://cdn-icons-png.flaticon.com/128/1154/1154473.png"
              alt="img logo" width={60} />
          </div>
          <div className="secondnepostheader" style={{ marginTop: 7 }}>Eduardo Russell</div>
          <div className="secondpostbodytext" style={{ fontWeight: 'normal', marginTop: 10 }}>Full stack developer at Yandex</div>
          <div className="secondpostbodytexttime">25 aug, sunday</div>
        </div>

      </div>
      <Footer />
    </>
  )
}
