import { TextInput } from "./TextInput";

export function FormFieldsOne() {
  //todo: add labels
  return (
    <form className="flex flex-col gap-5">
      <TextInput name="name" label="Name" placeholder="e.g. Stephen King"/>
      <TextInput name="email" label="Email" placeholder="e.g. stephenking@lorem.com"/>
      <TextInput name="phone" label="Phone Number" placeholder="e.g. +1 234 567 890"/>
    </form>
  );
}