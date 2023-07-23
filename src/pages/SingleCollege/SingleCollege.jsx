import { useLoaderData } from "react-router-dom";

const SingleCollege = () => {
  const college = useLoaderData()
  console.log(college)
  return (
    <div>
      <img className="h-[70vh] w-full object-cover" src={college.collegeImage} alt="" />
      <div className="m-4 space-y-4">
        <h1 className="text-3xl font-semibold">College Name: <span className="text-slate-600">{college.collegeName}</span></h1>
        <h1><span className="font-semibold">Admission Date:</span> <span className="text-slate-600">{college.admissionDates[0]}</span></h1>
        <h1><span className="font-semibold">Research History:</span> <span className="text-slate-600">{college.researchHistory}</span> </h1>
        {/* events */}
        <div className="">
          <h1 className="font-semibold text-lg">Events: </h1>
          <ul className="space-y-3 text-slate-600">
            <li>
              <h1 className="font-semibold mb-1">{college.events[0]}</h1>
              <p>The much-awaited Tech Conference 2023 kicked off today with a bang, drawing tech enthusiasts, industry experts, and entrepreneurs from all over the world. This year's event promises to be a game-changer, focusing on groundbreaking innovations and a paradigm shift in the digital landscape. The conference opened with a captivating keynote address by the renowned tech visionary, Dr. Emily Parker. Dr. Parker, the CEO of FutureTech Inc., shared her insights into emerging technologies that are set to redefine industries and shape the future. She emphasized the importance of AI, blockchain, and biotechnology in driving digital transformation and fostering sustainability.</p>
            </li>
            <li>
              <h1 className="font-semibold mb-1">{college.events[1]}</h1>
              <p>The highlight of the morning session was a panel discussion on "AI and Ethics: Navigating the Challenges." Experts from academia, industry, and regulatory bodies delved into the ethical implications of AI deployment in various sectors, such as healthcare, finance, and autonomous vehicles. The panelists stressed the importance of striking a balance between innovation and ethical considerations to ensure the responsible development of AI technologies. Simultaneously, in the exhibition hall, attendees marveled at the cutting-edge tech displays from companies like NEXUS Robotics, unveiling their latest humanoid companion robot designed to assist the elderly and disabled in daily tasks. Another standout exhibit was VRverse, showcasing their immersive virtual reality experience that transports users to far-off worlds and historical events.</p>
            </li>
            <li>
              <h1 className="font-semibold mb-1">{college.events[2]}</h1>
              <p>The afternoon sessions were equally engaging, featuring deep-dive workshops and hands-on demonstrations of blockchain applications. Experts shared real-world case studies, illustrating how blockchain is disrupting supply chains, healthcare records, and financial transactions. One of the most anticipated moments of the day was the announcement of the "Tech Innovator of the Year" award. This year's recipient was Tessa Roberts, the co-founder of CleanEnergy Solutions, a startup revolutionizing renewable energy with their innovative solar panel technology. Roberts, in her emotional acceptance speech, urged the tech community to come together to address the global climate crisis using technology as a catalyst for change.</p>
            </li>
          </ul>
        </div>
        {/* Sports */}
        <div className="">
          <h1 className="font-semibold text-lg">Sports: </h1>
          <ul className="space-y-3 text-slate-600">
            <li>
              <h1 className="font-semibold mb-1">{college.sports[0]}</h1>
              <p>The atmosphere at Stadium X was electric as fans from both sides filled the stands, waving banners and chanting their team's anthems. The players, too, seemed charged with adrenaline, ready to give their all in pursuit of the coveted championship trophy.

                From the opening whistle, it was evident that this match would be a fiercely contested battle. The Cyclones, known for their attacking prowess, dominated possession early on, pressing the Ravens' defense relentlessly. Their star striker, Alex Turner, showcased his incredible ball control and dribbling skills, constantly testing the opposing goalkeeper with powerful shots on target.</p>
            </li>
            <li>
              <h1 className="font-semibold mb-1">{college.sports[1]}</h1>
              <p>The Ravens, however, were no pushovers. Their disciplined defense and swift counter-attacks kept the Cyclones on their toes. Time and again, their goalkeeper, Sarah Mitchell, came to the rescue with spectacular saves, denying the Cyclones from taking an early lead.

                As the first half drew to a close, the score remained deadlocked at 0-0. The tension in the stadium was palpable as fans eagerly awaited the second-half fireworks that were sure to come.

                The pivotal moment arrived in the 60th minute when the Ravens' midfielder, Lucas Hernandez, unleashed a thunderous strike from outside the penalty box, finding the back of the net with precision. The stadium erupted in cheers as the Ravens took the lead, igniting the spirits of their supporters.</p>
            </li>
            <li>
              <h1 className="font-semibold mb-1">{college.sports[2]}</h1>
              <p> the Cyclones were not about to go down without a fight. Fueled by the goal, they launched a relentless assault on the Ravens' defense. It was a test of nerves for both teams as the clock ticked away. In the 80th minute, the Cyclones' captain, Emily Roberts, demonstrated her leadership on the field by slotting in a crucial equalizer with a well-placed header off a corner kick.

                As the final whistle approached, extra time seemed inevitable. But the Cyclones had other plans. In injury time, Alex Turner, with nerves of steel, weaved her way through the defense, leaving defenders in her wake, and struck the ball into the net with a stunning finish. The stadium erupted once again, this time in jubilation, as the Cyclones took the lead in the dying moments of the game.

                The Ravens fought desperately for an equalizer, but the Cyclones' defense stood strong, thwarting every attempt. The final score: Cityville Cyclones 2 - Riverside Ravens 1.

                In a display of true sportsmanship, both teams exchanged handshakes and words of praise for each other's efforts. The championship trophy was awarded to the Cityville Cyclones, amidst a sea of celebration from their ecstatic fans.

                As the players lifted the trophy, it was evident that this match would be etched in the memories of sports fans for years to come. It was a showdown that exemplified the spirit of sports: passion, skill, and an unyielding desire to succeed.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleCollege;