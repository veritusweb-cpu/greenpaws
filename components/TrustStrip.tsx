import { Star, Heart, ShoppingBag, Truck } from "lucide-react";

const stats = [
  {
    icon: Star,
    title: "4.9/5",
    subtitle: "Google Rating",
  },
  {
    icon: Heart,
    title: "85+",
    subtitle: "Google Reviews",
  },
  {
    icon: ShoppingBag,
    title: "Pet Supplies",
    subtitle: "In-Store Shopping",
  },
  {
    icon: Truck,
    title: "Delivery",
    subtitle: "Available",
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.subtitle}
                className="flex items-center gap-4 justify-center lg:justify-start"
              >
                <div className="bg-emerald-100 p-4 rounded-2xl">
                  <Icon className="w-7 h-7 text-emerald-700" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-500">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}