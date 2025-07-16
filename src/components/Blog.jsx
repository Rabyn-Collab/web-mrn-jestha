
export default function Blog({ title, detail }) {

  return (
    <div className="max-w-[500px] flex gap-5 shadow-2xl p-3">

      <div className="h-[100px] w-[100px] shrink-0 rounded-full bg-[red]"></div>

      <div>
        <h1 className="font-bold text-xl">{title}</h1>
        <p>{detail} Lorem ipsum, dolor sit amet consectetur adm!</p>

      </div>



    </div>
  )
}
