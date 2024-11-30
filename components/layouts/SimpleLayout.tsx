import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
    className?: string;
}

const SimpleLayout = ({ children, className = '' }: LayoutProps) => {
    return (
        <div className={`min-h-screen bg-gray-500 ${className}`}>
            <main className="container mx-auto px-4 py-8">
                {children}
            </main>
        </div>
    );
};

export default SimpleLayout;
