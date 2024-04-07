"use client";
import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";

const TypeWriter = ({
  pauseDuration = 1000,
  strings = ["Decrypt Inscrutable", "Read Unreadable"],
}) => {
  const TextRef = useRef();

  useEffect(() => {
    if (TextRef.current) {
      const typewriter = new Typewriter(TextRef.current, {
        autoStart: true,
      });

      strings.forEach((str, index) => {
        typewriter
          .pauseFor(index === 0 ? 0 : pauseDuration)
          .deleteAll()
          .typeString(str);
      });

      typewriter.start();
    }
  }, []);

  return <span ref={TextRef}></span>;
};

export default TypeWriter;
