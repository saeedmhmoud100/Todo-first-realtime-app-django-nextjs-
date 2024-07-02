import addIcon from '../icons/plus-solid.svg';
import ListItems from "@/components/ListItems";


export default function Home() {
  return (
    <main className="container flex flex-col m-auto items-center mt-20">
      <div style={{width:"500px"}}>
          <h1 className="text-center text-2xl text-violet-700 font-bold mb-10">Todo app</h1>

          <div className="add-button p-2 cursor-pointer mb-8 w-max" style={{boxShadow: "1px 1px 16px rgb(0, 0, 0, 0.2)"}}>
              <img src={addIcon.src} style={{width:"20px", height:"20px"}}/>
          </div>

            <ListItems />
      </div>
    </main>
  );
}
