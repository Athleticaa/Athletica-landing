import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white flex flex-col items-center justify-center p-4 text-center">
      <h1 className="font-['Cervino'] font-black text-6xl sm:text-8xl text-[#5A0BFB] mb-4">
        404
      </h1>
      <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
      <p className="text-[#8B8B9E] text-sm max-w-sm mb-6">
        The page you are looking for does not exist or has been moved.
      </p>
      <Button asChild variant="secondary">
        <a href="/">
          <ArrowLeft className="mr-2 w-4 h-4" /> Return to Home
        </a>
      </Button>
    </div>
  );
}
