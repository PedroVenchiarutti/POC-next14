'use client'
import { useFormStatus } from 'react-dom'
import { twMerge } from 'tailwind-merge'

export function AddProductButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className={twMerge(
        'bg-orange-500 text-white px-4 py-2 rounded-md font-medium gap-4',
        pending && 'bg-gray-500 cursor-not-allowed',
      )}
      disabled={pending}
    >
      {pending ? 'Salvando...' : 'Salvar'}
    </button>
  )
}
