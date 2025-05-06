// src/components/sections/BlogSection.jsx
import Image from "next/image";
import BlogCard from "../ui/BlogCard";
import LeafIcon from "../../../public/images/leap.png"; // Assuming you have this

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
      date: "May 23, 2024",
      image: "/images/blog/image 2.png",
      slug: "exploring-seasonal-delights",
    },
    {
      id: 2,
      title:
        "Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads",
      date: "May 23, 2024",
      image: "/images/blog/image 3.png",
      slug: "mastering-salad-creations",
    },
    {
      id: 3,
      title:
        "The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week",
      date: "May 23, 2024",
      image: "/images/blog/image 4.png",
      slug: "art-of-meal-prepping",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 relative">
      {/* Decorative leaf */}
      <div className="absolute top-0 right-8">
        <Image
          src={LeafIcon}
          alt="Decorative leaf"
          
          width={40}
          height={20}
          className="opacity-60"
          aria-hidden="true"
        />
      </div>

      {/* Header with pill */}
      <div className="text-center mb-12">
        <div className="inline-block bg-[#EDF7E4] px-5 py-1.5 rounded-full mb-4">
          <span className="text-[#8CA36A] font-medium text-sm">Our Blog</span>
        </div>
        <h2 className="text-4xl font-bold text-[#222222] mb-4">
          Fresh Harvest Blog
        </h2>
        <p className="text-[#757575] text-lg max-w-2xl mx-auto">
          Welcome to the Fresh Harvest Blog, your go-to resource for all things
          related to fresh produce, healthy eating, and culinary inspiration.
        </p>
      </div>

      {/* Blog posts grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {blogPosts.map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            date={post.date}
            image={post.image}
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
