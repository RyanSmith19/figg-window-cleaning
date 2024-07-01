import React, { useState, useEffect } from 'react';
import './WipeAnim.css';

const WipeAnim = () => {
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationComplete(true);
        }, 6000); // Total duration of the animations in milliseconds

        return () => clearTimeout(timer);
    }, []);

    if (animationComplete) return null;

    return (
        <div className="wipe-animation">
            <div className="suds-layer suds-layer1"></div>
            <div className="suds-layer suds-layer2"></div>
            <div className="suds-layer suds-layer3"></div>
        </div>
    );
};

export default WipeAnim;
