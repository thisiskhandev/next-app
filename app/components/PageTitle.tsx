import { CSSProperties } from "react";

interface titleProps {
  title: string;
  styles?: string;
  isCenter?: boolean;
  classes?: string;
}

const PageTitle = ({ title, styles, isCenter, classes }: titleProps) => {
  const styleObject: CSSProperties = styles ? { ...JSON.parse(styles) } : {};
  return (
    <h1
      style={styleObject}
      className={
        "text-6xl font-bold py-[60px] " +
        (isCenter ? "flex justify-center text-center" : "") +
        (classes ? " " + classes : "")
      }
    >
      {title}
    </h1>
  );
};

export default PageTitle;
