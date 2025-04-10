import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegisterFormSchema,
  registerFormSchema,
} from "@/model/schema/form/register";

export function useHandleRegisterForm() {
  const router = useRouter();

  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onRegisterFormSubmit = form.handleSubmit(async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Account created",
        description: "You have successfully created an account.",
      });

      // Redirect to sign in page or dashboard after successful sign up
      router.push("/sign-in");
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  });

  return {
    form,
    onRegisterFormSubmit,
  };
}
