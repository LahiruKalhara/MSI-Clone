import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const COUNTRIES = [
  { name: 'USA', lat: 38.9, lon: -77.0, region: 'na' },
  { name: 'Canada', lat: 45.4, lon: -75.7, region: 'na' },
  { name: 'Germany', lat: 52.5, lon: 13.4, region: 'eu' },
  { name: 'UK', lat: 51.5, lon: -0.1, region: 'eu' },
  { name: 'Japan', lat: 35.7, lon: 139.7, region: 'ap' },
  { name: 'S. Korea', lat: 37.6, lon: 127.0, region: 'ap' },
  { name: 'Singapore', lat: 1.35, lon: 103.8, region: 'ap' },
  { name: 'Australia', lat: -33.9, lon: 151.2, region: 'ap' },
  { name: 'India', lat: 28.6, lon: 77.2, region: 'ap' },
  { name: 'UAE', lat: 24.5, lon: 54.6, region: 'me' },
]

const REGION_COLORS = {
  na: 0x00c8ff,
  eu: 0x8a2be2,
  ap: 0xffa500,
  me: 0x00e676,
}

function latLonToVec3(lat, lon, radius) {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  )
}

export default function Globe3D({ size = 200 }) {
  const mountRef = useRef(null)

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    const width = size
    const height = size
    const loader = new THREE.TextureLoader()

    // Scene
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.z = 3.0

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2
    container.appendChild(renderer.domElement)

    // Earth group (rotates together)
    const earthGroup = new THREE.Group()
    earthGroup.rotation.z = 23.4 * (Math.PI / 180) // axial tilt
    scene.add(earthGroup)

    // Earth sphere
    const earthGeo = new THREE.SphereGeometry(1, 64, 64)
    const albedoMap = loader.load('/textures/earth-albedo.jpg')
    const bumpMap = loader.load('/textures/earth-bump.jpg')
    const specularMap = loader.load('/textures/earth-specular.png')

    const earthMat = new THREE.MeshPhongMaterial({
      map: albedoMap,
      bumpMap: bumpMap,
      bumpScale: 0.04,
      specularMap: specularMap,
      specular: new THREE.Color(0x333333),
      shininess: 25,
    })
    const earth = new THREE.Mesh(earthGeo, earthMat)
    earthGroup.add(earth)

    // Cloud layer
    const cloudGeo = new THREE.SphereGeometry(1.01, 64, 64)
    const cloudMap = loader.load('/textures/earth-clouds.png')
    const cloudMat = new THREE.MeshPhongMaterial({
      map: cloudMap,
      transparent: true,
      opacity: 0.35,
      depthWrite: false,
    })
    const clouds = new THREE.Mesh(cloudGeo, cloudMat)
    earthGroup.add(clouds)

    // Night lights (additive layer on dark side)
    const nightMap = loader.load('/textures/earth-night.png')
    const nightMat = new THREE.ShaderMaterial({
      uniforms: {
        nightTexture: { value: nightMap },
        sunDirection: { value: new THREE.Vector3(5, 3, 5).normalize() },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPos;
        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D nightTexture;
        uniform vec3 sunDirection;
        varying vec2 vUv;
        varying vec3 vNormal;
        void main() {
          float sunDot = dot(vNormal, sunDirection);
          float nightFactor = smoothstep(-0.1, -0.4, sunDot);
          vec4 nightColor = texture2D(nightTexture, vUv);
          gl_FragColor = vec4(nightColor.rgb * nightFactor * 1.5, nightFactor * nightColor.a);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    const nightMesh = new THREE.Mesh(new THREE.SphereGeometry(1.002, 64, 64), nightMat)
    earthGroup.add(nightMesh)

    // Atmosphere glow
    const atmosGeo = new THREE.SphereGeometry(1.12, 64, 64)
    const atmosMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.0);
          vec3 atmosColor = mix(vec3(0.1, 0.4, 1.0), vec3(0.0, 0.8, 1.0), intensity);
          gl_FragColor = vec4(atmosColor, 1.0) * intensity * 0.7;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
    })
    const atmosphere = new THREE.Mesh(atmosGeo, atmosMat)
    scene.add(atmosphere)

    // Country markers
    const markerGroup = new THREE.Group()
    markerGroup.rotation.z = 23.4 * (Math.PI / 180)
    COUNTRIES.forEach((country) => {
      const pos = latLonToVec3(country.lat, country.lon, 1.025)
      const color = REGION_COLORS[country.region]

      // Marker dot
      const dotGeo = new THREE.SphereGeometry(0.022, 16, 16)
      const dotMat = new THREE.MeshBasicMaterial({ color })
      const dot = new THREE.Mesh(dotGeo, dotMat)
      dot.position.copy(pos)
      markerGroup.add(dot)

      // Glow ring
      const ringGeo = new THREE.RingGeometry(0.028, 0.05, 32)
      const ringMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.5,
        side: THREE.DoubleSide,
      })
      const ring = new THREE.Mesh(ringGeo, ringMat)
      ring.position.copy(pos)
      ring.lookAt(new THREE.Vector3(0, 0, 0))
      ring.userData = { baseScale: 1, phase: Math.random() * Math.PI * 2 }
      markerGroup.add(ring)

      // Beam line
      const beamEnd = pos.clone().multiplyScalar(1.12)
      const beamGeo = new THREE.BufferGeometry().setFromPoints([pos, beamEnd])
      const beamMat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.35 })
      const beam = new THREE.Line(beamGeo, beamMat)
      markerGroup.add(beam)
    })
    scene.add(markerGroup)

    // Lights
    const ambientLight = new THREE.AmbientLight(0x446688, 0.4)
    scene.add(ambientLight)

    const sunLight = new THREE.DirectionalLight(0xffffff, 2)
    sunLight.position.set(5, 3, 5)
    scene.add(sunLight)

    const fillLight = new THREE.DirectionalLight(0x4488cc, 0.3)
    fillLight.position.set(-5, -2, -3)
    scene.add(fillLight)

    // Animation
    let animId
    const clock = new THREE.Clock()

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const elapsed = clock.getElapsedTime()

      earth.rotation.y = elapsed * 0.12
      clouds.rotation.y = elapsed * 0.08
      nightMesh.rotation.y = elapsed * 0.12
      markerGroup.children.forEach((child) => {
        if (child.userData && child.userData.baseScale !== undefined) {
          const pulse = 1 + 0.3 * Math.sin(elapsed * 2 + child.userData.phase)
          child.scale.set(pulse, pulse, pulse)
          child.material.opacity = 0.3 + 0.2 * Math.sin(elapsed * 2 + child.userData.phase)
        }
      })

      markerGroup.rotation.y = elapsed * 0.12

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [size])

  return <div ref={mountRef} className="globe3dMount" />
}
