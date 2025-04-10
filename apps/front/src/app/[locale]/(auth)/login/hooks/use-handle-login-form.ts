import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { loginFormSchema, LoginFormSchema } from "@/model/schema/form/login";
import { zodResolver } from "@hookform/resolvers/zod";

export function useHandleLoginForm() {
  const router = useRouter();

  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onLoginFormSubmit = form.handleSubmit((data) => {
    try {
      // toast({
      //   title: "Success",
      //   description: "You have successfully signed in.",
      // });
      router.push("/dashboard");
    } catch (error) {
      // toast({
      //   title: "Error",
      //   description: "Invalid email or password. Please try again.",
      //   variant: "destructive",
      // });
    } finally {
    }
  });

  return {
    form,
    onLoginFormSubmit,
  };
}
