export function SudokuInterface() {
  const sudokuGrid = [
    [" ", " ", "7", "4", " ", " ", " ", "8", " "],
    [" ", "3", " ", " ", "4", " ", " ", "6", " "],
    [" ", " ", " ", " ", " ", " ", "9", " ", "4"],
    ["9", " ", "4", " ", " ", " ", " ", " ", "5"],
    ["3", "7", " ", "9", " ", "2", " ", "3", "8"],
    ["8", " ", "2", " ", " ", " ", "1", " ", " "],
  ]

  return (
    <div className="relative flex items-center justify-center scale-110 md:scale-125">
      {/* Back Phone - More slanted right */}
      <div className="absolute -right-8 top-12 h-[420px] w-[240px] rotate-[20deg] rounded-[30px] border-[6px] border-gray-800 bg-gradient-to-b from-green-200 to-green-100 shadow-2xl md:-right-12 md:top-16 md:h-[520px] md:w-[280px]">
        <div className="absolute left-1/2 top-0 h-4 w-20 -translate-x-1/2 rounded-b-xl bg-gray-800 md:h-5 md:w-24" />
        <div className="flex h-full items-center justify-center p-3">
          <div className="rounded-xl bg-green-600 px-5 py-6 text-center text-white shadow-xl">
            <div className="mb-2 text-2xl md:text-3xl">🌟</div>
            <h3 className="mb-1 text-lg font-bold md:text-xl">Try Now!</h3>
            <p className="text-xs md:text-sm">5-Star Ratings</p>
            <div className="mt-1 flex justify-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-base md:text-lg">
                  ⭐
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Front Phone - More slanted left, positioned from center of back phone */}
      <div className="relative z-10 h-[440px] w-[250px] -rotate-[18deg] rounded-[35px] border-[6px] border-gray-800 bg-white shadow-2xl md:h-[540px] md:w-[290px]">
        <div className="absolute left-1/2 top-0 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-gray-800" />

        <div className="flex h-full flex-col p-3">
          <div className="mb-2 text-center">
            <h2 className="text-base font-bold text-gray-800 md:text-lg">Sudoku Puzzle</h2>
            <div className="mt-0.5 flex items-center justify-between text-[9px] text-gray-500 md:text-[10px]">
              <span>Mistakes: 0/3</span>
              <span>Time: 00:30</span>
            </div>
          </div>

          {/* Sudoku Grid */}
          <div className="mb-2 rounded-xl border-2 border-gray-800 bg-white p-1">
            {sudokuGrid.map((row, i) => (
              <div key={i} className="flex">
                {row.map((cell, j) => (
                  <div
                    key={j}
                    className={`flex h-5 w-5 items-center justify-center border border-gray-300 text-[9px] font-semibold md:h-6 md:w-6 md:text-[10px] ${
                      cell !== " " ? "bg-green-50 text-gray-800" : "bg-white text-gray-400"
                    } ${j % 3 === 2 && j !== 8 ? "border-r-2 border-r-gray-800" : ""} ${
                      i % 3 === 2 && i !== 8 ? "border-b-2 border-b-gray-800" : ""
                    }`}
                  >
                    {cell}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Number Pad */}
          <div className="grid grid-cols-5 gap-1">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                className="rounded-md bg-green-100 py-1 text-xs font-semibold text-green-800 hover:bg-green-200 md:text-sm"
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
