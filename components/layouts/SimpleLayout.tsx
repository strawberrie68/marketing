import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
    className?: string;
}

const SimpleLayout = ({ children, className = '' }: LayoutProps) => {
    return (
        <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-[#d2d6db] mx-auto pt-[200px] ${className}`}>
            <main className="container mx-auto flex justify-center">
                {children}
            </main>
        </div>
    );
};

export default SimpleLayout;
