export default function Appointment() {
  return (
    <section
      id="appointment"
      className="py-28 bg-gradient-to-r from-emerald-700 to-emerald-800"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        <div className="bg-white/10 backdrop-blur-md rounded-[40px] p-12 lg:p-16 text-center border border-white/10">

          <p className="uppercase tracking-[0.3em] text-emerald-100 font-semibold">
            Book An Appointment
          </p>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mt-6 leading-tight">
            Exceptional Veterinary Care
            <br />
            Starts With One Visit
          </h2>

          <p className="mt-8 text-lg text-emerald-100 max-w-2xl mx-auto leading-8">
            Whether it's a routine check-up or urgent medical attention,
            our experienced veterinarians are here to provide compassionate,
            professional care for your beloved pet.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">

            <a
              href="#contact"
              className="bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300"
            >
              Book Appointment
            </a>

            <a
              href="tel:+15551234567"
              className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-emerald-700 transition duration-300"
            >
              Emergency Call
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}