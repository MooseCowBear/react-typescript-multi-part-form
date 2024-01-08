type FormHeaderProps = {
  title: string;
  subtitle: string;
};

export function FormHeader({ title, subtitle }: FormHeaderProps) {
  return <div>
    <h1 className="text-4xl font-bold leading-normal">{title}</h1>
    <p className="text-neutral-500">{subtitle}</p>
  </div>;
}
