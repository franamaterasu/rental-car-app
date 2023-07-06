import { FaCarCrash } from "react-icons/fa";
import "./empty-state.css";

interface Props {
  title: string;
  theme: string;
}

export const EmptyState = ({ title, theme }: Props): JSX.Element => {
  return (
    <section className={`empty-state ${theme === "dark" ? "dark" : "light"}`}>
      <FaCarCrash className="empty-state__icon" />
      <h3 className="empty-state__title">{title}</h3>
    </section>
  );
};
