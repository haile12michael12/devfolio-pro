import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Mail, MapPin, Phone, CheckCircle, Loader2 } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FadeIn } from "@/components/animations/FadeIn";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
  budget: z.string().optional()
});

type ContactFormData = z.infer<typeof contactSchema>;

const budgetOptions = [
  { value: "", label: "Select a budget range" },
  { value: "under-5k", label: "Under $5,000" },
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "50k+", label: "$50,000+" }
];

interface ContactFormProps {
  showTitle?: boolean;
  compact?: boolean;
}

export function ContactForm({ showTitle = true, compact = false }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
      budget: ""
    }
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      reset();
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon."
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <section className="relative py-20 md:py-32 bg-slate-950">
        <Container size={compact ? "narrow" : "default"}>
          <div className="flex flex-col items-center justify-center text-center py-16">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
              <CheckCircle className="h-8 w-8 text-emerald-400" />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-slate-50">Message Sent!</h3>
            <p className="mb-6 text-slate-400">
              Thank you for reaching out. I'll get back to you within 24-48 hours.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="rounded-full border-slate-700 text-slate-300"
              data-testid="button-send-another"
            >
              Send Another Message
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="relative py-20 md:py-32 bg-slate-950" data-testid="section-contact">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/10 via-transparent to-transparent" />
      
      <Container className="relative z-10">
        {showTitle && (
          <FadeIn>
            <SectionTitle
              badge="Get in Touch"
              title="Let's Work Together"
              subtitle="Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together."
            />
          </FadeIn>
        )}

        <div className={`grid gap-12 ${compact ? "" : "lg:grid-cols-5"}`}>
          {!compact && (
            <FadeIn delay={0.1} className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h3 className="mb-4 text-xl font-semibold text-slate-50">
                    Contact Information
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    Ready to start your next project? Get in touch and let's discuss how I can help you achieve your goals.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-300">Email</div>
                      <a href="mailto:hello@alexrivera.com" className="text-slate-400 hover:text-slate-200">
                        hello@alexrivera.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-300">Phone</div>
                      <span className="text-slate-400">+1 (555) 123-4567</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-300">Location</div>
                      <span className="text-slate-400">Los Angeles, CA</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                  <h4 className="mb-2 font-medium text-slate-50">Response Time</h4>
                  <p className="text-sm text-slate-400">
                    I typically respond to inquiries within 24-48 hours during business days.
                  </p>
                </div>
              </div>
            </FadeIn>
          )}

          <FadeIn delay={0.2} className={compact ? "" : "lg:col-span-3"}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-300">
                    Name <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="border-slate-700 bg-slate-900 text-slate-50 placeholder:text-slate-500 focus:border-indigo-500"
                    {...register("name")}
                    data-testid="input-name"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-400">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-300">
                    Email <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="border-slate-700 bg-slate-900 text-slate-50 placeholder:text-slate-500 focus:border-indigo-500"
                    {...register("email")}
                    data-testid="input-email"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-400">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-slate-300">
                    Company
                  </Label>
                  <Input
                    id="company"
                    placeholder="Your company"
                    className="border-slate-700 bg-slate-900 text-slate-50 placeholder:text-slate-500 focus:border-indigo-500"
                    {...register("company")}
                    data-testid="input-company"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-slate-300">
                    Budget Range
                  </Label>
                  <select
                    id="budget"
                    className="flex h-10 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    {...register("budget")}
                    data-testid="select-budget"
                  >
                    {budgetOptions.map((option) => (
                      <option key={option.value} value={option.value} className="bg-slate-900">
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-slate-300">
                  Subject <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="subject"
                  placeholder="What's this about?"
                  className="border-slate-700 bg-slate-900 text-slate-50 placeholder:text-slate-500 focus:border-indigo-500"
                  {...register("subject")}
                  data-testid="input-subject"
                />
                {errors.subject && (
                  <p className="text-sm text-red-400">{errors.subject.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-300">
                  Message <span className="text-red-400">*</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="resize-none border-slate-700 bg-slate-900 text-slate-50 placeholder:text-slate-500 focus:border-indigo-500"
                  {...register("message")}
                  data-testid="textarea-message"
                />
                {errors.message && (
                  <p className="text-sm text-red-400">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={mutation.isPending}
                className="w-full rounded-full bg-indigo-600 py-6 text-base font-medium text-white hover:bg-indigo-500 sm:w-auto sm:px-8"
                data-testid="button-submit-contact"
              >
                {mutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
