import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function About() {
  return (
    <div className="py-12 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Zebra College</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Founded with a vision to redefine higher education, Zebra College stands as a beacon of academic excellence, research innovation, and holistic development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <Card className="bg-primary/5 border-none shadow-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-foreground/80 leading-relaxed">
                To empower students with cutting-edge knowledge, critical thinking skills, and ethical values, enabling them to become leaders and innovators in their respective fields.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-accent/5 border-none shadow-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-accent mb-4">Our Vision</h2>
              <p className="text-foreground/80 leading-relaxed">
                To be a globally recognized institution that fosters an environment of continuous learning, groundbreaking research, and inclusive community engagement.
              </p>
            </CardContent>
          </Card>
        </div>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">History & Milestones</h2>
          <div className="space-y-8 border-l-2 border-primary/20 ml-4 md:ml-0 md:pl-0 md:border-none relative">
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-primary/20 -translate-x-1/2"></div>
            {[
              { year: "2005", title: "Foundation", desc: "Zebra College established with 3 undergraduate programs." },
              { year: "2010", title: "Campus Expansion", desc: "Inauguration of the state-of-the-art engineering block and library." },
              { year: "2015", title: "A+ Accreditation", desc: "Awarded the highest grade by the National Education Council." },
              { year: "2020", title: "Global Partnerships", desc: "Signed MoUs with 15 international universities for exchange programs." },
              { year: "2024", title: "Innovation Hub", desc: "Launched a dedicated startup incubation center with seed funding." }
            ].map((milestone, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-center md:justify-between flex-col md:flex-row ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="md:w-[45%] pl-8 md:pl-0">
                  <Card>
                    <CardContent className="p-6">
                      <span className="text-primary font-bold text-xl mb-2 block">{milestone.year}</span>
                      <h3 className="font-bold text-lg mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground text-sm">{milestone.desc}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-[-5px] md:left-1/2 w-3 h-3 bg-primary rounded-full md:-translate-x-1/2 mt-6 md:mt-0"></div>
                <div className="hidden md:block w-[45%]"></div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <Card className="overflow-hidden border-none shadow-lg bg-card">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-muted flex items-center justify-center p-8">
                <Avatar className="w-48 h-48 border-4 border-white shadow-xl">
                  <AvatarFallback className="text-4xl bg-primary text-white">DR</AvatarFallback>
                </Avatar>
              </div>
              <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-2">Principal's Message</h2>
                <p className="text-primary font-medium mb-6">Dr. R.K. Sharma</p>
                <blockquote className="text-lg text-muted-foreground italic leading-relaxed border-l-4 border-primary pl-4">
                  "Education is not the learning of facts, but the training of the mind to think. At Zebra College, we provide an ecosystem where curiosity is nurtured, ideas are born, and potential is realized. We welcome you to join our vibrant community and shape a brilliant future."
                </blockquote>
              </div>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-10">Accreditations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map(i => (
              <Card key={i} className="text-center p-6 border-dashed border-2 hover:border-primary transition-colors cursor-default">
                <div className="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center mb-4 text-muted-foreground">Seal</div>
                <h3 className="font-bold text-sm">National Board of Education Level {i}</h3>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
