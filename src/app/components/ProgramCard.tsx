import Image from "next/image";

const ProgramCard = ({
  imageLink,
  imageAlt,
  title,
  desc,
  time,
}: {
  imageLink: string;
  imageAlt: string;
  title: string;
  desc: string;
  time?: string;
}) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden h-160 md:h-140 bg-yellow-50">
      <div className="relative w-full h-[66%]">
        <Image src={imageLink} alt={imageAlt} fill className="object-cover" />
      </div>
      <h3 className="text-xl font-bold px-2 pt-4">{title}</h3>
      <p className="text-gray-700 px-2 pt-2">{desc}</p>
      <p className="text-gray-900 px-2 pt-2 text-sm font-bold">
        {time? `🕦 ${time}`:''}
      </p>
    </div>
  );
};

export default ProgramCard;
