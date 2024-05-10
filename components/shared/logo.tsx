import React from 'react';
import Image from 'next/image';

interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
    return (
        <Image
            src="/favicon-512x512-transparent.png"
            alt="Logo"
            width={48}
            height={48}
            className={className}
        />
    );
};

export default Logo;
