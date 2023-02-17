import React from 'react'
import "./App.css"

export default function SideBar() {
  return (
    <div className="SideBar">

      <div className="post1">
        <div className='side1'>
          <img src="https://marketplace.canva.com/EAENvp21inc/1/0/1600w/canva-simple-work-linkedin-banner-qt_TMRJF4m0.jpg"
            alt="img" style={{ width: 287, height: 120 }} />
        </div>
        <div className="sidprofile"></div>
        <div className="sidheader">Dmitry Kargaev</div>
        <div className="sidebody">Freelance UX/UI designer, 80+ projects in web design, mobile apps (iOS & android)
          and creative projects Open to offers.</div>
      </div>

      <div className="sidebtn">
        <div className="sidebtnnew">
          <div className="sidebtnnewtext">write new article</div>
        </div>
      </div>

      <div className="sidepart3">
        <div className="part3header">my groups</div>
        <div className="part3rightheader">Edit list</div>
        <div className="par3line"></div>

        <div className="sidepostone">
          <div className="postoneimg">
            <img src="https://cdn-icons-png.flaticon.com/128/1080/1080985.png" alt="img"
              width={30} style={{ marginTop: 9, marginLeft: 10 }} />
          </div>
          <div className="postonehed">Moscow State Linguistical University</div>
        </div>

        <div className="sideposttwo">
          <div className="postoneimg">
            <img src="https://cdn-icons-png.flaticon.com/128/1080/1080985.png" alt="img"
              width={30} style={{ marginTop: 9, marginLeft: 10 }} />
          </div>
          <div className="postonehed">Digital freelancers group</div>
        </div>

        <div className="sidepostthree">
          <div className="postoneimg">
            <img src="https://cdn-icons-png.flaticon.com/128/1080/1080985.png" alt="img"
              width={30} style={{ marginTop: 9, marginLeft: 10 }} />
          </div>
          <div className="postonehed">Interaction design association</div>
        </div>

        <div className="par3lasttext">
          Show all (8)
        </div>
      </div>

      <div className="hashtag">
        <div className="hashtagheader">Followed hashtags</div>
        <div className="par3line"></div>
        <div className="workbtn"><label style={{ fontWeight: 'bold', marginTop: 2 }}>#work</label></div>
        <div className="businessbtn"><label style={{ fontWeight: 'bold', marginTop: 3 }}>#business</label></div>
        <div className="hrbtn"><label style={{ fontWeight: 'bold', marginTop: 3 }}>#hr</label></div>
        <div className="userinterfacebtn"><label style={{ fontWeight: 'bold', marginTop: 3 }}>#userinterface</label></div>
        <div className="digitalbtn"><label style={{ fontWeight: 'bold', marginTop: 3 }}>#digital</label></div>
        <div className="userexpebtn"><label style={{ fontWeight: 'bold', marginTop: 3 }}>#userexperience</label></div>
        <div className="uxbtn"><label style={{ fontWeight: 'bold', marginTop: 3 }}>#ux</label></div>
        <div className="uibtn"><label style={{ fontWeight: 'bold', marginTop: 3 }}>#ui</label></div>
        <div className="freelancebtn"><label style={{ fontWeight: 'bold', marginTop: 3 }}>#freelance</label></div>
      </div>

      <div className="trending">
        <div className="hashtagheader">Trending articles</div>
        <div className="par3line"></div>

        <div className="box">
          <div className="box1">
            <div className="photoone">
            </div>
            <div className="box1hed">How i make cool designs?</div>
            <div className="boxlast">6,340 viewers</div>
          </div>

          <div className="box2">
            <div className="photoone">
            </div>
            <div className="box1hed">Advices fro young HR</div>
            <div className="boxlast">8,123 viewers</div>
          </div>

          <div className="box3">
            <div className="photoone">
            </div>
            <div className="box1hed">A little about usability</div>
            <div className="boxlast">3,912 viewers</div>
          </div>
        </div>
      </div>
    </div>
  );
}