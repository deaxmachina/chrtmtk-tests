<script>
  import { onMount } from "svelte";
  import * as THREE from "three";
  import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
  export let id = "id";

  let canvas;
  let scene;
  let geometry;
  let material;
  let mesh;
  let directionalLight;
  let ambientLight;
  let camera;
  let controls;
  let renderer;

  onMount(() => {
    // Canvas
    canvas = document.getElementById(`${id}`);

    // Sizes
    const wrapper = document.querySelector(".webgl");
    const width = wrapper.getBoundingClientRect().width;
    const height = wrapper.getBoundingClientRect().height;

    // Scene
    scene = new THREE.Scene();

    // Geometry
    geometry = new THREE.BoxGeometry(1, 1, 1, 10, 10, 10);

    // Material
    material = new THREE.MeshStandardMaterial({ color: "mediumpurple" });

    // Mesh
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Light
    directionalLight = new THREE.DirectionalLight(0xffffff, 1.9);
    directionalLight.position.set(0.6, 0.2, 0);
    scene.add(directionalLight);
    ambientLight = new THREE.AmbientLight(0x404040, 2.5); // soft white light
    scene.add(ambientLight);

    // Camera
    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
    camera.position.set(1, 0.3, 1.5);
    scene.add(camera);

    // Controls
    controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    //controls.enableZoom = false

    // Renderer
    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    ////////////////////////////////////////
    ////////////// Events //////////////////
    ////////////////////////////////////////
    // Animate
    const tick = () => {
      // Update controls
      controls.update();

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();
  });
</script>

<div class="section">
  <canvas class="webgl" {id} />
</div>

<style>
</style>
