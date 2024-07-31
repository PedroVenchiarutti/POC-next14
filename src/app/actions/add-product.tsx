'use server'
import { InputWithLabel } from '@/components/Input'
import { revalidateTag } from 'next/cache'
import { AddProductButton } from './button'
import { redirect } from 'next/navigation'

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
  redirect('/')
}

export async function FormCreateProduct({ action }: { action: any }) {
  return (
    <form
      action={action}
      method="POST"
      className="flex flex-col h-full w-ful mt-4 gap-4"
    >
      <InputWithLabel label="SKU" name="sku" type="text" />
      <InputWithLabel label="Nome" name="name" type="text" />
      <InputWithLabel label="Categoria" name="category" type="text" />
      <InputWithLabel label="Preço" name="price" type="number" />
      <AddProductButton />
    </form>
  )
}
