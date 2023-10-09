import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
 
export default function Recomandation() {
  return (
    <div className="w-[32rem]">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar size="xl" src="https://media.licdn.com/dms/image/D4D35AQG5VqP2YY5aPQ/profile-framedphoto-shrink_100_100/0/1688982449619?e=1693382400&v=beta&t=zvRPGsDahJTYP3JHMTlb3vrWx75a2jl0UJTtSd8x5hA" alt="user 1" withBorder />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Ifza Arain
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gary" className="font-normal text-sm text-gray-600">
            Joel's attention to detail and her ability to get to the root of a problem are just some of the reasons that make her a valuable addition to a team. He's very responsive to a request for help. His work is very thorough and reflects a lot of effort and thought. It was a real pleasure working with such a great expert.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar size="xl" src="https://media.licdn.com/dms/image/D4D35AQFu7TUCoGd7cw/profile-framedphoto-shrink_100_100/0/1681057823868?e=1693382400&v=beta&t=Aaz8Jcm3QqlLtRiTe0Vp0wtdoz-1fHVJpFhVeDmxSo8" alt="user 2" withBorder />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Levy Ukwishaka
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gary" className="font-normal text-sm text-gray-600">
            I've had the pleasure of working with Joel for a couple of months and I retain his exceptional potential as a software developer. Joel always loves learning new things and has patience in solving problems. When we have some talking time, the conversation will not end without getting to know the new things he has explored. He likes to collaborate with everyone and has the leadership to manage things in a team. I have been seeing his growth in the past few months and I believe he will play an active and valuable role in any company he's placed at.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}