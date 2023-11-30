"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Music",
    title: "Generation",
    description: "Our AI makes music that's so catchy, even Mozart would say, 'That's a symphony I wish I wrote.'",
  },
  {
    name: "Image",
    title: "Generation",
    description: "Our AI's images are so stunning, they make other pixels jealous.",
  },
  {
    name: "Video",
    title: "Generation",
    description: "Our videos are so good, even Hollywood wants our AI to sign autographs.",
  },
  {
    name: "Code",
    title: "Generation",
    description: "The best in class, definitely worth the premium subscription!",
  },
  {
    name: "Conversation",
    title: "Generation",
    description: "Chatting with our AI: because talking to humans is so last season.",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}