import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ image, name, price, compact = false }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md ${compact ? "w-32" : "w-full"}`}
    >
      <div className="relative p-2">
        <div className="relative aspect-square w-full mb-2 rounded-lg overflow-hidden">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>

        <h3 className="font-medium text-gray-800">{name}</h3>
        <p className="text-gray-500 text-sm">${price}/kg</p>

        <Link
          href="#"
          className="text-xs text-gray-700 border border-gray-200 rounded px-2 py-1 mt-2 inline-block"
        >
          Add to cart
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
