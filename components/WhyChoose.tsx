import {
  ShieldCheck,
  Stethoscope,
  HeartHandshake,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted By Pet Parents",
    description:
      "With a 4.9-star Google rating and 85+ reviews, Surya Pet & Vet Clinic is trusted by pet parents in the local community.",
  },
  {
    icon: Stethoscope,
    title: "Veterinary Care",
    description:
      "Get convenient access to veterinary care for your pet alongside the everyday products and supplies they need.",
  },
  {
    icon: HeartHandshake,
    title: "Everything In One Place",
    description:
      "From pet supplies and in-store shopping to convenient delivery, we make caring for your companion easier.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="max-w-3xl mx-auto text-center">

          <p className="uppercase tracking-[0.3em] text-emerald-700 font-semibold">
            Why Surya
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
            Trusted Pet Care, Close To Home
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Surya Pet & Vet Clinic brings veterinary care and everyday pet
            essentials together, making pet care simple and convenient.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="bg-white border border-gray-100 rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-emerald-700" />
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8">
                  {feature.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-8">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}