import Testimonial from '../components/Testimonial';
import SimpleLayout from '../components/layouts/SimpleLayout';

export default function HomePage() {
    return (
        <SimpleLayout>
            <div>
                <h1 className='text-xl mb-4'>Welcome to the Homepage with Navigation</h1>
                <Testimonial />
            </div>
        </SimpleLayout>
    );
}
