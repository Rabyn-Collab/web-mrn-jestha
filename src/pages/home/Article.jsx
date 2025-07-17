import { HiCubeTransparent, HiCursorClick } from "react-icons/hi";
export default function Article({ sec }) {


  return (
    <div className={`grid ${sec ? `grid-cols-[2fr_1fr]` : `grid-cols-[1fr_2fr]`} ${!sec && 'bg-gray-100'} px-[150px] gap-10 items-center py-24 max-lg:px-5 max-sm:grid-cols-1 max-sm:justify-items-center`}  >
      {!sec && <div>
        <HiCubeTransparent size={210} color="red" />
      </div>}

      <div className="space-y-10">
        <h1 className="text-3xl">Lorem Ipsum</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, rem porro. Doloremque consectetur aut perspiciatis similique, fuga eius ut expedita error quidem ab, id provident neque. Asperiores amet adipisci sint.</p>
        <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam odio explicabo, temporibus voluptates pariatur magni, laborum iusto quisquam tempora facere aspernatur vitae, aperiam amet minus sunt tempore totam iste nobis excepturi ratione delectus. Voluptatum incidunt praesentium voluptatibus soluta labore magnam earum, laborum, pariatur nisi veritatis sed blanditiis, excepturi a accusamus.</p>
      </div>

      {sec && <div>
        <HiCursorClick size={210} color="red" />
      </div>}

    </div>
  )
}
