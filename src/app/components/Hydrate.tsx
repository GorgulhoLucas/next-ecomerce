'use client';

import { ReactNode, useState, useEffect } from "react";

interface HydrateProps {
  children: ReactNode;
}

export default function Hydrate({ children }: HydrateProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Corrigido "True" para "true"
  }, []);

  return isMounted ? <>{children}</> : <span>carregando...</span>;
}
