import { Box, Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useColorModeValue } from "../components/ui/color-mode";

const CreatePage = () => {
    const [ newProduct, setNewProduct ] = useState({
        name: "",
        price: 0,
        image: "",
    });

    const handleAddProduct = () => {
        console.log(newProduct);
    }

    return (
        <Container maxW={"3xl"} alignSelf={"center"} my={12}>
            <VStack spacing={8}>
                <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
                    Create New Product
                </Heading>

                <Box
                    w={"full"}
                    background={useColorModeValue("white", "gray.900")}
                    p={6}
                    shadow={"md"}
                    rounded={"lg"}>
                    <VStack spacing={4}>
                        <Input
                            placeholder={"Product Name"}
                            name={"name"}
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        />
                        <Input
                            placeholder={"Price"}
                            name={"price"}
                            type={"number"}
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                        />
                        <Input
                            placeholder={"Image URL"}
                            name={"image"}
                            value={newProduct.image}
                            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                        />
                        <Button background={"purple.700"} onClick={handleAddProduct}>
                            Create Product
                        </Button>
                    </VStack>
                </Box>
            </VStack>
        </Container>

    );
};

export default CreatePage;