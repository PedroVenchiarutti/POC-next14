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
    <Dialog>
      <DialogTrigger>Adicionar Produto</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar produto</DialogTitle>
        </DialogHeader>
        <FormCreateProduct action={action} />
      </DialogContent>
    </Dialog>
  )
}
