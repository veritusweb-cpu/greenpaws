import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}

        <div>

          <span className="inline-flex items-center bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
            Trusted Veterinary Care
          </span>

          <h1 className="mt-8 text-5xl lg:text-7xl font-bold leading-tight text-gray-900">
            Caring For Pets
            <br />
            Like Family.
          </h1>

          <p className="mt-8 text-xl text-gray-600 leading-9 max-w-xl">
            GreenPaws Veterinary Clinic provides compassionate healthcare,
            preventive treatments, emergency care, and modern medical facilities
            to keep your beloved pets healthy and happy.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mt-12">

            <a
              href="#appointment"
              className="bg-emerald-700 hover:bg-emerald-800 transition text-white px-8 py-4 rounded-full text-center font-semibold shadow-lg"
            >
              Book Appointment
            </a>

            <a
              href="#services"
              className="border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white transition px-8 py-4 rounded-full text-center font-semibold"
            >
              Our Services
            </a>

          </div>

        </div>

        {/* Right */}

        <div className="relative">

          <div className="absolute -top-8 -right-8 w-56 h-56 bg-emerald-200 rounded-full blur-3xl opacity-40"></div>

          <div className="relative overflow-hidden rounded-[40px] shadow-2xl">

            <Image
              src="/dog.jpg"
              alt="Happy Dog"
              width={700}
              height={850}
              priority
              className="w-full h-[650px] object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
}