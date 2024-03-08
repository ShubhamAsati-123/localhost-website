// Import the necessary modules
import EventCard from "../components/EventCard";

// Your events data
const eventsData = [
  {
    eventId: "1",
    eventName: "HackIn IIITP",
    eventDate: "2024-03-01",
    eventLocation: "Virtual",
    EventDescription: "HackIn IIIT Pune, a 36-hour Intra College hackathon",
    imageUrl: "/images/hackathon.jpg",
    websiteUrl: "https://localhost.iiitp.ac.in/hackiniiitp",
    registerUrl: "https://localhost.iiitp.ac.in/hackiniiitp/register",
  },
];

const Page = () => {
  return (
    <div className="bg-bg-star bg-cover min-h-screen bg-left lg:bg-center">
      <h2 className="font-minecraft text-4xl lg:text-6xl text-white pt-32 px-10">
        E<span className="text-greenblue">V</span>ENTS
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 p-8">
        {eventsData.map((event) => (
          <EventCard key={event.eventId} {...event} />
        ))}
      </div>
    </div>
  );
};

export default Page;
