import React from 'react'
import "./App.css"
import Footer from "./Footer/Footer"
export default function Chat() {
  return (
    <>
      <div className='chats'>
        <div className="chatsheader">Chats</div>
        <div className="chatline"></div>

        <div className="chat1box">
          <div className="chat1boxicon">
            <img src="https://cdn-icons-png.flaticon.com/128/706/706830.png" alt="logo"
              width={60} />
          </div>
          <div className="chat1boxstatus"></div>
          <div className="chat1boxname">Darlene Black</div>
          <div className="chat1boxmsg">Hey, how is your project?</div>
          <div className="chat1boxline"></div>
        </div>

        <div className="chat2box">
          <div className="chat1boxicon">
            <img src="https://cdn-icons-png.flaticon.com/128/3135/3135789.png" alt="logo"
              width={60} />
          </div>
          <div className="chat1boxstatus"></div>
          <div className="chat1boxname">Theresa Steward</div>
          <div className="chat1boxmsg">Hi, Dmitry! I have a work for you. We</div>
          <div className="chat1boxline"></div>

        </div>

        <div className="chat3box">
          <div className="chat1boxicon">
            <img src="https://cdn-icons-png.flaticon.com/128/145/145843.png" alt="logo"
              width={60} />
          </div>
          <div className="chat1boxstatus1"></div>
          <div className="chat1boxname">Brandon Wilson</div>
          <div className="chat1boxmsg">I am Russian and I am learning Engl</div>
          <div className="chat1boxline"></div>

        </div>

        <div className="chat4box">
          <div className="chat1boxicon" style={{ marginLeft: 10, opacity: 0.20 }}>
            <img src="https://cdn-icons-png.flaticon.com/128/706/706816.png" alt="logo"
              width={60} />
          </div>
          <div className="chat1boxstatusline"></div>
          <div className="chat1boxname" style={{ marginLeft: 10, opacity: 0.20 }}>Kyle Fisher</div>
          <div className="chat1boxmsg" style={{ marginLeft: 10, opacity: 0.20 }}>so, it's up to you!</div>
          <div className="chat1boxline"></div>

        </div>

        <div className="chat5box">
          <div className="chat1boxicon">
            <img src="https://cdn-icons-png.flaticon.com/128/1154/1154448.png" alt="logo"
              width={60} />
          </div>
          <div className="chat1boxname">Design Conference</div>
          <div className="chat1boxmsg">Can you guys help me with it?🥹</div>
          <div className="chat1boxline"></div>

        </div>
      </div>

      <div className="chatbtn">
        <div className="chatbtnone">
          <label style={{
            color: '#fff', textTransform: 'uppercase',
            marginLeft: 55, marginTop: 3, position: 'absolute'
          }}>Start new chat</label>
        </div>
      </div>

      <div className="chatsmsg">
        <div className="chatmsgheader">Chat with <label style={{ color: '#0275B1' }}>Kyle Fisher</label></div>
        <div className="chatsmsglast"><label style={{ opacity: 0.17 }}>last online:</label> 4 hours ago</div>
        <div className="chatmsgpin">
          <img src="https://cdn-icons-png.flaticon.com/128/8377/8377269.png" alt="pin logo"
            width={20} />
        </div>
        <div className="chatmsgshare">Shared media (12)</div>
        <div className="chatmsgline"></div>

        <div className="chatmaincon">
          <div className="chatmsgright"></div>
          <div className="msglastseen">yesterday, 29 aug</div>
          <div className="chatmsgleft"></div>

          <div className="chatmsgone">
            <label style={{ color: '#fff', marginTop: 10 }}>Hi, Kyle. How are you doing? Did you get that job yesterday?</label></div>
          <div className="readmsgicon">
            <img src="https://cdn-icons-png.flaticon.com/128/9463/9463914.png" alt="read msg"
              width={30} />
          </div>
          <div className="readmsgtime">4:20 PM</div>

          <div className="chatusericon">
            <img src="https://cdn-icons-png.flaticon.com/128/6997/6997662.png" alt="user logo"
              width={50} />
          </div>
          <div className="chatmsguserone">
            <label style={{ marginTop: 10 }}>Nope, they kicked me out of the office!</label>
          </div>
          <div className="chatmsgusertime">4:29 PM</div>
        </div>

        <div className="chatmsgtwo">
          <label style={{ color: '#fff', marginTop: 10 }}>Wow! I can invite you in my new project. We need a product designer right now!</label>
          <div className="readmsgicon2">
            <img src="https://cdn-icons-png.flaticon.com/128/9463/9463914.png" alt="read msg"
              width={30} />
          </div>
          <div className="readmsgtime2">4:20 PM</div>
        </div>

        <div className="chatusericon1">
            <img src="https://cdn-icons-png.flaticon.com/128/6997/6997662.png" alt="user logo"
              width={50} />
          </div>
          <div className="chatmsguserone1">
            <label style={{ marginTop: 10 }}>It’ll be great! I need this job, but...</label>
          </div>

          <div className="chatusericon2">
            <img src="https://cdn-icons-png.flaticon.com/128/6997/6997662.png" alt="user logo"
              width={50} />
          </div>

          <div className="chatmsguserone2">
            <label style={{ marginTop: 10 }}>So, it’s up to you!</label>
          </div>

          <div className="chatmsgusertime1">4:29 PM</div>

        <div className="chatmsgsend">
          <div className="msgplac">Write your message</div>
          <div className="chatpinlogo" style={{ marginLeft: 145 }}>
            <img src='https://cdn-icons-png.flaticon.com/128/9441/9441497.png' alt='pin logo'
              width={29} />
          </div>
          <div className="chatmsgbtn" style={{ marginLeft: 140 }}>
            <img src='https://cdn-icons-png.flaticon.com/128/786/786205.png' alt=''
              width={20} style={{ margin: 6 }} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
