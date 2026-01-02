import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Upload, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

const quoteFormSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50, "First name is too long"),
  lastName: z.string().trim().min(1, "Last name is required").max(50, "Last name is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(100, "Email is too long"),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(20, "Phone number is too long"),
  companyName: z.string().trim().min(1, "Company name is required").max(100, "Company name is too long"),
  jobTitle: z.string().trim().min(1, "Job title is required").max(50, "Job title is too long"),
  industry: z.string().trim().min(1, "Industry is required").max(50, "Industry is too long"),
  address: z.string().trim().max(200, "Address is too long").optional(),
  message: z.string().trim().min(10, "Please describe your project or materials needed").max(2000, "Message is too long"),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

const QuoteFormSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileError("");
    
    if (file) {
      if (file.type !== "application/pdf") {
        setFileError("Please upload a PDF file only");
        setSelectedFile(null);
        return;
      }
      if (file.size > MAX_FILE_SIZE) {
        setFileError("File size must be less than 10MB");
        setSelectedFile(null);
        return;
      }
      setSelectedFile(file);
    }
  };

  const onSubmit = async (data: QuoteFormData) => {
    try {
      // For now, we'll show a success message. Backend integration will be added later.
      console.log("Form submitted:", data);
      console.log("Attached file:", selectedFile?.name);
      
      setSubmittedEmail(data.email);
      setIsSubmitted(true);
      reset();
      setSelectedFile(null);
      
      toast({
        title: "Quote Request Submitted!",
        description: "We'll review your information and get back to you soon.",
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (isSubmitted) {
    return (
      <section id="quote-form" className="py-20 md:py-28 bg-secondary">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <Card className="border-0 shadow-xl">
              <CardContent className="p-12">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Thank You!
                </h3>
                <p className="text-muted-foreground text-lg mb-6">
                  Your quote request has been received. We'll review your information and get back to you as soon as possible at{" "}
                  <span className="font-medium text-foreground">{submittedEmail}</span>.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="mt-4"
                >
                  Submit Another Request
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote-form" className="py-20 md:py-28 bg-secondary">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Request Your Quote</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Get started with transparent pricing and fast turnaround
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="max-w-3xl mx-auto border-0 shadow-xl">
            <CardContent className="p-8 md:p-10">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Personal Information</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        {...register("firstName")}
                        className="mt-1.5"
                        placeholder="John"
                      />
                      {errors.firstName && (
                        <p className="text-sm text-destructive mt-1">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        {...register("lastName")}
                        className="mt-1.5"
                        placeholder="Doe"
                      />
                      {errors.lastName && (
                        <p className="text-sm text-destructive mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        className="mt-1.5"
                        placeholder="john@company.com"
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        className="mt-1.5"
                        placeholder="(555) 123-4567"
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Company Information */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Company Information</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="companyName">Company Name *</Label>
                      <Input
                        id="companyName"
                        {...register("companyName")}
                        className="mt-1.5"
                        placeholder="ABC Construction"
                      />
                      {errors.companyName && (
                        <p className="text-sm text-destructive mt-1">{errors.companyName.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="jobTitle">Job Title *</Label>
                      <Input
                        id="jobTitle"
                        {...register("jobTitle")}
                        className="mt-1.5"
                        placeholder="Project Manager"
                      />
                      {errors.jobTitle && (
                        <p className="text-sm text-destructive mt-1">{errors.jobTitle.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="industry">Industry *</Label>
                      <Input
                        id="industry"
                        {...register("industry")}
                        className="mt-1.5"
                        placeholder="Commercial Construction"
                      />
                      {errors.industry && (
                        <p className="text-sm text-destructive mt-1">{errors.industry.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="address">Company Address (Optional)</Label>
                      <Input
                        id="address"
                        {...register("address")}
                        className="mt-1.5"
                        placeholder="123 Main St, Denver, CO 80202"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="message">Message / Materials Needed *</Label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        className="mt-1.5 min-h-[120px]"
                        placeholder="Please describe your project or list the materials you need..."
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    {/* File Upload */}
                    <div>
                      <Label htmlFor="file">Upload Quote or BOM (PDF only, max 10MB)</Label>
                      <div className="mt-1.5">
                        <label
                          htmlFor="file"
                          className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-input rounded-lg cursor-pointer bg-background hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-8 h-8 text-muted-foreground mb-2" />
                            {selectedFile ? (
                              <p className="text-sm text-accent font-medium">{selectedFile.name}</p>
                            ) : (
                              <>
                                <p className="text-sm text-muted-foreground">
                                  <span className="font-medium text-accent">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">PDF files only (max 10MB)</p>
                              </>
                            )}
                          </div>
                          <input
                            id="file"
                            type="file"
                            accept=".pdf"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                        </label>
                        {fileError && (
                          <p className="text-sm text-destructive mt-1">{fileError}</p>
                        )}
                        <p className="text-xs text-muted-foreground mt-2">
                          Have a supplier quote? Upload it for faster turnaround!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full bg-accent hover:bg-orange-dark text-accent-foreground font-semibold py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Quote Request"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteFormSection;
