import React from 'react'
import { Center, Button, Box, Text, Accordion, AccordionButton, AccordionItem, AccordionPanel, AccordionIcon, Flex, Link } from '@chakra-ui/react'

function Sidebar() {
    
  return (
    <Box  bg='#373737'>
        <Center display='flex' flexDirection='column'>
            <Button w='200px' marginY='25px' color='white' bg='#E45159'>Add customers +</Button>
            <Button marginBottom='20px' w='200px' color='white' bg='#18B83B'>Daily Indents</Button>
            <Box border='1px solid #E45159' borderRadius='8px' color='white' w='200px'>
                <Box display='flex' flexDirection='column' gap='16px' padding='20px'>
                    <Text>Dashboard</Text>
                    <Text>Notifications</Text>
                    <Button color='white' variant='link' justifyContent="start">Customers</Button>
                    <Accordion allowMultiple>
                        <AccordionItem borderStyle='none'>
                            <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    Postpay
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel borderLeft='0.1px solid #80808040' pb={4}>
                                <Flex><Link>next 7 days</Link></Flex>
                                <Flex><Link>next 15 days</Link></Flex>
                                <Flex><Link>next 30 days</Link></Flex>
                                <Flex><Link>next 45 days</Link></Flex>
                                <Flex><Link>next 60 days</Link></Flex>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem borderStyle='none'>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        Prepaid
                                    </Box>
                                </AccordionButton>
                            </h2>
                        </AccordionItem>
                    </Accordion>
                    <Text>Employee master</Text>
                    <Text>Users and access</Text>
                    <Text>Master rate card</Text>
                    <Text>Stock points</Text>
                    <Text>Vehicle master</Text>
                    <Text>Payment tally</Text>
                    <Text>Payment history</Text>
                    <Accordion allowMultiple>
                        <AccordionItem borderStyle='none'>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        Settings
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} borderLeft='0.1px solid #80808040'>
                                <Flex><Link>Log history</Link></Flex>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
            </Box>
        </Center>
    </Box>
  )
}

export default Sidebar