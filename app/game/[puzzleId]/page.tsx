
import easyPuzzles from '../../../data/easy/puzzles'

interface PuzzlePageProps {
  params: {
    puzzleId: string
  }
}

export default function PuzzlePage({ params: { puzzleId } }: PuzzlePageProps) {

  // todo error handling

  const puzzle = easyPuzzles.find(puzzle => puzzle.id === puzzleId);

  if (!puzzle) {
    return null;
  }

  const three = Array.from({ length: 3 });

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="w-96 h-96 flex flex-col border-slate-600 border">
        {three.map((_, brIndex) => (
          <div key={`br-${brIndex}`} className="flex h-1/3">
            {three.map((_, bcIndex) => (
              <div key={`bc-${bcIndex}`} className="w-1/3 border-slate-600 border">
                {three.map((_, lrIndex) => (
                  <div key={`lr-${lrIndex}`} className="flex h-1/3">
                    {three.map((_, lcIndex) => (
                      <div 
                        key={`lc-${lcIndex}`}
                        className={
                          `w-1/3 bg-slate-800 hover:bg-slate-700 flex justify-center items-center border-slate-700 hover:border-slate-600 border`
                        }
                      >
                        {puzzle.solution[brIndex * 3 + lrIndex][bcIndex * 3 + lcIndex]}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-5 w-64 h-64 flex flex-col border-slate-600 border">
        {three.map((_, rIndex) => (
          <div key={`r-${rIndex}`} className="flex h-1/3">
            {three.map((_, lIndex) => (
              <div 
                key={`l-${lIndex}`}
                className={
                  `w-1/3 bg-slate-800 hover:bg-slate-700 flex justify-center items-center border-slate-700 hover:border-slate-600 border`
                }
              >
                {3 * rIndex + lIndex + 1}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
  
}