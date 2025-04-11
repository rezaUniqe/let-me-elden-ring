"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { useHandleLoginForm } from "@/app/[locale]/(auth)/login/hooks/use-handle-login-form";
import { PasswordInput } from "@/components/password-input";
import { useWebTranslations } from "@/hooks/use-web-translations";

export function SignInForm() {
  const { form, isPending, onLoginFormSubmit } = useHandleLoginForm();
  const { t } = useWebTranslations(["login"]);
  return (
    <Form {...form}>
      <form onSubmit={onLoginFormSubmit} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-amber-200">
                {t("login:form.fields.email.label")}
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder={t("login:form.fields.email.placeholder")}
                  {...field}
                  className="border-amber-900/50 bg-black/50 text-amber-50 focus-visible:ring-amber-400"
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-amber-200">
                {t("login:form.fields.password.label")}
              </FormLabel>
              <FormControl>
                <PasswordInput
                  placeholder={t("login:form.fields.password.placeholder")}
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-amber-200/50 text-xs">
                {t("login:form.fields.password.hint")}
              </FormDescription>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
        <Button
          disabled={isPending}
          type="submit"
          className="w-full bg-gradient-to-r from-amber-700 to-amber-500 hover:from-amber-600 hover:to-amber-400 text-black font-semibold"
        >
          {isPending ? "..." : t("login:form.actions.login.label")}
        </Button>
      </form>
    </Form>
  );
}
