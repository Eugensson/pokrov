"use client";

import useSWR from "swr";
import Image from "next/image";
import { toast } from "sonner";
import { Product } from "@prisma/client";
import useSWRMutation from "swr/mutation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ValidationRule, useForm } from "react-hook-form";
import { Ban, FilePenLine, Loader, RefreshCw, X } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

import { formatId, fetcher } from "@/lib/utils";

interface EditProductFormProps {
  productId: string;
  categories: string[];
  brands: string[];
}

export const EditProductForm = ({
  productId,
  categories,
  brands,
}: EditProductFormProps) => {
  const router = useRouter();

  const { data: product, error } = useSWR(
    `/api/admin/products/${productId}`,
    fetcher
  );

  const [selectedCategory, setSelectedCategory] = useState<string>(
    product?.category || ""
  );
  const [selectedBrand, setSelectedBrand] = useState<string>(
    product?.brand || ""
  );

  const { trigger: updateProduct, isMutating: isUpdating } = useSWRMutation(
    `/api/admin/products/${productId}`,
    async (url, { arg }) => {
      const res = await fetch(`${url}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(arg),
      });
      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
        return;
      }

      toast.success("Product updated successfully");
      router.push("/products");
    }
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<Product>();

  useEffect(() => {
    if (!product) return;
    const {
      title,
      slug,
      price,
      images,
      category,
      brand,
      stock,
      description,
      discountPercentage,
      rating,
      tags,
      sku,
      weight,
      width,
      height,
      depth,
      warrantyInformation,
      shippingInformation,
      returnPolicy,
      minimumOrderQuantity,
      thumbnail,
    } = product;

    setValue("title", title);
    setValue("slug", slug);
    setValue("description", description);
    setValue("price", price);
    setValue("discountPercentage", discountPercentage);
    setValue("rating", rating);
    setValue("stock", stock);
    setValue("tags", tags);
    setValue(
      "category",
      selectedCategory || product.category.trim().toLowerCase()
    );
    setValue("brand", selectedBrand || product.brand.trim().toLowerCase());
    setValue("sku", sku);
    setValue("weight", weight);
    setValue("width", width);
    setValue("height", height);
    setValue("depth", depth);
    setValue("warrantyInformation", warrantyInformation);
    setValue("shippingInformation", shippingInformation);
    setValue("returnPolicy", returnPolicy);
    setValue("minimumOrderQuantity", minimumOrderQuantity);
    setValue("images", images);
    setValue("thumbnail", thumbnail);
  }, [product, selectedBrand, selectedCategory, setValue]);

  const generateSlug = () => {
    const name = getValues("title");
    if (!name) {
      toast.error("Name field is empty!");
      return;
    }
    const slug = name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");
    setValue("slug", slug);
    toast.success("Slug generated successfully!");
  };

  const uploadHandler = async (e: any) => {
    const toastId = toast.loading("Uploading images...");
    const newImages = [...getValues("images")];

    try {
      const resSign = await fetch("/api/cloudinary-signin", { method: "POST" });
      const { signature, timestamp } = await resSign.json();

      const files = e.target.files;

      if (files.length + newImages.length > 5) {
        toast.error("You can upload a maximum of 5 images");
        return;
      }

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("signature", signature);
        formData.append("timestamp", timestamp);
        formData.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!);

        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await res.json();
        newImages.push(data.secure_url);
      }

      setValue("images", newImages as ["string"]);
      toast.success("Images uploaded successfully");
    } catch (err: any) {
      toast.error(err.message);
      return;
    }
  };

  const formSubmit = async (formData: any) => {
    await updateProduct(formData);
  };

  const FormInput = ({
    id,
    name,
    required,
    pattern,
    placeholder,
  }: {
    id: keyof Product;
    name: string;
    required?: boolean;
    placeholder?: string;
    pattern?: ValidationRule<RegExp>;
  }) => (
    <div className="flex flex-col w-full">
      <Label htmlFor={id} className="mb-2">
        {errors[id]?.message ? (
          <p className="text-destructive">{errors[id]?.message}</p>
        ) : (
          <p>{name}</p>
        )}
      </Label>

      {name === "Description" ? (
        <Textarea
          id={id}
          {...register(id, {
            required: required && `${name} обов'язкове поле`,
          })}
        />
      ) : (
        <Input
          type="text"
          id={id}
          {...register(id, {
            required: required && `* ${name} is required`,
            pattern,
          })}
          placeholder={placeholder}
          className="w-full"
        />
      )}
    </div>
  );

  if (error) return <p>{error.message}</p>;

  if (!product) return <Loader className="animate-spin" />;

  return (
    <Card className="w-full lg:max-w-4xl h-fit p-2">
      <CardHeader className="px-0 py-2">
        <CardTitle className="mb-4 flex justify-center items-center gap-4">
          <FilePenLine />
          Edit product
        </CardTitle>
        <CardDescription className="flex items-center justify-between gap-8">
          <span> ProductID:</span>
          <span>{formatId(productId)}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="px-0 py-2">
        <form
          onSubmit={handleSubmit(formSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8"
        >
          <div className="space-y-4">
            <FormInput name="Name" id="title" required />
            <div className="flex items-end justify-between gap-2">
              <FormInput name="Slug" id="slug" required />
              <Button type="button" onClick={generateSlug}>
                Generate Slug
              </Button>
            </div>
            <FormInput name="Price" id="price" required />
            <FormInput name="Count In Stock" id="stock" required />
            <div className="flex flex-col gap-2">
              <FormInput
                name="Category"
                id="category"
                placeholder="Add new category"
                required
              />
              <div className="relative flex justify-center">
                <Separator className="my-2" />
                <span className="absolute top-1/2 -translate-y-1/2 px-4 bg-background text-muted-foreground">
                  or
                </span>
              </div>
              <Select
                disabled={isUpdating}
                name="category"
                required
                value={selectedCategory}
                onValueChange={(value) => setSelectedCategory(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories?.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <FormInput
                name="Brand"
                id="brand"
                placeholder="Add new brand"
                required
              />

              <div className="relative flex justify-center">
                <Separator className="my-2" />
                <span className="absolute top-1/2 -translate-y-1/2 px-4 bg-background text-muted-foreground">
                  or
                </span>
              </div>
              <Select
                disabled={isUpdating}
                name="brand"
                required
                value={selectedBrand}
                onValueChange={(value) => setSelectedBrand(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select brand" />
                </SelectTrigger>
                <SelectContent>
                  {brands?.map((brand) => (
                    <SelectItem key={brand} value={brand}>
                      {brand}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {/* <FormInput name="Images" id="images" /> */}
            <div className="space-y-2">
              <Label htmlFor="images">Selected Images</Label>
              <div className="flex gap-2">
                {getValues("images")?.map((imageUrl: string, index: number) => (
                  <div key={index} className="relative">
                    <Image
                      width={80}
                      height={80}
                      src={imageUrl}
                      alt={`image-${index}`}
                      className="object-cover aspect-square"
                    />
                    <Button
                      size="icon"
                      type="button"
                      variant="secondary"
                      className="p-0 w-6 h-6 absolute top-0 right-0 rounded-none text-muted-foreground hover:text-primary"
                      onClick={() => {
                        const updatedImages = getValues("images").filter(
                          (_, i) => i !== index
                        );
                        setValue("images", updatedImages as ["string"]);
                      }}
                    >
                      <X />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <Input
              multiple
              type="file"
              id="imageFile"
              onChange={uploadHandler}
            />

            <FormInput name="Description" id="description" required />
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                type="button"
                onClick={() => router.push("/products")}
                className="flex-1"
              >
                <Ban />
                Cancel
              </Button>
              <Button type="submit" disabled={isUpdating} className="flex-1">
                {isUpdating ? (
                  <Loader className="animate-spin" />
                ) : (
                  <RefreshCw />
                )}
                Update
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
