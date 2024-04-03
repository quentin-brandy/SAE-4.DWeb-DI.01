import { cva } from "class-variance-authority";
const base = "";

const button = cva(base, {
  variants: {
    intent: {
      try: [
        "bg-button",
        "text-white",
        "border-transparent",
        "hover:bg-buttonrv",
      ],
      play: ["text-white", "border-transparent"],
    },
    size: {
      small: ["text-xs", "py-2", "px-4", "md:text-base"],
    },
    padding: {
      try: ["py-1", "px-2"],
      watch: ["py-4", "px-10"],
    },
  },
  compoundVariants: [
    { intent: "try", size: "medium", padding: "try", class: "uppercase" },
  ],
  defaultVariants: {
    intent: "try",
    size: "small",
    padding: "try",
  },
});

export default function Button({ intent, size, padding, className, ...rest }) {
  return (
    <button
      {...rest}
      className={button({ intent, size, padding, className })}
    />
  );
}

export function PlayButton({ intent, size, padding, className, ...rest }) {
  return (
    <div className="flex cursor-pointer items-center  justify-center bg-button pl-5 hover:bg-buttonrv">
      <img className="h-3" src="/img/arrow_watch.svg" alt="" />
      <button
        {...rest}
        className={button({ intent, size, padding, className })}
      />
    </div>
  );
}
