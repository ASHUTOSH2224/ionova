import { useEffect, useState } from "react";
import { Building2, CheckCircle2, Send } from "lucide-react";
import { AppWrapper } from "@/components/AppWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { subscribeToReadinessAssessmentKit } from "@/lib/kit";

const volumeOptions = [
  { value: "<100k", label: "< 100k" },
  { value: "100k-1m", label: "100k - 1M" },
  { value: "1m-10m", label: "1M - 10M" },
  { value: "10m+", label: "10M+" },
];

const intentOptions = [
  { value: "claim-newsletter-offer", label: "Claim the newsletter offer" },
  { value: "evaluate-readiness", label: "Evaluate readiness" },
  { value: "start-pilot", label: "Start a pilot" },
  { value: "partner", label: "Partner (TMS / ERP vendor)" },
];

const emptyForm = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  jobTitle: "",
  volume: "",
  intent: "",
  utmSource: "",
  utmMedium: "",
  utmCampaign: "",
};

const ReadinessAssessmentFormContent = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFormData((prev) => ({
      ...prev,
      utmSource: params.get("utm_source") || "",
      utmMedium: params.get("utm_medium") || "",
      utmCampaign: params.get("utm_campaign") || "",
    }));
  }, []);

  const handleInputChange = (field: keyof typeof emptyForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await subscribeToReadinessAssessmentKit(formData);
      setIsSubmitted(true);
      toast({
        title: "Assessment request received",
        description: "We will reply within one business day to schedule your assessment.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission failed",
        description: "There was a problem submitting your request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-[6px] border border-border bg-card p-8 text-center shadow-lg">
        <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-teal-500" />
        <h3 className="mb-2 text-xl font-semibold italic text-navy-950">Request received</h3>
        <p className="mx-auto max-w-md text-sm leading-6 text-text-muted">
          Thanks. We will reply within one business day to schedule your assessment and agree the sample scope.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-[6px] border border-border bg-card p-6 shadow-lg lg:p-7">
      <div className="mb-6 flex items-center gap-3">
        <Building2 className="h-6 w-6 text-blue-500" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-500">
            Book Your Assessment
          </p>
          <h2 className="text-lg font-semibold italic text-navy-950">Find out your number</h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="readinessFirstName">First Name *</Label>
            <Input
              id="readinessFirstName"
              required
              autoComplete="given-name"
              value={formData.firstName}
              onChange={(event) => handleInputChange("firstName", event.target.value)}
              className="mt-1.5 rounded-[6px]"
            />
          </div>
          <div>
            <Label htmlFor="readinessLastName">Last Name *</Label>
            <Input
              id="readinessLastName"
              required
              autoComplete="family-name"
              value={formData.lastName}
              onChange={(event) => handleInputChange("lastName", event.target.value)}
              className="mt-1.5 rounded-[6px]"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="readinessEmail">Work Email *</Label>
          <Input
            id="readinessEmail"
            type="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={(event) => handleInputChange("email", event.target.value)}
            className="mt-1.5 rounded-[6px]"
          />
        </div>

        <div>
          <Label htmlFor="readinessCompany">Company Name *</Label>
          <Input
            id="readinessCompany"
            required
            autoComplete="organization"
            value={formData.company}
            onChange={(event) => handleInputChange("company", event.target.value)}
            className="mt-1.5 rounded-[6px]"
          />
        </div>

        <div>
          <Label htmlFor="readinessJobTitle">Role</Label>
          <Input
            id="readinessJobTitle"
            value={formData.jobTitle}
            onChange={(event) => handleInputChange("jobTitle", event.target.value)}
            className="mt-1.5 rounded-[6px]"
          />
        </div>

        <div>
          <Label>Monthly Cross-Border Volume</Label>
          <Select
            value={formData.volume}
            onValueChange={(value) => handleInputChange("volume", value)}
          >
            <SelectTrigger className="mt-1.5 rounded-[6px]">
              <SelectValue placeholder="Select..." />
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
          <Label>I want to...</Label>
          <Select
            value={formData.intent}
            onValueChange={(value) => handleInputChange("intent", value)}
          >
            <SelectTrigger className="mt-1.5 rounded-[6px]">
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>
              {intentOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          type="submit"
          variant="hero"
          size="lg"
          className="w-full rounded-[999px] text-sm font-semibold"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            "Submitting..."
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Book my assessment
            </>
          )}
        </Button>

        <p className="text-center text-xs leading-5 text-[#8796A7]">
          No obligation. Report in five working days. Free 90-minute consultation. By submitting, you agree to our{" "}
          <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>.
        </p>
      </form>
    </div>
  );
};

const ReadinessAssessmentForm = () => (
  <AppWrapper>
    <ReadinessAssessmentFormContent />
  </AppWrapper>
);

export default ReadinessAssessmentForm;
