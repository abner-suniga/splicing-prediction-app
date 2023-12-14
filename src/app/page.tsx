import Form from "./ui/form";
import Side from "./ui/side";

export default function Home() {
  return (
    <main className="flex h-screen p-32 space-x-32">
      <div className="basis-2/3">
        <Side />
      </div>
      <div className="basis-1/3">
        <Form />
      </div>
    </main>
  );
}
