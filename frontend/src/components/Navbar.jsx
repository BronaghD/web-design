import { Container, Flex, Button, HStack, Text} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

import { CiSquarePlus } from "react-icons/ci";
import { useColorMode } from './ui/color-mode';
import { IoMoon } from 'react-icons/io5';
import { IoSunny } from 'react-icons/io5';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Container maxW={"1400px"} px={4}>
            <Flex
                h={16}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexDir={{
                    base: "column",
                    sm: "row"
                }}>

                <Text
                    fontSize={{ base: "22px", sm: "28px" }}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    textAlign={"center"}
                    background={"linear-gradient(90deg, #FF00CC, #333399)"}
                    bgClip={"text"}
                >
                    <Link to={"/"}>Product Store 🛒</Link>
                </Text>

                <HStack spacing={2} alignItems={"center"}>
                    <Link to="/create">
                        <Button>
                            <CiSquarePlus fontSize={20} />
                        </Button>
                    </Link>
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <IoMoon /> : <IoSunny />}
                    </Button>
                </HStack>

            </Flex>
        </Container>

    )
}

export default Navbar