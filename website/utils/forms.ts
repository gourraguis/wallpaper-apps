import { FormEvent } from "react";

export const handleChangeHelper = (fn: Function) => (
  event: FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => fn(event.currentTarget.value);

export const handleSubmitHelper = (fn: Function) => (event: FormEvent) => {
  event.preventDefault();

  fn();
};
