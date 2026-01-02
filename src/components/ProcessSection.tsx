import { motion } from "framer-motion";
import { FileUp, Calculator, CheckSquare, Truck } from "lucide-react";

const steps = [
  {
    icon: FileUp,
    title: "Submit Request",
    description: "Upload your supplier quote or BOM through our simple form",
    step: 1,
  },
  {
    icon: Calculator,
    title: "Receive Quote",
    description: "Get your quote back ASAP - faster with supplier quotes, slightly longer for BOMs",
    step: 2,
  },
  {
    icon: CheckSquare,
    title: "Approve & Schedule",
    description: "Once approved, we coordinate your delivery schedule",
    step: 3,
  },
  {
    icon: Truck,
    title: "Track & Deliver",
    description: "We manage and track your shipment to ensure on-time delivery",
    step: 4,
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Simple, streamlined, and efficient
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-20 left-[12%] right-[12%] h-0.5 bg-border" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Step Number & Icon */}
                <div className="relative inline-flex flex-col items-center">
                  <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground shadow-lg mb-6">
                    <step.icon className="w-9 h-9" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center shadow">
                      {step.step}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="inline-flex items-center gap-2 px-6 py-3 bg-primary/5 rounded-lg text-muted-foreground text-sm italic">
            <span className="font-medium text-foreground">Note:</span>
            We order from your material list. We do not review drawings or perform takeoffs.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
