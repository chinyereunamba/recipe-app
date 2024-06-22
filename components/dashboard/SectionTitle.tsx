type SectionTitleProps = {
  title: string
  description: string
}

export default function SectionTitle({
  title,
  description,
}: SectionTitleProps) {
  return (
    <div>
      <h2 className="font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
