import PortfolioSlider from "@/components/portfolio/PortfolioSlider";
import { getImagesByCategory } from "@/lib/services/galleryService";

const CategoryGalleryPage = async ({ params }: { params: any }) => {
  const images = await getImagesByCategory(params.category);

  return (
    <section>
      <PortfolioSlider images={images} />
    </section>
  );
};

export default CategoryGalleryPage;
