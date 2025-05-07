
import ServerSide from "./components/serverComponent";
import ClientSide from "./components/clientComponent";
import ClientSideSecond from "./components/clientComponent2";

export default function Home() {
  return (
    <div className="w-full h-full flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1></h1>
      <div className="w-max h-max p-4"><ClientSide /></div>
      <div className="w-max h-max p-4"><ClientSideSecond /></div>
      <div className="w-max h-max p-4"><ServerSide /></div>
      <pre>
        Open the browser development tool and swap the viewport.
      </pre>
    </div>
  );
}
