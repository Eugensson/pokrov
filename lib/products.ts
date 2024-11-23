import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUniqueBrands = async () => {
  try {
    const products = await prisma.product.findMany({
      select: {
        brand: true,
      },
    });

    const uniqueBrands = [...new Set(products.map((product) => product.brand))];

    return uniqueBrands;
  } catch (error) {
    console.error("Error fetching brands:", error);
    return [];
  } finally {
    await prisma.$disconnect();
  }
};

export const getUniqueCategories = async () => {
  try {
    const products = await prisma.product.findMany({
      select: {
        category: true,
      },
    });

    const uniqueCategories = [
      ...new Set(products.map((product) => product.category)),
    ];

    return uniqueCategories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  } finally {
    await prisma.$disconnect();
  }
};
