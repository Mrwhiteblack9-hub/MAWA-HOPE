export default function SocialSection({ social = {} }) {
  return (
    <section id="social" className="py-12">
      <div className="max-w-4xl mx-auto text-white text-center">
        <h3 className="text-xl font-semibold mb-4">Join the community</h3>
        <div className="flex justify-center gap-6">
          <a href={social.x ?? 'https://x.com'} target="_blank" rel="noreferrer" className="hover:underline">X / Twitter</a>
          <a href={social.telegram ?? 'https://t.me'} target="_blank" rel="noreferrer" className="hover:underline">Telegram</a>
        </div>
      </div>
    </section>
  )
}
