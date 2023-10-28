import React, { useRef, useLayoutEffect } from "react";
import * as d3 from "d3";
import _ from 'lodash'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const GsapScrollyDemo = () => {

  const wrapperRef = useRef()
  const timeline = useRef()
  const scrollTrigger = useRef()

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      timeline.current && timeline.current.progress(0).kill();
      timeline.current = gsap.timeline({ paused: false })
        .to('.gsap-scrolly-demo-rect', {
          width: 500,
        })

      scrollTrigger.current = ScrollTrigger.create({
        trigger: document.querySelector(".wrapper_gsap-scrolly-demo"),
        animation: timeline.current,
        start: "top top",
        scrub: true,
        pin: true,
        // pinSpacing: false
      });

    }, wrapperRef)

    return () => ctx.revert()

  }, [])

  return (
    <div id='wrapper_gsap-scrolly-demo' ref={wrapperRef}>
      <div className="wrapper_gsap-scrolly-demo">
        <div className='gsap-scrolly-demo-rect'></div>
      </div>
      <div>And this is some text after the scrolly.</div>
    </div>
  )
}

export default GsapScrollyDemo