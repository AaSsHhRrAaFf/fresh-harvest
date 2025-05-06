// src/components/ui/BlogCard.jsx
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ title, date, image, slug }) => {
  return (
    <article className="rounded-[18px] overflow-hidden bg-white h-full flex flex-col">
      {/* Image container with fixed aspect ratio */}
      <div className="relative w-full h-0 pb-[60%] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <span className="text-[#757575] text-[15px] mb-2">{date}</span>
        <h3 className="font-bold text-[#222222] text-lg leading-tight mb-3">
          {title}
        </h3>
        <div className="mt-auto">
          <Link
            href={`/blog/${slug}`}
            className="inline-flex items-center text-[#FF6C0E] font-bold hover:underline"
          >
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
