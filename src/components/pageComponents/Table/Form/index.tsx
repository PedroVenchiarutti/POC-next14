import { FormCreateProduct } from '@/app/actions/add-product'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export function ModalCreateProduct({ action }: { action: any }) {
  return (
    <Dialog modalName="create-product">
      <DialogTrigger
        className="bg-orange-500 text-white px-4 py-2 rounded-md font-medium"
        modalName="create-product"
      >
        Adicionar Produto
      </DialogTrigger>
      <DialogContent modalName="create-product">
        <DialogHeader>
          <DialogTitle>Adicionar produto</DialogTitle>
        </DialogHeader>
        <FormCreateProduct action={action} />
      </DialogContent>
    </Dialog>
  )
}
