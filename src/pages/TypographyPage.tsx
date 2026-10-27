import TypographyRules from '../typography-rules'

export default function TypographyPage() {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-3xl text-center text-gray-800 mb-5 mt-10">Typography Rules</p>
      <TypographyRules />
    </div>
  )
}
