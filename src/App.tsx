import { twJoin } from 'tailwind-merge'

export const App = () => (
  <div className="bg-slate-800 min-h-screen">
    <article className="bg-white mx-14 md:mx-auto max-w-screen-md space-y-10 py-10">
      <h1 className="text-center">Tailwind CSS border-image plugin</h1>

      <div className="p-10 text-center border">
        <h2>This section has no border-image</h2>
      </div>

      <div
        className={twJoin(
          'p-10 text-center',
          'border-image-conic from-indigo-400 to-indigo-400 border-outset-x-screen'
        )}
      >
        <h2>This section has a border-image with a full color breakout</h2>
      </div>

      <div className="py-1">
        <div
          className={twJoin(
            'p-10 text-center',
            'slant slant-l border-image-conic from-indigo-400/30 to-indigo-400/30 border-outset-screen'
          )}
        >
          <h2>
            This section has a border-image with a full color breakout and is slanted to the left and transparency
          </h2>
        </div>
      </div>

      <div className="py-1">
        <div
          className={twJoin(
            'p-10 text-center',
            'slant slant-r border-image-conic from-indigo-400 to-indigo-400 border-outset-screen'
          )}
        >
          <h2>This section has a border-image with a full color breakout and is slanted to the right</h2>
        </div>
      </div>

      <div
        className={twJoin(
          'w-full max-w-xl aspect-video mx-auto',
          'grid place-items-center',
          'bg-[url(https://picsum.photos/seed/picsum/900/600)] bg-cover bg-center',
          'text-center text-white',
          'border-image-gradient-to-b from-black/30 to-black'
        )}
      >
        <h2>
          This section has a border-image <br /> with a linear gradient to bottom
        </h2>
      </div>

      <h2
        className={twJoin(
          'py-4 px-2',
          'shadow-md shadow-indigo-500',
          'border-image-gradient-to-t from-indigo-400 from-10% to-indigo-100 to-0% '
        )}
      >
        A fancy title with some shadow on it
      </h2>

      <h2
        className={twJoin(
          'py-2 px-2',
          'border-image-gradient-to-t from-indigo-400 from-10% to-transparent to-0% border-outset-r-screen'
        )}
      >
        Another fancy title with a breakout to the right
      </h2>

      <h2
        className={twJoin(
          'py-2 px-2',
          'w-fit border-image-gradient-to-t from-red-700 from-[10%] to-transparent to-0% border-outset-l-screen'
        )}
      >
        A shorter one
      </h2>

      <h2
        className={twJoin(
          'py-2 px-2',
          'border-image-repeating from-red-600 from-[0_10px] via-orange-500 via-[0_20px] to-yellow-500 to-[0_30px] border-image-width-t-[calc(100%-5px)] border-repeat-repeat'
        )}
      >
        Get crazy
      </h2>

      <section>
        <h2 className="py-2 px-2">An image with a breackout to the left</h2>
        <img
          src="https://picsum.photos/id/162/400/400"
          width={200}
          height={200}
          className={twJoin(
            'rounded-full my-5 mx-auto',
            'outline outline-[.5rem] outline-indigo-300',
            'shadow-2xl shadow-indigo-800',
            'border-image-conic from-indigo-400 to-indigo-300',
            'border-slice-l-[1] border-slice-no-fill border-image-width-x-1/2 border-outset-y-2 border-outset-x-screen'
          )}
        />

        <h2 className="py-2 px-2">An image with a breackout to the right</h2>
        <img
          src="https://picsum.photos/id/113/400/400"
          width={200}
          height={200}
          className={twJoin(
            'rounded-full my-5 mx-auto',
            'outline outline-[.5rem] outline-indigo-300',
            'shadow-2xl shadow-indigo-800',
            'border-image-conic from-indigo-300 to-indigo-300',
            'border-slice-r-[1] border-slice-no-fill border-image-width-x-1/2 border-outset-y-2 border-outset-x-screen'
          )}
        />
      </section>
    </article>
  </div>
)
