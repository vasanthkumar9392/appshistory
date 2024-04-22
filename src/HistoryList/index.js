import './index.css'

const HistoryList = props => {
  const {historyDetaile, onDeleteUser} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetaile

  const deletelist = () => {
    onDeleteUser(id)
  }
  return (
    <li className="list-container">
      <div className="time-container">
        <p className="time">{timeAccessed}</p>
      </div>
      <div className="app-delete-detailes-container">
        <div className="app-detailes-container">
          <div className="logo-container">
            <img className="logo" src={logoUrl} alt="domain logo" />
          </div>
          <div className="app-name-domain-url-container">
            <p className="app-name">{title}</p>
            <p className="domain-name">{domainUrl}</p>
          </div>
        </div>
        <button type="button" className="button" onClick={deletelist}>
          <img
            className="delete-icon"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryList
