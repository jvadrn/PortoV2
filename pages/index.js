import { Link, Box, Text, Heading, GridItem } from "@chakra-ui/react"
import Head from "next/head"
import { Grid } from "../components/Grid"
import { Experience } from "../components/Experience"
import Cursor from "../components/Cursor"
import { Avatar } from "../components/Avatar"

export default function Home() {
  return (
    <>
      
      <Cursor />

      <Box py="115px" px={4} maxWidth={500} mx="auto">
        <Grid fluid templateColumns="repeat(4, 1fr)" mb={10} alignItems="center">
          <GridItem colSpan={1}>
            <Avatar />
          </GridItem>
          <GridItem colSpan={3}>
            <Box>
              <Heading as="h1" size="lg">
                Jevi Adriansyah
              </Heading>
              <Text>Qualiti Assurance | Junior Software Enggeneer</Text>
            </Box>
          </GridItem>
        </Grid>
        <Box mb={14}>
          <Heading as="h2" size="md" mb={2}>
            About Me
          </Heading>
          <Text>        
            I am a fresh graduate from Politeknik Negeri Lampung, majoring in Information Technology, 
            with a passion for Quality Assurance and Software Engineering. My academic journey and active 
            involvement in student organizations have equipped me with strong communication, teamwork, and problem-solving skills
          </Text>
        </Box>
        <Box mb={14}>
          <Heading as="h2" size="md" mb={10}>
             Experience
          </Heading>

          <Experience
            side="March - June 2024"
            title="Software Quality Assurance (Intern)"
            desc="Performed web testing to ensure functionality and quality"
            stack="Playwright • Robot Framework • Cypress • Selenium • TestNG"
          />

          <Heading as="h2" size="md" mb={10}>
             Organizations Experience
          </Heading>

          <Experience
            side="2021 - 2024 "
            title="UKM PERSSUKMA"
            desc="UKM PERS Media"
            stack="Deputy Chief Editor (2023 - 2024)"
          />
          

          <Heading as="h2" size="md" mt={14} mb={10}>
           Education
          </Heading>

          <Experience
             href="https://www.instagram.com/dolenn.bzh"
             side="2021 - 2024"
             title="Politeknik Negeri Lampung"
             desc="Teknologi Informasi"
             stack="GPA 3.66"
          />


          <Heading as="h2" size="md" mt={14} mb={10}>
            Links
          </Heading>

          <Experience
            side="Github"
            title="@jvadrn"
            href="https://github.com/jvadrn"
            mb={4}
          />
          <Experience
            side="LinkIdn"
            title="@JeviAdriansyah"
            href="https://www.linkedin.com/in/jevi-adriansyah/"
            mb={4}
          />
          
        </Box>
      </Box>
    </>
  )
}
