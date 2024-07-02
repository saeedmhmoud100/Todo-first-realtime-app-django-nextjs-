import Item from "@/components/Item";


export default function ListItems() {

    return (

        <div className="items flex flex-col py-4 rounded-2xl shadow-lg overflow-y-auto" style={{boxShadow: "1px 1px 16px rgb(0, 0, 0, 0.2)",height:"450px"}}>

            {
                Array.from({length: 10}).map((_, index) => (
                    <Item key={index} id={index}/>
                ))
            }

        </div>

        )

}