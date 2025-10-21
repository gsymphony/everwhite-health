import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Home page of the EverWhite Health site. Built with Next.js and Tailwind
 * CSS using the colour palette provided by the user. The page features a
 * hero section, services overview, an about preview and a call ‑ action
 * inviting visitors to get in touch.
 */
export default function Home() {
  return (
    <>
      <Head>
        <title>EverWhite Health | Luxury Dental Wellness</title>
        <meta
          name="description"
          content="Experience luxury dental wellness at EverWhite Health. Discover our boutique services designed to bring out your brightest smile."
        />
      </Head>
      {/* Hero section */}
      <section className="relative h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden">
        <Image
          src="/assets/IMG_3041.png"
          alt="EverWhite clinic interior"
          fill
          className="object-cover object-center brightness-90"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
            Discover Your Brightest Smile
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mb-8">
            Personalized dental wellness with state ‑ art technology and a calming, spa ‑ like atmosphere.
          </p>
          <Link href="/contact">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="inline-block bg-coral text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:bg-petal hover:shadow-xl transition-colors">
              Schedule Your Visit
            </a>
          </Link>
        </div>
      </section>
      {/* Services overview */}
      <section className="py-16 bg-clean">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">Our Services</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
            At EverWhite Health we combine modern dentistry with artistry. Our comprehensive menu of services is designed to help you achieve and maintain a radiant smile in a relaxed, boutique environment.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition border-t-4 border-petal">
              <h3 className="text-xl font-semibold text-coral mb-2">Teeth Whitening</h3>
              <p className="text-gray-600">
                Professional whitening treatments for a radiant, long ‑ lasting smile using safe and effective techniques.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition border-t-4 border-petal">
              <h3 className="text-xl font-semibold text-coral mb-2">Dental Exams &amp; Cleanings</h3>
              <p className="text-gray-600">
                Comprehensive exams, diagnostics and gentle cleanings to keep your oral health on track.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition border-t-4 border-petal">
              <h3 className="text-xl font-semibold text-coral mb-2">Digital Smile Design</h3>
              <p className="text-gray-600">
                Visualize your future smile with digital simulations and custom treatment planning tailored just for you.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition border-t-4 border-petal">
              <h3 className="text-xl font-semibold text-coral mb-2">Membership &amp; Concierge Care</h3>
              <p className="text-gray-600">
                Join our wellness membership for exclusive pricing and concierge ‑ style appointments on your schedule.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition border-t-4 border-petal">
              <h3 className="text-xl font-semibold text-coral mb-2">Restorative Dentistry</h3>
              <p className="text-gray-600">
                From fillings to crowns, we restore teeth with precision and an eye for natural aesthetics.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition border-t-4 border-petal">
              <h3 className="text-xl font-semibold text-coral mb-2">Cosmetic Enhancements</h3>
              <p className="text-gray-600">
                Veneers, bonding and custom treatments to perfect the shape and colour of your smile.
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/services">
              <a className="inline-block bg-petal text-coral px-6 py-3 rounded-full font-medium shadow hover:bg-blush transition-colors">
                View All Services
              </a>
            </Link>
          </div>
        </div>
      </section>
      {/* About preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/assets/IMG_3040.png"
              alt="Comfortable seating area of EverWhite clinic"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">A Boutique Dental Experience</h2>
            <p className="text-gray-700 mb-4">
              From the moment you walk through our doors, you'll notice the difference. Designed to feel like a spa
              rather than a dentist's office, EverWhite Health places comfort and serenity at the heart of every visit.
            </p>
            <p className="text-gray-700 mb-6">
              Our team of specialists uses cutting ‑ edge technology to deliver personalised care in a serene environment
              while our membership model ensures you enjoy preferential booking and pricing.
            </p>
            <Link href="/about">
              <a className="inline-block bg-coral text-white px-6 py-3 rounded-full font-medium shadow hover:bg-petal transition-colors">
                Learn More About Us
              </a>
            </Link>
          </div>
        </div>
      </section>
      {/* Call to action */}
      <section className="py-16 bg-petal text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">Ready to Experience EverWhite?</h2>
          <p className="text-gray-700 mb-8">
            Whether you need routine care or want to completely reimagine your smile, our team is here to help.
            Get in touch to start your journey toward a healthier, more confident you.
          </p>
          <Link href="/contact">
            <a className="inline-block bg-white text-coral px-8 py-3 rounded-full font-medium shadow hover:bg-clean hover:text-coral transition-colors">
              Contact Us
            </a>
          </Link>
        </div>
      </section>
    </>
  );
}
