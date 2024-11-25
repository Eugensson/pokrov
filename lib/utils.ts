import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { db } from "@/lib/db";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const round2 = (num: number) =>
  Math.round((num + Number.EPSILON) * 100) / 100;

export const formatId = (x: string) => {
  return `..${x.substring(14, 24)}`;
};

const CURRENCY_FORMATTER = new Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
  minimumFractionDigits: 2,
});

export const formatCurrency = (amount: number | string | null) => {
  if (typeof amount === "number") {
    return CURRENCY_FORMATTER.format(amount);
  } else if (typeof amount === "string") {
    return CURRENCY_FORMATTER.format(Number(amount));
  } else {
    return "NaN";
  }
};

export const findUserById = async (userId: string) => {
  const user = await db.user.findUnique({
    where: { id: userId },
  });
  if (!user) {
    throw new Response(JSON.stringify({ message: "User not found" }), {
      status: 404,
    });
  }
  return user;
};

export const handleError = (error: any, defaultMessage: string) => {
  console.error(defaultMessage, error);
  return new Response(
    JSON.stringify({
      message: defaultMessage,
      error: error.message || "Unknown error",
    }),
    { status: error.status || 500 }
  );
};

export const fetcher = (url: string) => fetch(url).then((res) => res.json());
