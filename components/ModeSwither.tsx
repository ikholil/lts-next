"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Moon from "./icons/Moon";
import Sun from "./icons/Sun";

const ModeSwither = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => (theme == "dark" ? setTheme("light") : setTheme("dark"));

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <button onClick={toggleTheme}>{theme == "dark" ? <Moon /> : <Sun />}</button>;
};

export default ModeSwither;
