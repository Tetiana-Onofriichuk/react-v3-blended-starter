import { FiSearch } from "react-icons/fi";
import toast from "react-hot-toast";

import style from "./Form.module.css";

interface FormProps {
  onSubmit: (newQuery: string) => void;
}

export default function Form({ onSubmit }: FormProps) {
  const handleSubmit = async (formData: FormData): Promise<void> => {
    const query = formData.get("query") as string;
    if (query.trim() === "") {
      toast.error("No movies found for your request.");
      return;
    }

    onSubmit(query.trim());
  };

  return (
    <form className={style.form} action={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="query"
        autoFocus
      />
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>
    </form>
  );
}
