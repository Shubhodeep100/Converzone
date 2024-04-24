import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Getting Products
export const getProducts = query({
  handler: async (ctx) => {
    const products = await ctx.db.query("products").collect();
    return products;
  },
});

// Adding products
export const addProduct = mutation({
  args: {
    name: v.string(),
    price: v.number(),
  },

  handler: async (ctx, args) => {
    const productId = await ctx.db.insert("products", {
      name: args.name,
      price: args.price,
    });
    return productId;
  },
});

// Deleting products
export const deleteProducts = mutation({
  args: {
    id: v.id("products"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
