import React from 'react'
import bgSlider1 from '../assets/images/bg-slider1.jpg'
import bgSlider2 from '../assets/images/bg-slider2.jpg'
const MainSlider = () => {
  return (

    <section className="banner-section banner-style-one">
      {/* <div className='tp-dottedoverlay on'></div> */}
    <div
      className="bg bg-image"
      style={{ backgroundImage: `url(${bgSlider2})` }}
    />
    <ul className="slide-social">
      <li>
        <a href="#">FACEBOOK</a>
      </li>
      <li>
        <a href="#">instagram</a>
      </li>
      <li>
        <a href="#">twitter</a>
      </li>
    </ul>
    <div className="auto-container">
      <div className="row">
        <div className="content-column col-xl-12">
          <div className="inner-column">
            <div
              className="border-box wow zoomIn animated animated"
              style={{ visibility: "visible", animationName: "zoomIn" }}
            />
            <span
              className="sub-title wow fadeInUp animated"
              data-wow-delay="300ms"
              style={{
                visibility: "visible",
                animationDelay: "300ms",
                animationName: "fadeInUp"
              }}
            >
              Best Digital Agency
            </span>
            <h1
              className="title wow fadeInUp animated"
              data-wow-delay="300ms"
              style={{
                visibility: "visible",
                animationDelay: "300ms",
                animationName: "fadeInUp"
              }}
            >
              Grow your <br /> Digital <span>Agency</span>
            </h1>
            <div
              className="text wow fadeInUp animated"
              data-wow-delay="600ms"
              style={{
                visibility: "visible",
                animationDelay: "600ms",
                animationName: "fadeInUp"
              }}
            >
              A leading voice in low-income binso policy and <br /> the nation’s
              largest nonprofit business installer
            </div>
            <a
              href="page-about.html"
              className="theme-btn btn-style-one dark-bg wow fadeInUp animated"
              data-wow-delay="900ms"
              style={{
                visibility: "visible",
                animationDelay: "900ms",
                animationName: "fadeInUp"
              }}
            >
              <span className="btn-title">Explore More </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  //   <section className="main-slider slider-style-four">
  // <div
  //   className="rev_slider_wrapper fullwidthbanner-container"
  //   id="rev_slider_one_wrapper"
  //   data-source="gallery"
  //   style={{ overflow: "visible", height: 750 }}
  // >
  //   <div
  //     className="rev_slider fullwidthabanner revslider-initialised tp-simpleresponsive rev_redraw_on_blurfocus"
  //     id="rev_slider_one"
  //     data-version="5.4.1"
  //     style={{ marginTop: 0, marginBottom: 0, height: 750 }}
  //     data-slideactive="rs-1"
  //   >
  //     <ul
  //       className="tp-revslider-mainul"
  //       style={{
  //         visibility: "visible",
  //         display: "block",
  //         overflow: "hidden",
  //         width: 2090,
  //         height: "100%",
  //         maxHeight: "none",
  //         left: 0
  //       }}
  //     >
  //       <li
  //         data-index="rs-1"
  //         data-transition="zoomout"
  //         className="tp-revslider-slidesli active-revslide"
  //         style={{
  //           perspective: 6000,
  //           width: "100%",
  //           height: "100%",
  //           overflow: "hidden",
  //           zIndex: 20,
  //           visibility: "inherit",
  //           opacity: 1,
  //           backgroundColor: "rgba(255, 255, 255, 0)"
  //         }}
  //       >
  //         <div
  //           className="slotholder"
  //           style={{
  //             position: "absolute",
  //             top: 0,
  //             left: 0,
  //             zIndex: 0,
  //             width: "100%",
  //             height: "100%",
  //             visibility: "inherit",
  //             opacity: 1,
  //             transform: "matrix(1, 0, 0, 1, 0, 0)"
  //           }}
  //         >
  //           {/*Runtime Modification - Img tag is Still Available for SEO Goals in Source - <img src="images/main-slider/bg-slider1.jpg" alt="" class="rev-slidebg defaultimg">*/}
  //           <div className="tp-dottedoverlay on" />
  //           <div
  //             className="tp-bgimg defaultimg "
  //             data-bgcolor="undefined"
  //             style={{
  //               backgroundRepeat: "no-repeat",
  //               backgroundImage: `url(${bgSlider1})`,
  //               backgroundSize: "cover",
  //               backgroundPosition: "center center",
  //               width: "100%",
  //               height: "100%",
  //               opacity: 1,
  //               visibility: "inherit",
  //               zIndex: 20
  //             }}
  //             src={bgSlider1}
  //           />
  //         </div>
  //         <div
  //           className="tp-parallax-wrap"
  //           style={{
  //             position: "absolute",
  //             display: "block",
  //             visibility: "visible",
  //             left: 462,
  //             top: 170,
  //             zIndex: 1
  //           }}
  //         >
  //           <div
  //             className="tp-loop-wrap"
  //             style={{ position: "absolute", display: "block" }}
  //           >
  //             <div
  //               className="tp-mask-wrap"
  //               style={{
  //                 position: "absolute",
  //                 display: "block",
  //                 overflow: "hidden",
  //                 transform: "matrix(1, 0, 0, 1, 0, 0)"
  //               }}
  //             >
  //               <div
  //                 className="tp-caption"
  //                 data-paddingbottom="[15,15,15,15]"
  //                 data-paddingleft="[15,15,15,15]"
  //                 data-paddingright="[0,0,0,0]"
  //                 data-paddingtop="[10,10,10,10]"
  //                 data-responsive_offset="on"
  //                 data-type="text"
  //                 data-height="none"
  //                 data-width="['750','750','750','750']"
  //                 data-whitespace="normal"
  //                 data-hoffset="['0','0','0','0']"
  //                 data-voffset="['-170','-140','-170','-170']"
  //                 data-x="['left','left','left','left']"
  //                 data-y="['middle','middle','middle','middle']"
  //                 data-textalign="['top','top','top','top']"
  //                 data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
  //                 id="layer-650774204"
  //                 style={{
  //                   visibility: "inherit",
  //                   transition: "none 0s ease 0s",
  //                   lineHeight: 30,
  //                   borderWidth: 0,
  //                   margin: 0,
  //                   padding: "10px 0px 15px 15px",
  //                   letterSpacing: "-1px",
  //                   fontWeight: 400,
  //                   fontSize: 16,
  //                   whiteSpace: "normal",
  //                   minHeight: 0,
  //                   minWidth: 750,
  //                   maxHeight: "none",
  //                   maxWidth: 750,
  //                   opacity: 1,
  //                   transform:
  //                     "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
  //                   transformOrigin: "50% 50% 0px"
  //                 }}
  //               >
  //                 <span className="sub-title">
  //                   Solutions for your businesses
  //                 </span>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <div
  //           className="tp-parallax-wrap"
  //           style={{
  //             position: "absolute",
  //             display: "block",
  //             visibility: "visible",
  //             left: 462,
  //             top: 247,
  //             zIndex: 1
  //           }}
  //         >
  //           <div
  //             className="tp-loop-wrap"
  //             style={{ position: "absolute", display: "block" }}
  //           >
  //             <div
  //               className="tp-mask-wrap"
  //               style={{
  //                 position: "absolute",
  //                 display: "block",
  //                 overflow: "hidden",
  //                 transform: "matrix(1, 0, 0, 1, 0, 0)"
  //               }}
  //             >
  //               <div
  //                 className="tp-caption"
  //                 data-paddingbottom="[0,0,0,0]"
  //                 data-paddingleft="[15,15,15,15]"
  //                 data-paddingright="[15,15,15,15]"
  //                 data-paddingtop="[0,0,0,0]"
  //                 data-responsive_offset="on"
  //                 data-type="text"
  //                 data-height="none"
  //                 data-width="['1050','750','750','480']"
  //                 data-whitespace="normal"
  //                 data-hoffset="['0','0','0','0']"
  //                 data-voffset="['-40','-40','-40','-60']"
  //                 data-x="['left','left','left','left']"
  //                 data-y="['middle','middle','middle','middle']"
  //                 data-textalign="['top','top','top','top']"
  //                 data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
  //                 id="layer-924142373"
  //                 style={{
  //                   visibility: "inherit",
  //                   transition: "none 0s ease 0s",
  //                   lineHeight: 30,
  //                   borderWidth: 0,
  //                   margin: 0,
  //                   padding: "0px 15px",
  //                   letterSpacing: "-1px",
  //                   fontWeight: 400,
  //                   fontSize: 16,
  //                   whiteSpace: "normal",
  //                   minHeight: 0,
  //                   minWidth: 1050,
  //                   maxHeight: "none",
  //                   maxWidth: 1050,
  //                   opacity: 1,
  //                   transform:
  //                     "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
  //                   transformOrigin: "50% 50% 0px"
  //                 }}
  //               >
  //                 <h1 className="title">
  //                   IT Solutions <br />
  //                   <span>&amp;</span> Technology
  //                 </h1>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <div
  //           className="tp-parallax-wrap"
  //           style={{
  //             position: "absolute",
  //             display: "block",
  //             visibility: "visible",
  //             left: 462,
  //             top: 435,
  //             zIndex: 1
  //           }}
  //         >
  //           <div
  //             className="tp-loop-wrap"
  //             style={{ position: "absolute", display: "block" }}
  //           >
  //             <div
  //               className="tp-mask-wrap"
  //               style={{
  //                 position: "absolute",
  //                 display: "block",
  //                 overflow: "hidden",
  //                 transform: "matrix(1, 0, 0, 1, 0, 0)"
  //               }}
  //             >
  //               <div
  //                 className="tp-caption"
  //                 data-paddingbottom="[0,0,0,0]"
  //                 data-paddingleft="[15,15,15,15]"
  //                 data-paddingright="[15,15,15,15]"
  //                 data-paddingtop="[0,0,0,0]"
  //                 data-responsive_offset="on"
  //                 data-type="text"
  //                 data-height="none"
  //                 data-width="['1050','750','750','480']"
  //                 data-whitespace="normal"
  //                 data-hoffset="['0','0','0','0']"
  //                 data-voffset="['90','70','100','50']"
  //                 data-x="['left','left','left','left']"
  //                 data-y="['middle','middle','middle','middle']"
  //                 data-textalign="['top','top','top','top']"
  //                 data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
  //                 id="layer-789514362"
  //                 style={{
  //                   visibility: "inherit",
  //                   transition: "none 0s ease 0s",
  //                   lineHeight: 30,
  //                   borderWidth: 0,
  //                   margin: 0,
  //                   padding: "0px 15px",
  //                   letterSpacing: "-1px",
  //                   fontWeight: 400,
  //                   fontSize: 16,
  //                   whiteSpace: "normal",
  //                   minHeight: 0,
  //                   minWidth: 1050,
  //                   maxHeight: "none",
  //                   maxWidth: 1050,
  //                   opacity: 1,
  //                   transform:
  //                     "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
  //                   transformOrigin: "50% 50% 0px"
  //                 }}
  //               >
  //                 <div className="text">
  //                   There are many of passages of lorem Ipsum, but the majori
  //                   have <br /> suffered alteration in some form.
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <div
  //           className="tp-parallax-wrap"
  //           style={{
  //             position: "absolute",
  //             display: "block",
  //             visibility: "visible",
  //             left: 462,
  //             top: 514,
  //             zIndex: 1
  //           }}
  //         >
  //           <div
  //             className="tp-loop-wrap"
  //             style={{ position: "absolute", display: "block" }}
  //           >
  //             <div
  //               className="tp-mask-wrap"
  //               style={{
  //                 position: "absolute",
  //                 display: "block",
  //                 overflow: "hidden",
  //                 transform: "matrix(1, 0, 0, 1, 0, 0)"
  //               }}
  //             >
  //               <div
  //                 className="tp-caption"
  //                 data-paddingbottom="[0,0,0,0]"
  //                 data-paddingleft="[15,15,0,5]"
  //                 data-paddingright="[15,15,15,15]"
  //                 data-paddingtop="[0,0,0,0]"
  //                 data-responsive_offset="on"
  //                 data-type="text"
  //                 data-height="none"
  //                 data-width="['700','750','700','450']"
  //                 data-whitespace="normal"
  //                 data-hoffset="['0','0','20','10']"
  //                 data-voffset="['170','160','210','170']"
  //                 data-x="['left','left','left','left']"
  //                 data-y="['middle','middle','middle','middle']"
  //                 data-textalign="['top','top','top','top']"
  //                 data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
  //                 id="layer-430450473"
  //                 style={{
  //                   visibility: "inherit",
  //                   transition: "none 0s ease 0s",
  //                   lineHeight: 30,
  //                   borderWidth: 0,
  //                   margin: 0,
  //                   padding: "0px 15px",
  //                   letterSpacing: "-1px",
  //                   fontWeight: 400,
  //                   fontSize: 16,
  //                   whiteSpace: "normal",
  //                   minHeight: 0,
  //                   minWidth: 700,
  //                   maxHeight: "none",
  //                   maxWidth: 700,
  //                   opacity: 1,
  //                   transform:
  //                     "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
  //                   transformOrigin: "50% 50% 0px"
  //                 }}
  //               >
  //                 <button
  //                   type="submit"
  //                   className="theme-btn btn-style-one hover-light"
  //                 >
  //                   <span className="btn-title">Discover more</span>
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <div
  //           className="tp-parallax-wrap tp-parallax-container"
  //           style={{
  //             position: "absolute",
  //             display: "block",
  //             visibility: "visible",
  //             left: 720,
  //             top: 503,
  //             zIndex: 1,
  //             transform: "matrix(1, 0, 0, 1, 0, 0)"
  //           }}
  //         >
  //           <div
  //             className="tp-loop-wrap"
  //             style={{ position: "absolute", display: "block" }}
  //           >
  //             <div
  //               className="tp-mask-wrap"
  //               style={{
  //                 position: "absolute",
  //                 display: "block",
  //                 overflow: "hidden",
  //                 transform: "matrix(1, 0, 0, 1, 0, 0)"
  //               }}
  //             >
  //               <div
  //                 className="tp-caption tp-resizeme rs-parallaxlevel-3 hidden-mobile"
  //                 data-paddingbottom="[0,0,0,0]"
  //                 data-paddingleft="[0,0,0,0]"
  //                 data-paddingright="[0,0,0,0]"
  //                 data-paddingtop="[0,0,0,0]"
  //                 data-responsive_offset="on"
  //                 data-type="shape"
  //                 data-height="none"
  //                 data-whitespace="nowrap"
  //                 data-width="none"
  //                 data-hoffset="['-270','-190','20','140']"
  //                 data-voffset="['160','160','160','160']"
  //                 data-x="['center','center','center','center']"
  //                 data-y="['middle','middle','middle','middle']"
  //                 data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":2000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":3000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
  //                 id="layer-108459324"
  //                 style={{
  //                   visibility: "inherit",
  //                   transition: "none 0s ease 0s",
  //                   textAlign: "inherit",
  //                   lineHeight: 0,
  //                   borderWidth: 0,
  //                   margin: 0,
  //                   padding: 0,
  //                   letterSpacing: "-1px",
  //                   fontWeight: 400,
  //                   fontSize: 16,
  //                   whiteSpace: "nowrap",
  //                   minHeight: 0,
  //                   minWidth: 0,
  //                   maxHeight: "none",
  //                   maxWidth: "none",
  //                   opacity: 1,
  //                   transform:
  //                     "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
  //                   transformOrigin: "50% 50% 0px"
  //                 }}
  //               >
  //                 <figure
  //                   style={{
  //                     transition: "none 0s ease 0s",
  //                     textAlign: "inherit",
  //                     lineHeight: 0,
  //                     borderWidth: 0,
  //                     margin: 0,
  //                     padding: 0,
  //                     letterSpacing: "-1px",
  //                     fontWeight: 400,
  //                     fontSize: 16
  //                   }}
  //                 >
  //                   <img
  //                     src="images/icons/arrow.png"
  //                     alt=""
  //                     style={{
  //                       width: 109,
  //                       height: 64,
  //                       transition: "none 0s ease 0s",
  //                       textAlign: "inherit",
  //                       lineHeight: 0,
  //                       borderWidth: 0,
  //                       margin: 0,
  //                       padding: 0,
  //                       letterSpacing: "-1px",
  //                       fontWeight: 400,
  //                       fontSize: 16
  //                     }}
  //                   />
  //                 </figure>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </li>
  //       <li
  //         data-index="rs-2"
  //         data-transition="zoomout"
  //         className="tp-revslider-slidesli"
  //         style={{
  //           perspective: 6000,
  //           width: "100%",
  //           height: "100%",
  //           overflow: "hidden",
  //           zIndex: 18,
  //           visibility: "hidden",
  //           opacity: 0,
  //           backgroundColor: "rgba(255, 255, 255, 0)"
  //         }}
  //       >
  //         <div
  //           className="slotholder"
  //           style={{
  //             position: "absolute",
  //             top: 0,
  //             left: 0,
  //             zIndex: 0,
  //             width: "100%",
  //             height: "100%",
  //             visibility: "inherit",
  //             opacity: 1,
  //             transform: "matrix(1, 0, 0, 1, 0, 0)"
  //           }}
  //         >
  //           {/*Runtime Modification - Img tag is Still Available for SEO Goals in Source - <img src="images/main-slider/bg-slider2.jpg" alt="" class="rev-slidebg defaultimg">*/}
  //           <div className="tp-dottedoverlay on" />
  //           <div
  //             className="tp-bgimg defaultimg "
  //             data-bgcolor="undefined"
  //             style={{
  //               backgroundRepeat: "no-repeat",
  //               backgroundImage: 'url("images/main-slider/bg-slider2.jpg")',
  //               backgroundSize: "cover",
  //               backgroundPosition: "center center",
  //               width: "100%",
  //               height: "100%",
  //               opacity: 1,
  //               visibility: "hidden",
  //               zIndex: 20
  //             }}
  //             src="images/main-slider/bg-slider2.jpg"
  //           />
  //         </div>
  //         <div
  //           className="tp-parallax-wrap"
  //           style={{
  //             position: "absolute",
  //             display: "block",
  //             visibility: "hidden",
  //             left: 0,
  //             top: 111,
  //             zIndex: 1
  //           }}
  //         >
  //           <div
  //             className="tp-loop-wrap"
  //             style={{ position: "absolute", display: "block" }}
  //           >
  //             <div
  //               className="tp-mask-wrap"
  //               style={{
  //                 position: "absolute",
  //                 display: "block",
  //                 overflow: "hidden",
  //                 transform: "matrix(1, 0, 0, 1, 0, 0)"
  //               }}
  //             >
  //               <div
  //                 className="tp-caption"
  //                 data-paddingbottom="[15,15,15,15]"
  //                 data-paddingleft="[15,15,15,15]"
  //                 data-paddingright="[0,0,0,0]"
  //                 data-paddingtop="[10,10,10,10]"
  //                 data-responsive_offset="on"
  //                 data-type="text"
  //                 data-height="none"
  //                 data-width="['750','750','750','750']"
  //                 data-whitespace="normal"
  //                 data-hoffset="['0','0','0','0']"
  //                 data-voffset="['-170','-140','-170','-130']"
  //                 data-x="['left','left','left','left']"
  //                 data-y="['middle','middle','middle','middle']"
  //                 data-textalign="['top','top','top','top']"
  //                 data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
  //                 id="layer-132863562"
  //                 style={{
  //                   visibility: "inherit",
  //                   transition: "none 0s ease 0s",
  //                   lineHeight: 23,
  //                   borderWidth: 0,
  //                   margin: 0,
  //                   padding: "8px 0px 12px 12px",
  //                   letterSpacing: "-1px",
  //                   fontWeight: 400,
  //                   fontSize: 12,
  //                   whiteSpace: "normal",
  //                   minHeight: 0,
  //                   minWidth: 585,
  //                   maxHeight: "none",
  //                   maxWidth: 585,
  //                   opacity: 1,
  //                   transform:
  //                     "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -71, 0, 1)",
  //                   transformOrigin: "50% 50% 0px"
  //                 }}
  //               >
  //                 <span className="sub-title">
  //                   Solutions for your businesses
  //                 </span>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <div
  //           className="tp-parallax-wrap"
  //           style={{
  //             position: "absolute",
  //             display: "block",
  //             visibility: "hidden",
  //             left: 0,
  //             top: 174,
  //             zIndex: 1
  //           }}
  //         >
  //           <div
  //             className="tp-loop-wrap"
  //             style={{ position: "absolute", display: "block" }}
  //           >
  //             <div
  //               className="tp-mask-wrap"
  //               style={{
  //                 position: "absolute",
  //                 display: "block",
  //                 overflow: "hidden",
  //                 transform: "matrix(1, 0, 0, 1, 0, 0)"
  //               }}
  //             >
  //               <div
  //                 className="tp-caption"
  //                 data-paddingbottom="[0,0,0,0]"
  //                 data-paddingleft="[15,15,15,15]"
  //                 data-paddingright="[15,15,15,15]"
  //                 data-paddingtop="[0,0,0,0]"
  //                 data-responsive_offset="on"
  //                 data-type="text"
  //                 data-height="none"
  //                 data-width="['1050','750','750','480']"
  //                 data-whitespace="normal"
  //                 data-hoffset="['0','0','0','0']"
  //                 data-voffset="['-40','-40','-40','-40']"
  //                 data-x="['left','left','left','left']"
  //                 data-y="['middle','middle','middle','middle']"
  //                 data-textalign="['top','top','top','top']"
  //                 data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
  //                 id="layer-616011696"
  //                 style={{
  //                   visibility: "inherit",
  //                   transition: "none 0s ease 0s",
  //                   lineHeight: 23,
  //                   borderWidth: 0,
  //                   margin: 0,
  //                   padding: "0px 12px",
  //                   letterSpacing: "-1px",
  //                   fontWeight: 400,
  //                   fontSize: 12,
  //                   whiteSpace: "normal",
  //                   minHeight: 0,
  //                   minWidth: 375,
  //                   maxHeight: "none",
  //                   maxWidth: 375,
  //                   opacity: 1,
  //                   transform:
  //                     "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -178, 0, 1)",
  //                   transformOrigin: "50% 50% 0px"
  //                 }}
  //               >
  //                 <h1 className="title">
  //                   IT Solutions <br />
  //                   <span>&amp;</span> Technology
  //                 </h1>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <div
  //           className="tp-parallax-wrap"
  //           style={{
  //             position: "absolute",
  //             display: "block",
  //             visibility: "hidden",
  //             left: 0,
  //             top: 274,
  //             zIndex: 1
  //           }}
  //         >
  //           <div
  //             className="tp-loop-wrap"
  //             style={{ position: "absolute", display: "block" }}
  //           >
  //             <div
  //               className="tp-mask-wrap"
  //               style={{
  //                 position: "absolute",
  //                 display: "block",
  //                 overflow: "hidden",
  //                 transform: "matrix(1, 0, 0, 1, 0, 0)"
  //               }}
  //             >
  //               <div
  //                 className="tp-caption"
  //                 data-paddingbottom="[0,0,0,0]"
  //                 data-paddingleft="[15,15,15,15]"
  //                 data-paddingright="[15,15,15,15]"
  //                 data-paddingtop="[0,0,0,0]"
  //                 data-responsive_offset="on"
  //                 data-type="text"
  //                 data-height="none"
  //                 data-width="['1050','750','750','480']"
  //                 data-whitespace="normal"
  //                 data-hoffset="['0','0','0','0']"
  //                 data-voffset="['90','70','90','80']"
  //                 data-x="['left','left','left','left']"
  //                 data-y="['middle','middle','middle','middle']"
  //                 data-textalign="['top','top','top','top']"
  //                 data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
  //                 id="layer-320705047"
  //                 style={{
  //                   visibility: "inherit",
  //                   transition: "none 0s ease 0s",
  //                   lineHeight: 23,
  //                   borderWidth: 0,
  //                   margin: 0,
  //                   padding: "0px 12px",
  //                   letterSpacing: "-1px",
  //                   fontWeight: 400,
  //                   fontSize: 12,
  //                   whiteSpace: "normal",
  //                   minHeight: 0,
  //                   minWidth: 375,
  //                   maxHeight: "none",
  //                   maxWidth: 375,
  //                   opacity: 1,
  //                   transform:
  //                     "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -62, 0, 1)",
  //                   transformOrigin: "50% 50% 0px"
  //                 }}
  //               >
  //                 <div className="text">
  //                   There are many of passages of lorem Ipsum, but the majori
  //                   have <br /> suffered alteration in some form.
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <div
  //           className="tp-parallax-wrap"
  //           style={{
  //             position: "absolute",
  //             display: "block",
  //             visibility: "hidden",
  //             left: 0,
  //             top: 328,
  //             zIndex: 1
  //           }}
  //         >
  //           <div
  //             className="tp-loop-wrap"
  //             style={{ position: "absolute", display: "block" }}
  //           >
  //             <div
  //               className="tp-mask-wrap"
  //               style={{
  //                 position: "absolute",
  //                 display: "block",
  //                 overflow: "hidden",
  //                 transform: "matrix(1, 0, 0, 1, 0, 0)"
  //               }}
  //             >
  //               <div
  //                 className="tp-caption"
  //                 data-paddingbottom="[0,0,0,0]"
  //                 data-paddingleft="[15,15,0,5]"
  //                 data-paddingright="[15,15,15,15]"
  //                 data-paddingtop="[0,0,0,0]"
  //                 data-responsive_offset="on"
  //                 data-type="text"
  //                 data-height="none"
  //                 data-width="['700','750','700','450']"
  //                 data-whitespace="normal"
  //                 data-hoffset="['0','0','20','0']"
  //                 data-voffset="['170','160','210','150']"
  //                 data-x="['left','left','left','left']"
  //                 data-y="['middle','middle','middle','middle']"
  //                 data-textalign="['top','top','top','top']"
  //                 data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
  //                 id="layer-461247173"
  //                 style={{
  //                   visibility: "inherit",
  //                   transition: "none 0s ease 0s",
  //                   lineHeight: 23,
  //                   borderWidth: 0,
  //                   margin: 0,
  //                   padding: "0px 12px 0px 4px",
  //                   letterSpacing: "-1px",
  //                   fontWeight: 400,
  //                   fontSize: 12,
  //                   whiteSpace: "normal",
  //                   minHeight: 0,
  //                   minWidth: 351,
  //                   maxHeight: "none",
  //                   maxWidth: 351,
  //                   opacity: 1,
  //                   transform:
  //                     "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -63, 0, 1)",
  //                   transformOrigin: "50% 50% 0px"
  //                 }}
  //               >
  //                 <button
  //                   type="submit"
  //                   className="theme-btn btn-style-one hover-light"
  //                 >
  //                   <span className="btn-title">Discover more</span>
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <div
  //           className="tp-parallax-wrap tp-parallax-container"
  //           style={{
  //             position: "absolute",
  //             display: "block",
  //             visibility: "hidden",
  //             transform: "matrix(1, 0, 0, 1, 0, 0)",
  //             left: 254,
  //             top: 341,
  //             zIndex: 1
  //           }}
  //         >
  //           <div
  //             className="tp-loop-wrap"
  //             style={{ position: "absolute", display: "block" }}
  //           >
  //             <div
  //               className="tp-mask-wrap"
  //               style={{
  //                 position: "absolute",
  //                 display: "block",
  //                 overflow: "hidden",
  //                 transform: "matrix(1, 0, 0, 1, 0, 0)"
  //               }}
  //             >
  //               <div
  //                 className="tp-caption tp-resizeme rs-parallaxlevel-3 hidden-mobile"
  //                 data-paddingbottom="[0,0,0,0]"
  //                 data-paddingleft="[0,0,0,0]"
  //                 data-paddingright="[0,0,0,0]"
  //                 data-paddingtop="[0,0,0,0]"
  //                 data-responsive_offset="on"
  //                 data-type="shape"
  //                 data-height="none"
  //                 data-whitespace="nowrap"
  //                 data-width="none"
  //                 data-hoffset="['-270','-190','20','140']"
  //                 data-voffset="['160','160','160','160']"
  //                 data-x="['center','center','center','center']"
  //                 data-y="['middle','middle','middle','middle']"
  //                 data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":2000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":3000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
  //                 id="layer-316328937"
  //                 style={{
  //                   visibility: "inherit",
  //                   transition: "none 0s ease 0s",
  //                   textAlign: "inherit",
  //                   lineHeight: 0,
  //                   borderWidth: 0,
  //                   margin: 0,
  //                   padding: 0,
  //                   letterSpacing: "-1px",
  //                   fontWeight: 400,
  //                   fontSize: 12,
  //                   whiteSpace: "nowrap",
  //                   minHeight: 0,
  //                   minWidth: 0,
  //                   maxHeight: "none",
  //                   maxWidth: "none",
  //                   opacity: 1,
  //                   transform:
  //                     "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 66, 0, 1)",
  //                   transformOrigin: "50% 50% 0px"
  //                 }}
  //               >
  //                 <figure
  //                   style={{
  //                     transition: "none 0s ease 0s",
  //                     textAlign: "inherit",
  //                     lineHeight: 0,
  //                     borderWidth: 0,
  //                     margin: 0,
  //                     padding: 0,
  //                     letterSpacing: "-1px",
  //                     fontWeight: 400,
  //                     fontSize: 12
  //                   }}
  //                 >
  //                   <img
  //                     src="images/icons/arrow.png"
  //                     alt=""
  //                     style={{
  //                       width: "85.0903px",
  //                       height: "49.9613px",
  //                       transition: "none 0s ease 0s",
  //                       textAlign: "inherit",
  //                       lineHeight: 0,
  //                       borderWidth: 0,
  //                       margin: 0,
  //                       padding: 0,
  //                       letterSpacing: "-1px",
  //                       fontWeight: 400,
  //                       fontSize: 12
  //                     }}
  //                   />
  //                 </figure>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </li>
  //     </ul>
  //     <div className="tp-loader off" style={{ display: "none" }}>
  //       <div className="dot1" />
  //       <div className="dot2" />
  //       <div className="bounce1" />
  //       <div className="bounce2" />
  //       <div className="bounce3" />
  //     </div>
  //     <div
  //       className="tp-bannertimer"
  //       style={{
  //         visibility: "visible",
  //         width: "0%",
  //         transform: "matrix(1, 0, 0, 1, 0, 0)"
  //       }}
  //     />
  //     <div
  //       className="tp-leftarrow tparrows gyges"
  //       style={{
  //         top: "50%",
  //         transform: "matrix(1, 0, 0, 1, 15, -80)",
  //         left: 0,
  //         visibility: "hidden",
  //         opacity: 0
  //       }}
  //     />
  //     <div
  //       className="tp-rightarrow tparrows gyges"
  //       style={{
  //         top: "50%",
  //         transform: "matrix(1, 0, 0, 1, -95, -80)",
  //         left: "100%",
  //         visibility: "hidden",
  //         opacity: 0
  //       }}
  //     />
  //   </div>
  // </div>
  //   </section>

  

  
  )
}

export default MainSlider
