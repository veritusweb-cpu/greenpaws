import {
  Heart,
  Stethoscope,
  PawPrint,
} from "lucide-react";

const highlights = [
  {
    icon: Stethoscope,
    title: "Veterinary Support",
    description:
      "Convenient access to veterinary care for your pet's healthcare needs.",
  },
  {
    icon: PawPrint,
    title: "For Every Pet",
    description:
      "A welcoming place for pet parents looking after their companions.",
  },
  {
    icon: Heart,
    title: "Pet First",
    description:
      "A convenient combination of pet care and everyday pet essentials.",
  },
];

export default function Doctors() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>

            <p className="uppercase tracking-[0.3em] text-emerald-700 font-semibold">
              Your Pet Deserves The Best
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 leading-tight">
              Everything Your Pet Needs,
              <br />
              All In One Place.
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              From veterinary care to essential pet supplies, Surya Pet & Vet
              Clinic is here to make everyday pet care more convenient for you
              and your companion.
            </p>

            <a
              href="#appointment"
              className="inline-flex mt-8 bg-emerald-700 hover:bg-emerald-800 transition text-white px-7 py-3.5 rounded-full font-semibold"
            >
              Get In Touch
            </a>

          </div>

          {/* Right */}
          <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-5">

            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition"
                >

                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-emerald-700" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mt-5">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-2 leading-7">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}