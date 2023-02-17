import React from 'react'
import "./App.css"
import Footer from './Footer/Footer'
import SideBar from "./SideBar/SideBar"

export default function Feed() {
  return (
    <>
      <div className='feedmain'>

        <div className="feedabout">
          <div className="newpost">new post</div>
          <div className="post1line"></div>
          <div className="postques">What's on Your Mind?</div>

          <div className="pinlogo" style={{ marginLeft: 145 }}>
            <img src='https://cdn-icons-png.flaticon.com/128/9441/9441497.png' alt='pin logo'
              width={29} />
          </div>

          <div className="pinlogo" style={{ marginLeft: 195 }}>
            <img src='https://cdn-icons-png.flaticon.com/128/833/833281.png' alt='img logo'
              width={29} />
          </div>

          <div className="pinlogo" style={{ marginLeft: 250 }}>
            <img src='https://cdn-icons-png.flaticon.com/128/1016/1016813.png' alt='film logo'
              width={29} />
          </div>

          <div className="postbtn" style={{ marginLeft: 140 }}>
            <img src='https://cdn-icons-png.flaticon.com/128/786/786205.png' alt='btn logo'
              width={20} style={{ margin: 6 }} />
          </div>

        </div>

        <div className="feedfilter">
          <div className="feedsort">
            <div className='feedsorttext'>Sort by: trending</div>
            <div>
              <div className="feedrightline"></div>
              <img src='https://cdn-icons-png.flaticon.com/128/9497/9497393.png' alt=''
                style={{ marginTop: -297, marginLeft: -5, position: 'absolute' }} width={30} />
              <div className="feedleftline"></div>
            </div>
          </div>
        </div>

        <div className="feedpost">

          <div className="feedpost1">
            <div className="feedpost1text">Ted Bell, Annette Nguyen and Cody Hawkins liked this</div>
            <div className="feedpost1line"></div>
            <div className="feepost1dot">
              <img src='https://cdn-icons-png.flaticon.com/128/512/512142.png' alt='dot'
                width={30} />
            </div>
            <div className="profilepost1">
              <img src='https://cdn-icons-png.flaticon.com/128/706/706807.png' alt=''
                width={70} />
            </div>
            <div className="post1header">Theresa Steward</div>
            <div className="post1bodytext">iOS developer</div>
            <div className="post1body">What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? What was it to the Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins).</div>
            <div className="post1read">Read more</div>
          </div>

          <div className="feedpost2">
            <div className="feedpost1text">Audrey Alexander comment this</div>
            <div className="feedpost1line"></div>
            <div className="feepost1dot">
              <img src='https://cdn-icons-png.flaticon.com/128/512/512142.png' alt='dot'
                width={30} />
            </div>
            <div className="profilepost1">
              <img src='https://cdn-icons-png.flaticon.com/128/145/145843.png' alt=''
                width={70} />
            </div>
            <div className="post1header">Kyle Fisher</div>
            <div className="post1bodytext">Product designer at Commandor Corp.</div>
            <div className="post1body">How's your day going, guys?</div>
            <div className="imgmain"></div>
          </div>

          <div className="feedpost3">
            <div className="feedpost1text">High rated post from your feed</div>
            <div className="feedpost1line"></div>
            <div className="feepost1dot">
              <img src='https://cdn-icons-png.flaticon.com/128/512/512142.png' alt='dot'
                width={30} />
            </div>
            <div className="profilepost1">
              <img src='https://cdn-icons-png.flaticon.com/128/9341/9341432.png' alt=''
                width={70} />
            </div>
            <div className="post1header">Brandon Wilson</div>
            <div className="post1bodytext">Senior UX designer</div>
            <div className="post1body">There is some new guidelines for IOS</div>

            <div className="postforpost3">
              <div className="onepost3icon">
                <img src="https://cdn-icons-png.flaticon.com/128/8609/8609066.png" alt="logo"
                  width={40} style={{ margin: 6 }} />
              </div>
              <div className="post3text1">iOS 11 guidelines for UX/UI designers</div>
              <div className="post3text2">PDF file, 324 kb</div>
              <div className="post3lastimg">
                <img src="https://cdn-icons-png.flaticon.com/128/860/860802.png" alt="logo"
                  width={30} />
              </div>
            </div>

            <div className="postforpost31">
              <div className="onepost3icon">
                <img src="https://cdn-icons-png.flaticon.com/128/8609/8609066.png" alt="logo"
                  width={40} style={{ margin: 6 }} />
              </div>
              <div className="post3text1">iOS 11 guidelines for developers</div>
              <div className="post3text2">PDF file, 245 kb</div>
              <div className="post3lastimg">
                <img src="https://cdn-icons-png.flaticon.com/128/860/860802.png" alt="logo"
                  width={30} />
              </div>
            </div>

          </div>

          <div className="feedpost4">
          <div className="feedpost1text">First post from Audrey Alexander</div>
            <div className="feedpost1line"></div>
            <div className="feepost1dot">
              <img src='https://cdn-icons-png.flaticon.com/128/512/512142.png' alt='dot'
                width={30} />
            </div>
            <div className="profilepost1">
              <img src='https://cdn-icons-png.flaticon.com/128/706/706807.png' alt=''
                width={70} />
            </div>
            <div className="post1header">Audrey Alexander</div>
            <div className="post1bodytext">Team lead at Google</div>
            <div className="post1body">The bun runs along the road and meets a wolf. «Little bun, little bun, I want to eat you!» says the wolf. «I ran away from Grandfather, I ran away from Grandmother, I ran away from the hare. And I can run away from you, grey wolf!» says the bun and runs away.</div>
          </div>
        </div>

      </div>
      <SideBar />
      <Footer />
    </>
  )
}
