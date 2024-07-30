import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from '@/components/ui/table'

export default async function TableList() {
  const response = await fetch('http://localhost:3333/products', {
    next: {
      tags: ['get-products'],
    },
  })
  const data = (await response.json()) as any[]

  return (
    <div className="flex flex-col w-full">
      <Table>
        <TableCaption>Uma lista de produtos</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[10%]">SKU</TableHead>
            <TableHead className="w-[40%]">Name</TableHead>
            <TableHead className="w-[20%]">Categoria</TableHead>
            <TableHead className="w-[10%] text-right">Amount</TableHead>
            <TableHead className="w-[10%]">Ação</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((product, index) => (
            <TableRow className="text-black font-medium" key={index}>
              <TableCell>{product.sku}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell className="text-right">{product.price}</TableCell>
              <TableCell className="flex gap-4">
                <button className="bg-blue-500 text-white px-1 py-1 rounded-md font-medium">
                  Editar
                </button>
                <button className="bg-red-500 text-white px-1 py-1 rounded-md font-medium">
                  Excluir
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
