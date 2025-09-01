import { Brain, HelpCircle, Code, Video, Music, Users } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  team: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamIcon = ({ team }: { team: string }) => {
  const iconProps = { size: 24, className: "text-white" };
  
  switch (team) {
    case 'quiz':
      return <HelpCircle {...iconProps} />;
    case 'dna':
      return <Brain {...iconProps} />;
    case 'webd':
      return <Code {...iconProps} />;
    case 'amv':
      return <Video {...iconProps} />;
    case 'music':
      return <Music {...iconProps} />;
    case 'mn':
      return <Users {...iconProps} />;
    default:
      return <Users {...iconProps} />;
  }
};

const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  return (
    <div className="bg-card rounded-xl border border-border p-6 hover:shadow-[var(--shadow-neon)] transition-all duration-300 hover:-translate-y-1 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
            {member.name}
          </h3>
          <p className="text-muted-foreground text-sm">
            {member.position}
          </p>
        </div>
        <div 
          className={`w-12 h-12 rounded-lg flex items-center justify-center bg-team-${member.team} shadow-lg group-hover:shadow-[var(--shadow-soft)] transition-all duration-300`}
        >
          <TeamIcon team={member.team} />
        </div>
      </div>
      
      <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider group-hover:text-primary transition-colors">
        {member.team.toUpperCase()} Team
      </div>
    </div>
  );
};

export default TeamMemberCard;