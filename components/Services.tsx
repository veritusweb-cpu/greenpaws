import {
  Stethoscope,
  Syringe,
  ShoppingBag,
  HeartPulse,
  PackageCheck,
  Truck,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Veterinary Care",
    description:
      "Professional veterinary support for your pet's healthcare and routine needs.",
  },
  {
    icon: Syringe,
    title: "Pet Vaccinations",
    description:
      "Keep your pets protected with essential vaccinations and preventive care.",
  },
  {
    icon: ShoppingBag,
    title: "Pet Supplies",
    description:
      "Find everyday pet essentials and supplies for your companion in one place.",
  },
  {
    icon: HeartPulse,
    title: "Pet Health",
    description:
      "Care and support focused on keeping your pets healthy and comfortable.",
  },
  {
    icon: PackageCheck,
    title: "In-Store Shopping",
    description:
      "Browse and purchase pet products conveniently at our store.",
  },
  {
    icon: Truck,
    title: "Home Delivery",
    description:
      "Get your pet essentials delivered conveniently to your doorstep.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-emerald-700 font-semibold">
            Our Services
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
            Everything Your Pet Needs
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            From veterinary care to everyday pet essentials, Surya Pet & Vet
            Clinic makes taking care of your companion simple and convenient.
          </p>

        </div>

        {/* Services */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="bg-white rounded-3xl p-8 shadow-md border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center">

                  <Icon className="w-8 h-8 text-emerald-700" />

                </div>

                <h3 className="text-2xl font-semibold mt-8 text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-8">
                  {service.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}