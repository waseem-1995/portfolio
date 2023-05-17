import { Box, Grid, Heading, Image, Stack, VStack } from "@chakra-ui/react"
import GitHubCalendar from "react-github-calendar"

export const Github = () => {
    return (
        <VStack justify={"center"} align={"center"} name={"github"} h={"100vh"} >

            <Heading mb={"30px"} as={"h1"}>Github Calender & Stats</Heading>

            <VStack w={"100%"}>
                <Box m={"auto"} p={"20px"}>
                    <GitHubCalendar username="waseem-1995" />
                </Box>

                <Grid templateColumns={{ base: "repeat(1,1fr)", sm: "repeat(1,1fr)", md: "repeat(1,1fr)", lg: "repeat(2,1fr)" }} w={"100%"}>

                    <Box maxW={"380px"} m={"20px auto"} id="github-stats-card">
                        <Image
                            src="https://github-readme-stats-eight-theta.vercel.app/api?username=waseem-1995&show_icons=true&theme=light&include_all_commits=true&count_private=true"
                            alt="github stats"
                            
                        />
                    </Box>

                    <Box maxW={"380px"} m={"20px auto"}>
                        <Image
                            src="https://github-readme-streak-stats.herokuapp.com?user=waseem-1995&theme=tokyonight"
                            alt="github stats"
                            id="github-streak-stats"
                        />
                    </Box>
                    <Box maxW={"380px"} m={"20px auto"}>
                        <Image
                            src="https://github-readme-activity-graph.cyclic.app/graph?username=waseem-1995&bg_color=ffcfe9&color=9e4c98&line=43cf07&point=403d3d&area=true&hide_border=true"
                            alt="github stats"
                        />
                    </Box>
                    <Box maxW={"380px"} m={"20px auto"}>
                        <Image
                            src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=waseem-1995&theme=github_dark"
                            alt="github stats"
                            id="github-top-langs"
                        />
                    </Box>


                </Grid>

            </VStack>

        </VStack>
    )
}