import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Calendar, Library, Coffee, Beaker, Home as HomeIcon } from "lucide-react";

export default function CampusLife() {
  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Campus Life</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Experience a vibrant community that goes far beyond the classroom walls.</p>
        </div>

        {/* Facilities */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold mb-8">World-Class Facilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: "Central Library", icon: Library },
              { label: "Modern Hostels", icon: HomeIcon },
              { label: "Cafeteria", icon: Coffee },
              { label: "Hi-Tech Labs", icon: Beaker },
              { label: "Sports Complex", icon: Trophy },
            ].map((facility, i) => (
              <Card key={i} className="text-center border-none shadow-sm bg-secondary/50 hover:bg-primary hover:text-white transition-colors group cursor-default">
                <CardContent className="p-6">
                  <facility.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:text-white transition-colors" />
                  <span className="font-semibold text-sm">{facility.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          {/* Clubs */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Users className="text-primary"/> Student Clubs</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Coding Club", "Robotics Society", "Debate Forum", "Cultural Committee",
                "Photography Club", "Entrepreneurship Cell", "Eco Club", "Sports Council"
              ].map((club, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:border-primary/50 transition-colors">
                  <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary text-xs font-bold shrink-0">
                    {club.substring(0, 2).toUpperCase()}
                  </div>
                  <span className="font-medium text-sm">{club}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Events Timeline */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Calendar className="text-primary"/> Annual Events</h2>
            <div className="space-y-4 border-l-2 border-border ml-3 pl-6">
              {[
                { name: "Zebraton (Tech Fest)", time: "February" },
                { name: "Cultural Convergence", time: "April" },
                { name: "Annual Sports Meet", time: "September" },
                { name: "Alumni Connect", time: "November" },
              ].map((event, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-primary ring-4 ring-background"></div>
                  <h3 className="font-bold">{event.name}</h3>
                  <p className="text-sm text-muted-foreground">{event.time}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
