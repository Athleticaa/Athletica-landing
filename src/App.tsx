import { useState } from "react";
import { Switch, Route } from "wouter";
import LandingPage from "@/pages/LandingPage";
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
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}
