import React from 'react'
import './navbar.css'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


function Navbar() {
  return (
    <div>
     <Tabs variant='soft-rounded' colorScheme='green' marginLeft={1100} marginTop={5}>
  <TabList>
    <Tab>HOME</Tab>
    {/* <Tab></Tab> */}
  </TabList>
  <TabPanels>
    <TabPanel>
    </TabPanel>
    {/* <TabPanel>
      <p>two!</p>
    </TabPanel> */}
  </TabPanels>
</Tabs>
    </div>
  )
}

export default Navbar