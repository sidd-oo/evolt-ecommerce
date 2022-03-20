import { useEffect } from "react";

export const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `Evolt | ${title}`;
  }, [title]);
};
