import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
    className?: string;
}

const BasicLayout = ({ children, className = '' }: LayoutProps) => {
    return (
        <div className={`min-h-screen bg-white ${className}`}>
            <main className="max-w-4xl mx-auto px-4 py-8">
                {children}
            </main>
        </div>
    );
};

export default BasicLayout;
