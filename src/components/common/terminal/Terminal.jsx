const sampleLines = [
  "~/it-solution $ cat profile.json",
  "{",
  '  "company": "IT Solution",',
  '  "services": [',
  '    "Web Development",',
  '    "Website Maintenance & Updates",',
  '    "Social Media Graphics",',
  '    "Google Business / Local SEO",',
  '    "Email Newsletter / Automation",',
  '    "E-Commerce Setup"',
  "  ],",
  '  "stack": ["React", "Vite", "Tailwind", "Node"]',
  "}",
];

const Terminal = () => {
  return (
    <div className="rounded-2xl bg-[#0B1220] text-[#d1e3ff] shadow-2xl shadow-gray-200/60 border border-white/10 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 bg-[#0E1629] border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
        <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
        <span className="ms-3 text-xs text-[#89A3C6]">~/terminal</span>
      </div>
      <pre className="m-0 p-4 text-[12px] xs:text-sm leading-6 font-mono whitespace-pre-wrap bg-gradient-to-br from-[#0B1220] via-[#0E1629] to-[#101B33]">
        {sampleLines.map((line, idx) => (
          <code key={idx} className="block">
            {line}
          </code>
        ))}
      </pre>
    </div>
  );
};

export default Terminal;


