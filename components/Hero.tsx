import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>

          <span className="inline-flex items-center bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
            Trusted Pet Care in Shaheen Bagh
          </span>

          <h1 className="mt-8 text-5xl lg:text-7xl font-bold leading-tight text-gray-900">
            Complete Care
            <br />
            For Your Pets.
          </h1>

          <p className="mt-8 text-xl text-gray-600 leading-9 max-w-xl">
            Surya Pet & Vet Clinic brings veterinary care and pet supplies
            together in one convenient place for pet parents in
            Shaheen Bagh and Jasola.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mt-12">

            <a
  href="tel:06305363795"
              className="bg-emerald-700 hover:bg-emerald-800 transition text-white px-8 py-4 rounded-full text-center font-semibold shadow-lg"
            >
              Book Appointment
            </a>

            <a
              href="#contact"
              className="border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white transition px-8 py-4 rounded-full text-center font-semibold"
            >
              Contact Us
            </a>

          </div>

          {/* Trust */}
          <div className="flex flex-wrap gap-6 mt-10 text-gray-600 text-sm font-medium">

            <div className="flex items-center gap-2">
              <span className="text-yellow-500 text-lg">★</span>
              <span>4.9 Google Rating</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-emerald-700">✓</span>
              <span>85+ Reviews</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-emerald-700">✓</span>
              <span>Pet Supplies</span>
            </div>

          </div>

        </div>

        {/* Right */}
        <div className="relative">

          <div className="absolute -top-8 -right-8 w-56 h-56 bg-emerald-200 rounded-full blur-3xl opacity-40" />

          <div className="relative overflow-hidden rounded-[40px] shadow-2xl">

            <Image
             src="/clinic.png"
              alt="Happy pet"
              width={700}
              height={850}
              priority
              className="w-full h-[650px] object-cover"
            />

          </div>

          {/* Floating rating card */}
          <div className="absolute bottom-8 -left-6 bg-white rounded-2xl shadow-xl px-6 py-4 border border-gray-100">

            <p className="text-2xl font-bold text-gray-900">
              4.9<span className="text-yellow-500">★</span>
            </p>

            <p className="text-sm text-gray-500 mt-1">
              85+ Google Reviews
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}