import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type InputWithLabelProps = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>

export function InputWithLabel({ label, ...props }: InputWithLabelProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">{label}</Label>
      <Input {...props} />
    </div>
  )
}
