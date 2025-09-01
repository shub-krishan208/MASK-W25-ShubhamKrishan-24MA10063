import TeamMemberCard from '@/components/TeamMemberCard';
import teamMembersData from '@/data/teamMembers.json';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  team: string;
}

const Frontend = () => {
  const teamMembers: TeamMember[] = teamMembersData;

  return (
    <div className="min-h-[calc(100vh-4rem)] px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Team Members
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet our diverse team of talented individuals across different departments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frontend;