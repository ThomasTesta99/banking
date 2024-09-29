import HeaderBox from '@/components/ui/HeaderBox'
import RightSidebar from '@/components/ui/RightSidebar'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = {firstName : 'Thomas', lastName: 'Testa', email: 'thomas.testa@cix.csi.cuny.edu'}
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type = "greeting"
            title = "Welcome"
            user = {loggedIn?.firstName || 'Guest'}
            subtext = "Access and manage your account and transactions efficiently"
          />

          <TotalBalanceBox
            accounts = {[]}
            totalBanks = {1}
            totalCurrentBalance = {1250.35}
          />
        </header>

        RECENT TRANSACTIONS
      </div>
      <RightSidebar 
        user = {loggedIn}
        transactions = {1}
        banks = {[{currentBalance: 1250.35}, {currentBalance: 1234}]}
      />
    </section>
  )
}

export default Home
