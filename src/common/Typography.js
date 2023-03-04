import React from "react";

const tags = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  body: "p",
  "body-small": "p",
  small: "span",
};

const sizes = {
  h1: "text-3xl font-black sm:text-5xl",
  h2: "text-2xl font-bold sm:text-3xl",
  h3: "text-xl font-bold md:text-base lg:text-lg xl:text-xl 2xl:text-2xl",
  h4: "text-base font-bold sm:text-lg",
  h5: "text-md font-light sm:text-base",
  body: "text-sm sm:text-md",
  "body-small": "text-xs sm:text-sm",
  small: "text-xs sm:text-xs",
};

const Typography = ({ variant, children, className, as, style }) => {
  const sizeClasses = sizes[variant];
  const Tag = as || tags[variant];
  return (
    <Tag className={`${sizeClasses} ${className}`} style={style}>
      {children}
    </Tag>
  );
};

export default Typography;
