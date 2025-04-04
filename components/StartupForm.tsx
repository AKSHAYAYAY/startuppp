"use client";

import React, { useState, useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"; // Using Sonner for notifications
import { formSchema } from "@/lib/validation";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { createPitch } from "@/lib/actions";

const StartupForm = () => {
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [pitch, setPitch] = useState("");
  const router = useRouter();

  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    try {
      const formValues = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        category: formData.get("category") as string,
        link: formData.get("link") as string,
        pitch,
      };

      console.log("Form Values:", formValues);
      await formSchema.parseAsync(formValues); // Validate using Zod

      const result = await createPitch(prevState, formData, pitch);

      if (result.status === "SUCCESS") {
        toast.success("Your startup pitch has been created successfully");
        router.push(`/startup/${result._id}`);
      }

      return result;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;
        console.log("Validation Errors:", fieldErrors); // Debugging validation issues

        setErrors(fieldErrors);
        toast.error("Please check your inputs and try again");

        return { ...prevState, error: "Validation failed", status: "ERROR" };
      }

      toast.error("An unexpected error has occurred");
      return { ...prevState, error: "An unexpected error has occurred", status: "ERROR" };
    }
  };

  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    status: "INITIAL",
  });

  return (
    <form action={formAction} className="startup-form">
      <div>
        <label htmlFor="title" className="startup-form_label">Title</label>
        <Input id="title" name="title" className="startup-form_input" required placeholder="Startup Title" />
        {errors.title && <p className="startup-form_error">{errors.title[0]}</p>}
      </div>

      <div>
        <label htmlFor="description" className="startup-form_label">Description</label>
        <Textarea
          id="description"
          name="description"
          className="startup-form_textarea"
          required
          placeholder="Startup Description"
          maxLength={500}  // Ensures the user does not exceed the limit
        />
        {errors.description && <p className="startup-form_error">{errors.description[0]}</p>}
      </div>

      <div>
        <label htmlFor="category" className="startup-form_label">Category</label>
        <Input id="category" name="category" className="startup-form_input" required placeholder="Startup Category" />
        {errors.category && <p className="startup-form_error">{errors.category[0]}</p>}
      </div>

      <div>
        <label htmlFor="link" className="startup-form_label">Image URL</label>
        <Input id="link" name="link" className="startup-form_input" required placeholder="Startup Image URL" />
        {errors.link && <p className="startup-form_error">{errors.link[0]}</p>}
      </div>

      <div data-color-mode="dark">
        <label htmlFor="pitch" className="startup-form_label">Pitch</label>
        <MDEditor
          value={pitch}
          onChange={(value) => setPitch(value as string)}
          id="pitch"
          preview="edit"
          height={300}
          style={{ borderRadius: 20, overflow: "hidden" }}
          textareaProps={{ placeholder: "Briefly describe your idea and what problem it solves" }}
          previewOptions={{ disallowedElements: ["style"] }}
        />
        {errors.pitch && <p className="startup-form_error">{errors.pitch[0]}</p>}
      </div>

      <Button type="submit" className="startup-form_btn text-white" disabled={isPending}>
        {isPending ? "Submitting..." : "Submit Your Pitch"}
      </Button>
    </form>
  );
};

export default StartupForm;
