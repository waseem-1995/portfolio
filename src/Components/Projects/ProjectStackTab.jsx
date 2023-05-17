import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stack,
  Grid,
  HStack,
  Text,
} from "@chakra-ui/react";
import {
  SiCss3,
  SiHtml5,
  SiReactrouter,
  SiJavascript,
  SiReact,
  SiChakraui,
  SiRedux,
  SiFirebase,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { ProjectInfo } from "./ProjectInfo";
import { BiCodeCurly } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import { FaNode } from "react-icons/fa";

const gitRepos = [
  {
    id: 1,
    name: "Myntra.com",
    github: "https://github.com/waseem-1995/myntra_clone",
    netlify: "https://deluxe-cheesecake-8c6af7.netlify.app/",
    template: "./templates/myntra.PNG",
    description:
      "Myntra is a major Indian fashion e-commerce company headquartered in Bengaluru, Karnataka, India",
    video: [
      true,
      "",
    ],
    doneBy: "individual",
    techstack: [
      <SiCss3 />,
      <SiHtml5 />,
      <SiJavascript />,
    ],
  },

  {
    id: 2,
    name: "PharmEeasy.com",
    github: "https://github.com/waseem-1995/Pharmeasy_Clone",
    netlify: "https://pharmeasy-tan.vercel.app/",
    template: "./templates/pharmeasy.jpg",
    description:
      "PharmEasy is one of India's most trusted online pharmacy & medical stores offering pharmaceutical and healthcare products",
    video: [false, ""],
    doneBy: "group",
    techstack: [
      <SiHtml5 />,
      <SiCss3 />,
      <SiJavascript />,
      <SiReact />,
      <SiChakraui />,
      <SiRedux />,
      <SiFirebase />,
      <SiReactrouter />,
    ],
  },

  {
    id: 3,
    name: "Urban Ladder.com",
    github: "https://github.com/waseem-1995/Urban-Ladder_Clone",
    netlify: "https://sensational-starship-ce568f.netlify.app/",
    template: "./templates/urban.jpg",
    description:
      "Urban Ladder is an omnichannel furniture and decor retailer based out of Bangalore, India. Urban Ladder currently has 3 stores in Bangalore and distribution across 75+ cities in India through its website",
    video: [
      true,
      "",
    ],
    doneBy: "group",
    techstack: [ <SiHtml5 />,
    <SiCss3 />,
    <SiJavascript />,
    <SiReact />,
    <SiChakraui />,
    <SiRedux />,
    <SiReactrouter />,
    <FaNode />,
    <SiExpress />,
    <SiMongodb />,],
  },

  {
    id: 4,
    name: "Netmeds.com",
    github: "https://github.com/waseem-1995/Netmeds_Clone",
    netlify: "https://waseem-netmedsclone.netlify.app/",
    template: "./templates/netmeds.jpg",
    description:
      "Netmeds.com is one of India’s most trusted pharmacies, dispensing quality medicines at reasonable prices to over 7 million happy customers – PAN India",
    video: [false, ""],
    doneBy: "individual",
    techstack: [
      <SiHtml5 />,
      <SiCss3 />,
      <SiJavascript />,
    ],
  },
  {
    id: 5,
    name: "Anthropologie.com",
    github: "https://github.com/waseem-1995/anthropoligie-clone",
    netlify: "https://startling-syrniki-a40e48.netlify.app/",
    template: "./templates/anthroplogy.jpg",
    description:
      "Anthropologie is an American retailer operating in the U.S., Canada, and the UK that sells clothing, jewelry, home furniture, decorations, beauty products, and gifts",
    video: [false, ""],
    doneBy: "individual",
    techstack: [
      <SiHtml5 />,
      <SiCss3 />,
      <SiJavascript />,
    ],
  },
];

const group = gitRepos?.filter((el) => el.doneBy === "group");
const individual = gitRepos?.filter((el) => el.doneBy === "individual");

export const ProjectStackTab = () => {
  return (
    <Tabs variant="soft-rounded" m={"auto"} w={"100%"}>
      <TabList
        justifyContent={"space-around"}
        transition={"1s"}
        maxW={"989px"}
        m={"auto"}
      >
        <Tab
          _selected={{ color: "white", bg: "cornflowerblue" }}
          bg={"whiteAlpha.700"}
          borderRadius={"8px"}
        >
          <HStack
            fontSize={{ base: "13px", sm: "14px", md: "15px", lg: "16px" }}
          >
            <Text fontWeight={"700"}>All</Text>
            <Text fontWeight={"700"}>
              <BiCodeCurly />
            </Text>
          </HStack>
        </Tab>
        <Tab
          _selected={{ color: "white", bg: "cornflowerblue" }}
          bg={"whiteAlpha.700"}
          borderRadius={"8px"}
        >
          <HStack
            fontSize={{ base: "13px", sm: "14px", md: "15px", lg: "16px" }}
          >
            <Text fontWeight={"700"}>Group</Text>
            <Text fontWeight={"700"}>
              <HiUserGroup />
            </Text>
          </HStack>
        </Tab>
        <Tab
          _selected={{ color: "white", bg: "cornflowerblue" }}
          bg={"whiteAlpha.700"}
          borderRadius={"8px"}
        >
          <HStack
            fontSize={{ base: "13px", sm: "14px", md: "15px", lg: "16px" }}
          >
            <Text fontWeight={"700"}>Individual</Text>
            <Text fontWeight={"700"}>
              <BsFillPersonFill />
            </Text>
          </HStack>
        </Tab>
      </TabList>

      <TabPanels w={"100%"} p={"0px"}>
        <TabPanel>
          <Grid
            templateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(2,1fr)",
            }}
            maxW={"989px"}
            m={"auto"}
          >
            {/* <Carousel projects={gitRepos} /> */}
            {gitRepos?.map((repo) => (
              <ProjectInfo key={repo.id} {...repo} />
            ))}
          </Grid>
        </TabPanel>

        <TabPanel>
          <Grid
            templateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(2,1fr)",
            }}
            maxW={"989px"}
            m={"auto"}
          >
            {/* <Carousel projects={group} /> */}
            {group?.map((repo) => (
              <ProjectInfo key={repo.id} {...repo} />
            ))}
          </Grid>
        </TabPanel>

        <TabPanel>
          <Grid
            templateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(2,1fr)",
            }}
            maxW={"989px"}
            m={"auto"}
          >
            {/* <Carousel projects={individual} /> */}
            {individual?.map((repo) => (
              <ProjectInfo key={repo.id} {...repo} />
            ))}
          </Grid>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
//done