"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function CustomLink({ tag, children, lang, className, ...p }) {
  const Tag = tag || Link;
  const pathname = usePathname();
  const [cls, setCls] = useState("");

  useEffect(() => {
    if (p.href == pathname || (pathname == "/" && (p.href == "/en" || p.href == "/ar"))) setCls("active");
    else setCls("");
  }, [pathname]);

  return (
    <Tag className={`${cls} ${className}`} {...p}>
      {children}
    </Tag>
  );
}
