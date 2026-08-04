import {
  MapPin,
  Phone,
  Mail,
  Clock,
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
            Contact Us
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
            We're Here Whenever
            <br />
            Your Pet Needs Us
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Whether it's a routine health check or emergency treatment,
            our friendly team is always ready to help.
          </p>

          <div className="space-y-6 mt-10">

            <div className="flex items-start gap-4">

              <div className="bg-emerald-100 p-3 rounded-xl">

                <MapPin className="w-6 h-6 text-emerald-700" />

              </div>

              <div>

                <h4 className="font-semibold text-gray-900">
                  Address
                </h4>

                <p className="text-gray-600">
                  245 Maple Avenue
                  <br />
                  Seattle, WA 98101
                </p>

              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="bg-emerald-100 p-3 rounded-xl">

                <Phone className="w-6 h-6 text-emerald-700" />

              </div>

              <div>

                <h4 className="font-semibold text-gray-900">
                  Phone
                </h4>

                <p className="text-gray-600">
                  +1 (555) 123-4567
                </p>

              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="bg-emerald-100 p-3 rounded-xl">

                <Mail className="w-6 h-6 text-emerald-700" />

              </div>

              <div>

                <h4 className="font-semibold text-gray-900">
                  Email
                </h4>

                <p className="text-gray-600">
                  care@greenpaws.com
                </p>

              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="bg-emerald-100 p-3 rounded-xl">

                <Clock className="w-6 h-6 text-emerald-700" />

              </div>

              <div>

                <h4 className="font-semibold text-gray-900">
                  Opening Hours
                </h4>

                <p className="text-gray-600">
                  Mon – Sat: 8:00 AM – 8:00 PM
                  <br />
                  Sunday: Emergency Only
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Form */}

        <div className="bg-slate-50 rounded-[32px] p-10 shadow-lg border border-gray-100">

          <h3 className="text-2xl font-semibold text-gray-900">
            Request An Appointment
          </h3>

          <form className="mt-8 space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />

            <textarea
              rows={5}
              placeholder="How can we help your pet?"
              className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />

            <button
              className="w-full bg-emerald-700 text-white py-4 rounded-full font-semibold hover:bg-emerald-800 transition duration-300"
            >
              Send Request
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}