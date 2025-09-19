import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";

export default function Sponsors() {
  const banners = [
    "https://1000logos.net/wp-content/uploads/2019/09/Razer-Logo.jpg",
    "https://cdn.dlcompare.com/others_jpg/upload/media/file/b98c--steam.jpeg.webp",
    "https://cdn.topnegozi.it/file_storage/it/negozi/loghi/logo-instant-gaming-ONlFt.png",
    "https://logos-world.net/wp-content/uploads/2021/03/FiveM-Symbol.png",
    "https://newsroom.intel.com/wp-content/uploads/2024/11/intel-card-scaled.jpg",
    "https://imgcdn.agendadigitale.eu/wp-content/uploads/2022/02/09114132/discord.jpg",
    "https://avatars.githubusercontent.com/u/16661924?s=280&v=4",
    "https://media-rockstargames-com.akamaized.net/tina-uploads/posts/8971o8789584a4/287d4193bd6308e0b4b54393513a1ae5f8c8ac14.jpg",
    "https://images.mein-mmo.de/medien/2022/07/rockstar-logo.jpg",
  ];
  const loop = banners.concat(banners);

  return (
    <div className="relative">
      <SectionTitle>Sponsor & Partner</SectionTitle>
      <p className="mt-3 text-white/80">
        Sostengono la community e gli eventi del server.
      </p>

      <div className="relative mt-6 overflow-hidden edge-fade">
        <div className="flex animate-marquee gap-4">
          {loop.map((src, i) => (
            <Card
              key={i}
              className="min-w-[220px] overflow-hidden flex-shrink-0"
            >
              <img
                src={src}
                alt={`sponsor-${i}`}
                className="w-full h-24 md:h-28 object-cover grayscale hover:grayscale-0 transition"
                loading="lazy"
              />
            </Card>
          ))}
        </div>

        <div className="blob blob-a2 w-40 h-40 rounded-full -bottom-10 left-6" />
        <div className="blob blob-a1 w-32 h-32 rounded-full -top-6 right-6" />
      </div>
    </div>
  );
}
