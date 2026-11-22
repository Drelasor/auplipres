import Navbar from "../../components/layout/Navbar";
import SheetTest from "../../components/SheetTest";
import universImage from "@/assets/images/Univers.png";

function Home() {
  return (
    <>
      <main>
          <Navbar />
          <SheetTest/>

<div className="grid grid-cols-2 auto-rows-[120px] gap-3">
  {/* Bloc image + titre */}
  <div className="relative row-span-6 col-span-2 overflow-hidden rounded-lg">

    <img
      src={universImage}
      alt="Fleurs en origami AUPLIPRÈS"
      className="w-full h-full object-cover"
    />

    <h2 className="absolute bottom-6 right-6 text-3xl text-white">
      L'Univers AUPLIPRÈS
    </h2>

  </div>
  <div className="grid grid-cols-2 auto-rows-[120px] gap-3">
    <div className="row-span-2 col-span-2 rounded-lg bg-stone-500 animate-pulse" />

    <div className="row-span-3 rounded-lg bg-stone-500 animate-pulse" />

    <div className="row-span-6 rounded-lg bg-stone-500 animate-pulse" />

    <div className="row-span-3 rounded-lg bg-stone-500 animate-pulse" />
  </div>

    <div className="grid grid-cols-1 auto-rows-[120px] gap-3">
    <div className="row-span-4 rounded-lg bg-stone-500 animate-pulse" />

    <div className="row-span-2 rounded-lg bg-stone-500 animate-pulse" />

    <div className="row-span-2 rounded-lg bg-stone-500 animate-pulse" />
  </div>
           

</div>
      </main>
    </>
  );
}

export default Home;