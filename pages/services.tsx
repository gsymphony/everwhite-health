import Head from 'next/head';
import Link from 'next/link';

/**
 * Services page enumerating the treatments and programmes offered at EverWhite
 * Health. Each service is presented with a short description. Feel free to
 * expand or update the content as the practice evolves.
 */
export default function Services() {
  const services = [
    {
      title: 'Teeth Whitening',
      description:
        'Achieve a noticeably brighter smile with our professional whitening treatments. Using safe, clinically proven techniques, we remove stains and discoloration for results that last.'
    },
    {
      title: 'Dental Exams & Cleanings',
      description:
        'Comprehensive examinations, digital diagnostics and gentle cleanings designed to maintain your oral health and catch potential issues early.'
    },
    {
      title: 'Digital Smile Design',
      description:
        'We use advanced imaging technology to simulate potential outcomes, enabling you to co design your ideal smile before any treatment begins.'
    },
    {
      title: 'Membership & Concierge Care',
      description:
        'Our membership plans offer exclusive pricing, priority scheduling and a concierge approach to your dental wellness journey.'
    },
    {
      title: 'Restorative Dentistry',
      description:
        'From fillings and crowns to implants, our restorative treatments rebuild structure and function while prioritising natural aesthetics.'
    },
    {
      title: 'Cosmetic Enhancements',
      description:
        'Custom veneers, bonding and contouring treatments refine the shape, colour and symmetry of your teeth for a truly polished appearance.'
    }
  ];

  return (
    <>
      <Head>
        <title>Services | EverWhite Health</title>
        <meta
          name="description"
          content="Explore the full range of dental services offered by EverWhite Health, from preventive care to cosmetic enhancements."
        />
      </Head>
      {/* Page header */}
      <section className="bg-blush py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Services</h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Every smile is unique, which is why we offer a suite of bespoke treatments. Whether you’re looking for
            preventive care or a complete smile makeover, our team has you covered.
          </p>
        </div>
      </section>
      {/* Services list */}
      <section className="py-16 bg-clean">
        <div className="max-w-7xl mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow-md p-8 flex flex-col justify-between hover:shadow-lg transition border-t-4 border-petal"
            >
              <div>
                <h3 className="text-2xl font-semibold text-coral mb-3">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* CTA */}
      <section className="py-16 bg-petal text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">Let’s Craft Your Signature Smile</h2>
          <p className="text-gray-700 mb-8">
            Ready to take the next step? Book an appointment and our team will guide you through the best options for
            your smile goals.
          </p>
          <Link href="/contact">
            <a className="inline-block bg-white text-coral px-8 py-3 rounded-full font-medium shadow hover:bg-clean hover:text-coral transition-colors">
              Book Now
            </a>
          </Link>
        </div>
      </section>
    </>
  );
}
