interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface TeamGridProps {
  members: TeamMember[];
}

export default function TeamGrid({ members }: TeamGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {members.map((member, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-card-hover transition-all text-center group"
        >
          <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-gray-100 group-hover:border-sky-200 transition-colors">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
          <p className="text-sm text-gray-500">{member.role}</p>
        </div>
      ))}
    </div>
  );
}
