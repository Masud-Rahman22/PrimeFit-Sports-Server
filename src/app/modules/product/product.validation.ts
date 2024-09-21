import { z } from 'zod';

// Zod schema for Product validation
export const productSchema = z.object({
    body: z.object({
        name: z.string().min(1, 'Product name is required'),
        description: z.string().min(1, 'Product description is required'),
        category: z.string().min(1, 'Category is required'),
        brand: z.string().min(1, 'Brand is required'),
        stock: z.number().nonnegative('Stock must be a non-negative number'),
        rating: z.number().min(0).max(5, 'Rating must be between 0 and 5'),
        price: z.number().positive('Price must be a positive number'),
        image: z.string().url('Image URL must be valid'),
      })
});

export type ProductValidationSchema = z.infer<typeof productSchema>;
