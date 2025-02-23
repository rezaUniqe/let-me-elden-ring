import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutations } from "@/hooks/mutations/use-login-mutations";
import { loginRequestParamsSchema } from "@/components/modals/api/request-bodies";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type LoginFormType = z.infer<typeof formSchema>;

export function useLoginForm({ onLogin }: { onLogin: () => void }) {
  const { mutate: login, isPending: isLoading } = useLoginMutations({
    onSuccess: onLogin,
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    reValidateMode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginFormType) {
    if (
      loginRequestParamsSchema.safeParse({
        identity: values.email,
        password: values.password,
      }).error === undefined
    ) {
      login({ identity: values.email, password: values.password });
    }
  }

  return {
    formProps: form,
    isLoading,
    handleSubmit: form.handleSubmit((data) => onSubmit(data)),
  };
}
