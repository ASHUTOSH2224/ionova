import { useState } from "react";
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
import { Send, Building2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { AppWrapper } from "@/components/AppWrapper";
import { subscribeToKit } from "@/lib/kit";

const volumeOptions = [
  { value: "<10k", label: "Less than 10,000" },
  { value: "10k-100k", label: "10,000 - 100,000" },
  { value: "100k+", label: "100,000+" },
  { value: "1M+", label: "1 Million+" },
];

const DemoFormContent = () => {
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
    <div className="rounded-[6px] border border-border bg-card p-6 shadow-xl lg:p-8">
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
  );
};

const DemoForm = () => (
  <AppWrapper>
    <DemoFormContent />
  </AppWrapper>
);

export default DemoForm;
