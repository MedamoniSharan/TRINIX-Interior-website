"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import * as THREE from "three";

export function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.2, 6);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, 0.85);
    const key = new THREE.DirectionalLight(0xffffff, 1.1);
    key.position.set(3, 4, 5);
    const rim = new THREE.DirectionalLight(0xa8b8d8, 0.55);
    rim.position.set(-4, 1, -2);
    scene.add(ambient, key, rim);

    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xd8e0ec,
      metalness: 0.05,
      roughness: 0.12,
      transmission: 0.72,
      thickness: 1.2,
      ior: 1.4,
      transparent: true,
      opacity: 0.85,
      clearcoat: 1,
      clearcoatRoughness: 0.08,
    });

    const accentMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x1e325a,
      metalness: 0.35,
      roughness: 0.25,
      transparent: true,
      opacity: 0.55,
    });

    const group = new THREE.Group();
    scene.add(group);

    const orb = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.85, 1),
      glassMaterial,
    );
    orb.position.set(-1.8, 0.3, 0);
    group.add(orb);

    const orb2 = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.45, 1),
      accentMaterial,
    );
    orb2.position.set(2.1, -0.4, -0.5);
    group.add(orb2);

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.1, 0.035, 16, 80),
      new THREE.MeshStandardMaterial({
        color: 0xc4b59a,
        metalness: 0.7,
        roughness: 0.28,
      }),
    );
    ring.rotation.x = Math.PI / 2.4;
    ring.position.set(0.4, 0.1, -0.8);
    group.add(ring);

    const particleCount = 80;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );
    const particles = new THREE.Points(
      particlesGeo,
      new THREE.PointsMaterial({
        color: 0x5e6470,
        size: 0.035,
        transparent: true,
        opacity: 0.45,
        depthWrite: false,
      }),
    );
    scene.add(particles);

    group.scale.set(0.7, 0.7, 0.7);

    const baseRot = { x: 0, y: -0.35 };
    const target = { x: 0, y: 0 };

    if (!reducedMotion) {
      gsap.to(group.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 1.4,
        ease: "power3.out",
        delay: 0.15,
      });
      gsap.to(baseRot, {
        y: 0.15,
        duration: 1.6,
        ease: "power2.out",
        delay: 0.15,
      });
      gsap.to(orb.rotation, {
        y: Math.PI * 2,
        duration: 18,
        repeat: -1,
        ease: "none",
      });
      gsap.to(orb2.rotation, {
        y: -Math.PI * 2,
        duration: 14,
        repeat: -1,
        ease: "none",
      });
      gsap.to(ring.rotation, {
        z: Math.PI * 2,
        duration: 22,
        repeat: -1,
        ease: "none",
      });
      gsap.to(orb.position, {
        y: "+=0.35",
        duration: 3.2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
      gsap.to(orb2.position, {
        y: "+=0.25",
        duration: 2.6,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: 0.4,
      });
    } else {
      group.scale.set(1, 1, 1);
      baseRot.y = 0.15;
    }

    const moveX = gsap.quickTo(target, "x", {
      duration: 0.8,
      ease: "power3.out",
    });
    const moveY = gsap.quickTo(target, "y", {
      duration: 0.8,
      ease: "power3.out",
    });

    const onPointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const px = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const py = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      moveX(px * 0.35);
      moveY(py * 0.2);
    };

    const onResize = () => {
      const nextWidth = container.clientWidth;
      const nextHeight = container.clientHeight;
      camera.aspect = nextWidth / nextHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(nextWidth, nextHeight);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("resize", onResize);

    let frameId = 0;
    const start = performance.now();

    const tick = () => {
      const t = (performance.now() - start) / 1000;
      group.rotation.y = baseRot.y + target.x * 0.4;
      group.rotation.x = baseRot.x + target.y * 0.25;
      particles.rotation.y = t * 0.04;
      camera.position.x = target.x * 0.15;
      camera.position.y = 0.2 + target.y * 0.1;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      gsap.killTweensOf([
        group.scale,
        baseRot,
        orb.rotation,
        orb.position,
        orb2.rotation,
        orb2.position,
        ring.rotation,
      ]);
      particlesGeo.dispose();
      orb.geometry.dispose();
      orb2.geometry.dispose();
      ring.geometry.dispose();
      glassMaterial.dispose();
      accentMaterial.dispose();
      (ring.material as THREE.Material).dispose();
      (particles.material as THREE.Material).dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-[1] pointer-events-none"
      aria-hidden
    />
  );
}
