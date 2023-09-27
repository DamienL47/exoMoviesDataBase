import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar(props) {
  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input
        type="text"
        placeholder="Vous recherchez un titre ?"
        className={s.input}
      />
    </>
  );
}
