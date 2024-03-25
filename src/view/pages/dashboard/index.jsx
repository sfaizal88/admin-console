/**
 * 
 * Dashboard component
 * @author - NA 
 * @date - 1st March, 2024
 * 
 */
// GENERIC IMPORT
import React, {useState, useEffect} from 'react';

// COMPONENT IMPORT
import PageHeader from '../common/header/pageHeader';
import {Empty, Container} from '../../atom';

const DashboardPage = () => {
  // STATE VARIABLE
  const [isLoading, setLoading] = useState(false);
  
  useEffect(() => {
    setTimeout(setLoading(false), 1000);
  })
  
  return (
    <>
      <PageHeader title='Dashboard' subtitle="For your dashboard, here's a snapshot of your current activity and important updates." {...{isLoading}}></PageHeader>
      <Container>
      <Empty 
        title='Coming soon...' 
        subtitle='Please visit some other time.' 
        icon={<i className="fa fa-ban"></i>}/>
      </Container>
    </>
  )
}

export default DashboardPage;