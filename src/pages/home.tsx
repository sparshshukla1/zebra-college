import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { ChevronRight, GraduationCap, Users, Trophy, BookOpen, Quote } from "lucide-react";

function AnimatedCounter({ end, duration = 2 }: { end: number, duration?: number }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count}</span>;
}

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent text-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl pt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6"
          >
            Empowering Future Leaders Through Quality Education.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl font-medium text-white/90 mb-10 max-w-2xl mx-auto"
          >
            Join an ambitious academic community dedicated to innovation, research, and your personal growth.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 bg-white text-primary hover:bg-gray-100" asChild>
              <Link href="/admissions">Apply Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 border-white text-primary sm:text-white hover:bg-white/10 dark:text-white" asChild>
              <Link href="/courses">Explore Courses</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background -mt-12 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: GraduationCap, label: "Students", end: 10000, suffix: "+" },
              { icon: Users, label: "Faculty Members", end: 500, suffix: "+" },
              { icon: Trophy, label: "Placement Rate", end: 95, suffix: "%" },
              { icon: BookOpen, label: "Courses", end: 50, suffix: "+" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="border-none shadow-lg bg-card text-card-foreground">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <stat.icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-3xl font-bold mb-1"><AnimatedCounter end={stat.end} />{stat.suffix}</h3>
                    <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Featured Programs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Discover our industry-aligned curriculum designed to give you a competitive edge.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['B.Tech', 'BCA', 'BBA', 'MBA', 'M.Tech'].map((course, i) => (
              <motion.div
                key={course}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow border-border/50">
                  <div className="h-48 bg-primary/10 flex items-center justify-center p-6">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-2xl">{course.split('.')[0]}</div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{course}</h3>
                    <p className="text-muted-foreground mb-4 text-sm line-clamp-2">Comprehensive degree program focusing on practical skills, research, and industry applications.</p>
                    <Button variant="ghost" className="w-full justify-between hover:bg-primary/5 text-primary" asChild>
                      <Link href={`/courses?search=${course}`}>Learn More <ChevronRight className="w-4 h-4" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link href="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Choose Zebra College?</h2>
            <p className="text-lg text-muted-foreground">We don't just teach; we transform. Our holistic approach to education ensures you graduate ready for the real world.</p>
            <ul className="space-y-4">
              {[
                "Global Faculty with Industry Experience",
                "State-of-the-Art Laboratory Facilities",
                "Dedicated Incubation Center for Startups",
                "International Exchange Programs",
                "100% Placement Assistance"
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-foreground font-medium"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">✓</div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl bg-accent/20 aspect-square flex items-center justify-center p-6 text-center shadow-inner">
                <span className="font-bold text-lg text-accent">Modern<br/>Campus</span>
              </div>
              <div className="rounded-2xl bg-primary aspect-[4/3] flex items-center justify-center p-6 text-center text-white shadow-xl">
                <span className="font-bold text-xl">Top<br/>Ranked</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl bg-secondary aspect-[4/3] flex items-center justify-center p-6 text-center shadow-md">
                <span className="font-bold text-lg">Alumni<br/>Network</span>
              </div>
              <div className="rounded-2xl border-2 border-primary/20 aspect-square flex items-center justify-center p-6 text-center border-dashed">
                <span className="font-bold text-primary">Research<br/>Focused</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hear From Our Community</h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">Stories of transformation, growth, and success.</p>
          </div>
          
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
            {[
              { name: "Rahul S.", role: "B.Tech Student", quote: "The practical approach to learning at Zebra College completely changed my perspective on engineering." },
              { name: "Priya M.", role: "MBA Alumni", quote: "The placement cell was incredibly supportive. I secured my dream job before even graduating." },
              { name: "Mr. Sharma", role: "Parent", quote: "Seeing my daughter grow into a confident professional has been wonderful. The faculty is exceptional." },
              { name: "Ankit K.", role: "BCA Student", quote: "The coding clubs and hackathons keep the campus buzzing with energy. I love the tech culture here." },
              { name: "Mrs. Iyer", role: "Parent", quote: "Safety, academics, and extracurriculars - Zebra College strikes the perfect balance for students." }
            ].map((t, i) => (
              <Card key={i} className="min-w-[300px] md:min-w-[400px] snap-center bg-white/10 border-white/20 text-white backdrop-blur-sm">
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-white/30 mb-4" />
                  <p className="text-lg italic mb-6">"{t.quote}"</p>
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-sm text-white/70">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">Everything you need to know about admissions, campus life, and more.</p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "What is the admission process?", a: "The process involves an online application, followed by an entrance test/interview depending on the course. Visit our Admissions page for a detailed timeline." },
              { q: "Do you provide hostel facilities?", a: "Yes, we have separate, fully-equipped hostels for boys and girls with high-speed internet, mess facilities, and 24/7 security." },
              { q: "What is the average placement package?", a: "Our average placement package is 8.5 LPA, with the highest reaching 18 LPA across top tech and management firms." },
              { q: "Are scholarships available?", a: "Yes, we offer merit-based and need-based scholarships. Details are evaluated during the admission process." },
              { q: "What is the faculty-to-student ratio?", a: "We maintain a healthy 1:20 faculty-to-student ratio to ensure personalized attention and mentoring." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-secondary dark:bg-card border-y">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Stay Updated</h2>
          <p className="text-muted-foreground mb-8">Subscribe to our newsletter for the latest campus news, admission updates, and event announcements.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <Input type="email" placeholder="Enter your email address" className="flex-1" required />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
}
