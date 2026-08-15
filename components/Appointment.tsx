export default function Appointment() {
  return (
    <section
      id="appointment"
      className="py-28 bg-gradient-to-r from-emerald-700 to-emerald-800"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        <div className="bg-white/10 backdrop-blur-md rounded-[40px] p-12 lg:p-16 text-center border border-white/10">

          <p className="uppercase tracking-[0.3em] text-emerald-100 font-semibold">
            Get In Touch
          </p>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mt-6 leading-tight">
            Better Care For
            <br />
            Your Best Friend.
          </h2>

          <p className="mt-8 text-lg text-emerald-100 max-w-2xl mx-auto leading-8">
            Looking for veterinary care, pet supplies, or everyday essentials
            for your companion? Get in touch with Surya Pet & Vet Clinic today.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">

            <a
  href="tel:06305363795"
              className="bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300"
            >
              Contact Us
            </a>

            <a
              href="tel:06305363795"
              className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-emerald-700 transition duration-300"
            >
              Call 063053 63795
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}