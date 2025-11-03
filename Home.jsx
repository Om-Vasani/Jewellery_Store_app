import ProductCard from "./ProductCard";
import Chat from "./Chat";

export default function Home() {
  const products = [
    {
      name: "Solitaire Diamond Ring",
      desc: "22K Gold / GIA-certified",
      price: "85,000",
      image: "https://cdn-icons-png.flaticon.com/512/177/177892.png",
    },
  ];

  return (
    <section className="bg-ivory min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
          Timeless craftsmanship. <span className="text-gold">Modern elegance.</span>
        </h2>

        <p className="text-muted mb-10">
          Amidip Jewellers — handcrafted gold and diamond pieces with hallmark authenticity.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 justify-center">
          {products.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </div>

      {/* Chat Button/Widget */}
      <div className="fixed bottom-6 right-6">
        <Chat />
      </div>
    </section>
  );
}
