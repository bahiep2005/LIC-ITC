"use client";
import React, { useEffect, useRef, useState } from 'react';
import './main.css';

//Image Stack Component
const images = [
    // Thay các link ảnh bên dưới bằng link ảnh thực tế của bạn
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    'https://images.unsplash.com/photo-1519985176271-adb1088fa94c',
    'https://images.unsplash.com/photo-1465101178521-c1a2b3a8e8c7',
];

export default function ImageStack() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [dragY, setDragY] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const startY = useRef(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const animationRef = useRef<number | null>(null);

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, []);

    // Mouse drag handlers
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        startY.current = e.clientY - dragY;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging) {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
            const animate = () => {
                setDragY((prev) => {
                    const next = e.clientY - startY.current;
                    // Giảm độ nhảy bằng cách làm mượt giá trị
                    return prev + (next - prev) * 0.3;
                });
                animationRef.current = requestAnimationFrame(animate);
            };
            animate();
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
        // Nếu kéo lên trên cùng thì chuyển về ảnh trước, kéo xuống dưới cùng thì chuyển về ảnh sau
        if (dragY < -100) {
            setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
        } else if (dragY > 100) {
            setActiveIndex((prev) => (prev + 1) % images.length);
        }
        setDragY(0);
    };

    //Hero Section  
    // Inject animated-icons script for arrow icon
    useEffect(() => {
        if (!document.getElementById('animated-icons-script')) {
            const script = document.createElement('script');
            script.id = 'animated-icons-script';
            script.src = 'https://animatedicons.co/scripts/embed-animated-icons.js';
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <>
            <div className="image-stack-container">
                <div className="image-stack-bg-text-left">CO</div>
                <div className="image-stack-bg-text-right">DE</div>
                <div
                    className="image-stack"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                >
                    {images.map((src, idx) => {
                        const isActive = idx === activeIndex;
                        // Ảnh lộ cả trên và dưới, các ảnh sau lộ 40px trên/dưới
                        const offset = isActive ? dragY : (idx - activeIndex) * 40;
                        const style = isActive
                            ? { zIndex: 10, transform: `translate(-50%, -50%) scale(1) translateY(${offset}px)` }
                            : { zIndex: images.length - idx, transform: `translate(-50%, -50%) scale(0.85) translateY(${offset}px)`, opacity: 0.7 };
                        return (
                            <div
                                key={src}
                                className={`image-stack-item${isActive ? ' active' : ''}`}
                                style={style}
                            >
                                <img src={src} alt={`Stack ${idx}`} />
                                <div className="image-stack-label label-top-left">
                                    <span className={`dot ${isActive ? 'active-dot' : ''}`}></span> Tower
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Hero Section nằm bên dưới */}
            <section className="hero-section">
                <div className="hero-image">
                    <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308" alt="Hero" />
                </div>
                <div className="hero-content">
                    <h2>A vibrant IT community<br />connecting future developers, designers,<br />and tech lovers.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="hero-btn">
                        <span>START</span>
                        <span
                            className="arrow-animated-icon"
                            dangerouslySetInnerHTML={{
                                __html: `<animated-icons
                                src='https://animatedicons.co/get-icon?name=Arrow&style=minimalistic&token=70afdd31-5888-42d6-82ce-d112a7e2fa11'
                                trigger='hover'
                                attributes='{"variationThumbColour":"#FFFFFF","variationName":"Normal","variationNumber":1,"numberOfGroups":1,"backgroundIsGroup":false,"strokeWidth":1.1,"defaultColours":{"group-1":"#000000","background":"#FFFFFF"}}'
                                height='32'
                                width='32'
                                ></animated-icons>`
                            }}
                        />
                    </button>
                </div>
            </section>

            {/* Quote Section nằm dưới cùng */}
            <section className="quote-section">
                <div className="quote-desc">
                    <span>Passionate about tech? Our club helps<br />you turn curiosity into real skills.</span>
                    <div className="quote-desc-line"></div>
                </div>
                <h2 className="quote-main">“We collaborate with forward-thinking brands to build lasting creative impact”</h2>
                <button className="quote-btn">
                    CONTACT US
                    <span className="quote-arrow-icon"
                        dangerouslySetInnerHTML={{
                            __html: `<animated-icons
                            src='https://animatedicons.co/get-icon?name=Arrow&style=minimalistic&token=70afdd31-5888-42d6-82ce-d112a7e2fa11'
                            trigger='hover'
                            attributes='{"variationThumbColour":"#FFFFFF","variationName":"Normal","variationNumber":1,"numberOfGroups":1,"backgroundIsGroup":false,"strokeWidth":1.1,"defaultColours":{"group-1":"#000000","background":"#FFFFFF"}}'
                            height='24'
                            width='24'
                            ></animated-icons>`
                        }}
                    />
                </button>
            </section>
            {/* Team Showcase Section nằm dưới cùng */}
            <section className="team-showcase-section">
                <div className="team-showcase-avatars">
                    <img className="team-avatar top-left" src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308" alt="avatar1" />
                    <img className="team-avatar top-right" src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca" alt="avatar2" />
                    <img className="team-avatar mid-left" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="avatar3" />
                    <img className="team-avatar mid-right" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" alt="avatar4" />
                    <img className="team-avatar bottom-left" src="https://images.unsplash.com/photo-1519985176271-adb1088fa94c" alt="avatar5" />
                </div>
                <h2 className="team-showcase-title">Build tech skills<br />Together now</h2>
                <button className="team-showcase-btn">Ready now</button>
            </section>
        </>
    );
