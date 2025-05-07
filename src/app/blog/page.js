// Example usage in a blog page
import RelatedProducts from "@/components/sections/RelatedProducts";
import ProductDetail from "@/components/ui/ProducDetail";

const BlogPost = () => {
  return (
    <div>
     
      <ProductDetail productId="675153ac1cdb919fe028cf0a" />

      {/* More blog content */}
      <RelatedProducts/>
    </div>
  );
};

export default BlogPost;
