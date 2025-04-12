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
import { Input } from "@workspace/ui/components/input";
import { useHandleRegisterForm } from "@/app/[locale]/(auth)/register/hooks/use-handle-register-form";
import { Button } from "@workspace/ui/components/button";
import { PasswordInput } from "@/components/password-input";
import { useWebTranslations } from "@/hooks/use-web-translations";

export function SignUpForm() {
  const { form, isPending, onRegisterFormSubmit } = useHandleRegisterForm();
  const { t } = useWebTranslations(["register"]);
  return (
    <Form {...form}>
      <form onSubmit={onRegisterFormSubmit} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-amber-200">
                {t("register:form.fields.email.label")}
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder={t("register:form.fields.email.placeholder")}
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
                {t("register:form.fields.password.label")}
              </FormLabel>
              <FormControl>
                <PasswordInput
                  placeholder={t("register:form.fields.password.placeholder")}
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-amber-200/50 text-xs">
                {t("register:form.fields.password.hint")}
              </FormDescription>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-amber-200">
                {t("register:form.fields.confirmPassword.label")}
              </FormLabel>
              <FormControl>
                <PasswordInput
                  placeholder={t(
                    "register:form.fields.confirmPassword.placeholder",
                  )}
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
        <Button
          disabled={isPending}
          type="submit"
          className="w-full bg-gradient-to-r from-amber-700 to-amber-500 hover:from-amber-600 hover:to-amber-400 text-black font-semibold"
        >
          {isPending ? "loading..." : t("register:form.actions.register.label")}
        </Button>
      </form>
    </Form>
  );
}
