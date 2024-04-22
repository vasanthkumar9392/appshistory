import {Component} from 'react'

import EmptyMessage from './EmptyMessage'

import HistoryList from './HistoryList'

import './App.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class App extends Component {
  state = {userSearch: '', historyList: initialHistoryList}

  userSearchedApp = event => {
    this.setState({userSearch: event.target.value})
  }

  onDeleteUser = id => {
    const {historyList} = this.state
    const afterdeleteList = historyList.filter(eachList => eachList.id !== id)
    this.setState({historyList: afterdeleteList})
  }

  render() {
    const {userSearch, historyList} = this.state

    const searcheResultList = historyList.filter(eachList => {
      const userSearchinsmall = userSearch.toLowerCase()
      const titleinsmallcase = eachList.title.toLowerCase()
      return titleinsmallcase.includes(userSearchinsmall)
    })

    let comingResult
    const lenthOfHistorylist = searcheResultList.length
    if (lenthOfHistorylist === 0) {
      comingResult = <EmptyMessage />
    } else {
      comingResult = (
        <ul className="history-lists-container">
          {searcheResultList.map(eachList => (
            <HistoryList
              historyDetaile={eachList}
              key={eachList.id}
              onDeleteUser={this.onDeleteUser}
            />
          ))}
        </ul>
      )
    }
    return (
      <div className="bg-container">
        <div className="search-container">
          <div className="app-logo-container">
            <img
              className="app-logo"
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
            />
          </div>
          <div className="input-container">
            <div className="user-input-container">
              <div className="search-logo-container">
                <img
                  className="search-logo"
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png "
                  alt="search"
                />
              </div>
              <input
                className="user-input"
                type="search"
                placeholder="Search history"
                onChange={this.userSearchedApp}
              />
            </div>
          </div>
        </div>
        <div className="bottom-container">{comingResult}</div>
      </div>
    )
  }
}

export default App
