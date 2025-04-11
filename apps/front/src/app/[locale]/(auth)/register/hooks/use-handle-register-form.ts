import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegisterFormSchema,
  registerFormSchema,
} from "@/model/schema/form/register";
import { useRegisterMutation } from "@/hooks/mutations/use-register-mutation";
import { useToast } from "@workspace/ui/hooks/use-toast";

export function useHandleRegisterForm() {
  const router = useRouter();
  const { mutateAsync: register, isPending } = useRegisterMutation();
  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const { toast } = useToast();

  const onRegisterFormSubmit = form.handleSubmit(async (data) => {
    try {
      await register({
        email: data.email,
        password: data.password,
        passwordConfirm: data.confirmPassword,
      });

      toast({
        title: "Account created",
        description: "You have successfully created an account.",
      });

      router.push("/");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  });

  return {
    form,
    isPending,
    onRegisterFormSubmit,
  };
}
