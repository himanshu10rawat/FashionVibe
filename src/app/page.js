import Banner from "@/components/ui/Banner";
import Card from "@/components/ui/Card";
import MultiCarousel from "@/components/ui/MultiCarousel";

export default function Home() {
  return (
    <>
      <Banner />
      <section className="px-3 py-5 md:p-10">
        <h2 className="text-xl md:text-4xl mb-3 md:mb-8 font-bold uppercase tracking-widest">
          Trending
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          <Card arrayLength={5} />
        </div>
      </section>
      <section className="px-3 py-5 md:p-10">
        <h2 className="text-xl md:text-4xl mb-3 md:mb-8 font-bold uppercase tracking-widest">
          shop by category
        </h2>
        <MultiCarousel />
      </section>
    </>
  );
}
