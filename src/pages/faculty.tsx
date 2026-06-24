import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const FACULTY = [
  { id: 1, name: "Dr. Arvind Kumar", dept: "Computer Science", role: "HOD", tags: ["AI", "Machine Learning"], color: "bg-red-500" },
  { id: 2, name: "Prof. Meera Reddy", dept: "Computer Science", role: "Associate Prof.", tags: ["Data Structures", "Algorithms"], color: "bg-blue-500" },
  { id: 3, name: "Dr. S. N. Rao", dept: "Business", role: "HOD", tags: ["Finance", "Economics"], color: "bg-green-500" },
  { id: 4, name: "Prof. Kavita Jain", dept: "Business", role: "Asst. Prof.", tags: ["Marketing", "HR"], color: "bg-yellow-500" },
  { id: 5, name: "Dr. Vikram Singh", dept: "Engineering", role: "HOD", tags: ["Robotics", "IoT"], color: "bg-purple-500" },
  { id: 6, name: "Prof. Anjali Desai", dept: "Engineering", role: "Associate Prof.", tags: ["Circuit Design", "Signals"], color: "bg-pink-500" },
  { id: 7, name: "Dr. Rajesh Sharma", dept: "Sciences", role: "HOD", tags: ["Quantum Physics", "Optics"], color: "bg-indigo-500" },
  { id: 8, name: "Prof. Neha Gupta", dept: "Sciences", role: "Asst. Prof.", tags: ["Organic Chemistry", "Polymers"], color: "bg-teal-500" },
  { id: 9, name: "Dr. Ramesh Patel", dept: "Arts", role: "HOD", tags: ["Modern History", "Literature"], color: "bg-orange-500" },
  { id: 10, name: "Prof. Sneha Iyer", dept: "Computer Science", role: "Asst. Prof.", tags: ["Web Dev", "Cloud"], color: "bg-cyan-500" },
];

const DEPARTMENTS = ["All", "Computer Science", "Business", "Engineering", "Sciences", "Arts"];

export default function Faculty() {
  const [activeDept, setActiveDept] = useState("All");

  const filteredFaculty = activeDept === "All" ? FACULTY : FACULTY.filter(f => f.dept === activeDept);

  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Distinguished Faculty</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Learn from industry experts, dedicated researchers, and passionate educators.</p>
        </div>

        <div className="flex justify-center mb-12 overflow-x-auto pb-4">
          <Tabs value={activeDept} onValueChange={setActiveDept} className="w-full max-w-3xl">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 h-auto p-1">
              {DEPARTMENTS.map(dept => (
                <TabsTrigger key={dept} value={dept} className="text-xs md:text-sm py-2">
                  {dept === "All" ? "All Depts" : dept.split(' ')[0]}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFaculty.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow overflow-hidden group">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-background shadow-md">
                    <AvatarFallback className={`${f.color} text-white text-2xl font-bold`}>
                      {f.name.split(' ').map(n => n[0]).join('').replace('.', '').substring(0,2)}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{f.name}</h3>
                  <p className="text-sm font-medium text-primary mb-1">{f.role}</p>
                  <p className="text-xs text-muted-foreground mb-4">{f.dept} Department</p>
                  <div className="flex flex-wrap justify-center gap-1">
                    {f.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-[10px] font-normal px-2 py-0">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
