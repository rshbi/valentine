import * as THREE from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import assets from "./assets.js"

const gltfLoader = new GLTFLoader()
const canvas = document.querySelector('canvas.webgl')

const scene = new THREE.Scene()

let model1_props = {
    height: Math.random() * 4,
    rotation: Math.PI / Math.random() * 4
}
let model2_props = {
    height: Math.random() * 4,
    rotation: Math.PI / Math.random() * 4
}
let model3_props = {
    height: Math.random() * 4,
    rotation: Math.PI / Math.random() * 4
}
let model4_props = {
    height: Math.random() * 4,
    rotation: Math.PI / Math.random() * 4
}
let model5_props = {
    height: Math.random() * 4,
    rotation: Math.PI / Math.random() * 4
}

let model6_props = {
    height: Math.random() * 4,
    rotation: Math.PI / Math.random() * 4
}
let model7_props = {
    height: Math.random() * 4,
    rotation: Math.PI / Math.random() * 4
}


let model1
let model2
let model3
let model4
let model5
let model6
let model7
let model8
let model9
let model10
let model11
let model12
let model13


gltfLoader.load(
    assets[0].path,
    (glb) => {
        model1 = glb.scene.children[0]

        model1.scale.x = 0.2
        model1.scale.y = 0.2
        model1.scale.z = 0.2
        model1.position.y = model1_props.height
        model1.position.x = -1
        model1.position.z = -0.25
        model1.rotation.y = model1_props.rotation
    
        scene.add(model1)

        model2 = model1.clone()

        model2.scale.x = 0.2
        model2.scale.y = 0.2
        model2.scale.z = 0.2
        model2.position.y = model2_props.height
        model2.position.x = -3
        model2.position.z = -0.25
        model2.rotation.y = model2_props.rotation
        scene.add(model2)

        model3 = model1.clone()

        model3.scale.x = 0.2
        model3.scale.y = 0.2
        model3.scale.z = 0.2
        model3.position.y = model3_props.height
        model3.position.x = -2
        model3.position.z = -0.25
        model3.rotation.y = model3_props.rotation
        scene.add(model3)

        model4 = model1.clone()

        model4.scale.x = 0.2
        model4.scale.y = 0.2
        model4.scale.z = 0.2
        model4.position.y = model3_props.height
        model4.position.x = -1
        model4.position.z = -0.25
        model4.rotation.y = model3_props.rotation
        scene.add(model4)

        model5 = model1.clone()

        model5.scale.x = 0.2
        model5.scale.y = 0.2
        model5.scale.z = 0.2
        model5.position.y = model3_props.height
        model5.position.x = 0
        model5.position.z = -0.25
        model5.rotation.y = model3_props.rotation
        scene.add(model5)

        model6 = model1.clone()

        model6.scale.x = 0.2
        model6.scale.y = 0.2
        model6.scale.z = 0.2
        model6.position.y = 0
        model6.position.x = 1
        model6.position.z = -0.25
        model6.rotation.y = model6_props.rotation
        scene.add(model6)

        model7 = model1.clone()

        model7.scale.x = 0.2
        model7.scale.y = 0.2
        model7.scale.z = 0.2
        model7.position.y = 0
        model7.position.x = 2
        model7.position.z = -0.25
        model7.rotation.y = model7_props.rotation
        scene.add(model7)

        model8 = model1.clone()

        model8.scale.x = 0.2
        model8.scale.y = 0.2
        model8.scale.z = 0.2
        model8.position.y = 0
        model8.position.x = 3
        model8.position.z = -0.25
        model8.rotation.y = model7_props.rotation
        scene.add(model8)

        model9 = model1.clone()

        model9.scale.x = 0.2
        model9.scale.y = 0.2
        model9.scale.z = 0.2
        model9.position.y = 0
        model9.position.x = 4
        model9.position.z = -0.25
        model9.rotation.y = model7_props.rotation
        scene.add(model9)

        model10 = model1.clone()

        model10.scale.x = 0.2
        model10.scale.y = 0.2
        model10.scale.z = 0.2
        model10.position.y = 0
        model10.position.x = 5
        model10.position.z = -0.25
        model10.rotation.y = model7_props.rotation
        scene.add(model10)

        model11 = model1.clone()

        model11.scale.x = 0.2
        model11.scale.y = 0.2
        model11.scale.z = 0.2
        model11.position.y = 0
        model11.position.x = -2
        model11.position.z = -0.25
        model11.rotation.y = model7_props.rotation
        scene.add(model11)

        model12 = model1.clone()

        model12.scale.x = 0.2
        model12.scale.y = 0.2
        model10.scale.z = 0.2
        model12.position.y = 0
        model12.position.x = -3
        model12.position.z = -0.25
        model12.rotation.y = model7_props.rotation
        scene.add(model12)

        model13 = model1.clone()

        model13.scale.x = 0.2
        model13.scale.y = 0.2
        model13.scale.z = 0.2
        model13.position.y = 0
        model13.position.x = -4
        model13.position.z = -0.25
        model13.rotation.y = model7_props.rotation
        scene.add(model13)
        
    }
)

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// console.log(sizes)

