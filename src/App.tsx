import { useState } from "react";
import { Switch, Route } from "wouter";
import { Analytics } from "@vercel/analytics/react";
import LandingPage from "@/pages/LandingPage";
import DeleteAccountPage from "@/pages/DeleteAccountPage";
import FormPage from "@/pages/FormPage";
import NotFoundPage from "@/pages/NotFoundPage";
import IntroAnimation from "@/components/IntroAnimation";

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <>
      <IntroAnimation onComplete={() => setIntroFinished(true)} />
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/form" component={FormPage} />
        <Route path="/delete-account" component={DeleteAccountPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Analytics />
    </>
  );
}
