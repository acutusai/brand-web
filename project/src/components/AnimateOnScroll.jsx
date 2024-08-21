import React, { useEffect, useRef, useState } from 'react';

const AnimateOnScroll = ({ children, className }) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={elementRef}
            className={`${className} ${isVisible ? 'visible' : 'invisible'}`}
            style={{ 
                opacity: isVisible ? 1 : 0, 
                transition: 'opacity 1s ease-in-out' // Adjusted transition duration to 1 second
            }}
        >
            {children}
        </div>
    );
};

export default AnimateOnScroll;
