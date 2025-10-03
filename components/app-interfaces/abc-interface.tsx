export function ABCInterface() {
  return (
    <div className="relative flex items-center justify-center scale-110 md:scale-125">
      {/* Back Phone - Green - More slanted right */}
      <div className="absolute -right-8 top-12 h-[420px] w-[240px] rotate-[20deg] rounded-[30px] border-[6px] border-gray-800 bg-gradient-to-b from-green-200 to-green-100 shadow-2xl md:-right-12 md:top-16 md:h-[520px] md:w-[280px]">
        <div className="absolute left-1/2 top-0 h-4 w-20 -translate-x-1/2 rounded-b-xl bg-gray-800 md:h-5 md:w-24" />

        <div className="flex h-full flex-col items-center justify-center p-3">
          <div className="mb-2 rounded-lg bg-green-300 px-3 py-1">
            <span className="text-xs font-bold text-green-900">Level 4</span>
          </div>

          <h3 className="mb-2 text-center text-sm font-bold text-gray-800 md:text-base">MATCH VEGETABLES</h3>

          <div className="space-y-2">
            <div className="flex items-center gap-2 rounded-lg bg-white p-2 shadow">
              <span className="text-2xl md:text-3xl">🍆</span>
              <span className="text-lg font-bold text-gray-800 md:text-xl">=</span>
              <span className="text-lg text-gray-400 md:text-xl">?</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white p-2 shadow">
              <span className="text-2xl md:text-3xl">🥦</span>
              <span className="text-lg font-bold text-gray-800 md:text-xl">=</span>
              <span className="text-lg text-gray-400 md:text-xl">?</span>
            </div>
          </div>
        </div>
      </div>

      {/* Front Phone - Yellow - More slanted left, positioned from center of back phone */}
      <div className="relative z-10 h-[440px] w-[250px] -rotate-[18deg] rounded-[35px] border-[6px] border-gray-800 bg-gradient-to-b from-yellow-200 to-yellow-100 shadow-2xl md:h-[540px] md:w-[290px]">
        <div className="absolute left-1/2 top-0 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-gray-800" />

        <div className="flex h-full flex-col items-center justify-center p-3">
          <div className="mb-2 rounded-lg bg-yellow-300 px-3 py-1">
            <span className="text-xs font-bold text-yellow-900 md:text-sm">Level 2</span>
          </div>

          <h2 className="mb-3 text-center text-base font-bold text-gray-800 md:text-lg">COMPLETE IMAGE</h2>

          {/* Fruit Image */}
          <div className="mb-3 rounded-xl bg-white p-4 shadow-lg">
            <div className="text-5xl md:text-6xl">🍎</div>
          </div>

          <div className="w-full space-y-1.5 px-3">
            <div className="rounded-lg bg-yellow-300 p-2 text-center">
              <span className="text-xs font-semibold text-yellow-900 md:text-sm">Apple</span>
            </div>
            <div className="rounded-lg bg-white p-2 text-center">
              <span className="text-xs font-semibold text-gray-400 md:text-sm">Banana</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
