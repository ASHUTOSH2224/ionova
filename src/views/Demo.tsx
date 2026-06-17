import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Shield,
  CheckCircle,
  Send,
  Clock,
  Building2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const volumeOptions = [
  { value: "<10k", label: "Less than 10,000" },
  { value: "10k-100k", label: "10,000 - 100,000" },
  { value: "100k+", label: "100,000+" },
  { value: "1M+", label: "1 Million+" },
];

import { AppWrapper } from "@/components/AppWrapper";
import { subscribeToKit } from "@/lib/kit";

const DemoContent = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    volume: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await subscribeToKit(formData);

      toast({
        title: "Demo Request Submitted!",
        description: "Our team will reach out within 24 hours to schedule your demo.",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        jobTitle: "",
        volume: "",
        message: "",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "There was a problem submitting your request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      <section className="bg-surface-2" style={{ paddingTop: '8rem', paddingBottom: 'var(--section-padding-y)' }}>
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-10 lg:grid-cols-2">
              {/* Left - Content */}
              <div>
                <h1 className="mb-4 font-bold text-navy-950">
                  See ioNova in Action.
                </h1>
                <p className="mb-8 text-lg text-text-muted">
                  We can deploy a production-ready address resolution engine in as little as 2–4 weeks.
                </p>

                {/* Trust signals */}
                <div className="mb-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/10">
                      <Shield className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy-950">ISO 27001 Certified</p>
                      <p className="text-sm text-text-muted">Bank-grade security standards</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-500/10">
                      <CheckCircle className="h-5 w-5 text-teal-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy-950">SOC 2 Type II Compliant</p>
                      <p className="text-sm text-text-muted">Enterprise-ready compliance</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400/10">
                      <Clock className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy-950">2&#8211;4 Week Implementation</p>
                      <p className="text-sm text-text-muted">Faster than in-house solutions</p>
                    </div>
                  </div>
                </div>

                {/* What to expect */}
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="mb-4 font-semibold text-navy-950">What to expect:</h3>
                  <ul className="space-y-2 text-sm text-text-muted">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                      <span>30-minute personalized demo of the platform</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                      <span>Custom ROI analysis for your organization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                      <span>Technical deep-dive with our engineering team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                      <span>Implementation timeline and pricing discussion</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right - Form */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-xl lg:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <Building2 className="h-6 w-6 text-blue-500" />
                  <h2 className="text-xl font-semibold text-navy-950">Schedule Your Demo</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="mt-1.5"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Work Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="mt-1.5"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="mt-1.5"
                    />
                  </div>

                  <div>
                    <Label htmlFor="jobTitle">Job Title</Label>
                    <Input
                      id="jobTitle"
                      value={formData.jobTitle}
                      onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                      className="mt-1.5"
                    />
                  </div>

                  <div>
                    <Label>Estimated Monthly Payment Volume</Label>
                    <Select
                      value={formData.volume}
                      onValueChange={(value) => handleInputChange("volume", value)}
                    >
                      <SelectTrigger className="mt-1.5">
                        <SelectValue placeholder="Select volume range" />
                      </SelectTrigger>
                      <SelectContent>
                        {volumeOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Specific Challenges / Message</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="mt-1.5"
                      placeholder="Tell us about your current challenges with address data..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Schedule My Demo
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-text-muted">
                    By submitting, you agree to our{" "}
                    <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>
                    {" "}and{" "}
                    <a href="/terms-of-service" className="text-blue-600 hover:underline">Terms of Service</a>.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const Demo = () => (
  <AppWrapper>
    <DemoContent />
  </AppWrapper>
);

export default Demo;
