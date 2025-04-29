import { Start } from '@/components/homepage/start';

export default function DemoPage() {

  return (
    <div className="relative h-screen flex flex-col items-center justify-center">
      <div className="bg-gradient-to-b from-black via-gray-600 to-gray-300 text-transparent bg-clip-text text-[15rem] font-bold">
        CHAT APP
      </div>
      <Start />
    </div>
  );
}
