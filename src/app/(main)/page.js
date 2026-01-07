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
    },
    {
      id: 6,
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
          <h1 className="text-xs font-light text-slate-500">Lihat Semua</h1>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          {bantuanList.map((item) => (
            <div key={item.id} className="relative rounded-2xl w-full h-60 overflow-hidden shadow-2xl">
              <div className="w-full h-6/12">
                <Image src={item.image} alt="Description" className="w-full h-full object-cover bg-cover" loading="eager" />
                <div className="absolute top-0 right-0 bg-rose-700 rounded-bl-xl px-2 py-0.5">
                  <span className="text-xs font-light text-sky-50">Sabumi Fundation</span>
                </div>
              </div>
              <div className="p-2 h-6/12 flex justify-around flex-col">
                <p className="text-[10px] font-bold leading-relaxed text-slate-800 text-left w-full">
                  Bantu Guru Honorer = Dukung Pendidikan Indonesia
                </p>
                <p className="text-[10px] font-light leading-relaxed text-slate-700 mb-1">
                  Total Donasi
                </p>
                <div className="h-2 bg-gray-200 rounded">
                  <div
                    className="h-full bg-indigo-600 rounded flex items-center"
                    style={{ width: "75%" }}
                  >
                  </div>
                </div>
                <h3 className="font-bold text-[10px] text-zinc-950">
                  Rp. 5000.000{" "}
                  <span className="text-[8px] font-light"> / Rp.10.000.000</span>
                </h3>
                <div className="pt-2 flex space-x-1">
                  <button className="p-1 rounded bg-rose-700 text-rose-50  text-[10px] font-semibold w-8/12">
                    Beri dukungan
                  </button>
                  <button className="p-1 rounded bg-blue-700 text-rose-50  text-[10px] font-semibold w-4/12">
                    Love
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}
