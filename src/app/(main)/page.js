import Image from "next/image";
import Hero from "../components/Hero";
import MasjidImage from './../../../public/Image/anakyatim.png';
export default function Home() {

  const bantuanList = [
    {
      id: 1,
      title: "Keluarga Pra-Sejahtera",
      description: "Membutuhkan bantuan kebutuhan pokok untuk menunjang kehidupan sehari-hari.",
      image: MasjidImage
    },
    {
      id: 2,
      title: "Anak Yatim dan Dhuafa",
      description: "Membutuhkan bantuan pendidikan dan perlengkapan sekolah.",
      image: MasjidImage
    },
    {
      id: 3,
      title: "Lansia Tidak Mampu",
      description: "Membutuhkan bantuan kesehatan dan kebutuhan hidup dasar.",
      image: MasjidImage
    },
    {
      id: 4,
      title: "Korban Bencana Alam",
      description: "Membutuhkan bantuan darurat berupa makanan dan tempat tinggal sementara.",
      image: MasjidImage
    },
    {
      id: 5,
      title: "Warga Sakit Menahun",
      description: "Membutuhkan bantuan biaya pengobatan dan perawatan rutin.",
      image: MasjidImage
    }
  ];

  const menus = [{
    id: 1,
    title: "Kesehatan",
    image: 'image.png'
  },
  {
    id: 2,
    title: "Pendidikan",
    image: 'image.png'
  },
  {
    id: 3,
    title: "Ekonomi",
    image: 'image.png'
  },
  {
    id: 4,
    title: "Korban Bencana",
    image: 'image.png'
  },
  {
    id: 5,
    title: "Keluarga Sejahtera",
    image: 'image.png'
  },
  {
    id: 6,
    title: "Insfrastuktur",
    image: 'image.png'
  },]
  return (
    <>
      <Hero />
      <div className="py-2"></div>
      <div className="px-4 pb-20">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-slate-800">Kategori</h1>
          <h1 className="text-xs font-light text-slate-500">Lihat Semua Kategori</h1>
        </div>
        <div className="mt-4 w-full">
          <div className="grid grid-flow-col grid-rows-2 gap-2">
            {menus.map((item) => (
              <div key={item.id} className="h-12 w-full bg-sky-200 relative rounded-xl p-1 flex items-center justify-center">
                <h3 className="text-slate-800 font-semibold text-sm">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <h1 className="text-xl font-bold text-slate-800">Mereka yang mebutuhkan</h1>
          <h1 className="text-xs font-light text-slate-500">Lihat Semua Kategori</h1>
        </div>
        <div className="mt-4 flex flex-col gap-4">
          {bantuanList.map((item) => (
            <div key={item.id} className="relative w-full h-60 bg-slate-500 rounded-2xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                className="object-cover bg-cover w-full h-full inset-x-0 brightness-50"
                loading="eager"
              />
              <div className="absolute w-full bottom-0 p-2 bg-slate-950/40">
                <p className="text-sky-100 leading-relaxed">{item.title}</p>
                <p className="leading-relaxed text-xs font-light text-sky-100">{item.description}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}
