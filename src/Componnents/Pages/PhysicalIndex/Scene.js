import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import sculptureObj from '../public/head.glb'

export default class Scene {
    canvas
    renderer
    scene
    camera
    controls
    width = window.innerWidth
    height = window.innerHeight
    material

    constructor(el) {
        this.canvas = el
        this.init()
    }

    init() {
        this.setScene()
        this.setCamera()
        this.setRender()
        this.setModel()
        this.setLight()
        // this.setMaterial()
        this.setControls()
        this.animate()
    }

    /**
     * Our Webgl renderer, an object that will draw everything in our canvas
     * https://threejs.org/docs/?q=rend#api/en/renderers/WebGLRenderer
     */
    setRender() {
        // const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true
        })
        // this.renderer.setPixelRatio([1,2])
        this.renderer.setSize(this.width, this.height)
    }

    /**
     * This is our scene, we'll add any object
     * https://threejs.org/docs/?q=scene#api/en/scenes/Scene
     */
    setScene() {
        this.scene = new THREE.Scene()
        this.scene.background = new THREE.Color(16185854) //16185854,背景色一致
    }

    /**
     * Our Perspective camera, this is the point of view that we'll have
     * of our scene.
     * A perscpective camera is mimicing the human eyes so something far we'll
     * look smaller than something close
     * https://threejs.org/docs/?q=pers#api/en/cameras/PerspectiveCamera
     */
    setCamera() {
        this.camera = new THREE.PerspectiveCamera(
            50,
            680 / window.innerHeight ,
            0.01,
            5000
        )
        this.camera.position.y = 1
        this.camera.position.z = 2.5
        this.scene.add(this.camera)
    }

    /**
     * Threejs controls to have controls on our scene
     * https://threejs.org/docs/?q=orbi#examples/en/controls/OrbitControls
     */
    setControls() {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        this.controls.autoRotate = true
    }

    setLight() {
        // this.lights = []

        const spotLight = new THREE.SpotLight()
        spotLight.position.set(-10, 80, 130)
        spotLight.intensity = 1.8
        // this.lights.push(spotLight)
        this.scene.add(spotLight)
    }

    // setMaterial() {
    //   this.material = new THREE.MeshLambertMaterial({
    //     color: 'white'
    //   })
    // }

    setModel() {
        // const objLoader = new OBJLoader()
        //
        // objLoader.load(sculptureObj, (obj) => {
        //     const s = 0.01
        //     obj.scale.set(s, s, s)
        //     this.scene.add(obj)
        // })
        const objLoader = new GLTFLoader()

        objLoader.load(sculptureObj, (obj) => {
            // const s = 1
            // obj.scale.set(s, s, s)
            this.scene.add(obj.scene)
        })
    }

    animate = () => {
        this.renderer.render(this.scene, this.camera)
        window.requestAnimationFrame(this.animate)
    }
}
