import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Clock, GraduationCap, ChevronRight } from "lucide-react";
import { Link } from "wouter";

const ALL_COURSES = [
  { id: 1, title: "B.Tech in Computer Science", category: "UG", duration: "4 Years", eligibility: "10+2 with PCM (Min 60%)", desc: "Advanced engineering program focusing on software development, AI, and systems design." },
  { id: 2, title: "BCA (Bachelor of Computer Applications)", category: "UG", duration: "3 Years", eligibility: "10+2 Any Stream (Min 50%)", desc: "Comprehensive foundation in computer applications, programming languages, and IT management." },
  { id: 3, title: "BBA (Bachelor of Business Administration)", category: "UG", duration: "3 Years", eligibility: "10+2 Any Stream (Min 50%)", desc: "Core business management principles, marketing, finance, and entrepreneurial skills." },
  { id: 4, title: "MBA (Master of Business Administration)", category: "PG", duration: "2 Years", eligibility: "Graduation (Min 50%) + Entrance", desc: "Advanced leadership and management program with dual specializations available." },
  { id: 5, title: "M.Tech in Data Science", category: "PG", duration: "2 Years", eligibility: "B.Tech/BE (Min 60%) + GATE", desc: "Specialized post-graduate degree in machine learning, big data, and statistical analysis." },
];

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("ALL");

  const filteredCourses = ALL_COURSES.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(searchTerm.toLowerCase()) || c.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === "ALL" || c.category === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Academic Programs</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Explore our range of undergraduate and postgraduate courses designed to build careers.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              placeholder="Search courses..." 
              className="pl-10 h-12 text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Tabs defaultValue="ALL" className="w-full md:w-auto" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 md:w-[400px]">
              <TabsTrigger value="ALL">All Programs</TabsTrigger>
              <TabsTrigger value="UG">Undergraduate</TabsTrigger>
              <TabsTrigger value="PG">Postgraduate</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="h-full flex flex-col hover:border-primary/50 transition-colors shadow-sm">
                  <CardHeader>
                    <div className="text-xs font-bold text-primary mb-2 px-2 py-1 bg-primary/10 w-fit rounded">{course.category}</div>
                    <CardTitle className="text-xl leading-tight">{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground mb-6 line-clamp-3">{course.desc}</p>
                    <div className="space-y-2 text-sm font-medium">
                      <div className="flex items-center gap-2 text-foreground/80">
                        <Clock className="w-4 h-4 text-primary" /> {course.duration}
                      </div>
                      <div className="flex items-center gap-2 text-foreground/80">
                        <GraduationCap className="w-4 h-4 text-primary" /> {course.eligibility}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button className="w-full" variant="outline" asChild>
                      <Link href="/admissions">Apply Now <ChevronRight className="w-4 h-4 ml-1" /></Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-muted-foreground">
              No courses found matching your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
