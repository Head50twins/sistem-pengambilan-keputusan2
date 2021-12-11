import { useState } from "react";
import Intro from "./Intro";

export default function Home() {
  const [slide, setSlide] = useState(0);

  console.log("slide: ", slide);

  return (
    <div className="bg-image h-full text">
      <Intro slide={slide} setSlide={setSlide} />
    </div>
  );
}
