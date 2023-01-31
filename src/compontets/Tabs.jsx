import { useState } from 'react'
import './Tabs.css'
import userInfo from '../Sdata'

const Tabs = () => {
  const [currentTab, setcurrentTab] = useState('1')

  const handleTabClick = (e) => {
    setcurrentTab(e.target.id);
  }
  return (
    <>
    <h1>exprience</h1>
    <div className="container">
      <div className="user-name-data">
        {userInfo.map((curele, index) => {
          return (
              <button key={index} id={curele.id}
                disabled={currentTab === `${curele.id}`}
                  onClick={(handleTabClick)}>{curele.name}
              </button>
            
          )
        })}
      </div>
      <div className="content">
        {userInfo.map((curele, i) => {
          return (
            <div key={i}>
              {currentTab === `${curele.id}` && 
                <div>
                  <h3>{curele.title}</h3>
                  <button className="user-name">{curele.name}</button>
                  <h4>{curele.working_date}</h4>
                  <p>{curele.des}</p>
                </div>
              }
            </div>
          )
        })}

        <button className='more-info'>more info</button>
      </div>
    </div>
    </>
  )
}

export default Tabs
