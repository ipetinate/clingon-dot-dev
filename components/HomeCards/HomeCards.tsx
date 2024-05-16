import { Card } from 'components/Card'

export function HomeCards() {
  const cards = [
    {
      emoji: '🧑‍💻',
      title: 'Developer Experience',
      description:
        'Use ready-made templates instead of copying and pasting code until you have something minimally viable to develop, avoid tedious and repetitive tasks'
    },
    {
      emoji: '⌚️',
      title: 'Time Saving',
      description:
        'Creating too many files? Component, styles, tests, stories, index, among others. Save time by automatically creating files with as little programming as necessary'
    },
    {
      emoji: '🤩',
      title: 'Avoid Mistakes',
      description:
        'Using pre-filled templates, you avoid syntax errors or problems when copying code from other places, change what is necessary and develop what is missing'
    }
  ]

  return (
    <div className="w-full flex flex-col xl:flex-row xs:flex-col justify-center items-center content-center gap-10 p-10">
      {cards.map(({ description, emoji, title }) => (
        <Card id={title}>
          <div className="flex flex-col gap-3 w-80 h-32">
            <div className="flex flex-row gap-2">
              <span className="text-xl">{emoji}</span>

              <h3 className="text-xl text-emerald-400 font-semibold">{title}</h3>
            </div>

            <p className="max-w-96 text-sm">{description}</p>
          </div>
        </Card>
      ))}
    </div>
  )
}
