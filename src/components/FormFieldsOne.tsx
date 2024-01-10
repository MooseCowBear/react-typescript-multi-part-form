import { FormInput } from "./FormInput";

export function FormFieldsOne() {
  return (
    <form className="flex flex-col gap-5">
      <FormInput name="name" label="Name" placeholder="e.g. Stephen King" />
      <FormInput name="email" label="Email" placeholder="e.g. stephenking@lorem.com" type="email"/>
      <FormInput name="phone" label="Phone Number" placeholder="e.g. +1 234 567 890"/>
    </form>
  );
}