import {
  Code2,
  Database,
  Layout,
  Server,
  Terminal,
  Globe,
  Blocks,
  FileCode2,
  Box,
  Cpu,
  GitBranch,
  Layers,
  Palette,
} from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Layout,
      skills: [
        {
          name: 'HTML/CSS/Sass',
          icon: Globe,
          color: 'text-orange-500',
        },
        {
          name: 'JScript',
          icon: FileCode2,
          color: 'text-yellow-500',
        },{
          name: 'TypeScript',
          icon: FileCode2,
          color: 'text-blue-500',
        },
        {
          name: 'React & Next.js',
          icon: Blocks,
          color: 'text-blue-500',
        },
        {
          name: 'Vue.js & Vuex',
          icon: Box,
          color: 'text-green-500',
        },
      ],
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        {
          name: 'Node.js',
          icon: Cpu,
          color: 'text-green-600',
        },
        {
          name: 'Express.js',
          icon: Server,
          color: 'text-gray-600',
        },
      ],
    },
    {
      title: 'Database Technologies',
      icon: Database,
      skills: [
        {
          name: 'MongoDB',
          icon: Database,
          color: 'text-green-500',
        },
        {
          name: 'PostgreSQL',
          icon: Database,
          color: 'text-blue-500',
        },
        {
          name: 'MySQL',
          icon: Database,
          color: 'text-orange-500',
        },
      ],
    },
    {
      title: 'UI Frameworks',
      icon: Code2,
      skills: [
        {
          name: 'Tailwind CSS',
          icon: Palette,
          color: 'text-cyan-500',
        },
        {
          name: 'Bootstrap',
          icon: Layers,
          color: 'text-purple-500',
        },
      ],
    },
    {
      title: 'Development Tools',
      icon: Terminal,
      skills: [
        {
          name: 'Linux/Ubuntu',
          icon: Terminal,
          color: 'text-orange-500',
        },
        {
          name: 'Version Control',
          icon: GitBranch,
          color: 'text-red-500',
        },
      ],
    },
  ];

  return (
    <div className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Technical Skills
          </span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Expertise in modern web technologies and development tools
        </p>
      </div>

      <div className="grid grid-cols-1 gap-16">
        {skillCategories.map((category, index) => (
          <div key={index} className="relative">
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800">
                <category.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                {category.title}
              </h3>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-700 shadow-lg ${skill.color}`}>
                      <skill.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-primary transition-colors">
                      {skill.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
