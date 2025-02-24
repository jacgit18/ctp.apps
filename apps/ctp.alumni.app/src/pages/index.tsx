import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Box,
  SimpleGrid,
  HStack,
  VStack,
  ChakraProvider,
  Icon,
  theme,
} from '@chakra-ui/react';
import {
  FcGlobe,
  FcDonate,
  FcInTransit,
  FcCheckmark as CheckIcon,
  FcIdea,
} from 'react-icons/fc';
import { Link } from 'gatsby';
import { Illustration } from '../components/illustration';

const apps = [
  {
    title: 'CUNY Tech Prep Alumni Advice',
    text: 'Advice for current students from past expereience. An alumni and want to contribute make a PR!',
    link: 'ctp.alumni.advice/',
  },
  {
    title: 'CUNY Tech Prep Alumni Survey',
    text: 'Data Visulizations Taken From Alumni Surveys',
    link: `${typeof window !== "undefined" && window?.location?.hostname}/ctp.alumni.survey`,
  },
  {
    title: 'Want To Create An App?',
    text: 'Follow the contributing guide on the github page.',
    link: 'https://github.com/CUNYTechPrep/ctp.apps/issues/new?assignees=&labels=%F0%9F%91%80+needs+triage%2C+%F0%9F%92%A1+feature&template=feature_request.md&title=Feature%3A+',
  },
];
const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        shadow="md"
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function CallToActionWithIllustration() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 12, md: 15 }}
        >
          <Heading
            fontWeight={500}
            fontSize={{ base: '2xl', sm: '4xl', md: '5xl' }}
            padding={8}
            lineHeight={'110%'}
          >
            CTP Open Source Apps{' '}
            <Text as={'span'} color={'orange.400'}>
              homepage
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
            Open Sourced Apps Developed by CUNY Tech Prep Alumni/Students
          </Text>
          <Stack direction={'row'}>
            <a href="https://ctpalumni.slack.com/archives/C02C7QJ5U93">
              <Button
                shadow="md"
                rounded={'full'}
                px={6}
                colorScheme={'orange'}
                bg={'orange.400'}
                _hover={{ bg: 'orange.500' }}
              >
                #Join the Slack Channel
              </Button>
            </a>
            <a href="https://github.com/CUNYTechPrep/ctp.apps/blob/main/README.md">
              <Button rounded={'full'} px={6}>
                Learn more
              </Button>
            </a>
          </Stack>
          <Flex w={'full'}>
            <Illustration
              height={{ sm: '24rem', lg: '28rem' }}
              mt={{ base: 12, sm: 16 }}
            />
          </Flex>
        </Stack>
        <Box p={4}>
          <Stack spacing={1} as={Container} maxW={'3xl'} textAlign={'center'}>
            <Heading fontSize={'3xl'}>Apps</Heading>
          </Stack>
          <Container maxW={'6xl'} mt={10}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {apps.map((feature, index) => (
                <HStack key={String(index)} align={'top'}>
                  <Box color={'green.400'} px={2}>
                    <Icon as={CheckIcon} />
                  </Box>
                  <VStack align={'start'}>
                    <Text fontWeight={600}>{feature.title}</Text>
                    <Text color={'gray.600'}>{feature.text}</Text>
                  </VStack>
                  <Link to={`${feature.link}`}>
                    <Button shadow="md" colorScheme="teal" variant="outline">
                      Open
                    </Button>
                  </Link>
                </HStack>
              ))}
            </SimpleGrid>
            <Stack
              py={{ base: 10, md: 18 }}
              spacing={1}
              as={Container}
              maxW={'3xl'}
              textAlign={'center'}
            >
              <Heading fontSize={'3m'}>
                This project was generated using{' '}
                <a href="https://nx.dev/">[ Nx. ]</a>
              </Heading>

              <Text color={'gray.600'} fontSize={'xl'}>
                <p>Here are some things you can do with ctp.app.</p>
                <details>
                  <summary>Add A React/Angular/Next/ App</summary>
                  <pre>{`# Generate an App 
      nx generate @nrwl/react:application NAME
 # Add a component
 nx g @nrwl/react:component xyz --project ui`}</pre>
                </details>
                <details>
                  <summary>Run affected commands</summary>
                  <pre>{`# see what's been affected by changes
 nx affected:dep-graph

 # run tests for current changes
 nx affected:test

 # run e2e tests for current changes
 nx affected:e2e
 `}</pre>
                </details>
              </Text>
            </Stack>
            <Box p={4}>
              <SimpleGrid columns={{ base: 2, md: 4 }} spacing={10}>
                <Link to={`https://cunytechprep.github.io/ctp.apps/graph`}>
                  <Feature
                    icon={<Icon as={FcGlobe} w={10} h={10} />}
                    title={'Dependency Graph'}
                    text={'Click to See the dependency graph'}
                  />
                </Link>
                <Link
                  to={`https://github.com/CUNYTechPrep/.github/blob/feature/SW/open-saused/CONTRIBUTING.md`}
                >
                  <Feature
                    icon={<Icon as={FcDonate} w={10} h={10} />}
                    title={'CONTRIBUTING.md'}
                    text={'Contributions welcome!'}
                  />
                </Link>
                <Link
                  to={`https://github.com/CUNYTechPrep/ctp.apps/blob/main/CODE_OF_CONDUCT.md`}
                >
                  <Feature
                    icon={<Icon as={FcInTransit} w={10} h={10} />}
                    title={'Code Of Conduct'}
                    text={
                      'Our Pledge, Standards, Enforcement Responsibilities.'
                    }
                  />
                </Link>
                <Link
                  to={`https://github.com/CUNYTechPrep/ctp.apps/discussions`}
                >
                  <Feature
                    icon={<Icon as={FcIdea} w={10} h={10} />}
                    title={'Discussions'}
                    text={'Use discussions to ask and answer questions.'}
                  />
                </Link>
              </SimpleGrid>
            </Box>
          </Container>
        </Box>
      </Container>
    </ChakraProvider>
  );
}