const objectsDistance = 4

const fontLoader = new FontLoader()

fontLoader.load(
    assets[1].path,
    (font) =>
    {
        const material = new THREE.MeshStandardMaterial({color: 0xffffff})
        material.roughness = 0.1

        const textOneGeometry = new TextGeometry(
            'Happy',
            {
                font: font,
                size: 0.5,
                height: 0.15,
            }
        )
        textOneGeometry.center()

        const textOne = new THREE.Mesh(textOneGeometry, material)
        textOne.position.y = 0.7
        scene.add(textOne)

        const textTwoGeometry = new TextGeometry(
            "Valentine's",
            {
                font: font,
                size: 0.5,
                height: 0.15,
            }
        )
        textTwoGeometry.center()

        const textTwo = new THREE.Mesh(textTwoGeometry, material)
        textTwo.position.y = -0.05
        scene.add(textTwo)

        const textThreeGeometry = new TextGeometry(
            'Day',
            {
                font: font,
                size: 0.5,
                height: 0.15,
            }
        )
        textThreeGeometry.center()

        const textThree = new THREE.Mesh(textThreeGeometry, material)
        textThree.position.y = -0.75
        scene.add(textThree)
    }
)

const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.set(0.2, 0, 1)
scene.add(directionalLight)

const particlesCount = 200
const positions = new Float32Array(particlesCount * 3)

for(let i = 0; i < particlesCount; i++)
{
    positions[i * 3 + 0] = (Math.random() - 0.5) * 10
    positions[i * 3 + 1] = objectsDistance * 0.5 - Math.random() * objectsDistance * 2
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10
}

const particlesGeometry = new THREE.BufferGeometry()
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

const particlesMaterial = new THREE.PointsMaterial({
    color: 0xffeded,
    size: 0.03
})

const particles = new THREE.Points(particlesGeometry, particlesMaterial)
scene.add(particles)

window.addEventListener('resize', () =>
{
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})


const cameraGroup = new THREE.Group()
scene.add(cameraGroup)


const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
cameraGroup.add(camera)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

let scrollY = window.scrollY

window.addEventListener('scroll', () =>
{
    scrollY = window.scrollY
})

const cursor = {}
cursor.x = 0
cursor.y = 0

window.addEventListener('mousemove', (event) =>
{
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = event.clientY / sizes.height - 0.5
})


