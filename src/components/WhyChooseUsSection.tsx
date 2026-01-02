import { motion } from "framer-motion";
import { Zap, Percent, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Submit your quote or BOM and get pricing back quickly. Have a supplier quote? Even faster turnaround.",
  },
  {
    icon: Percent,
    title: "Transparent Pricing",
    description: "Simple 10% markup on all orders. No hidden fees, no surprises. You know exactly what to expect.",
  },
  {
    icon: CheckCircle,
    title: "Reliable Delivery",
    description: "We coordinate and track your shipment from order to delivery. What we say, we do.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Why Choose 5280 Source Group?</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            We make sourcing construction materials straightforward, transparent, and reliable
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card group hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent/10 text-accent mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
