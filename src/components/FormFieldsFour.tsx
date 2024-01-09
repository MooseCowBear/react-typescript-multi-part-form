export function FormFieldsFour() {
  return (
    <div className="flex flex-col items-stretch">
      <div className="bg-blue-300/5 p-5 rounded-xl flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start">
            <h2 className="font-bold">something</h2>
            <button className="text-sm underline text-neutral-500">Change</button>
          </div>
          <div className="font-bold">234</div>
        </div>
        <hr className="bg-neutral-400 border-none h-[2px]"/>
        <div>add ons...</div>
      </div>
      <div className="flex justify-between items-center p-5">
        <span className="text-neutral-500 text-sm">Total:</span>
        <span className="text-blue-300 font-bold">2435</span>
      </div>
    </div>
  );
}
