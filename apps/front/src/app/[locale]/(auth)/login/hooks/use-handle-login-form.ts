import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { loginFormSchema, LoginFormSchema } from "@/model/schema/form/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "@/hooks/mutations/use-login-mutation";
import { useToast } from "@workspace/ui/hooks/use-toast";

export function useHandleLoginForm() {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutateAsync, isPending } = useLoginMutation();
  const onLoginFormSubmit = form.handleSubmit(async (data) => {
    try {
      await mutateAsync({
        password: data.password,
        identity: data.email,
      });
      toast({
        title: "Success",
        description: "You have successfully signed in.",
      });
      router.push("/");
    } catch (error) {
      toast({
        title: "Error",
        description: `Invalid email or password. Please try again.${error}`,
        variant: "destructive",
      });
    }
  });

  return {
    form,
    onLoginFormSubmit,
    isPending,
  };
}
