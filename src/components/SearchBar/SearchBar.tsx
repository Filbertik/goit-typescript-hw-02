import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";
import { MdSearch } from "react-icons/md";
import { FC, FormEvent } from "react";

interface SearchBarProps {
  handleQuery: (query: string, perPage: number) => void;
}

const SearchBar: FC<SearchBarProps> = ({ handleQuery }) => {
  const createQuery = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const queryField = formData.get("query");
    if (typeof queryField !== "string" || queryField.trim() === "") {
      toast.error("Search cannot be empty");
      return;
    }

    const newQuery = queryField.trim().toLowerCase();
    const perPageStr = formData.get("per_page") as string;
    const perPage = Math.min(Math.max(Number(perPageStr), 1), 30);

    form.reset();
    handleQuery(newQuery, perPage);
  };

  return (
    <header className={s.header}>
      <form onSubmit={createQuery} className={s.form}>
        <input
          type="number"
          name="per_page"
          placeholder="PerPage"
          min="1"
          max="30"
          step="1"
          className={s.inputNum}
        />
        <input
          className={s.inputText}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search img"
          name="query"
        />
        <button type="submit">
          <MdSearch className={s.btn} />
        </button>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </header>
  );
};

export default SearchBar;
