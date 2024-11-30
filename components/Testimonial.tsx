import Avatar from "@/assets/images/profile-thumbnail.png"
import Image from "next/image"

const Testimonial = () => {
    return (
        <article className="w-[340px] p-6 flex flex-col bg-white gap-4 rounded-lg shadow-sm">
            <div className="flex gap-4">
                <Image src={Avatar} alt="profile avatar" width={48} height={48} className="object-cover" />
                <div className="flex flex-col gap-px">
                    <span className="font-semibold text-lg text-justify text-neutral-900">Sarah Dole</span>
                    <span className="font-normal text-sm text-neutral-600">@sarahdole</span>
                </div>
            </div>
            <p className="font-normal text-base text-neutral-600">
                I've been searching for high-quality abstract
                images for my design projects, and I'm thrilled
                to have found this platform. The variety and depth
                of creativity are astounding!
            </p>
        </article>)
}

export default Testimonial