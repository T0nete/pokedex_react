
import './ProgressBarCompare.css'

export function ProgressBarCompare ({ baseStat1, baseStat2 }) {
  const widthStat = parseInt(baseStat1) / (parseInt(baseStat1) + parseInt(baseStat2)) * parseInt(100)

  const progressBarBackground = {
    height: 15,
    width: '100%',
    backgroundColor: baseStat1 < baseStat2 ? '#00c559' : '#223f58',
    borderRadius: 50
  }

  const progressBarStat = {
    height: '100%',
    width: `${widthStat}%`,
    backgroundColor: baseStat1 >= baseStat2 ? '#00c559' : '#223f58', // '#223f58',
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  return (
    <div className="progressBar" >
        <span>{baseStat1}</span>
        <div style={progressBarBackground}>
            <div style={progressBarStat}>
            </div>
        </div>
        <span>{baseStat2}</span>
    </div>

  )
}
