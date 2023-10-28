<script>
  import { onMount, onDestroy } from "svelte";
  import * as d3 from "d3";
  import _ from "lodash";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  gsap.registerPlugin(ScrollTrigger);

  let wrapperRef;
  let timeline;
  let scrollTrigger;
  let ctx;

  onMount(() => {
    ctx = gsap.context(() => {
      timeline && timeline.progress(0).kill();
      timeline = gsap
        .timeline({ paused: false })
        .to(".gsap-scrolly-demo-rect", {
          width: 500,
        });

      scrollTrigger = ScrollTrigger.create({
        trigger: document.querySelector(".wrapper_gsap-scrolly-demo"),
        animation: timeline,
        start: "top top",
        scrub: true,
        pin: true,
      });
    }, wrapperRef);
  });

  onDestroy(() => {
    if (ctx) {
      ctx.revert();
    }
  });
</script>

<div id="wrapper_gsap-scrolly-demo" bind:this={wrapperRef}>
  <div class="wrapper_gsap-scrolly-demo">
    <div class="gsap-scrolly-demo-rect" />
  </div>
  <div>And this is some text after the scrolly.</div>
</div>
