const conversationRows = [0, 1, 2, 3];

// Purely geometric placeholder — an abstract inbox/chat-thread composition
// (rounded bars and circles, no simulated text or logos) standing in for a
// real product screenshot until one exists. Meant to read clearly as an
// illustration, not be mistaken for an actual capture.
export function AppMockup() {
  return (
    <div className="flex h-full w-full gap-3 p-5">
      <div className="flex w-1/3 flex-col gap-2">
        <div className="mb-1 h-2 w-2/3 rounded-full bg-zinc-700" />
        {conversationRows.map((row) => (
          <div key={row} className="flex items-center gap-2 rounded-lg bg-zinc-800/80 p-2">
            <div className="h-6 w-6 flex-shrink-0 rounded-full bg-zinc-700" />
            <div className="flex-1 space-y-1">
              <div className="h-1.5 w-3/4 rounded-full bg-zinc-700" />
              <div className="h-1.5 w-1/2 rounded-full bg-zinc-700/60" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-1 flex-col gap-2.5">
        <div className="flex justify-start">
          <div className="h-6 w-2/3 rounded-2xl rounded-bl-sm bg-zinc-800" />
        </div>
        <div className="flex justify-end">
          <div className="h-6 w-1/2 rounded-2xl rounded-br-sm bg-sky-500/20 ring-1 ring-inset ring-sky-500/30" />
        </div>
        <div className="flex justify-start">
          <div className="h-10 w-3/4 rounded-2xl rounded-bl-sm bg-zinc-800" />
        </div>
        <div className="flex justify-end">
          <div className="h-6 w-2/5 rounded-2xl rounded-br-sm bg-sky-500/20 ring-1 ring-inset ring-sky-500/30" />
        </div>
        <div className="mt-auto flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-2">
          <div className="h-2 flex-1 rounded-full bg-zinc-800" />
          <div className="h-5 w-5 flex-shrink-0 rounded-full bg-sky-500/20 ring-1 ring-inset ring-sky-500/30" />
        </div>
      </div>
    </div>
  );
}
