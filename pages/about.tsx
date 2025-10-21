import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

/**
 * About page describing the EverWhite Health philosophy and clinic environment.
 */
export default function About() {
  return (
    <>
      <Head>
        <title>About Us | EverWhite Health</title>
        <meta
          name="description"
          content="Learn more about EverWhite Health, our philosophy and what makes our boutique dental clinic unique."
        />
      </Head>
      {/* Intro banner */}
      <section className="bg-blush py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About EverWhite Health</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            EverWhite Health was born from a desire to reimagine dentistry. We blend advanced technology and clinical
            expertise with a soothing, luxurious environment to make every visit uplifting.
          </p>
        </div>
      </section>
      {/* Our story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded by a team of dental professionals and wellness enthusiasts, EverWhite Health opened its doors
              with the vision of changing how people feel about visiting the dentist. We wanted to create a place
              where guests feel cared for, indulged and empowered to achieve their best smile.
            </p>
            <p className="text-gray-700">
              Since then, our boutique practice in Burbank has become a haven for those seeking personalised care
              with outstanding results. We continue to invest in the latest diagnostic and treatment technologies
              while never losing sight of the importance of compassion and human connection.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/assets/IMG_3039.png"
              alt="Reception of EverWhite clinic"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      {/* Philosophy */}
      <section className="py-16 bg-clean">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/assets/IMG_3042.png"
              alt="Treatment rooms of EverWhite clinic"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Philosophy</h2>
            <p className="text-gray-700 mb-4">
              We believe that oral health is essential to overall wellbeing. That’s why every element of our practice
              has been thoughtfully curated to promote relaxation and trust—from our warm colour palette and soft
              lighting to our hospitality-driven service.
            </p>
            <p className="text-gray-700">
              Our clinicians take the time to understand your goals and craft a personalised plan that fits your
              lifestyle. We never rush appointments and always explain your options so you can make informed
              decisions about your care.
            </p>
          </div>
        </div>
      </section>
      {/* Call to action */}
      <section className="py-16 bg-petal text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">Visit Our Clinic</h2>
          <p className="text-gray-700 mb-8">
            Ready to experience the EverWhite difference? Schedule a consultation today and let us show you how
            comfortable and uplifting dental care can be.
          </p>
          <Link href="/contact">
            <a className="inline-block bg-white text-coral px-8 py-3 rounded-full font-medium shadow hover:bg-clean hover:text-coral transition-colors">
              Book an Appointment
            </a>
          </Link>
        </div>
      </section>
    </>
  );
}
