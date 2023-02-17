import React from 'react'
import "./App.css"
import Footer from "./Footer/Footer"
export default function Jobs() {
  return (
    <>
      <div className="ChatMain">

        <div className='ChatMain1'>
          <div className="ChatMain1heading">Your dream job is here</div>
          <div className="ChatMain1Line"></div>
          <div className="ChatMainSerch">Search jobs</div>
          <div className="ChatMainslider">
            <img src="https://cdn-icons-png.flaticon.com/128/8914/8914406.png"
              alt="slider img" width={30} />
          </div>
          <div className="ChatMainSerchbtn">
            <img src="https://cdn-icons-png.flaticon.com/128/3031/3031293.png"
              alt="serch img" width={20} style={{ marginTop: 5 }} />
          </div>
        </div>

        <div>
          <div className="jobforyourightline"></div>
          <div className="jobforyoutext">jobs for you</div>
          <div className="jobforyouleftline"></div>
        </div>

        <div>

          <div className="ChatMain1poast">
            <div className="ChatMain1postimg">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnngVpLyFTidaUzK_ZuhWDgZfxm1w9iVQo2w&usqp=CAU"
                alt="upwork img" width={70} style={{ borderRadius: 40 }} />
            </div>
            <div className="ChatMain1postheading">UX/UI designer</div>
            <div className="ChatMainpostbodytext">Upwork <label style={{ color: '#181818', opacity: 0.60 }}>Remote only</label></div>
            <div className="ChatMain1postbodytext">
              On Upwork you'll find a range of top freelancers and agencies, from developers and development agencies to designers and creative agencies, copywriters,
            </div>
            <div className="ChatMain1postbtn"><label style={{ marginTop: 4, color: '#fff' }}>more</label></div>
          </div>

          <div className="ChatMain2poast">
            <div className="ChatMain1postimg" style={{ marginLeft: 0 }}>
            </div>
            <div className="ChatMain1postheading">Product designer</div>
            <div className="ChatMainpostbodytext">Facebook <label style={{ color: '#181818', opacity: 0.60 }}>CA, USA</label></div>
            <div className="ChatMain1postbodytext">
              Founded in 2004, Facebook's mission is to give people the power to build community and bring the world closer together. People use our products to stay..
            </div>
            <div className="ChatMain1postbtn"><label style={{ marginTop: 4, color: '#fff' }}>more</label></div>
          </div>

          <div className="ChatMain3poast">
            <div className="ChatMain1postimg" style={{ marginLeft: 0 }}>
              <img src="https://cdn-icons-png.flaticon.com/128/281/281764.png"
                alt="Google img" width={60} style={{ borderRadius: 200 }} />
            </div>
            <div className="ChatMain1postheading">Part-time UX designer</div>
            <div className="ChatMainpostbodytext">Google <label style={{ color: '#181818', opacity: 0.60 }}>International</label></div>
            <div className="ChatMain1postbodytext">
              Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking.
            </div>
            <div className="ChatMain1postbtn"><label style={{ marginTop: 4, color: '#fff' }}>more</label></div>
          </div>

          <div className="ChatMain4poast">
            <div className="ChatMain1postimg" style={{ marginLeft: 0 }}>
              <img src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
                alt="linkdin img" width={65} style={{ borderRadius: 200 }} />
            </div>
            <div className="ChatMain1postheading">Web designer</div>
            <div className="ChatMainpostbodytext">LinkedIn <label style={{ color: '#181818', opacity: 0.60 }}>CA, USA</label></div>
            <div className="ChatMain1postbodytext">
              LinkedIn, the world's largest professional network. The mission of LinkedIn is simple: connect the world's professional.
            </div>
            <div className="ChatMain1postbtn"><label style={{ marginTop: 4, color: '#fff' }}>more</label></div>
          </div>

          <div>
            <div className="jobforyourightline" style={{ marginTop: 550 }}></div>
            <div className="jobforyoutext" style={{ marginTop: 550 }}>New job</div>
            <div className="jobforyouleftline" style={{ marginTop: 550 }}></div>
          </div>

          <div className="ChatMain5poast">
            <div className="ChatMain1postimg" style={{ marginLeft: 0 }}>
              <img src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png"
                alt="instagram img" width={70} style={{ borderRadius: 200 }} />
            </div>
            <div className="ChatMain1postheading">UI designer</div>
            <div className="ChatMainpostbodytext">Instagram <label style={{ color: '#181818', opacity: 0.60 }}>CA, USA</label></div>
            <div className="ChatMain1postbodytext">
              Instagram is a photo and video-sharing social networking service owned by Facebook, Inc.
            </div>
            <div className="ChatMain1postbtn"><label style={{ marginTop: 4, color: '#fff' }}>more</label></div>
          </div>

          <div className="ChatMain6poast">
            <div className="ChatMain1postimg" style={{ marginLeft: 0 }}>
              <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ_A5hsqljYfr5km1i2v97UGjCLJIU-6uQ2jNLmBd9539p_WqzL"
                alt="Product img" width={65} style={{ borderRadius: 200 }} />
            </div>
            <div className="ChatMain1postheading">Product designer</div>
            <div className="ChatMainpostbodytext">Periscope <label style={{ color: '#181818', opacity: 0.60 }}>Remote only</label></div>
            <div className="ChatMain1postbodytext">
              eriscope is a live video streaming app for Android and iOS developed by Kayvon Beykpour and Joe Bernstein and acquired by Twitter before launch in 2015.
            </div>
            <div className="ChatMain1postbtn"><label style={{ marginTop: 4, color: '#fff' }}>more</label></div>
          </div>

        </div>

      </div>
      <div className="chatSidebar">
        <div className="chatsidebar1">
          <div className="chatsidebar1btn">
            <label style={{ color: '#fff', marginTop: 3 }}>post a job</label>
          </div>
        </div>
        <div className="chatsidebar2">
          <div className="chatsidebar2header">my searches</div>
          <div className="chatsidebar2edit">edit list</div>
          <div className="chatsidebar2line"></div>

          <div className="chatsidebar2post1">
            <div className="chatsidebar2post1head">UX/UI designer <label style={{ color: '#02B033' }}>+240</label></div>
            <div className="chatsidebar2post1text">Remote</div>
            <div className="chatsidebar2post1img">
              <img src="silent.png" alt="silent img" width={20} />
            </div>
          </div>

          <div className="chatsidebar2post2">
            <div className="chatsidebar2post1head">Web designer</div>
            <div className="chatsidebar2post1text">Los-Angeles, CA</div>
            <div className="chatsidebar2post1img" style={{ opacity: 1 }}>
              <img src="bell.png" alt="bell img" width={20} />
            </div>
          </div>

          <div className="chatsidebar2post3">
            <div className="chatsidebar2post1head">Graphic designer</div>
            <div className="chatsidebar2post1text">Malaysia, Kuala Lumpur</div>
            <div className="chatsidebar2post1img" style={{ opacity: 1 }}>
              <img src="bell.png" alt="bell img" width={20} />
            </div>
          </div>

        </div>
        <div className="chatsidebar3">
          <div className="chatsidebar2header">Tracked jobs</div>
          <div className="chatsidebar2line"></div>
          <div className="chatsidebar2post11">
            <div className="chatsidebar2post1text1">UX/UI Designer</div>
            <div className="chatsidebar2postbody">Upwork</div>
            <div className="chatsidebar2postimgupwork">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnngVpLyFTidaUzK_ZuhWDgZfxm1w9iVQo2w&usqp=CAU"
                alt="upwork img" width={50} style={{ borderRadius: 40 }} />            </div>
          </div>
          <div className="chatsidebar2post12">
            <div className="chatsidebar2post1text1">Product designer</div>
            <div className="chatsidebar2postbody">Facebook</div>
            <div className="chatsidebar2postimgupwork">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUF3ReArthuTJeHcG-5AP_vAyEKzsH3JJNdg&usqp=CAU"
                alt="Facebook img" width={50} style={{ borderRadius: 200 }} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
