import player from "../player"
import CardPlayer from "./CardPlayer"

const ListPlayer =()=>{
    return(
        <div id='ListPlayer'>
            {
                player.map((el,i,t)=><CardPlayer el={el}/>)
            }
        </div>
    )
}
export default ListPlayer