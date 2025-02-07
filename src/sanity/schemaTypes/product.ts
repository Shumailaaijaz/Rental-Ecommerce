
export const product = {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Product Name',
      },
      {
        name: 'type',
        type: 'string',
        title: 'Type',
      },
      {
        name: 'fuelCapacity',  // Changed from 'fuel-capacity' to 'fuel_capacity'
        type: 'string',
        title: 'Fuel Capacity',
      },
      {
        name: 'transmission',
        type: 'string',
        title: 'Transmission',
      },
      {
        name: 'seatingCapacity',  // Changed from 'seating-capacity' to 'seating_capacity'
        type: 'number',
        title: 'Seating Capacity',
      },
      {
        name: 'pricePerDay',  // Changed from 'price-per-day' to 'price_per_day'
        type: 'number',
        title: 'Price Per Day',
      },
      {
        name: 'originalPrice',
        type: 'number',
        title: 'Original Price',
        description: 'Original price of the product',
      },
      {
        name: 'tags',
        type: 'array',
        title: 'Tags',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags',
        },
        description: 'Add tags like "new arrival", "bestseller", etc.',
      },
      {
        name: 'sizes',
        type: 'array',
        title: 'Sizes',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags',
        },
        description: 'Add sizes like S, M, L, XL, XXL',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Product Image',
        options: {
          hotspot: true, // Enables cropping and focal point selection
        },
      },
    ],
  };