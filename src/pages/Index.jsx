// Complete the Index page component here
// Use chakra-ui for styling and layout
import { Box, Flex, Heading, Text, Image, VStack, HStack, Button, Divider } from "@chakra-ui/react";
import { FaFilePdf, FaEdit, FaTrashAlt } from "react-icons/fa";

const bibliographicRecords = [
  {
    id: 1,
    title: "Deep Learning in Neural Networks: An Overview",
    abstract: "Deep learning allows computational models that are composed of multiple processing layers to learn representations of data with multiple levels of abstraction. This paper reviews the recent developments in deep learning and offers a perspective on the future of deep learning research.",
    publication: "Journal of Artificial Intelligence Research",
    authors: "Yann LeCun, Yoshua Bengio, Geoffrey Hinton",
    thumbnail: "https://images.unsplash.com/photo-1495592822108-9e6261896da8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZWVwJTIwbGVhcm5pbmd8ZW58MHx8fHwxNzE0NTUxMjM1fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    title: "Mastering the game of Go with deep neural networks and tree search",
    abstract: "The game of Go has long been viewed as the most challenging of classic games for artificial intelligence. This paper presents a fully convolutional neural network that learns to play Go at a professional level through a combination of deep learning and reinforcement learning techniques.",
    publication: "Nature",
    authors: "David Silver, Aja Huang, Chris J. Maddison",
    thumbnail: "https://images.unsplash.com/photo-1630251774812-b1d436f94513?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnYW1lJTIwb2YlMjBnb3xlbnwwfHx8fDE3MTQ1NTEyMzV8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  // Add more records as needed
];

const Index = () => {
  return (
    <Box p={5}>
      <Heading mb={4}>Bibliographic Records Dashboard</Heading>
      <VStack divider={<Divider />} spacing={4} align="stretch">
        {bibliographicRecords.map((record) => (
          <Box key={record.id} p={5} shadow="md" borderWidth="1px" borderRadius="lg">
            <HStack spacing={4}>
              <Image borderRadius="md" boxSize="100px" objectFit="cover" src={record.thumbnail} alt={`Thumbnail for ${record.title}`} />
              <VStack align="stretch">
                <Heading size="md">{record.title}</Heading>
                <Text fontSize="sm">Publication: {record.publication}</Text>
                <Text fontSize="sm">Authors: {record.authors}</Text>
                <Text noOfLines={3}>{record.abstract}</Text>
              </VStack>
            </HStack>
            <Flex mt={4} justify="flex-end">
              <Button leftIcon={<FaFilePdf />} colorScheme="blue" variant="outline" mr={2}>
                View PDF
              </Button>
              <Button leftIcon={<FaEdit />} colorScheme="green" variant="outline" mr={2}>
                Edit
              </Button>
              <Button leftIcon={<FaTrashAlt />} colorScheme="red" variant="outline">
                Delete
              </Button>
            </Flex>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
