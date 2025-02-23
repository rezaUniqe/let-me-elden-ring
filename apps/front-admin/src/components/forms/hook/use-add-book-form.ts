import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useDebounce } from "use-debounce";
import { useEffect, useState } from "react";

const addFormSchema = z.object({
  title: z.string(),
  description: z.string(),
  genre: z.string(),
  imageCover: z.string().url(),
});

function checkImageUrl(url: string) {
  const urlSchema = z.string().url();

  return !urlSchema.safeParse(url)?.error;
}

export function useAddBookForm() {
  const formProps = useForm({
    resolver: zodResolver(addFormSchema),
    defaultValues: {
      genre: "",
      imageCover: "",
      description: "",
      title: "",
    },
  });
  const [previewImage] = useDebounce(formProps.watch("imageCover"), 2000);
  const [isImageValid, setImageValid] = useState(false);
  useEffect(() => {
    if (checkImageUrl(previewImage)) {
      setImageValid(true);
    } else {
      setImageValid(false);
    }
  }, [previewImage]);

  return {
    formProps,
    previewImage,
    isImageValid,
  };
}
