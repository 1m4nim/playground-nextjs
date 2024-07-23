import { ReactNode } from "react";
import styles from "./index.module.css";

type Props = {
  href: string;
  children: ReactNode;
};

export default function Button({ href, children }: Props) {
  return (
    <a href={href} className={styles.button}>
      {children}
    </a>
  );
}
