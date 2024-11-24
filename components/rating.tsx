import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

export const Rating = ({
  value,
  caption,
}: {
  value: number;
  caption?: string;
}) => (
  <div className="flex items-center gap-2">
    <div className="flex items-center gap-1 text-yellow-500">
      {value >= 1 ? (
        <IoStar size={16} />
      ) : value >= 0.5 ? (
        <IoStarHalf size={16} />
      ) : (
        <IoStarOutline size={16} />
      )}
      {value >= 2 ? (
        <IoStar size={16} />
      ) : value >= 1.5 ? (
        <IoStarHalf size={16} />
      ) : (
        <IoStarOutline size={16} />
      )}
      {value >= 3 ? (
        <IoStar size={16} />
      ) : value >= 2.5 ? (
        <IoStarHalf size={16} />
      ) : (
        <IoStarOutline size={16} />
      )}
      {value >= 4 ? (
        <IoStar size={16} />
      ) : value >= 3.5 ? (
        <IoStarHalf size={16} />
      ) : (
        <IoStarOutline size={16} />
      )}
      {value >= 5 ? (
        <IoStar size={16} />
      ) : value >= 4.5 ? (
        <IoStarHalf size={16} />
      ) : (
        <IoStarOutline size={16} />
      )}
    </div>
    {caption && <span className="text-sm">{caption}</span>}
  </div>
);
