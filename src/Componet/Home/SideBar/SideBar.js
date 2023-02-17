import React from 'react'
import "./App.css"
export default function SideBar() {
  return (
    <div className="SideBarHome">
      <div className='side1Home'>
        <div className='headersid'>your dashboard</div>
        <div className="headersid1">go to stats</div>
        <div className='sidline'></div>

        <div className="view">
          <div className='viewtext'>367</div>
          <div className='viewtext1'>views today</div>
        </div>

        <div className="view1">
          <div className='viewtext2'>15</div>
          <div className='viewtext12'>post views</div>
        </div>

        <div className="view2">
          <div className='viewtext3'>9</div>
          <div className='viewtext13'>search appereances</div>
        </div>
      </div>

      <div className='side2Home'>
        <div className="visi">Visitores</div>
        <div className="all">view all</div>
        <div className='sidline2 '></div>

        <div className="chatone" style={{}}>
          <div className="profile1" style={{}}>
            <img src='https://cdn-icons-png.flaticon.com/128/3135/3135715.png' alt='logo' width={50} />
          </div>
          <div className="username">Darlene Black</div>
          <div className="msg">HR-manager, 10 000 connec...</div>
        </div>

        <div className="chatone1">
          <div className="profile2" style={{}}>
            <img src='https://cdn-icons-png.flaticon.com/128/2202/2202112.png' alt='logo' width={50} />
          </div>
          <div className="username">Theresa Steward</div>
          <div className="msg">iOS developer</div>
        </div>

        <div className="chatone3">
          <div className="profile2" style={{}}>
            <img src='https://cdn-icons-png.flaticon.com/128/201/201634.png' alt='logo' width={50} />
          </div>
          <div className="username">Brandon Wilson</div>
          <div className="msg">Senior UX designer</div>
        </div>

        <div className="chatone4">
          <div className="profile2" style={{}}>
            <img src='https://cdn-icons-png.flaticon.com/128/236/236831.png' alt='logo' width={50} />
          </div>
          <div className="username">Kyle Fisher</div>
          <div className="msg">Product designer at Com...</div>
        </div>

        <div className="chatone5">
          <div className="profile2" style={{}}>
            <img src='https://cdn-icons-png.flaticon.com/128/3011/3011270.png' alt='logo' width={50} />
          </div>
          <div className="username">Audrey Alexander</div>
          <div className="msg">Team lead at Google</div>
        </div>

      </div>

      <div className="side3">
        <div className="side3hed">You may like these courses</div>
        <div className='sidline2 '></div>
        <div className="box">

          <div className="box1">
            <div className="photoone">
            <img src='https://cdn-icons-png.flaticon.com/128/5690/5690573.png' alt='img' width={30} style={{marginLeft:25,marginTop:15}}/>
            </div>
            <div className="box1hed">UX Foundations: Prototyping</div>
            <div className="boxlast">27,959 viewers</div>
          </div>

          <div className="box2">
            <div className="photoone">
              <img src='https://cdn-icons-png.flaticon.com/128/5690/5690573.png' alt='img' width={30} style={{marginLeft:25,marginTop:15}}/>
            </div>
            <div className="box1hed">Designing with Adobe XD and Pro</div>
            <div className="boxlast">9,122 viewers</div>
          </div>

          <div className="box3">
            <div className="photoone">
            <img src='https://cdn-icons-png.flaticon.com/128/5690/5690573.png' alt='img' width={30} style={{marginLeft:25,marginTop:15}}/>
            </div>
            <div className="box1hed">UX Foundations: Styles and GUls</div>
            <div className="boxlast">13,858 viewers</div>
          </div>
        </div>
        <div className="lastword">See all recomendations</div>
      </div>
    </div>
  )
}
