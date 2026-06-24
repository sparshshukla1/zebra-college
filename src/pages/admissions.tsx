import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, FileText, ClipboardList, UserCheck } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  course: z.string().min(1, "Please select a course."),
  message: z.string().optional(),
});

export default function Admissions() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Inquiry Submitted",
      description: "We've received your details. Our admissions team will contact you shortly.",
    });
    form.reset();
  }

  return (
    <div className="py-12 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Admissions 2025</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Your journey to excellence begins here. Review our process and submit your inquiry.</p>
        </div>

        {/* Timeline Process */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold text-center mb-10">Admission Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: FileText, title: "1. Application", desc: "Submit online form with basic details." },
              { icon: ClipboardList, title: "2. Document Verif.", desc: "Upload academic transcripts & ID proofs." },
              { icon: UserCheck, title: "3. Interview/Test", desc: "Clear course-specific eligibility criteria." },
              { icon: CheckCircle2, title: "4. Enrollment", desc: "Pay fees and confirm your seat." },
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 z-10 relative">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
                {i < 3 && <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-border -z-0"></div>}
              </motion.div>
            ))}
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Required Documents</h2>
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {[
                      "Class 10th Marksheet & Certificate",
                      "Class 12th Marksheet & Certificate",
                      "Graduation Degree (for PG courses)",
                      "Transfer / Migration Certificate",
                      "Aadhar Card / Valid ID Proof",
                      "4 Passport Size Photographs"
                    ].map((doc, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-medium">
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Eligibility Overview</h2>
              <div className="overflow-x-auto rounded-lg border">
                <table className="w-full text-sm text-left">
                  <thead className="bg-muted text-muted-foreground">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Course Level</th>
                      <th className="px-4 py-3 font-semibold">Min. Requirement</th>
                      <th className="px-4 py-3 font-semibold">Entrance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="px-4 py-3 font-medium">B.Tech</td>
                      <td className="px-4 py-3">10+2 PCM (60%)</td>
                      <td className="px-4 py-3">JEE / State Entrance</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">BBA / BCA</td>
                      <td className="px-4 py-3">10+2 Any (50%)</td>
                      <td className="px-4 py-3">Merit Based</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">MBA</td>
                      <td className="px-4 py-3">Graduation (50%)</td>
                      <td className="px-4 py-3">CAT / MAT / Internal</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div>
            <Card className="shadow-lg border-primary/20 sticky top-24">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-2">Admission Inquiry</h2>
                <p className="text-muted-foreground text-sm mb-6">Fill out the form below and we will get back to you with the next steps.</p>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+91 9876543210" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="course"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Course of Interest</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a course" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="btech">B.Tech</SelectItem>
                              <SelectItem value="bca">BCA</SelectItem>
                              <SelectItem value="bba">BBA</SelectItem>
                              <SelectItem value="mba">MBA</SelectItem>
                              <SelectItem value="mtech">M.Tech</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message / Queries (Optional)</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Any specific questions..." className="resize-none" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" size="lg" className="w-full mt-4">Submit Inquiry</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