const clock = new THREE.Clock()
let previousTime = 0
const fall_max = 7.5

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    previousTime = elapsedTime

    camera.position.y = - scrollY / sizes.height * objectsDistance

    if(model1){
        model1.rotation.z = (Math.PI / 4) * Math.sin(elapsedTime * 2)
        model1.position.x = (0.5) * Math.sin(elapsedTime * 2) - 1
        model1.position.y = ((2-elapsedTime) * (Math.sin(1))) % fall_max + 4.567
    }

    if(model2){
        model2.rotation.z = (Math.PI / 4) * Math.sin(elapsedTime * 2)
        model2.position.x = (0.5) * Math.sin(elapsedTime * 2) - 3
        model2.position.y = ((2-elapsedTime) * (Math.sin(1))) % fall_max + 2.123
    }

    if(model3){
        model3.rotation.z = (Math.PI / 4) * Math.sin(elapsedTime * 2)
        model3.position.x = (0.5) * Math.sin(elapsedTime * 2) - 2
        model3.position.y = ((2-elapsedTime) * (Math.sin(1))) % fall_max + 3.9876
    }

    if(model4){
        model4.rotation.z = (Math.PI / 4) * Math.sin(elapsedTime * 2)
        model4.position.x = (0.5) * Math.sin(elapsedTime * 2) - 1
        model4.position.y = ((2-elapsedTime) * (Math.sin(1))) % fall_max + 2.541
    }

    if(model5){
        model5.rotation.z = (Math.PI / 4) * Math.sin(elapsedTime * 2)
        model5.position.x = (0.5) * Math.sin(elapsedTime * 2)
        model5.position.y = ((2-elapsedTime) * (Math.sin(1))) % fall_max + 2.73
    }

    if(model6){
        model6.rotation.z = (Math.PI / 4) * Math.sin(elapsedTime * 2)
        model6.position.x = (0.5) * Math.sin(elapsedTime * 2) + 1
        model6.position.y = ((2-elapsedTime) * (Math.sin(1))) % fall_max + 4.78
    }

    if(model7){
        model7.rotation.z = (Math.PI / 4) * Math.sin(elapsedTime * 2)
        model7.position.x = (0.5) * Math.sin(elapsedTime * 2) + 2
        model7.position.y = ((2-elapsedTime) * (Math.sin(1))) % fall_max + 4.52
    }

    if(model8){
        model8.rotation.z = (Math.PI / 4) * Math.sin(elapsedTime * 2)
        model8.position.x = (0.5) * Math.sin(elapsedTime * 2) + 3
        model8.position.y = ((2-elapsedTime) * (Math.sin(1))) % fall_max + 3.98
    }

    if(model9){
        model9.rotation.z = (Math.PI / 4) * Math.sin(elapsedTime * 2)
        model9.position.x = (0.5) * Math.sin(elapsedTime * 2) + 4
        model9.position.y = ((2-elapsedTime) * (Math.sin(1))) % fall_max + 2.5
    }

    if(model10){
        model10.rotation.z = (Math.PI / 4) * Math.sin(elapsedTime * 2)
        model10.position.x = (0.5) * Math.sin(elapsedTime * 2) + 5
        model10.position.y = ((2-elapsedTime) * (Math.sin(1))) % fall_max + 4.5
    }

    if(model11){
        model11.rotation.z = (Math.PI / 4) * Math.sin(elapsedTime * 2)
        model11.position.x = (0.5) * Math.sin(elapsedTime * 2)  - 2
        model11.position.y = ((2-elapsedTime) * (Math.sin(1))) % fall_max + 3
    }

    if(model12){
        model12.rotation.z = (Math.PI / 4) * Math.sin(elapsedTime * 2)
        model12.position.x = (0.5) * Math.sin(elapsedTime * 2) - 3
        model12.position.y = ((2-elapsedTime) * (Math.sin(1))) % fall_max + 2.75
    }

    if(model13){
        model13.rotation.z = (Math.PI / 4) * Math.sin(elapsedTime * 2)
        model13.position.x = (0.5) * Math.sin(elapsedTime * 2) - 4
        model13.position.y = ((2-elapsedTime) * (Math.sin(1))) % fall_max + 4.5
    }

    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()