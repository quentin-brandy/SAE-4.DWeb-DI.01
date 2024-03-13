import { cva } from "class-variance-authority";
const base = "";

const button = cva(base, {
    variants: {
      intent: {
        try: [
          "font-Figtree",
          "bg-button",
          "text-white",
          "border-transparent",
          "hover:bg-buttonrv",
        ],
      },
      size: {
        small: ["text-xs", "py-2", "px-4" ,"md:text-base"],
      },
      padding: {
        try: ["py-1", "px-2"],
        watch: ["py-4", "px-16"],
      },
    },
    compoundVariants: [{ intent: "try", size: "medium", padding:"try", class: "uppercase" }],
    defaultVariants: {
      intent: "try",
      size: "small",
      padding: "try",
    },
  });

  export default function Button({ intent, size, padding , className, ...rest }) {
    return <button {...rest} className={button({ intent, size, padding , className })} />;
  }
