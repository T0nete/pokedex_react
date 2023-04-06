import './ProgressBar.css'

const MAX_STAT = 115

export function ProgressBar ({ baseStat }) {
  const widthStat = parseInt(baseStat) / parseInt(MAX_STAT) * parseInt(100)

  const progressBarBackground = {
    height: 15,
    width: '100%',
    backgroundColor: '#161f27',
    borderRadius: 50
  }

  const progressBarStat = {
    height: '100%',
    width: `${widthStat}%`,
    backgroundColor: '#223f58',
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  return (
    <div className="progressBar" >
        <span>{baseStat}</span>
        <div style={progressBarBackground}>
            <div style={progressBarStat}>
            </div>
        </div>
    </div>

  )
}
