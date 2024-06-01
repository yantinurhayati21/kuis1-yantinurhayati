export default function MyList() {
  const fruits = [
    {
      id: 1,
      nama: "Apel",
      warna_buah: "Merah",
      harga: "10.000",
      gambar: "/apell.jpg",
    },
    {
      id: 2,
      nama: "Pisang",
      warna_buah: "Kuning",
      harga: "9.000",
      gambar: "pisang.jpg",
    },
    {
      id: 3,
      nama: "Mangga",
      warna_buah: "Kuning muda",
      harga: "12.000",
      gambar: "mangga.webp",
    },
    {
      id: 4,
      nama: "Jeruk",
      warna_buah: "Orange",
      harga: "11.000",
      gambar: "jeruk.jpg",
    },
    {
      id: 5,
      nama: "Anggur",
      warna_buah: "Ungu",
      harga: "15.000",
      gambar: "anggur.jpg",
    },
    {
      id: 6,
      nama: "Semangka",
      warna_buah: "Hijau",
      harga: "19.000",
      gambar: "semangka.jpg",
    },
    {
      id: 7,
      nama: "Alpukat",
      warna_buah: "Hijau muda",
      harga: "17.000",
      gambar: "Alpukat.jpg",
    },
    {
      id: 8,
      nama: "Rambutan",
      warna_buah: "Merah",
      harga: "10.000",
      gambar: "Rambutan.jpg",
    },
  ];

  return (
    <div className="app">
      <div className="card">
        {fruits.map((buah) => (
          <div key={buah.id}>
            <div className="image">
              <img src={buah.gambar} alt="" />
            </div>
              <p>{buah.nama}</p>
              <p>{buah.warna_buah}</p>
              <p>{buah.harga}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
