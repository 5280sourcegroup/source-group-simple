import { motion } from "framer-motion";
import { Mail, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          {/* Logo Text */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold tracking-wide">
              5280 SOURCE GROUP
            </h3>
            <p className="text-primary-foreground/70 text-sm mt-1">LLC</p>
          </div>

          {/* Tagline */}
          <p className="text-lg text-primary-foreground/80 mb-8">
            Construction Materials Made Simple
          </p>

          {/* Contact */}
          <a
            href="mailto:order@5280sourcegroup.com"
            className="inline-flex items-center gap-2 text-accent hover:text-orange-light transition-colors mb-8 text-lg"
          >
            <Mail className="w-5 h-5" />
            order@5280sourcegroup.com
          </a>

          {/* MWBE Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/90 mb-8">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">MWBE Certified</span>
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-primary-foreground/20 mb-6" />

          {/* Copyright */}
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} 5280 Source Group LLC. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
