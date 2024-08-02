import Image from "next/image";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="flex column gap-4 p-6">
      <Button variant="solid" size="md">Label</Button>
      <Button variant="outline" size="sm">Label</Button>
      <Button variant="solid" colorScheme="gray" size="md">Label</Button>
      <Button variant="solid" colorScheme="blue" size="sm" disabled>Label</Button>
      <Button variant="outline" colorScheme="blue" size="md" disabled>Label</Button>
      <Button variant="solid" colorScheme="gray" size="sm" disabled>Label</Button>

    </main>
  );
}
