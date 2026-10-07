import { useEffect } from "react";
import { Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const email = "athleticaaapp@gmail.com";
const requestHref = `mailto:${email}?subject=${encodeURIComponent("Athletica Account Deletion Request")}`;

export default function DeleteAccountPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Delete Your Athletica Account";
    const updates = [
      { selector: 'meta[name="description"]', tag: "meta", key: "name", value: "description", attribute: "content", content: "Learn how to request deletion of your Athletica account." },
      { selector: 'link[rel="canonical"]', tag: "link", key: "rel", value: "canonical", attribute: "href", content: "https://www.athleticaapp.com/delete-account" },
    ].map(({ selector, tag, key, value, attribute, content }) => {
      const existing = document.head.querySelector(selector);
      const element = existing ?? document.createElement(tag);
      const previous = element.getAttribute(attribute);
      element.setAttribute(key, value);
      element.setAttribute(attribute, content);
      if (!existing) document.head.appendChild(element);
      return () => {
        if (!existing) element.remove();
        else if (previous === null) element.removeAttribute(attribute);
        else element.setAttribute(attribute, previous);
      };
    });
    return () => {
      document.title = previousTitle;
      updates.forEach((restore) => restore());
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white flex flex-col justify-between">
      <Navbar landingPageHref="/" />
      <main className="pt-32 pb-20 flex-1 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="font-['Cervino'] font-black text-4xl sm:text-5xl tracking-tight mb-5">
              Delete Your Athletica Account
            </h1>
            <p className="text-[#8B8B9E] text-base sm:text-lg leading-relaxed">
              If you would like to delete your Athletica account, you can request account deletion by contacting us by email.
            </p>
          </div>
          <section aria-label="Account deletion instructions" className="glass rounded-2xl p-6 sm:p-9">
            <p className="text-[#8B8B9E] leading-relaxed mb-5">
              Send your account deletion request to{" "}
              <a href={`mailto:${email}`} className="text-white hover:text-[#9D66FF] underline underline-offset-4 break-words">{email}</a>{" "}
              using the email address associated with your Athletica account. Please include that email address in your request.
            </p>
            <p className="text-[#8B8B9E] leading-relaxed mb-8">
              Please do not include your password or other sensitive credentials in the email.
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto px-4 sm:px-8 text-sm sm:text-base">
              <a href={requestHref}><Mail aria-hidden="true" className="mr-2 w-5 h-5 shrink-0" />Request Account Deletion</a>
            </Button>
            <p className="text-[#8B8B9E] text-xs leading-relaxed mt-4">
              This button opens your email client to send a request. Your account is not deleted by clicking the button.
            </p>
          </section>
          <section className="mt-10 text-center" aria-labelledby="deletion-support">
            <h2 id="deletion-support" className="text-xl font-bold mb-3">Need help?</h2>
            <p className="text-[#8B8B9E] text-sm leading-relaxed">
              For questions or assistance with your account deletion request, contact{" "}
              <a href={`mailto:${email}`} className="text-white hover:text-[#9D66FF] underline underline-offset-4 break-words">{email}</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer landingPageHref="/" />
    </div>
  );
}
