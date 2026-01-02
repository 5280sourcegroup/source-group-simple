import { motion } from "framer-motion";
import aboutImage from "@/assets/about-office.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title mb-6">About 5280 Source Group</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                We saw a need in the construction industry for an MWBE-certified supplier that operates with true competence and efficiency. Too often, contractors face delays, unclear pricing, and unreliable communication.
              </p>
              <p className="text-lg">
                At 5280 Source Group, we're changing that standard. We provide fast, accurate quotes, transparent pricing with a straightforward 10% markup, and we deliver on our commitments every time.
              </p>
              <p className="text-lg">
                Our streamlined process and focus on automation mean you get the answers and materials you need without the runaround.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border"
            >
              <div>
                <div className="text-3xl font-bold text-accent">10%</div>
                <div className="text-sm text-muted-foreground mt-1">Transparent Markup</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">Net 30</div>
                <div className="text-sm text-muted-foreground mt-1">Payment Terms</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">MWBE</div>
                <div className="text-sm text-muted-foreground mt-1">Certified</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="5280 Source Group professional workspace with construction blueprints and materials"
                className="w-full h-auto object-cover"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
