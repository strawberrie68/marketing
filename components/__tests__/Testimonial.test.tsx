import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Testimonial from '../Testimonial';

// Mock next/image component
jest.mock('next/image', () => ({
    __esModule: true,
    default: (props: any) => {
        // eslint-disable-next-line @next/next/no-img-element
        return <img {...props} alt={props.alt} />;
    },
}));

describe('Testimonial Component', () => {
    describe('Default Rendering', () => {
        beforeEach(() => {
            render(<Testimonial />);
        });

        test('should display the testimonial with proper accessibility attributes', () => {
            const testimonialContainer = screen.getByLabelText(/testimonial by sarah dole/i);
            expect(testimonialContainer).toBeInTheDocument();
        });

        test('should display the profile image with proper accessibility attributes', () => {
            const profileImage = screen.getByAltText(/sarah dole's profile picture/i);
            expect(profileImage).toBeInTheDocument();
            expect(profileImage).toHaveAttribute('aria-hidden', 'true');
        });

        test('should display the default author information', () => {
            expect(screen.getByText(/sarah dole/i)).toBeInTheDocument();
            expect(screen.getByText(/@sarahdole/i)).toBeInTheDocument();
        });

        test('should display the default testimonial text', () => {
            const testimonialText = screen.getByText(/i've been searching for high-quality abstract images/i);
            expect(testimonialText).toBeInTheDocument();
        });

        test('should have the correct semantic structure', () => {
            const figure = screen.getByText(/sarah dole/i).closest('figure');
            expect(figure).toBeInTheDocument();

            const blockquote = screen.getByText(/i've been searching/i).closest('blockquote');
            expect(blockquote).toBeInTheDocument();
        });
    });

    describe('Custom Props', () => {
        const customProps = {
            name: 'John Smith',
            username: '@johnsmith',
            testimonial: 'This is a custom testimonial message.'
        };

        beforeEach(() => {
            render(<Testimonial {...customProps} />);
        });

        test('should display custom author information', () => {
            expect(screen.getByText(customProps.name)).toBeInTheDocument();
            expect(screen.getByText(customProps.username)).toBeInTheDocument();
        });

        test('should display custom testimonial text', () => {
            expect(screen.getByText(customProps.testimonial)).toBeInTheDocument();
        });

        test('should update accessibility attributes with custom name', () => {
            expect(screen.getByLabelText(`Testimonial by ${customProps.name}`)).toBeInTheDocument();
            expect(screen.getByAltText(`${customProps.name}'s profile picture`)).toBeInTheDocument();
        });
    });

    describe('Text Overflow Handling', () => {
        const longTextProps = {
            name: 'Very Long Name That Should Be Truncated Because It Is Too Long',
            username: '@verylongusernamethatshouldbetruncat',
            testimonial: 'This is a very long testimonial that should still be fully visible and not truncated because the testimonial text should be allowed to wrap to multiple lines as needed.'
        };

        test('should handle long text appropriately', () => {
            render(<Testimonial {...longTextProps} />);

            // Name and username containers should have truncate class
            const nameElement = screen.getByText(longTextProps.name);
            const usernameElement = screen.getByText(longTextProps.username);

            expect(nameElement).toHaveClass('truncate');
            expect(usernameElement).toHaveClass('truncate');

            // Testimonial text should be fully visible
            expect(screen.getByText(longTextProps.testimonial)).toBeInTheDocument();
        });
    });

    describe('Component Optimization', () => {
        test('should use memo to prevent unnecessary rerenders', () => {
            const { rerender } = render(<Testimonial />);
            const container = screen.getByLabelText(/testimonial by sarah dole/i);
            const initialHTML = container.innerHTML;

            // Rerender with same props
            rerender(<Testimonial />);
            const rerenderedHTML = container.innerHTML;

            expect(initialHTML).toBe(rerenderedHTML);
        });
    });
});
