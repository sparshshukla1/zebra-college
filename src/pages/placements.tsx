import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, TrendingUp, Building2, Star } from "lucide-react";

export default function Placements() {
  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Training & Placement</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Bridging the gap between academic learning and corporate expectations.</p>
        </div>

        {/* High-level stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { label: "Placement Rate", value: "95%", icon: TrendingUp },
            { label: "Highest Package", value: "18 LPA", icon: Star },
            { label: "Average Package", value: "8.5 LPA", icon: Briefcase },
            { label: "Recruiting Partners", value: "200+", icon: Building2 },
          ].map((stat, i) => (
            <Card key={i} className="border-none shadow-md bg-primary text-white text-center">
              <CardContent className="p-6">
                <stat.icon className="w-8 h-8 mx-auto mb-3 opacity-80" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-white/80">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Top Recruiters */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-10">Top Recruiting Companies</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["TCS", "Infosys", "Wipro", "Cognizant", "HCL", "Tech Mahindra", "IBM", "Accenture", "Capgemini", "Amazon", "Microsoft", "Google", "Deloitte", "Oracle"].map((company, i) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-6 py-3 bg-secondary dark:bg-card border rounded-full font-semibold text-sm hover:border-primary hover:text-primary transition-colors cursor-default shadow-sm"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-10">Student Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Aditi Sharma", course: "B.Tech Computer Science", company: "Microsoft", package: "18 LPA" },
              { name: "Vikram Singh", course: "MBA Finance", company: "Deloitte", package: "14 LPA" },
              { name: "Neha Gupta", course: "BCA", company: "TCS Digital", package: "7.5 LPA" },
              { name: "Rohan Patel", course: "B.Tech Electronics", company: "Tech Mahindra", package: "8 LPA" },
            ].map((story, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xl shrink-0">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{story.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{story.course}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-secondary px-3 py-1 rounded text-xs font-semibold">Placed at {story.company}</span>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded text-xs font-semibold">Package: {story.package}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Gallery Placeholder */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-10">Placement Drive Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center border text-muted-foreground text-sm font-medium">
                Placement Photo {i}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
