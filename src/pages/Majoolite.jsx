import Container from '../components/Container';
import Button from '../components/Button';
import SplitSection, { Dots } from '../components/SplitSection';
import { majooliteCaseStudy as data } from '../data/projects';

/**
 * Majoolite — halaman case study khusus (lebih lengkap dari template biasa).
 * Semua teks & gambar ada di `majooliteCaseStudy` di src/data/projects.js.
 */
export default function Majoolite() {
  const { hero, background, targetUsers, problem, features, interview, conclusion, downloads } = data;

  return (
    <Container className="space-y-20 md:space-y-28">
      {/* ── Kartu hero ── */}
      <section className="grid gap-10 rounded-2xl bg-surface p-6 md:p-12 lg:grid-cols-[657fr_306fr] lg:gap-12">
        <div className="space-y-8">
          <img src={hero.image} alt="The Majoolite app shown on three phone screens" className="w-full" />
          <div>
            <p className="body-sm">{hero.eyebrow}</p>
            <h1 className="heading-2 mt-2">{hero.title}</h1>
            <dl className="mt-6 flex flex-wrap gap-x-16 gap-y-4">
              {hero.meta.map((item) => (
                <div key={item.label} className="space-y-2">
                  <dt className="body-md text-muted">{item.label}:</dt>
                  <dd className="body-md">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <img src={hero.logo} alt="Majoolite logo" className="h-8 w-auto self-start" />
          <p className="body-lg">
            <strong className="font-semibold">{hero.intro.highlight}</strong>
            {hero.intro.text}
          </p>
          <img src={hero.badge} alt="Chamjo — #8 on Product Hunt" className="w-full max-w-[305px] rounded-lg" />
          {/* Tombol Unduh hanya muncul kalau downloadUrl diisi */}
          {hero.downloadUrl && (
            <Button href={hero.downloadUrl} icon="download" className="mt-auto self-start">
              Download
            </Button>
          )}
        </div>
      </section>

      {/* ── Latar belakang ── */}
      <div className="space-y-10">
        <SplitSection title={background.title}>
          <p className="heading-4">{background.quote}</p>
          {background.paragraphs.map((paragraph) => (
            <p key={paragraph} className="body-lg text-white/85">
              {paragraph}
            </p>
          ))}
        </SplitSection>
        <img src={background.image} alt="POS app being used in small businesses" loading="lazy" className="w-full rounded-lg" />
      </div>

      {/* ── Target pengguna ── */}
      <SplitSection title={targetUsers.title}>
        <ul className="space-y-4">
          {targetUsers.items.map((item) => (
            <li key={item} className="body-lg flex gap-3 text-white/85">
              <span className="mt-2.5 size-2 shrink-0 rounded-full bg-primary-500" />
              {item}
            </li>
          ))}
        </ul>
      </SplitSection>

      {/* ── Masalah & desain lama ── */}
      <div className="space-y-10">
        <SplitSection title={problem.title}>
          <p className="body-lg text-white/85">{problem.text}</p>
        </SplitSection>
        <figure className="space-y-3">
          <img src={problem.image} alt="The previous Majoolite design" loading="lazy" className="w-full rounded-lg" />
          <figcaption className="body-sm text-center text-muted">{problem.imageCaption}</figcaption>
        </figure>
      </div>

      {/* ── Fitur: Beranda, Transaksi, Pembayaran ── */}
      {features.map((feature) => (
        <section key={feature.title} className="space-y-10">
          <SplitSection title={feature.title}>
            <p className="body-lg text-white/85">{feature.text}</p>
          </SplitSection>

          {feature.wideImage && (
            <img src={feature.wideImage} alt={`${feature.title} preview`} loading="lazy" className="mx-auto w-full max-w-3xl" />
          )}

          {feature.phones && (
            <div className="grid items-center gap-8 rounded-2xl bg-surface p-6 md:p-10 lg:grid-cols-[1fr_1.2fr]">
              <div className="flex justify-center gap-4">
                {feature.phones.map((src) => (
                  <img key={src} src={src} alt={`${feature.title} screen`} loading="lazy" className="w-1/2 max-w-[203px]" />
                ))}
              </div>
              <div className="space-y-4">
                {feature.callouts.map((callout) => (
                  <div key={callout.title} className="rounded-lg border border-line-subtle bg-page/60 p-5">
                    <h3 className="body-lg font-semibold">{callout.title}</h3>
                    <p className="body-sm mt-2 text-white/80">{callout.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          <Dots />
        </section>
      ))}

      {/* ── Wawancara pengguna ── */}
      <section className="space-y-10">
        <SplitSection title={interview.title}>
          <p className="body-lg text-white/85">{interview.text}</p>
          <p className="body-lg">
            <strong className="font-semibold">Note:</strong> {interview.note}
          </p>
        </SplitSection>

        <div className="grid gap-6 md:grid-cols-2">
          {interview.images.map((src, index) => (
            <img key={src} src={src} alt={`User interview recording ${index + 1}`} loading="lazy" className="w-full rounded-lg" />
          ))}
        </div>

        <div className="space-y-6">
          {interview.users.map((user) => (
            <UserCard key={user.business} user={user} />
          ))}
        </div>
      </section>

      {/* ── Kesimpulan ── */}
      <section className="space-y-10">
        <SplitSection title={conclusion.title}>
          {conclusion.paragraphs.map((paragraph) => (
            <p key={paragraph} className="body-lg text-white/85">
              {paragraph}
            </p>
          ))}
        </SplitSection>
        <div className="grid gap-6 sm:grid-cols-2">
          {conclusion.stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-surface p-8 text-center">
              <p className="heading-1 text-[#b4a9f5]">{stat.value}</p>
              <p className="body-md mt-2 text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Jumlah unduhan ── */}
      <section className="space-y-10">
        <SplitSection title={downloads.title}>
          <p className="body-lg text-white/85">{downloads.text}</p>
        </SplitSection>
        {downloads.images.map((image) => (
          <figure key={image.src} className="space-y-3">
            <img src={image.src} alt={image.caption} loading="lazy" className="w-full rounded-lg" />
            <figcaption className="body-sm text-center text-muted">{image.caption}</figcaption>
          </figure>
        ))}
      </section>
    </Container>
  );
}

/** Kartu hasil wawancara satu pengguna. Di HP kolomnya bertumpuk. */
function UserCard({ user }) {
  const columns = [
    { title: 'Profile', items: user.profile },
    { title: 'Why Majoolite?', items: user.reasons },
    { title: 'User Score (1–10)', items: user.ratings },
    { title: 'Pain Points', items: user.painPoints },
  ];
  return (
    <article className="rounded-2xl bg-surface p-6 md:p-8">
      <h3 className="heading-3">{user.business} — Active User</h3>
      <p className="body-sm mt-1 text-muted">Name: {user.name}</p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {columns.map((column) => (
          <div key={column.title}>
            <h4 className="body-md font-semibold">{column.title}</h4>
            <ul className="mt-3 list-disc space-y-1 pl-5 marker:text-muted">
              {column.items.map((item) => (
                <li key={item} className="body-sm text-white/80">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
}
