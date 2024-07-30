import TableList from '@/components/pageComponents/Table'

export default function Home() {
  return (
    <div className="flex h-screen bg-black/90 text-white flex-col items-center justify-center">
      <div className="flex flex-col justify-center gap-4 h-full w-11/12">
        <div className="flex w-full justify-between">
          <h2 className="text-start text-3xl">Cadastro de produtos POC</h2>
          <button className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-md font-medium gap-4">
            Adicionar
          </button>
        </div>
        <div className="h-1/2 w-full p-4 border rounded-md bg-zinc-50 overflow-auto">
          <TableList />
        </div>
      </div>
    </div>
  )
}
