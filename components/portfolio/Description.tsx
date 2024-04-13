import Link from "next/link";
import { motion } from "framer-motion";

const Description = ({
  images,
  activeImage,
}: {
  images: any;
  activeImage: number;
}) => {
  return (
    <div className="relative flex max-sm:hidden flex-col justify-between p-3 xl:p-6 md:w-[475px] xl:w-[525px] h-full rounded-tr-2xl rounded-br-2xl">
      {images.map((elem: any, idx: number) => (
        <div
          key={idx}
          className={`${"flex flex-col justify-between my-auto"} ${
            idx !== activeImage ? "hidden" : ""
          }`}
        >
          {elem.category === "decor" && (
            <p className="absolute top-5 right-5 xl:top-10 xl:right-10 uppercase font-bold text-white text-base xl:text-xl">
              Декор
            </p>
          )}
          {elem.category === "cross" && (
            <p className="absolute top-5 right-5 xl:top-10 xl:right-10 uppercase font-bold text-white text-base xl:text-xl">
              Хрести
            </p>
          )}
          {elem.category === "domes" && (
            <p className="absolute top-5 right-5 xl:top-10 xl:right-10 uppercase font-bold text-white text-base xl:text-xl">
              Куполи
            </p>
          )}
          {elem.category === "sheets" && (
            <p className="absolute top-5 right-5 xl:top-10 xl:right-10 uppercase font-bold text-white text-base xl:text-xl">
              Аркуші
            </p>
          )}
          <Link
            href="/portfolio"
            className="absolute bottom-5 right-5 xl:bottom-10 xl:right-10 font-bold text-white text-base xl:text-xl hover:text-primary"
          >
            До галереї
          </Link>
          <motion.div
            initial={{
              opacity: idx === activeImage ? 0 : 0.5,
              scale: idx === activeImage ? 0.5 : 0.3,
            }}
            animate={{
              opacity: idx === activeImage ? 1 : 0.5,
              scale: idx === activeImage ? 1 : 0.3,
            }}
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 },
            }}
            className="flex flex-col gap-5 xl:gap-10 w-full h-full"
          >
            <p className="text-xl xl:text-2xl font-bold text-white">
              {elem.title}
            </p>
            <p className="text-base xl:text-xl leading-1.5 tracking-wide italic text-white">
              {elem.description}
            </p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Description;
