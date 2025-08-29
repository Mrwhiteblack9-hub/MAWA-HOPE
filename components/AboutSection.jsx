export default function AboutSection({ dict }) {
  return (
    <section id="about" className="py-16 bg-transparent text-white">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">{dict?.home?.vision_title ?? 'Vision'}</h2>
        <p className="text-white/80">{dict?.home?.vision_text ?? 'MAWA combines memecoin culture with execution.'}</p>
      </div>
    </section>
  )
}
