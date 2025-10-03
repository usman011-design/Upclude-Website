export function DrawInterface() {
  return (
    <div className="relative flex items-center justify-center scale-110 md:scale-125">
      {/* Back Phone - More slanted right */}
      <div className="absolute -right-8 top-8 h-[420px] w-[240px] rotate-[-20deg] rounded-[30px] border-[6px] border-gray-800 bg-gradient-to-b from-yellow-200 to-yellow-100 shadow-2xl md:-right-12 md:top-16 md:h-[520px] md:w-[280px]">
        <div className="absolute left-1/2 top-0 h-4 w-20 -translate-x-1/2 rounded-b-xl bg-gray-800 md:h-5 md:w-24" />

        <div className="flex h-full flex-col items-center justify-center p-3">
          <div className="mb-2 text-4xl md:text-5xl">📱</div>
          <h3 className="mb-1 text-lg font-bold text-gray-800 md:text-xl">Draw Now!</h3>
          <p className="mb-2 text-center text-[10px] text-gray-600 md:text-xs">Instant shape recognition</p>
          <div className="rounded-full bg-yellow-400 px-3 py-1.5 shadow-lg">
            <span className="text-xs font-bold text-yellow-900 md:text-sm">Start Drawing</span>
          </div>
        </div>
      </div>

      {/* Front Phone - More slanted left, positioned from center of back phone */}
      <div className="relative z-10 h-[440px] w-[250px] -rotate-[-18deg] rounded-[35px] border-[6px] border-gray-800 bg-white shadow-2xl md:h-[540px] md:w-[290px]">
        <div className="absolute left-1/2 top-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-gray-800" />

        <div className="flex h-full flex-col p-3">
          {/* Header */}
          <div className="mb-2 flex items-center justify-between">
            <div className="rounded-md bg-cyan-500 px-2 py-0.5 text-[10px] font-bold text-white md:text-xs">1</div>
            <div className="text-[10px] font-semibold text-gray-600 md:text-xs">Draw or</div>
            <div className="rounded-md bg-purple-500 px-2 py-0.5 text-[10px] font-bold text-white md:text-xs">2</div>
          </div>

          {/* Drawing Area */}
          <div className="relative mb-2 flex-1 rounded-xl border-2 border-dashed border-gray-300 bg-white p-3">
            <div className="absolute left-3 top-3 text-base font-bold text-gray-800 md:text-lg">TIME UP!</div>

            {/* Drawn Pineapple */}
            <div className="flex h-full items-center justify-center">
              <div className="text-5xl md:text-6xl">🍍</div>
            </div>

            {/* Timer Icon */}
            <div className="absolute bottom-3 right-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100 md:h-10 md:w-10">
                <span className="text-base md:text-lg">⏱️</span>
              </div>
            </div>
          </div>

          {/* Word Options */}
          <div className="space-y-1.5">
            <div className="rounded-lg bg-cyan-500 p-2 text-center">
              <span className="text-xs font-bold text-white md:text-sm">Apple</span>
            </div>
            <div className="rounded-lg bg-purple-500 p-2 text-center">
              <span className="text-xs font-bold text-white md:text-sm">Pineapple</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
