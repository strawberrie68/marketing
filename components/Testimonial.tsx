import Image from "next/image"
import { memo } from "react";
import Avatar from "@/assets/images/profile-thumbnail.png"

interface TestimonialProps {
    name?: string;
    username?: string;
    testimonial?: string;
}

const Testimonial: React.FC<TestimonialProps> = memo(({
    name = "Sarah Dole",
    username = "@sarahdole",
    testimonial = "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!"
}: TestimonialProps) => {
    return (
        <div
            className="w-[340px] p-6 flex flex-col bg-white gap-4 rounded-lg shadow-sm"
            aria-label={`Testimonial by ${name}`}
        >
            <figure>
                <figcaption className="flex gap-4">
                    <Image
                        src={Avatar}
                        alt={`${name}'s profile picture`}
                        width={48}
                        height={48}
                        className="object-cover rounded-full flex-shrink-0"
                        aria-hidden="true"
                    />
                    <div className="flex flex-col gap-px overflow-hidden">
                        <span className="font-semibold text-lg text-justify text-neutral-900 truncate">{name}</span>
                        <span className="font-normal text-sm text-neutral-600 truncate">{username}</span>
                    </div>
                </figcaption>
                <blockquote>
                    <p className="font-normal text-base text-neutral-600">
                        {testimonial}
                    </p>
                </blockquote>
            </figure>
        </div>)
})

Testimonial.displayName = 'Testimonial';

export default Testimonial