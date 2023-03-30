import bugIcon from '../assets/bug.svg'
import darkIcon from '../assets/dark.svg'
import dragonIcon from '../assets/dragon.svg'
import electricIcon from '../assets/electric.svg'
import fairyIcon from '../assets/fairy.svg'
import fightingIcon from '../assets/fighting.svg'
import fireIcon from '../assets/fire.svg'
import flyingIcon from '../assets/flying.svg'
import ghostIcon from '../assets/ghost.svg'
import grassIcon from '../assets/grass.svg'
import groundIcon from '../assets/ground.svg'
import iceIcon from '../assets/ice.svg'
import normalIcon from '../assets/normal.svg'
import poisonIcon from '../assets/poison.svg'
import psychicIcon from '../assets/psychic.svg'
import rockIcon from '../assets/rock.svg'
import steelIcon from '../assets/steel.svg'
import waterIcon from '../assets/water.svg'

export function TypeIcon ({type})  {
    console.log(type)
    console.log(getIcon(type.toString()))
    return (
        <img className='typeIcon' src={getIcon({type})} alt={type}/>
    )
}

const getIcon = ({type}) => {
    switch(type) {
        case 'bug': return bugIcon
        case 'dark': return darkIcon
        case 'dragon' : return dragonIcon
        case 'electric' : return electricIcon
        case 'fairy' : return fairyIcon
        case 'fighting' : return fightingIcon
        case 'fire' : return fireIcon
        case 'flying' : return flyingIcon
        case 'ghost' : return ghostIcon
        case 'grass' :  return grassIcon
        case 'ground' : return groundIcon
        case 'ice' : return iceIcon
        case 'normal': return normalIcon
        case 'poison' : return poisonIcon
        case 'psychic' : return psychicIcon
        case 'rock' : return rockIcon
        case 'steel' : return steelIcon
        case 'water' : return waterIcon
    }
}

const BugType = () => {

}