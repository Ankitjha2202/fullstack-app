import React from 'react'
import { Box, Button, Grid, HStack, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import cursor from "../../../assets/images/cursor.png"
import Sidebar from '../Sidebar'
import { RiDeleteBin7Fill } from 'react-icons/ri'
const Users = () => {
  const users=[{
     _id:"assksksklklksllkalla",
     name:"Ankit Jha",
     role:"admin",
     subscription:{
      status:"active"
     },
     email:"ankitjhabst@gmail.com", 
},]
const updateHandler=(userId)=>{
  console.log(userId)
}
const deleteButtonHandler=(userId)=>{
  console.log(userId)
}
  return (
    <Grid
    css={{ 
        cursor:`url(${cursor}) , default`,
    }}
     minH={'100vh'} 
     templateColumns={['1fr','5fr 1fr']}
    >
        <Box p={["0","16"]} overflowX="auto">
        <Heading my="16" textTransform={'uppercase'} children="All Users" textAlign={['center','left']}/>
        <TableContainer w={["100vw","full"]}>
          <Table varient={'simple'} size="lg">
             <TableCaption>All available users in the databases</TableCaption>
             <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Subs</Th>
                <Th isNumeric>Action</Th>
              </Tr>
             </Thead>
             <Tbody>
                {
                  users.map(item=>(
                    <Row updateHandler={updateHandler}
                    deleteButtonHandler={deleteButtonHandler}
                    key={item._id} item={item}/>
                  ))
                }
             </Tbody>
          </Table>
        </TableContainer>

        </Box>
        <Sidebar/>
    </Grid>
  )
}

export default Users;

function Row({item,updateHandler,deleteButtonHandler}){
  return(
    <Tr>
  <Td>#{item._id}</Td>
  <Td>{item.name}</Td>
  <Td>{item.email}</Td>
  <Td>{item.role}</Td>
  <Td>{item.subscription.status==='active'?'Active':'Not Active'}</Td>
  <Td isNumeric>
    <HStack justifyContent={'flex-end'}>
      <Button onClick={()=>updateHandler(item._id)} variant={"outline"} color="purple.500">Change Role</Button>
      <Button onClick={()=>deleteButtonHandler(item._id)} color={'purple.600'}>
        <RiDeleteBin7Fill/>
      </Button>
    </HStack>
  </Td>
  </Tr>
  );
  
}