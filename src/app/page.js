import Banner from "@/components/ui/Banner";
import Card from "@/components/ui/Card";
import MultiCarousel from "@/components/ui/MultiCarousel";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="p-10">
        <h2 className="text-4xl mb-5 font-bold uppercase tracking-widest">
          Trending
        </h2>
        <Card />
      </div>
      <div className="p-10">
        <h2 className="text-4xl mb-5 font-bold uppercase tracking-widest">
          shop by category
        </h2>
        <MultiCarousel />
      </div>
    </>
  );
}
