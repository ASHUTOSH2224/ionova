import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { subscribeToWhitepaperKit } from '@/lib/kit';

const INITIAL_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
};

interface WhitepaperDownloadDialogProps {
  buttonClassName?: string;
  buttonStyle?: React.CSSProperties;
}

export function WhitepaperDownloadDialog({
  buttonClassName = 'btn btn-outline btn-lg',
  buttonStyle = { borderColor: 'rgba(255,255,255,0.25)', color: '#fff' },
}: WhitepaperDownloadDialogProps) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const onInputChange = (field: keyof typeof INITIAL_FORM, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await subscribeToWhitepaperKit(form);
      toast({
        title: 'Thank you',
        description: 'Your request has been submitted. We will send the whitepaper to your email.',
      });
      setForm(INITIAL_FORM);
      setOpen(false);
    } catch {
      toast({
        variant: 'destructive',
        title: 'Submission failed',
        description: 'Something went wrong. Please try again.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <button
        type="button"
        className={buttonClassName}
        style={buttonStyle}
        onClick={() => setOpen(true)}
      >
        Download Whitepaper
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Download Whitepaper</DialogTitle>
            <DialogDescription>
              Enter your details to receive the whitepaper. All fields are required.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="whitepaper-firstName">First name *</Label>
                <Input
                  id="whitepaper-firstName"
                  required
                  value={form.firstName}
                  onChange={(e) => onInputChange('firstName', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="whitepaper-lastName">Last name *</Label>
                <Input
                  id="whitepaper-lastName"
                  required
                  value={form.lastName}
                  onChange={(e) => onInputChange('lastName', e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="whitepaper-email">Email *</Label>
              <Input
                id="whitepaper-email"
                type="email"
                required
                value={form.email}
                onChange={(e) => onInputChange('email', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="whitepaper-company">Company name *</Label>
              <Input
                id="whitepaper-company"
                required
                value={form.company}
                onChange={(e) => onInputChange('company', e.target.value)}
              />
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Submit'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
