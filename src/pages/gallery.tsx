import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

const CATEGORIES = ["All", "Campus", "Events", "Sports", "Classroom", "Hostel"];

const GALLERY_ITEMS = [
  { id: 1, cat: "Campus", title: "Main Building" },
  { id: 2, cat: "Events", title: "Annual Fest 2024" },
  { id: 3, cat: "Sports", title: "Basketball Finals" },
  { id: 4, cat: "Classroom", title: "Lecture Hall A" },
  { id: 5, cat: "Hostel", title: "Boys Hostel Block" },
  { id: 6, cat: "Campus", title: "Central Library" },
  { id: 7, cat: "Events", title: "Tech Hackathon" },
  { id: 8, cat: "Sports", title: "Athletics Track" },
  { id: 9, cat: "Classroom", title: "Computer Lab 1" },
  { id: 10, cat: "Hostel", title: "Cafeteria Area" },
  { id: 11, cat: "Campus", title: "Research Wing" },
  { id: 12, cat: "Events", title: "Convocation Ceremony" },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems = activeTab === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter(i => i.cat === activeTab);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  
  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filteredItems.length);
    }
  };
  
  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Photo Gallery</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Take a visual tour of Zebra College and experience our campus life.</p>
        </div>

        <div className="flex justify-center mb-10 overflow-x-auto pb-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-3xl">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 h-auto p-1">
              {CATEGORIES.map(cat => (
                <TabsTrigger key={cat} value={cat} className="text-xs md:text-sm py-2">
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                key={item.id}
                className="group relative aspect-square bg-muted rounded-xl overflow-hidden cursor-pointer"
                onClick={() => openModal(index)}
              >
                {/* Placeholder solid color panel */}
                <div className="absolute inset-0 bg-primary/10 flex flex-col items-center justify-center text-primary/40 group-hover:bg-primary/20 transition-colors">
                  <ImageIcon className="w-12 h-12 mb-2" />
                  <span className="text-sm font-medium">{item.cat}</span>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-center">
                  <span className="text-white font-semibold text-lg">{item.title}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <Dialog open={selectedIndex !== null} onOpenChange={(open) => !open && closeModal()}>
          <DialogContent className="max-w-4xl bg-transparent border-none shadow-none p-0 flex flex-col items-center justify-center h-[80vh]">
            <DialogTitle className="sr-only">Image Gallery View</DialogTitle>
            <DialogDescription className="sr-only">Viewing enlarged image from gallery.</DialogDescription>
            {selectedIndex !== null && (
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <div className="w-full aspect-video md:aspect-[16/9] bg-secondary rounded-lg flex items-center justify-center relative shadow-2xl border-4 border-white/10 overflow-hidden">
                  <ImageIcon className="w-24 h-24 text-muted-foreground/30 absolute" />
                  <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-md">
                    <p className="font-bold">{filteredItems[selectedIndex].title}</p>
                    <p className="text-xs text-white/70">{filteredItems[selectedIndex].cat}</p>
                  </div>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 w-full pointer-events-none">
                  <Button variant="secondary" size="icon" className="rounded-full pointer-events-auto" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                  <Button variant="secondary" size="icon" className="rounded-full pointer-events-auto" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

      </div>
    </div>
  );
}
