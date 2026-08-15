import {
  MapPin,
  Phone,
  Clock,
  Navigation,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">

        {/* Left */}
        <div>

          <p className="uppercase tracking-[0.3em] text-emerald-700 font-semibold">
            Visit Us
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
            We're Here For
            <br />
            You & Your Pets
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Have a question about your pet or looking for pet supplies?
            Get in touch with Surya Pet & Vet Clinic or visit us in
            Shaheen Bagh, Jasola.
          </p>

          <div className="space-y-6 mt-10">

            {/* Address */}
            <div className="flex items-start gap-4">

              <div className="bg-emerald-100 p-3 rounded-xl">
                <MapPin className="w-6 h-6 text-emerald-700" />
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">
                  Address
                </h4>

                <p className="text-gray-600 leading-7">
                  Metro Station, near Durga Mata Mandir,
                  <br />
                  Shaheen Bagh, Jasola, Jasola Vihar,
                  <br />
                  New Delhi, Delhi 110025
                </p>
              </div>

            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">

              <div className="bg-emerald-100 p-3 rounded-xl">
                <Phone className="w-6 h-6 text-emerald-700" />
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">
                  Phone
                </h4>

                <a
                  href="tel:06305363795"
                  className="text-gray-600 hover:text-emerald-700 transition"
                >
                  063053 63795
                </a>
              </div>

            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">

              <div className="bg-emerald-100 p-3 rounded-xl">
                <Clock className="w-6 h-6 text-emerald-700" />
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">
                  Opening Hours
                </h4>

                <p className="text-gray-600">
                  Currently open
                  <br />
                  Closes at 11:00 PM
                </p>
              </div>

            </div>

          </div>

          {/* Directions Button */}
          <a
            href="https://maps.app.goo.gl/3WVNehhjAU8iDRxY6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-10 bg-emerald-700 hover:bg-emerald-800 text-white px-7 py-3.5 rounded-full font-semibold transition"
          >
            <Navigation className="w-5 h-5" />
            Get Directions
          </a>

        </div>

        {/* Appointment Form */}
        <div className="bg-slate-50 rounded-[32px] p-10 shadow-lg border border-gray-100">

          <h3 className="text-2xl font-semibold text-gray-900">
            Get In Touch
          </h3>

          <p className="text-gray-500 mt-2">
            Have a question or want to enquire about your pet?
          </p>

          <form className="mt-8 space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />

            <input
              type="text"
              placeholder="Pet's Name"
              className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />

            <textarea
              rows={5}
              placeholder="How can we help?"
              className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />

            <button
              type="button"
              className="w-full bg-emerald-700 text-white py-4 rounded-full font-semibold hover:bg-emerald-800 transition duration-300"
            >
              Send Enquiry
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}