import BasicLayout from '../../components/layouts/BasicLayout';

export default function AboutPage() {
    return (
        <BasicLayout>
            <div>
                <h1 className='text-xl mb-4'>About Us</h1>
                <p className='text-gray-700'>
                    This is the about page using a different layout. Notice how this page has a white background
                    instead of the gray background used on the homepage.
                </p>
            </div>
        </BasicLayout>
    );
}
