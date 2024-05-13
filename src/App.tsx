import { twJoin } from 'tailwind-merge'

export const App = () => (
  <div className="bg-slate-300 min-h-screen">
    <article className="bg-white mx-40 space-y-10 py-10">
      <h1>Tailwind CSS border image plugin</h1>

      <div className="p-10 text-center">
        <h2>This section has no border image</h2>
      </div>

      <div className={twJoin('p-10', 'border-image-conic from-purple-500 to-purple-500 border-outset-x-screen')}>
        <h2>This section has a border image with a full color breakout</h2>
      </div>

      <div className="py-1">
        <div
          className={twJoin(
            'p-10 text-center',
            'slant slant-l border-image-conic from-red-400 to-red-400 border-outset-screen'
          )}
        >
          <h2>This section has a border image with a full color breakout and is slanted to the left</h2>
        </div>
      </div>

      <div className="py-1">
        <div
          className={twJoin(
            'p-10 text-center',
            'slant slant-r border-image-conic from-lime-400 to-lime-400 border-outset-screen'
          )}
        >
          <h2>This section has a border image with a full color breakout and is slanted to the right</h2>
        </div>
      </div>

      <div
        className={twJoin(
          'h-72 aspect-video mx-auto',
          'grid place-items-center',
          'bg-[url(https://picsum.photos/seed/picsum/900/600)] bg-cover bg-center',
          'text-center text-white',
          'border-image-gradient-to-b from-black/30 to-black'
        )}
      >
        <h2>
          This section has a border image <br /> with a linear gradient to bottom
        </h2>
      </div>

      <h2 className="py-4 px-2 border-image-[linear-gradient(0deg,#1095c1_5px,lightblue_0)]">A fancy title</h2>

      <h2 className="py-2 px-2 border-image-[linear-gradient(0deg,#1095c1_5px,#0000_0)] border-outset-r-screen">
        Another fancy title with a breakout to the right
      </h2>

      <h2 className="py-2 px-2 w-fit border-image-[linear-gradient(0deg,#c32e2e_5px,#0000_0)] border-outset-l-screen">
        A shorter one
      </h2>

      <h2 className="py-2 px-2 border-image-[repeating-linear-gradient(45deg,#BD1550_0_10px,#E97F02_0_20px,#F8CA00_0_30px)] border-image-width-t-[calc(100%-5px)] border-repeat-repeat">
        Get crazy
      </h2>

      <section>
        <h2 className="py-2 px-2">An image with a breackout to the left</h2>
        <img
          src="https://picsum.photos/id/157/400/400"
          width={200}
          height={200}
          className={twJoin(
            'rounded-full my-5 mx-auto',
            'outline outline-[.5rem] outline-cyan-600',
            'border-image-conic from-cyan-600 to-cyan-600',
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
            'outline outline-[.5rem] outline-pink-600',
            'border-image-conic from-pink-600 to-pink-600',
            'border-slice-r-[1] border-slice-no-fill border-image-width-x-1/2 border-outset-y-2 border-outset-x-screen'
          )}
        />
      </section>
    </article>
  </div>
)
