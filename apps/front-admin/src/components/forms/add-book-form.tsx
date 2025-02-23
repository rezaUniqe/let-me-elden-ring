"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";
import { Input } from "@workspace/ui/components/input";
import { Button } from "@workspace/ui/components/button";
import { useAddBookForm } from "@/components/forms/hook/use-add-book-form";
import { Textarea } from "@workspace/ui/components/textarea";
import Image from "next/image";
import ErrorBoundary from "@/components/error-boundery";

const AddBookForm = () => {
  const { formProps, previewImage, isImageValid } = useAddBookForm();
  return (
    <Form {...formProps}>
      <form className="space-y-8">
        <FormField
          control={formProps.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formProps.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formProps.control}
          name="genre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Genre</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formProps.control}
          name="imageCover"
          render={({ field }) => (
            <FormItem>
              <FormLabel>url</FormLabel>
              <FormControl>
                <Input placeholder="image url" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div
          className={
            "relative grid place-content-center shadow-lg w-full h-[250px] rounded-xl"
          }
        >
          {previewImage && isImageValid && (
            <ErrorBoundary>
              <Image
                objectFit={"contain"}
                fill
                src={previewImage}
                alt={"bookImage"}
              />
            </ErrorBoundary>
          )}
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default AddBookForm;
