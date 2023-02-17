import React from 'react'
import '../App.css';
import { Link,NavLink } from "react-router-dom";


export default function NevBar() {
    return (
        <div className='div-one'>

            <div className='img-div'>
                <Link className="icon-name nav-link" to="/">
                    <img src="./linkedin.png" alt='here is img logo' className='img-logo' />
                </Link>
            </div>
            <div class="vl"></div>

            <div className="icon-tab">
                {/* <Link className='icon-name nav-link' to="/Feed">
                    <div className='icon1'>
                        <img src="https://cdn-icons-png.flaticon.com/128/1176/1176875.png" alt='FEED TAB' className='icon' width={27} height={27} />
                        <div className='icon-name'>FEED</div>
                    </div>
                </Link> */}
                <NavLink className={`icon-name nav-link ${active => active ? 'active' : ''}`} to="/Feed">
                    {(active) => {
                        return (<div className=''>
                            <img src="https://cdn-icons-png.flaticon.com/128/1176/1176875.png" alt='FEED TAB' 
                            className='icon' width={27} height={27} />
                            <div className={`icon-name ${active ? 'active' : ''}`}>FEED</div>
                        </div>);
                    }}
                </NavLink>
            </div>

            <div className="icon-tab">
                <Link className="icon-name nav-link" to="/Network">
                    <div className='icon1'>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/681/681494.png" alt='NETWORK TAB' className='icon' width={27} height={27} />
                            <div className='icon-name'>NETWORK</div>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="icon-tab">
                <Link className="icon-name nav-link" to="/Jobs">
                    <div className='icon1'>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/2910/2910791.png" alt='JOBS TAB' className='icon' width={27} height={27} />
                            <div className='icon-name'>JOBS</div>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="icon-tab">
                <Link className="icon-name nav-link" to="/Chat">
                    <div className='icon1'>
                        <div>
                            <img src="./chat.png" alt='CHAT TAB' className='icon' width={27} height={27} />
                            <div className='icon-name'>CHAT</div>
                        </div>
                    </div>
                </Link>
            </div>

            {/* <div className="icon-tab">
                <Link className="icon-name nav-link" to="/Notices">
                    <div className='icon1'>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/3602/3602123.png" alt='NOTICES TAB' className='icon' width={27} height={27} />
                            <div className='icon-name'>NOTICES</div>
                        </div>
                    </div>
                </Link>
            </div> */}


            <div class="v2"></div>
            <div className="icon-tab2">
                <div className='img'>
                    <img src="https://cdn-icons-png.flaticon.com/128/149/149852.png" alt='NOTICES TAB' className='icon' width={27} height={27} />
                </div>
                <div className='serch-div' style={{ fontSize: 20 }}>Search</div>
            </div>
            <div class="vl"></div>

            <div className="icon-tab2">
                <div className='img'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQUXqMrzrmkxd3QpxGL5bzgxELsztrL1AgQ&usqp=CAU" alt='NOTICES TAB' className='icon' width={55} height={55} />
                </div>
                <div className='main-text'>
                    <div>
                        <div className='textone'>D.KARGAEV <label style={{ color: '#b2b2b2' }}>YOU</label></div>
                    </div>
                    <div>
                        <div className=' texttwo'>367 views today <label style={{ color: '#02B033' }}>+32 <img src="./up.png" alt='NOTICES TAB' className='icon' width={15} height={15} /></label></div>
                    </div>
                </div>
            </div>
            <div class="vl"></div>

            <div className="icon-tab">
                <div className='icon1'>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/128/512/512142.png" alt='NOTICES TAB' className='icon' width={27} height={27} />
                    </div>
                    <div className='icon-name'>OTHERS</div>
                </div>
            </div>



        </div>
    )
}
