import { IoStarOutline, IoStarHalfSharp, IoStarSharp } from "react-icons/io5";

export const Rating = ({
  value,
  caption,
}: {
  value: number;
  caption: string;
}) => {
  const Full = () => <IoStarSharp className="w-5 h-5 text-primary" />;

  const Half = () => <IoStarHalfSharp className="w-5 h-5 text-primary" />;

  const Empty = () => <IoStarOutline className="w-5 h-5 text-primary" />;

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-2">
        {value >= 1 ? <Full /> : value >= 0.5 ? <Half /> : <Empty />}
        {value >= 2 ? <Full /> : value >= 1.5 ? <Half /> : <Empty />}
        {value >= 3 ? <Full /> : value >= 2.5 ? <Half /> : <Empty />}
        {value >= 4 ? <Full /> : value >= 3.5 ? <Half /> : <Empty />}
        {value >= 5 ? <Full /> : value >= 4.5 ? <Half /> : <Empty />}
      </div>

      {caption && <span className="text-sm">{caption}</span>}
    </div>
  );
};
