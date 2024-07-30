import { InputWithLabel } from '@/components/Input'
import { createProduct } from '@/app/actions/add-product'
import { X } from '@phosphor-icons/react'
import { AddProductButton } from '@/app/actions/button'

export function FormCreateProduct({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black/90 flex items-center justify-center">
      <div className="flex flex-col bg-slate-50 p-4 rounded-md w-[400px] h-[400px]">
        <div className="flex justify-between">
          <h2 className="text-2xl text-gray-950 ">Adicionar produto</h2>
          <button onClick={onClose}>
            <X size={26} color="black" />
          </button>
        </div>
        <form
          action={createProduct}
          method="POST"
          className="flex flex-col h-full w-ful mt-4 gap-4"
        >
          <InputWithLabel label="SKU" name="sku" type="text" />
          <InputWithLabel label="Nome" name="name" type="text" />
          <InputWithLabel label="Categoria" name="category" type="text" />
          <InputWithLabel label="Preço" name="price" type="number" />
          <AddProductButton />
        </form>
      </div>
    </div>
  )
}
