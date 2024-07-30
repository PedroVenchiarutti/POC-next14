'use server'

import { revalidateTag } from 'next/cache'

export async function createProduct(formData: FormData) {
  if (
    !formData.get('sku') ||
    !formData.get('name') ||
    !formData.get('category') ||
    !formData.get('price')
  ) {
    return
  }

  const data = {
    sku: formData.get('sku'),
    name: formData.get('name'),
    category: formData.get('category'),
    price: formData.get('price'),
  }

  await new Promise((resolve) => setTimeout(resolve, 3000))

  await fetch('http://localhost:3333/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  revalidateTag('get-products')
}
