import PortfolioSlider from "@/components/portfolio/PortfolioSlider";
import { getImagesByCategory } from "@/lib/services/galleryService";

const CategoryGalleryPage = async ({ params }: { params: any }) => {
  const images = await getImagesByCategory(params.category);

  return (
    <section className="p-1 md:pd-2 xl:p-10">
      <PortfolioSlider images={images} />
    </section>
  );
};

export default CategoryGalleryPage;
