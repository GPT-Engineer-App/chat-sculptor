import { Box, Button, Container, Input, VStack, Heading, Text, useColorModeValue, Textarea, Image, Divider, Flex, Spacer } from "@chakra-ui/react";
import { FaPaperPlane, FaRegSmile } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("whiteAlpha.800", "gray.700");
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");

  return (
    <Box height="100vh" bgImage="https://images.unsplash.com/photo-1692326609937-f813085dd068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxFbCUyMENhcGl0YW4lMjBZb3NlbWl0ZXxlbnwwfHx8fDE3MDg2MzIyMzR8MA&ixlib=rb-4.0.3&q=80&w=1080" bgPosition="center" bgRepeat="no-repeat" bgSize="cover">
      <Container maxW="container.md" height="100%">
        <VStack spacing={4} justifyContent="flex-end" height="full" paddingBottom="4">
          <VStack spacing={4} alignItems="flex-start" width="full" bgColor={bgColor} borderRadius="lg" p={6} boxShadow="base" backdropFilter="blur(10px)">
            <Heading size="md" color={textColor}>
              3D Chat Interface
            </Heading>
            <Divider />
            <Box overflowY="auto" maxHeight="400px" width="full">
              {/* Chat messages will go here */}
              <Text color={textColor} my={2}>
                Hello! How can I assist you today?
              </Text>
              {/* Add more <Text> components for chat messages */}
            </Box>
            <Flex width="full">
              <Input placeholder="Type your message here..." marginRight={2} borderColor={textColor} />
              <Button colorScheme="blue" leftIcon={<FaPaperPlane />}>
                Send
              </Button>
            </Flex>
          </VStack>
          <Spacer />
          <Text color={textColor} fontSize="sm">
            Powered by GPT-3D
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;
